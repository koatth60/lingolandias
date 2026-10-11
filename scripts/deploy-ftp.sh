#!/usr/bin/env bash
# Upload dist/ to Hostinger public_html over FTP.
# Usage (from front-end/): bash scripts/deploy-ftp.sh
# Asks for the FTP password once; nothing is stored. Each folder goes up in a single FTP
# connection (much faster than one connection per file), and index.html goes last so
# visitors never load a page whose assets are not uploaded yet.
set -euo pipefail

# the domain resolves to Hostinger's CDN, which does not carry FTP: use the FTP IP from hPanel
HOST="ftp://141.136.39.225"
USER_NAME="u192979876"
# the FTP account already starts inside the site's public_html
REMOTE=""

cd "$(dirname "$0")/.."
[ -f dist/index.html ] || { echo "dist/ not found: run npx vite build first"; exit 1; }

# The password is kept encrypted with Windows DPAPI (only this Windows user on this PC can read it).
# First run asks for it and saves it; delete the file to be asked again (e.g. after changing it in hPanel).
CRED_FILE="$HOME/.lingolandias-ftp.cred"
ps() { powershell.exe -NoProfile -NonInteractive -Command "$1" | tr -d '\r'; }
if [ -f "$CRED_FILE" ]; then
  PASS=$(ps "\$s = Get-Content -Raw '$(cygpath -w "$CRED_FILE")' | ConvertTo-SecureString; [Runtime.InteropServices.Marshal]::PtrToStringBSTR([Runtime.InteropServices.Marshal]::SecureStringToBSTR(\$s))")
  echo "Using the saved FTP password ($CRED_FILE)."
else
  read -r -s -p "FTP password for $USER_NAME: " PASS; echo
  printf '%s' "$PASS" | powershell.exe -NoProfile -NonInteractive -Command "[Console]::In.ReadToEnd() | ConvertTo-SecureString -AsPlainText -Force | ConvertFrom-SecureString | Set-Content -NoNewline '$(cygpath -w "$CRED_FILE")'"
  echo "Saved encrypted for next time."
fi
CREDS="$USER_NAME:$PASS"
# check the login before uploading anything; a rejected saved password is forgotten
if ! curl --silent --fail --ftp-pasv --connect-timeout 15 --user "$CREDS" -l "$HOST/" -o /dev/null; then
  rm -f "$CRED_FILE"
  echo "FTP login failed. The saved password was removed; run the script again to enter it."
  exit 1
fi

# $1 = folder inside dist ("" for the root), rest = file names in that folder
upload_dir() {
  local dir="$1"; shift
  local list; list=$(IFS=,; echo "$*")
  local url="$HOST/${REMOTE:+$REMOTE/}${dir:+$dir/}"
  echo "→ /${dir:-} ($# files)"
  curl --silent --show-error --fail --ftp-create-dirs --ftp-pasv --connect-timeout 15 --max-time 900 \
    --user "$CREDS" -T "{$list}" "$url" -o /dev/null
}

cd dist
# every folder except the root first
for d in $(find . -mindepth 1 -type d | sed 's|^\./||' | sort); do
  mapfile -t files < <(find "$d" -maxdepth 1 -type f -printf '%f\n' | sort)
  [ ${#files[@]} -gt 0 ] && (cd "$d" && upload_dir "$d" "${files[@]}")
done
# root files, with index.html at the very end
mapfile -t root < <(find . -maxdepth 1 -type f ! -name 'index.html' -printf '%f\n' | sort)
upload_dir "" "${root[@]}"
upload_dir "" index.html

unset PASS CREDS
echo "Done: https://lingolandias.net"
