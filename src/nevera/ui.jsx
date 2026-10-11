import { useTranslation } from "react-i18next";

export const WA = "https://wa.me/447578146264";
export const INSTAGRAM = "https://www.instagram.com/lingolandias";
export const FACEBOOK = "https://www.facebook.com/lingolandias";
export const TWITTER = "https://twitter.com/lingolandias";
export const LINKEDIN = "https://linkedin.com/company/lingolandias";
export const MESSENGER = "https://m.me/lingolandias";
export const PLATFORM = "https://lingolandias.com";
export const VIDEO_BASE = "https://lingolandias-academy.s3.eu-north-1.amazonaws.com/general-videos/";

// Five languages in a fixed order; colour = note, m = magnet, id = anchor on /courses
export const LANGS = [
  { code: "en", id: "english", hello: "Hello!", c: "var(--amber)", m: "#d0343f" },
  { code: "es", id: "spanish", hello: "¡Hola!", c: "var(--pink)", m: "#6b1fa6" },
  { code: "it", id: "italian", hello: "Ciao!", c: "var(--teal)", m: "#2c6fd1" },
  { code: "pl", id: "polish", hello: "Cześć!", c: "var(--lilac)", m: "#e8792a" },
  { code: "id", id: "indonesian", hello: "Halo!", c: "var(--orange)", m: "#127a6e" },
];
export const NOTE_COLORS = ["var(--amber)", "var(--teal)", "var(--pink)", "var(--lilac)", "var(--orange)"];
export const MAGNETS = ["#d0343f", "#2c6fd1", "#6b1fa6", "#e8792a", "#127a6e"];

export const useNv = () => useTranslation("nv");

// Copy strings may carry <b>/<br>; they come from our own locale files, never from users.
export const Html = ({ as: Tag = "span", html, ...rest }) => <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;

export const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="m8 12 3 3 5-6" /></svg>
);
export const Ico = ({ d, children }) => (
  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d ? <path d={d} /> : children}</svg>
);
export const ICON = {
  chat: <Ico d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />,
  clock: <Ico><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Ico>,
  mail: <Ico><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Ico>,
  person: <Ico><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></Ico>,
  group: <Ico><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9.5" r="2.5" /><path d="M2.5 20c1-3.5 3.5-5.5 6.5-5.5s5.5 2 6.5 5.5M15.5 14.6c2.6-.4 4.9 1.2 6 4.4" /></Ico>,
  cup: <Ico><path d="M4 9h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z" /><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H16.5" /><path d="M8 3v3M12 3v3" /></Ico>,
  globe: <Ico><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></Ico>,
  calendar: <Ico><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></Ico>,
  insta: <Ico><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></Ico>,
  target: <Ico><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></Ico>,
  list: <Ico d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />,
};

// Sticky note with a magnet on top
export const Sticky = ({ c, m, r, className = "", children, ...rest }) => (
  <div className={`sticky ${className}`.trim()} style={{ "--c": c, "--r": `${r}deg` }} {...rest}>
    <span className="mag" style={{ "--m": m }} aria-hidden="true" />
    {children}
  </div>
);

export const SectionHead = ({ title, text, single }) => (
  <div className={single ? "ghead single" : "ghead"}>
    <h2>{title}</h2>
    {text && <Html as="p" html={text} />}
  </div>
);

// Legacy production strings carry emoji and ✦ ornaments; the Nevera design shows the words only
export const plain = (s) => String(s ?? "").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{2726}]/gu, "").replace(/\s{2,}/g, " ").trim();
