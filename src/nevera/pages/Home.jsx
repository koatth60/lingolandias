import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout.jsx";
import { FinalNote, Levels } from "../blocks.jsx";
import { Arrow, FACEBOOK, Html, LANGS, MAGNETS, SectionHead, Sticky, VIDEO_BASE, WA, useNv } from "../ui.jsx";

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

export default function Home() {
  const { t } = useNv();
  const h1 = t("home.h1", { returnObjects: true });
  const fears = t("home.fears.items", { returnObjects: true });
  const voices = t("home.voices.items", { returnObjects: true });
  const days = t("home.community.days", { returnObjects: true });
  const events = t("home.community.events", { returnObjects: true });
  const reviews = t("home.reviews.items", { returnObjects: true });
  const poem = t("home.motto.words", { returnObjects: true });

  return (
    <Layout>
      <section className="hero">
        <div>
          <h1><span>{h1[0]}</span><span className="a">{h1[1]}</span><span>{h1[2]}</span></h1>
          <p className="lede">{t("home.lede")} <b>{t("home.ledeB")}</b></p>
          <div className="ctas">
            <Link className="btn btn-amber" to="/test">{t("cta.testFree")} <Arrow /></Link>
            <a className="btn btn-line" href={WA}>{t("cta.writeWa")}</a>
          </div>
          <Html as="p" className="proof" html={t("home.proof")} />
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

      <Levels title={t("home.levels.title")} text={t("home.levels.text")} note={t("home.levels.note")} ctaTo="/test" ctaLabel={t("cta.test")} />

      <section className="gsec enamel" id="fears">
        <div className="wrap">
          <SectionHead title={t("home.fears.title")} text={t("home.fears.text")} />
          <ul className="fears">
            {fears.map(([q, a], i) => (
              <li key={q} className="fear" style={{ "--r": `${FEAR_TILT[i]}deg`, "--m": MAGNETS[i % 5] }}>
                <h3>“{q}”</h3><p>{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gsec wall" id="voices">
        <div className="wrap">
          <SectionHead title={t("home.voices.title")} text={t("home.voices.text")} />
          <div className="voices">
            {voices.map((v, i) => (
              <div className="vcol" key={v.name}>
                <div className="phone" style={{ "--r": `${[-1.5, 1.5, -1][i]}deg` }}>
                  <span className="mag" style={{ "--m": ["#ffc14d", "#5fd3c1", "#ff9ec4"][i] }} aria-hidden="true" />
                  {/* PENDIENTE: poster (imagen de portada) y subtítulos <track> para cada video */}
                  <video controls preload="metadata" playsInline aria-label={t("home.voices.videoLabel", { name: v.name })}
                    src={`${VIDEO_BASE}lingolandias-video${i + 1}.mp4#t=0.5`} />
                </div>
                <blockquote className="vnote taped" style={{ "--r": `${[1.5, -2, 1.5][i]}deg` }}>
                  <p>“{v.quote}”</p>
                  <footer><b>{v.name}</b><span>{v.role}</span></footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gsec enamel" id="community">
        <div className="wrap comm">
          <SectionHead single title={t("home.community.title")} text={t("home.community.text")} />
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
            <p className="pl-note">{t("home.community.goal")}</p>
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
          <SectionHead title={t("home.reviews.title")} text={t("home.reviews.text")} />
          <div className="letters">
            {reviews.map(([q, by], i) => (
              <blockquote key={by} style={{ "--r": `${[-2, 1.5, -1][i]}deg` }}><p>“{q}”</p><footer>{by}</footer></blockquote>
            ))}
          </div>
          <a className="more" href={FACEBOOK}>{t("home.reviews.more")}</a>
        </div>
      </section>

      <section className="gsec wall motto" aria-label={t("home.motto.label")}>
        <div className="wrap">
          <blockquote>
            <p className="poem">
              {poem.map((w, i) => (
                <span key={i} className={i >= poem.length - 2 ? "k" : undefined} style={{ "--r": `${POEM_TILT[i % POEM_TILT.length]}deg` }}>{w}</span>
              ))}
            </p>
            <footer>{t("home.motto.author")}</footer>
          </blockquote>
        </div>
      </section>

      <FinalNote title={t("home.final.title")} text={t("home.final.text")} second={{ to: "/test", label: t("cta.test") }} />
    </Layout>
  );
}
