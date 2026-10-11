import { useTranslation } from "react-i18next";
import Layout from "../Layout.jsx";
import { FinalNote } from "../blocks.jsx";
import { Check, ICON, INSTAGRAM, LANGS, MAGNETS, NOTE_COLORS, SectionHead, Sticky, WA, useNv } from "../ui.jsx";
import "../classes.css";

const MESSENGER = "https://m.me/lingolandias";
const TAB_TILT = [-2, 1.5, -1, 2, -1.5, 1];
const FORMAT_ICONS = [ICON.person, ICON.group, ICON.cup, ICON.globe, ICON.chat];
const POEM_TILT = [-3, 2, -1, 3, -2, 1, -2.5, 2, -1.5, 1, -2];

// Production copy (legacy "translation" namespace), one entry per language section.
// Keys are spelled out in full so they stay greppable.
const COPY = {
  en: {
    title: "engCTitle", intro: "engCIntro", offer: "engCOffer",
    // English offer items are shown with their full descriptions in #formats
    items: ["engCLesson", "engCGroup", "engCTea", "engCCultural", "engCChallenge"], titlesOnly: true,
    cta: "engCCTA", text: "engCText", btn: "engCBtn",
  },
  es: {
    title: "spaCTitle", intro: "spaCIntro", how: "spaCHow", howP: "spaCHowP", offer: "spaCOffer",
    items: ["spaCBenefit1", "spaCBenefit2", "spaCBenefit3", "spaCBenefit4", "spaCBenefit5"],
    notes: [["spaCWhy", "spaCWhyP"], ["spaCSolo", "spaCSoloP"], [null, "spaCExtra"]],
    cta: "spaCCTA", text: "spaCText", btn: "spaCBtn",
  },
  it: {
    title: "itaCTitle", intro: "itaCIntro", offer: "itaCOffer",
    items: ["itaCItem1", "itaCItem2", "itaCItem3", "itaCItem4", "itaCItem5", "itaCItem6"],
    notes: [["itaCWhy", "itaCWhyP"], ["itaCSolo", "itaCSoloP"], [null, "itaCExtra"]],
    cta: "itaCCTA", text: "itaCText", btn: "itaCBtn",
  },
  pl: {
    title: "polCTitle", intro: "polCIntro", offer: "polCOffer",
    items: ["polCItem1", "polCItem2", "polCItem3", "polCItem4", "polCItem5"],
    notes: [[null, "polCWhy"]],
    cta: "polCCTA", text: "polCText", btn: "polCBtn",
  },
  id: {
    title: "indCTitle", intro: "indCIntro", offer: "indCOffer",
    items: ["indCItem1", "indCItem2", "indCItem3", "indCItem4"],
    notes: [[null, "indCItem5"]],
    cta: "indCCTA", text: "indCText", btn: "indCBtn",
  },
};
const FORMATS = [["engCLesson", "engCLessonP"], ["engCGroup", "engCGroupP"], ["engCTea", "engCTeaP"], ["engCCultural", "engCCulturalP"], ["engCChallenge", "engCChallengeP"]];
const WSH_THEMES = ["wshCTheme1", "wshCTheme2", "wshCTheme3", "wshCTheme4"];
const PILLS = ["coursePill1", "coursePill2", "coursePill4"]; // coursePill3 ("6 languages") left out on purpose: the school teaches 5

// "Title – rest" → ["Title", "rest"]; strings without the dash stay whole
const split = (s) => {
  const i = s.indexOf(" – ");
  return i < 0 ? [s] : [s.slice(0, i), s.slice(i + 3)];
};
const Item = ({ text }) => {
  const [b, rest] = split(text);
  return <li><Check /><span>{rest ? <><b>{b}</b> – {rest}</> : b}</span></li>;
};

