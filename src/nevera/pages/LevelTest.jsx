import { Link } from "react-router-dom";
import Layout from "../Layout.jsx";
import { FinalNote, Levels, ShortFridge } from "../blocks.jsx";
import { useTranslation } from "react-i18next";
import { Arrow, Check, ICON, SectionHead, Sticky, WA, plain, useNv } from "../ui.jsx";

const FACT_ICONS = [ICON.clock, ICON.mail, ICON.chat];
const WHY = [["var(--teal)", "#6b1fa6", -1.5, ICON.target], ["var(--lilac)", "#e8792a", 1, ICON.clock], ["var(--amber)", "#d0343f", -1, ICON.list], ["var(--orange)", "#127a6e", 1.5, ICON.chat]];
const EXAMS = [
  { key: "en", to: "/english-quiz", c: "var(--amber)", r: -1.2, handLang: "en", levels: "A1 · A2 · B1 · B2" },
  { key: "es", to: "/spanish-quiz", c: "var(--pink)", r: 1.2, levels: "A1 · A2 · B1 · B2 · C1 · C2" },
];

export default function LevelTest() {
  const { t } = useNv();
  const { t: tl } = useTranslation();
  const h1 = t("test.h1", { returnObjects: true });
  // production facts: 15 minutes, result by email (sent, not instant), free guidance
  const facts = [tl("testTime"), t("test.facts", { returnObjects: true })[1], tl("testGuidance")];
  const fn = t("test.fridgeNotes", { returnObjects: true });
  const why = [["testAccurate", "testAccurateSub"], ["testFast", "testFastSub"], ["testDetailed", "testDetailedSub"], ["testGuidance", "testGuidanceSub"]].map(([a, b]) => [tl(a), tl(b)]);
  const notes = [
    { text: fn[0], x: 9, y: 9, r: -4, c: "var(--amber)", m: "#d0343f" },
    { text: fn[1], x: 52, y: 12, r: 3, c: "var(--teal)", m: "#2c6fd1" },
    { text: fn[2], k: "wide", x: 16, y: 50, r: -2, c: "var(--pink)", m: "#6b1fa6" },
    { text: fn[3], k: "disc", x: 57, y: 55, r: 4, c: "var(--lilac)", m: "#127a6e" },
  ];

  return (
    <Layout>
      <section className="hero">
        <div>
          <p className="eyebrow">{tl("levelTestBadge")}</p>
          <h1 className="s"><span>{h1[0]}</span><span className="a">{h1[1]}</span></h1>
          <p className="lede">{t("test.lede")}</p>
          <div className="ctas">
            <a className="btn btn-amber" href="#tests">{t("cta.pickTest")} <Arrow /></a>
            <a className="btn btn-line" href={WA}>{t("cta.writeWa")}</a>
          </div>
          <p className="facts">{facts.map((f, i) => <span key={f}>{FACT_ICONS[i]}{f}</span>)}</p>
        </div>
        <ShortFridge label={t("test.fridgeLabel")} notes={notes} />
      </section>

      <section className="gsec enamel" id="tests">
        <div className="wrap">
          <SectionHead title={t("test.pick.title")} text={t("test.pick.text")} />
          <div className="exams">
            {EXAMS.map((e) => {
              const x = t(`test.${e.key}`, { returnObjects: true });
              return (
                <article key={e.key} className="exam" style={{ "--c": e.c, "--r": `${e.r}deg` }}>
                  <span className="pin" aria-hidden="true" />
                  <h3>{x.title}</h3>
                  <p className="hand" lang={e.handLang}>{x.hand}</p>
                  <p>{x.text}</p>
                  <ul>{x.items.map((it) => <li key={it}><Check />{it}</li>)}</ul>
                  <p className="evaluated"><b>{tl("evaluatedLevels")}:</b> {e.levels}</p>
                  <Link className="btn btn-ink" to={e.to}>{x.start}<span className="sr">{x.startSr}</span> <Arrow /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="gsec enamel tight" id="why">
        <div className="wrap">
          <SectionHead single title={tl("whyTakeTest")} text={plain(tl("testQuestionsInfo"))} />
          <div className="whys">
            {why.map(([h, p], i) => (
              <Sticky key={h} c={WHY[i][0]} m={WHY[i][1]} r={WHY[i][2]}>{WHY[i][3]}<h3>{h}</h3><p>{p}</p></Sticky>
            ))}
          </div>
        </div>
      </section>

      <Levels title={t("test.levels.title")} text={t("test.levels.text")} note={t("test.levels.note")} ctaTo="#tests" ctaLabel={t("cta.pickTest")} />

      <FinalNote title={t("test.final.title")} text={t("test.final.text")} second={{ to: "/courses", label: t("cta.seeClasses") }} />
    </Layout>
  );
}
