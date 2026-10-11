// Registers the Nevera site's copy as its own i18next namespace ("nv"),
// so it never collides with the legacy "translation" keys.
import "../i18n.js"; // initialises the shared i18next instance first
import i18n from "i18next";
import es from "./locales/es.js";
import en from "./locales/en.js";
import pl from "./locales/pl.js";

for (const [lng, res] of Object.entries({ es, en, pl })) {
  i18n.addResourceBundle(lng, "nv", res, true, true);
}

export const SITE_LANGS = ["es", "en", "pl"];

export function setSiteLanguage(lng) {
  i18n.changeLanguage(lng);
  try { localStorage.setItem("selectedLanguage", lng); } catch { /* private mode */ }
}

export default i18n;
