#!/usr/bin/env bash
# Upload dist/ to Hostinger public_html over FTP.
# Usage (from front-end/): bash scripts/deploy-ftp.sh
# Asks for the FTP password once; nothing is stored. index.html goes last so
# visitors never load a page whose assets are not uploaded yet.
set -euo pipefail

HOST="ftp://lingolandias.net"
USER_NAME="u192979876"
REMOTE="public_html"

cd "$(dirname "$0")/.."
[ -f dist/index.html ] || { echo "dist/ not found: run npx vite build first"; exit 1; }

read -r -s -p "FTP password for $USER_NAME: " PASS; echo
CREDS="$USER_NAME:$PASS"

upload() { # $1 = path inside dist
  curl --silent --show-error --fail --ftp-create-dirs --ftp-pasv \
    --user "$CREDS" -T "dist/$1" "$HOST/$REMOTE/$1"
}

mapfile -t FILES < <(cd dist && find . -type f ! -name 'index.html*' | sed 's|^\./||' | sort)
total=$(( ${#FILES[@]} + 3 ))
n=0
for f in "${FILES[@]}" index.html.gz index.html.br index.html; do
  n=$((n + 1))
  printf '[%d/%d] %s\n' "$n" "$total" "$f"
  upload "$f"
done
unset PASS CREDS
echo "Done: https://lingolandias.net"
