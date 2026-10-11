import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout.jsx";
import { FinalNote, Levels } from "../blocks.jsx";
import { useTranslation } from "react-i18next";
import { Arrow, FACEBOOK, Html, LANGS, MAGNETS, SectionHead, Sticky, VIDEO_BASE, WA, plain, useNv } from "../ui.jsx";

// One phrase per note, shown first in the note's own language; tapping cycles all five.
const ORDER = ["en", "es", "pl", "it", "id"];
const PHRASES = [
  { s: "en", w: { en: "fridge", es: "nevera", pl: "lodówka", it: "frigo", id: "kulkas" }, c: "var(--amber)", m: "#d0343f", x: 10, y: 34.5, r: -5, k: "curl" },
  { s: "pl", w: { pl: "Cześć!", es: "¡Hola!", en: "Hi!", it: "Ciao!", id: "Halo!" }, c: "var(--teal)", m: "#2c6fd1", x: 38, y: 36, r: 4, k: "disc" },
  { s: "it", w: { it: "caffè senza latte", en: "coffee, no milk", es: "café sin leche", pl: "kawa bez mleka", id: "kopi tanpa susu" }, c: "var(--pink)", m: "#6b1fa6", x: 7, y: 57, r: 3, k: "" },
  { s: "es", w: { es: "aprendo", en: "I'm learning", pl: "uczę się", it: "imparo", id: "aku belajar" }, c: "var(--lilac)", m: "#e8792a", x: 37, y: 59, r: -3, k: "curl" },
  { s: "id", w: { id: "terima kasih", es: "gracias", en: "thank you", pl: "dziękuję", it: "grazie" }, c: "var(--orange)", m: "#0f8a6e", x: 11, y: 79.5, r: -2, k: "disc" },
];
const LETTER_COLORS = ["#d0343f", "#2c6fd1", "#c4601a", "#0f8a6e", "#6b1fa6"];
const LETTER_TILT = [-6, 4, -3, 7, -4];

function Note({ p, caption, hint }) {
  const order = [p.s, ...ORDER.filter((l) => l !== p.s)];
  const [i, setI] = useState(0);
  const l = order[i];
  return (
    <button type="button" className={`n ${p.k}`.trim()} aria-label={`${p.w[l]} (${l.toUpperCase()}), ${hint}`}
      style={{ left: `${p.x}%`, top: `${p.y}%`, "--r": `${p.r}deg`, "--c": p.c, "--m": p.m }}
      onClick={() => setI((i + 1) % order.length)}>
      <span className="lang">{l.toUpperCase()}<i aria-hidden="true">↻</i></span>
      <span className="w" lang={l}>{p.w[l]}</span>
      <span className="t">{caption}</span>
    </button>
  );
}

function Fridge() {
  const { t } = useNv();
  const captions = t("home.fridge.notes", { returnObjects: true });
  const letters = [...t("home.fridge.letters")];
  return (
    <div className="fridge" role="group" aria-label={t("home.fridge.label")}>
      <span className="handle top" aria-hidden="true" />
      <span className="seam" aria-hidden="true" />
      <span className="handle main" aria-hidden="true" />
      <div className="letters-mag" role="img" aria-label={t("home.fridge.lettersLabel")}>
        {letters.map((ch, i) => (
          <span key={i} aria-hidden="true" style={{ "--lc": LETTER_COLORS[i % 5], "--r": `${LETTER_TILT[i % 5]}deg` }}>{ch}</span>
        ))}
        <small aria-hidden="true">{t("home.fridge.wordOfDay")}</small>
      </div>
      <figure className="pol" aria-hidden="true">
        <svg viewBox="0 0 100 92"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffb35c" /><stop offset="1" stopColor="#ff7aa8" /></linearGradient></defs>
          <rect width="100" height="92" fill="url(#sky)" /><circle cx="70" cy="34" r="13" fill="#ffe08a" />
          <path d="M0 70V52h8v-8h6v8h6V40h4l2-8 2 8h4v30h6V48h10v-6h4v6h6v22h6V56l6-6 6 6v14h6V46h6v24h8v22H0z" fill="#3d1466" />
          <rect y="74" width="100" height="18" fill="#5b2a8c" /><path d="M8 80h20M40 84h26M72 79h18" stroke="#ff9ec4" strokeWidth="1.6" strokeLinecap="round" opacity=".7" /></svg>
        <p>{t("home.fridge.polaroid")}</p>
      </figure>
      <span className="magnet" style={{ right: "6%", top: "6%" }} aria-hidden="true" />
      <div className="notes">
        {PHRASES.map((p, i) => <Note key={p.s} p={p} caption={captions[i]} hint={t("home.fridge.tapHint")} />)}
      </div>
      {/* Shopping list mixes languages on purpose; the translation stays in the site language */}
      <div className="list"><b>{t("home.fridge.list")}</b>
        <ul>
          <li><span lang="en">milk</span> · <span lang="pl">mleko</span></li>
          <li><span lang="pl">chleb</span> · <span lang="es">pan</span></li>
          <li><span lang="it">pomodori</span></li>
          <li><span lang="id">kopi</span> · <span lang="it">caffè</span></li>
          <li><s><span lang="pl">ser</span> · <span lang="es">queso</span></s> <span className="sr">({t("home.fridge.listDone")})</span></li>
        </ul>
      </div>
      <div className="flag"><b>{t("home.fridge.reminderTitle")}</b>{t("home.fridge.reminder")}</div>
    </div>
  );
}

