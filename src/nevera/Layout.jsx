import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./nevera.css";
import { SITE_LANGS, setSiteLanguage } from "./i18n.js";
import seal from "../assets/seal-96.webp";
import { useTranslation } from "react-i18next";
import { FACEBOOK, INSTAGRAM, LANGS, LINKEDIN, TWITTER, WA, plain, useNv } from "./ui.jsx";

const PAGES = [
  ["/", "home"],
  ["/courses", "classes"],
  ["/about", "about"],
  ["/test", "test"],
];

function LangSwitch() {
  const { t, i18n } = useNv();
  const current = SITE_LANGS.includes(i18n.resolvedLanguage) ? i18n.resolvedLanguage : "en";
  return (
    <div className="langs" role="group" aria-label={t("nav.language")}>
      {SITE_LANGS.map((l) => (
        <button key={l} type="button" lang={l} aria-pressed={current === l} onClick={() => setSiteLanguage(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Header() {
  const { t } = useNv();
  const [open, setOpen] = useState(false);
  const btn = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = PAGES.flatMap(([to, key]) => [
    <NavLink key={to} to={to} end>{t(`nav.${key}`)}</NavLink>,
    // workshops live inside /courses; plain link so it never shows as the current page
    ...(key === "classes" ? [<Link key="ws" to="/courses#workshops">{t("footer.workshops")}</Link>] : []),
  ]);

  return (
    <header className="top">
      <nav className="main" aria-label={t("nav.main")}>
        <Link className="brand" to="/"><img src={seal} alt="" width="38" height="38" />Lingolandias</Link>
        <div className="links">{links}</div>
        <div className="nav-r">
          <LangSwitch />
          <a className="btn btn-amber btn-sm" href={WA}>{t("nav.contact")}</a>
          <button ref={btn} className="menu-btn" type="button" aria-expanded={open} aria-controls="menu"
            aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")} onClick={() => setOpen((o) => !o)}>
            <svg className="bars" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            <svg className="x" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </nav>
      <div className="menu-panel" id="menu" hidden={!open}>
        {links}
        <a className="btn btn-amber" href={WA}>{t("nav.contactWa")}</a>
        <div className="langs-row"><LangSwitch /></div>
      </div>
    </header>
  );
}

function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "ko"
  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("ko");
    }
  };
  return (
    <form className="nl" onSubmit={submit}>
      <label htmlFor="nl-email">{plain(t("footerNewsletter"))}</label>
      <div className="nl-row">
        <input id="nl-email" type="email" required autoComplete="email" placeholder={t("footerEmailPlaceholder")}
          value={email} onChange={(e) => { setEmail(e.target.value); setStatus(null); }} />
        <button className="btn btn-amber btn-sm" type="submit" disabled={status === "sending"}>{t("footerSend")}</button>
      </div>
      <p className="nl-status" role="status">{status === "ok" ? t("nlSuccess") : status === "ko" ? t("nlError") : ""}</p>
    </form>
  );
}

function Footer() {
  const { t } = useNv();
  const { t: tl } = useTranslation();
  return (
    <footer className="gfoot">
      <div className="wrap">
        <div className="fb">
          <Link className="brand" to="/"><img src={seal} alt="" width="38" height="38" />Lingolandias</Link>
          <p>{tl("footerDesc")}</p>
          <p>{t("footer.tagline")}</p>
          <p className="fb-meta">{plain(tl("footerAllLevels"))} · 5.0 Facebook{plain(tl("footerReviews"))}</p>
        </div>
        <div><h2>{t("footer.languages")}</h2>{LANGS.map((l) => <Link key={l.code} to={`/courses#${l.id}`}>{t(`langs.${l.code}`)}</Link>)}</div>
        <div><h2>{t("footer.school")}</h2>
          <Link to="/courses">{t("nav.classes")}</Link>
          <Link to="/courses#workshops">{t("footer.workshops")}</Link>
          <Link to="/about">{t("nav.about")}</Link>
          <Link to="/test">{t("nav.test")}</Link>
          <Link to="/contact">{t("footer.contact")}</Link>
        </div>
        <div><h2>{t("footer.contact")}</h2>
          <a href={WA}>WhatsApp +44 7578 146264</a>
          <a href={INSTAGRAM}>Instagram @lingolandias</a>
          <a href={FACEBOOK}>Facebook</a>
          <a href={TWITTER}>X (Twitter)</a>
          <a href={LINKEDIN}>LinkedIn</a>
        </div>
      </div>
      <div className="wrap nl-wrap"><Newsletter /></div>
      <div className="legal">
        <span>{t("footer.rights")} · {tl("footerRights")}</span>
        <span>{plain(tl("footerConnecting"))}</span>
        <span>{tl("footerMadeWith")} ♥ {tl("footerInBerlin")} · <span lang="en">Human-centered online</span></span>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  const { i18n } = useNv();
  useEffect(() => { document.documentElement.lang = i18n.resolvedLanguage || "en"; }, [i18n.resolvedLanguage]);
  useEffect(() => {
    document.body.classList.add("nv-body");
    return () => document.body.classList.remove("nv-body");
  }, []);
  return (
    <div className="nv">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