function CtaBox({ q, text, btn, wall }) {
  return (
    <div className="cls-cta">
      <p className="q">{q}</p>
      <p>{text}</p>
      <a className={`btn ${wall ? "btn-amber" : "btn-ink"}`} href={WA}>{btn}</a>
    </div>
  );
}

function LangSection({ lang, index }) {
  const { t } = useTranslation();
  const k = COPY[lang.code];
  const wall = index % 2 === 1;
  const [h2, sub] = split(t(k.title));
  return (
    <section className={`gsec ${wall ? "wall" : "enamel"} lsec`} id={lang.id}>
      <div className="wrap cls-grid">
        <div className="tx">
          <h2 className="h2">{h2}</h2>
          {sub && <p className="sub">{sub}</p>}
          <p>{t(k.intro)}</p>
          {k.how && <><h3 className="cls-h3">{t(k.how)}</h3><p>{t(k.howP)}</p></>}
        </div>
        <div className="side">
          <article className="recipe" style={{ "--c": lang.c, "--r": `${index % 2 ? -1 : 1}deg` }}>
            <header><h3>{t(k.offer)}</h3><span className="hand" lang={lang.code} aria-hidden="true">{lang.hello}</span></header>
            <ul>
              {k.items.map((key) => (k.titlesOnly
                ? <li key={key}><Check /><span><b>{t(key)}</b></span></li>
                : <Item key={key} text={t(key)} />))}
            </ul>
            {k.titlesOnly && <FormatsLink />}
          </article>
          {k.notes?.map(([h, p], i) => (
            <Sticky key={p} className={h ? "cls-note" : "cls-note say"} c={NOTE_COLORS[(index + i + 2) % 5]} m={MAGNETS[(index + i) % 5]} r={i % 2 ? -1 : 0.8}>
              {h && <h3>{t(h)}</h3>}
              <p>{t(p)}</p>
            </Sticky>
          ))}
        </div>
        <CtaBox q={t(k.cta)} text={t(k.text)} btn={t(k.btn)} wall={wall} />
      </div>
    </section>
  );
}

function FormatsLink() {
  const { t } = useNv();
  return <p className="foot"><a href="#formats">{t("classes.sections.en.formatsLink")}</a></p>;
}

function Workshops() {
  const { t } = useTranslation();
  const [eyebrow] = split(t("wshCTitle")); // the second half equals wshHeroLine1 + wshHeroLine2
  const notes = [
    { h: "wshMaxGroup", p: "wshMaxGroupDesc", icon: <span className="big" aria-hidden="true">10</span> },
    { h: "wshMonthlyTheme", p: "wshMonthlyThemeDesc", icon: ICON.calendar },
    { h: "wshEasyJoin", p: "wshEasyJoinDesc", icon: ICON.chat, link: [MESSENGER, "wshPill4"] },
    { h: "wshStayLoop", p: "wshStayLoopDesc", icon: ICON.insta, link: [INSTAGRAM, "wshPill3"] },
  ];
  return (
    <section className="gsec enamel" id="workshops">
      <div className="wrap wsh cls-grid">
        <div className="tx">
          <p className="cls-eyebrow">{eyebrow}</p>
          <h2 className="h2 cls-wh2"><span>{t("wshHeroLine1")}</span> <span>{t("wshHeroLine2")}</span></h2>
          <p className="sub">{t("wshHeroSub")} {t("wshHeroSubSpan")}.</p>
          <blockquote className="cls-quote">
            <p className="big">“{t("wshTileQuote")}”</p>
            <p>{t("wshTileQuoteP")}</p>
          </blockquote>
          <h3 className="cls-h3">{t("wshWhyTitle")}</h3>
          <p>{t("wshWhyCol1")}</p>
          <p>{t("wshWhyCol2")}</p>
        </div>
        <div className="side cls-wside">
          <article className="recipe" style={{ "--c": "var(--lilac)", "--r": "1deg" }}>
            <header><h3>{t("wshCOffer")}</h3></header>
            <ul>{WSH_THEMES.map((key) => <Item key={key} text={t(key)} />)}</ul>
          </article>
          <div className="wnotes">
            {notes.map((n, i) => (
              <Sticky key={n.h} c={NOTE_COLORS[i]} m={MAGNETS[i]} r={[-1, 1, 0.8, -0.8][i]}>
                {n.icon}
                <h3>{t(n.h)}</h3>
                <p>{t(n.p)}</p>
                {n.link && <p><a className="cls-link" href={n.link[0]}>{t(n.link[1])}</a></p>}
              </Sticky>
            ))}
          </div>
          <figure className="quote cls-penney">
            <blockquote><p>“{t("wshClosingQuote")}”</p></blockquote>
            <figcaption>— James Cash Penney</figcaption>
          </figure>
        </div>
        <CtaBox q={t("wshCCTA")} text={t("wshCTADesc")} btn={t("wshCBtn")} />
      </div>
    </section>
  );
}