const FEAR_TILT = [-1.5, 1, -0.5, 1.5, -1, 0.5, -1.5, 1, -0.5, 1.5];
const WEEK = ["var(--lilac)", "var(--teal)", "var(--amber)", "var(--pink)", null, "var(--orange)", null];
const POEM_TILT = [-3, 2, -1, 3, -2, 1, -2.5, 2, -1.5, 1, -2];
// Production Facebook reviews (review1-8 keys), same authors and dates as the old site
const REVIEWS = [
  ["Rozalia P.", "24.02.2026"], ["Maria B.", "09.02.2026"], ["Julita K.", "08.01.2026"], ["Ella B.", "18.12.2025"],
  ["Katarzyna W.", "08.07.2025"], ["Magdalena S.", "20.01.2025"], ["Joanna K.", "06.09.2024"], ["Kasia T.", "26.08.2024"],
];
const REVIEW_TILT = [-1.5, 1, -0.5, 1.5, -1, 0.5, -1.5, 1];
const VOICES = [["Magda", "videoComment1", "videoRole1"], ["Marta", "videoComment2", "videoRole2"], [null, "videoComment3", "videoRole3"]];

// "Title – rest" strings from the old site: bold the part before the dash
const Split = ({ text }) => {
  const s = plain(text);
  const i = s.indexOf(" – ");
  return i > 0 ? <><b>{s.slice(0, i)}</b> – {s.slice(i + 3)}</> : <>{s}</>;
};

