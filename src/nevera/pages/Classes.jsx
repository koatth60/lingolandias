import Layout from "../Layout.jsx";
import { FinalNote } from "../blocks.jsx";
import { Arrow, Check, Html, ICON, INSTAGRAM, LANGS, MAGNETS, NOTE_COLORS, SectionHead, Sticky, WA, useNv } from "../ui.jsx";

const TAB_TILT = [-2, 1.5, -1, 2, -1.5];
const FORMAT_ICONS = [ICON.person, ICON.group, ICON.cup, ICON.globe, ICON.chat];
const WORKSHOP_ICONS = [null, ICON.calendar, ICON.chat, ICON.insta];
const COMMON = [[ICON.person, "var(--amber)", "#d0343f", -1.5], [ICON.chat, "var(--teal)", "#6b1fa6", 1], [ICON.list, "var(--pink)", "#2c6fd1", -1], [ICON.globe, "var(--lilac)", "#e8792a", 1.5]];
// Items already covered by "every class includes" are hidden per language (indexes into each list)
const KEEP = { en: [1, 2, 3, 4], es: [0, 4], it: [0, 1, 5], pl: [1, 2, 3], id: [0, 1] };

function LangSection({ lang, index }) {
  const { t } = useNv();
  const s = t(`classes.sections.${lang.code}`, { returnObjects: true });
  const wall = index % 2 === 1;
  const items = KEEP[lang.code].map((i) => s.items[i]).filter(Boolean);
  return (
    <section className={`gsec ${wall ? "wall" : "enamel"} lsec${index === 0 ? " tight" : ""}`} id={lang.id}>
      <div className="wrap">
        <div className="tx">
          <h2 className="h2">{s.title}</h2>
          <p className="sub">{s.sub}</p>
          {s.paras.map((p, i) => <Html as="p" key={i} html={p} />)}
          <div className="cta-line"><a className={`btn ${wall ? "btn-amber" : "btn-ink"}`} href={WA}>{t("cta.talk")} <Arrow /></a></div>
        </div>
        <div className="side">
          <article className="recipe" style={{ "--c": lang.c, "--r": `${index % 2 ? -1 : 1}deg` }}>
            <header><h3>{s.cardTitle}</h3><span className="hand" lang={lang.code} aria-hidden="true">{lang.hello}</span></header>
            <ul>
              {items.map(([b, rest]) => <li key={b}><Check /><span><b>{b}</b> – {rest}</span></li>)}
            </ul>
            {s.formatsLink && <p className="foot"><a href="#formats">{s.formatsLink}</a></p>}
          </article>
          {s.notes.map(([h, p], i) => (
            <Sticky key={h} c={NOTE_COLORS[(index + i + 2) % 5]} m={MAGNETS[(index + i) % 5]} r={i % 2 ? -1 : 1.5}>
              <h3>{h}</h3><p>{p}</p>
            </Sticky>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Classes() {
  const { t } = useNv();
  const h1 = t("classes.h1", { returnObjects: true });
  const formats = t("classes.formats.items", { returnObjects: true });
  const w = t("classes.workshops", { returnObjects: true });
  const common = t("classes.common", { returnObjects: true });

  return (
    <Layout>
      <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <h1 className="s"><span>{h1[0]}</span><span className="a">{h1[1]}</span></h1>
          <p className="lede">{t("classes.lede")}</p>
          <nav className="tabs" aria-label={t("classes.tabsLabel")}>
            {LANGS.map((l, i) => (
              <a key={l.code} className="tab" href={`#${l.id}`} style={{ "--c": l.c, "--r": `${TAB_TILT[i]}deg` }}>
                <span className="mag" style={{ "--m": l.m }} aria-hidden="true" />
                <span className="hand" lang={l.code} aria-hidden="true">{l.hello}</span>
                <b>{t(`langs.${l.code}`)}</b><small>{t(`classes.tabs.${l.code}`)}</small>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="gsec enamel" id="included">
        <div className="wrap">
          <SectionHead title={common.title} text={common.text} />
          <div className="whys">
            {common.items.map(([h, p], i) => (
              <Sticky key={h} c={COMMON[i][1]} m={COMMON[i][2]} r={COMMON[i][3]}>{COMMON[i][0]}<h3>{h}</h3><p>{p}</p></Sticky>
            ))}
          </div>
        </div>
      </section>

      {LANGS.map((l, i) => <LangSection key={l.code} lang={l} index={i} />)}

      <section className="gsec wall" id="formats">
        <div className="wrap">
          <SectionHead title={t("classes.formats.title")} text={t("classes.formats.text")} />
          <div className="formats">
            {formats.map(([h, p], i) => (
              <Sticky key={h} c={NOTE_COLORS[[0, 1, 2, 3, 4][i]]} m={MAGNETS[i]} r={[-1.5, 1, -1, 1.5, -1][i]}>
                {FORMAT_ICONS[i]}<h3 lang={i === 2 ? "en" : undefined}>{h}</h3><p>{p}</p>
              </Sticky>
            ))}
          </div>
        </div>
      </section>

      <section className="gsec enamel" id="workshops">
        <div className="wrap wsh">
          <div className="tx">
            <h2 className="h2">{w.title}</h2>
            <p className="sub">{w.sub}</p>
            <Html as="p" html={w.p1} />
            <h3 className="why">{w.why}</h3>
            <p>{w.p2}</p>
            <p>{w.p3}</p>
          </div>
          <div className="wnotes">
            {w.notes.map(([h, p], i) => (
              <Sticky key={h} c={NOTE_COLORS[[0, 1, 2, 3][i]]} m={MAGNETS[i]} r={[-2, 1.5, 1, -1.5][i]}>
                {i === 0 ? <span className="big" aria-hidden="true">10</span> : WORKSHOP_ICONS[i]}
                <h3>{h}</h3>
                <p>{p}{i === 3 && <> <a href={INSTAGRAM} style={{ fontWeight: 700, textDecoration: "underline" }}>@lingolandias</a>.</>}</p>
              </Sticky>
            ))}
          </div>
        </div>
      </section>

      <FinalNote wall title={t("classes.final.title")} text={t("classes.final.text")} second={{ to: "/test", label: t("cta.test") }} />
    </Layout>
  );
}