export default function Classes() {
  const { t: nt } = useNv();
  const { t } = useTranslation();
  const h1 = nt("classes.h1", { returnObjects: true });
  const motto = t("courseClosingQuote").split(" ");

  return (
    <Layout>
      <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <p className="cls-eyebrow">{t("coursePageTitle")}</p>
          <h1 className="s"><span>{h1[0]}</span><span className="a">{h1[1]}</span></h1>
          <p className="lede">{t("coursePageSub")}</p>
          <p className="proof cls-pills">{PILLS.map((key) => <span key={key}>{t(key)}</span>)}</p>
          <nav className="tabs cls-tabs" aria-label={nt("classes.tabsLabel")}>
            {LANGS.map((l, i) => (
              <a key={l.code} className="tab" href={`#${l.id}`} style={{ "--c": l.c, "--r": `${TAB_TILT[i]}deg` }}>
                <span className="mag" style={{ "--m": l.m }} aria-hidden="true" />
                <span className="hand" lang={l.code} aria-hidden="true">{l.hello}</span>
                <b>{nt(`langs.${l.code}`)}</b><small>{nt(`classes.tabs.${l.code}`)}</small>
              </a>
            ))}
            <a className="tab" href="#workshops" style={{ "--c": "var(--enamel)", "--r": `${TAB_TILT[5]}deg` }}>
              <span className="mag" style={{ "--m": MAGNETS[0] }} aria-hidden="true" />
              <span className="tab-ico">{ICON.group}</span>
              <b>{t("langWorkshops")}</b><small>{t("selfDevelopment")}</small>
            </a>
          </nav>
        </div>
      </section>

      {LANGS.map((l, i) => <LangSection key={l.code} lang={l} index={i} />)}

      <section className="gsec wall" id="formats">
        <div className="wrap">
          <SectionHead title={nt("classes.formats.title")} text={nt("classes.formats.text")} />
          <div className="formats">
            {FORMATS.map(([h, p], i) => (
              <Sticky key={h} c={NOTE_COLORS[i]} m={MAGNETS[i]} r={[-1, 1, -0.8, 1, -1][i]}>
                {FORMAT_ICONS[i]}<h3 lang={h === "engCTea" ? "en" : undefined}>{t(h)}</h3><p>{t(p)}</p>
              </Sticky>
            ))}
          </div>
        </div>
      </section>

      <Workshops />

      <section className="gsec wall motto">
        <div className="wrap">
          <blockquote>
            <p className="poem">
              {motto.map((w, i) => (
                <span key={i} className={i >= motto.length - 2 ? "k" : undefined} style={{ "--r": `${POEM_TILT[i % POEM_TILT.length]}deg` }}>{w}</span>
              ))}
            </p>
            <footer>— Ludwig Wittgenstein</footer>
          </blockquote>
        </div>
      </section>

      <FinalNote title={nt("classes.final.title")} text={nt("classes.final.text")} second={{ to: "/test", label: nt("cta.test") }} />
    </Layout>
  );
}