export default function Home() {
  const { t } = useNv();
  const { t: tl } = useTranslation();
  const days = t("home.community.days", { returnObjects: true });
  const events = t("home.community.events", { returnObjects: true });
  const poem = plain(tl("quote")).split(" ");
  const proof = ["heroActiveStudents", "heroOnline", "heroLiveClasses", "heroCertification", "heroYearsExp"].map((k) => plain(tl(k)));

  return (
    <Layout>
      <section className="hero">
        <div>
          <h1><span>{tl("heroLine1")}</span><span className="a">{tl("heroLine2")}</span><span>{tl("heroLine3")}</span></h1>
          <p className="lede">{tl("hero2")} <b>{tl("hero2Span")}</b></p>
          <p className="hand-line">{tl("hero3")}</p>
          <div className="ctas">
            <Link className="btn btn-amber" to="/test">{tl("startNow")} <Arrow /></Link>
            <a className="btn btn-line" href={WA}>{t("cta.writeWa")}</a>
          </div>
          <p className="proof">{proof.join(" · ")}</p>
        </div>
        <Fridge />
      </section>

      <section className="gsec enamel" id="languages">
        <div className="wrap">
          <SectionHead title={t("home.languages.title")} text={t("home.languages.text")} />
          <div className="langnotes">
            {LANGS.map((l, i) => (
              <Link key={l.code} className="ln" to={`/courses#${l.id}`} style={{ "--c": l.c, "--m": l.m, "--r": `${[-2, 1.5, -1, 2, -1.5][i]}deg` }}>
                <h3>{t(`langs.${l.code}`)}</h3>
                <span className="hi" lang={l.code}>{l.hello}</span>
                <p>{t(`home.languages.cards.${l.code}.text`)}</p>
                <span className="lv">{t(`home.languages.cards.${l.code}.levels`)} <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Levels title={tl("levelsTitle")} text={t("home.levels.text")} note={plain(tl("discoverLevelFirst"))} ctaTo="/test" ctaLabel={tl("levelsEvaluate")} />

      <section className="gsec enamel" id="fears">
        <div className="wrap">
          <p className="eyebrow">{plain(tl("solveYourDoubts"))}</p>
          <SectionHead title={tl("methodH")} text={tl("methodP")} />
          <ul className="fears">
            {FEAR_TILT.map((r, i) => (
              <li key={i} className="fear" style={{ "--r": `${r}deg`, "--m": MAGNETS[i % 5] }}>
                <h3>“{tl(`methodQ${i + 1}`)}”</h3><p>{tl(`methodQ${i + 1}P`)}</p>
              </li>
            ))}
          </ul>
          <div className="after-row">
            <p>{tl("readyToStart")}</p>
            <a className="btn btn-ink" href={WA}>{plain(tl("methodBtn")).replace(/\s*→$/, "")} <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="gsec wall" id="voices">
        <div className="wrap">
          <SectionHead title={t("home.voices.title")} text={`${tl("videosTheyAlready")} ${tl("videosLiveChange")}.`} />
          <div className="voices">
            {VOICES.map(([name, comment, role], i) => {
              const who = name || tl("videoName3");
              return (
                <div className="vcol" key={comment}>
                  <div className="phone" style={{ "--r": `${[-1.5, 1.5, -1][i]}deg` }}>
                    <span className="mag" style={{ "--m": ["#ffc14d", "#5fd3c1", "#ff9ec4"][i] }} aria-hidden="true" />
                    {/* PENDIENTE: poster (imagen de portada) y subtítulos <track> para cada video */}
                    <video controls preload="metadata" playsInline aria-label={t("home.voices.videoLabel", { name: who })}
                      src={`${VIDEO_BASE}lingolandias-video${i + 1}.mp4#t=0.5`} />
                  </div>
                  <blockquote className="vnote taped" style={{ "--r": `${[1.5, -2, 1.5][i]}deg` }}>
                    <p>“{plain(tl(comment))}”</p>
                    <footer><b>{who}</b><span>{tl(role)}</span></footer>
                  </blockquote>
                </div>
              );
            })}
          </div>
          <div className="after-row on-wall">
            <p><b>{tl("videosCTATitle")}</b> {tl("videosCTASub")}</p>
            <a className="btn btn-amber" href={WA}>{tl("videosCTABtn")} <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="gsec enamel" id="community">
        <div className="wrap comm">
          <SectionHead single title={tl("whatFindTitle")} text={tl("whatFindP")} />
          <ul className="findlist">
            {Array.from({ length: 15 }, (_, i) => <li key={i}><Split text={tl(`whatFindItem${i + 1}`)} /></li>)}
          </ul>
          <div className="planner" role="group" aria-label={t("home.community.label")}>
            <div className="pl-top"><span>{t("home.community.week")}</span><small>{t("home.community.example")}</small></div>
            <div className="days">
              {days.map((d, i) => (
                <div key={d}><b>{d}</b>
                  {events[i] && <span className="ev" style={{ "--c": WEEK[i] }} lang={i === 3 ? "en" : undefined}>{events[i]}</span>}
                  {i === 6 && <span className="rest">{t("home.community.rest")}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="after-row">
            <p><b>{tl("whatFindCTA")}</b></p>
            <a className="btn btn-ink" href={WA}>{tl("whatFindBtn")} <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="gsec wall" id="story">
        <div className="wrap teaser">
          <div className="tx">
            <h2 className="h2">{t("home.teaser.title")}</h2>
            <p>{t("home.teaser.p1")}</p>
            <Html as="p" html={t("home.teaser.p2")} />
            <div className="ctas"><Link className="btn btn-line" to="/about">{t("cta.story")} <Arrow /></Link></div>
          </div>
          <div className="stickies" aria-hidden="true">
            <Sticky className="s1" c="var(--amber)" m="#d0343f" r={-4}><p className="hand" lang="en">Speak first. Name it later.</p></Sticky>
            <Sticky className="s2" c="var(--teal)" m="#6b1fa6" r={3}><p className="hand" lang="en">Communication before perfection.</p></Sticky>
          </div>
        </div>
      </section>

      <section className="gsec enamel" id="reviews">
        <div className="wrap">
          <SectionHead title={t("home.reviews.title")}
            text={`<b class="five">5.0</b> ${tl("fbRating")} ${plain(tl("footerReviews"))} · ${plain(tl("recommendSchool"))}`} />
          <div className="letters">
            {REVIEWS.map(([by, date], i) => (
              <blockquote key={by} style={{ "--r": `${REVIEW_TILT[i]}deg` }}>
                <p>“{plain(tl(`review${i + 1}`))}”</p>
                <footer>{by} · {date}</footer>
              </blockquote>
            ))}
          </div>
          <a className="more" href={FACEBOOK}>{tl("viewLingoPage")}</a>
        </div>
      </section>

      <section className="gsec wall motto" aria-label={tl("moto")}>
        <div className="wrap">
          <blockquote>
            <p className="poem">
              {poem.map((w, i) => (
                <span key={i} className={i >= poem.length - 2 ? "k" : undefined} style={{ "--r": `${POEM_TILT[i % POEM_TILT.length]}deg` }}>{w}</span>
              ))}
            </p>
            <footer>— {plain(tl("autor")).replace(/-+$/, "")}</footer>
          </blockquote>
        </div>
      </section>

      <FinalNote title={t("home.final.title")} text={t("home.final.text")} second={{ to: "/test", label: t("cta.test") }} />
    </Layout>
  );
}
