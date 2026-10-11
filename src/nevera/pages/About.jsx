import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "../Layout.jsx";
import { FinalNote, ShortFridge } from "../blocks.jsx";
import { Arrow, Html, MAGNETS, NOTE_COLORS, Sticky, WA, useNv } from "../ui.jsx";
import "../about.css";

const PLATFORM = "https://lingolandias.com";

// The founder's motto stays in English in every edition: it is how the school talks about itself
const MOTTO = [
  { text: "Speak first.<br>Name it later.", lang: "en", x: 9, y: 9, r: -5, c: "var(--amber)", m: "#d0343f" },
  { text: "Communication before perfection.", lang: "en", k: "wide", x: 50, y: 12, r: 4, c: "var(--teal)", m: "#2c6fd1" },
  { text: "Human-centered online.", lang: "en", k: "wide", x: 16, y: 54, r: 3, c: "var(--pink)", m: "#6b1fa6" },
];

// Founder story as four letters: [heading key, paragraph key, small tag]
const STORY = [
  ["theBeginning", "genInfoPara1", "2015"],
  ["theDiscovery", "genInfoPara2"],
  ["ourEssence", "genInfoPara3"],
  ["prideAndMission", "genInfoPara4", "today"],
];
const STORY_TILT = [-1.5, 1.5, 1, -1];

// Figures shown on production (Hero, story stats and Team page)
const FIGS = [
  ["300+", "statStudents", "var(--amber)", "#d0343f", -2],
  ["5+", "statYears", "var(--teal)", "#6b1fa6", 1.5],
  ["5", "statLanguages", "var(--pink)", "#2c6fd1", 1],
  ["9+", "statTeachersLabel", "var(--lilac)", "#e8792a", -1.5],
];
const EXP_TILT = [-1, .8, -.6, 1, -.8, .6];
const LOCS = ["locSpain", "locUK", "locItaly", "locUSA", "locColombia", "locPoland", "locIndonesia", "locAustralia"];
const PIN_TILT = [-3, 2, -1.5, 3, -2, 1.5, -2.5, 2];

const noArrow = (s) => s.replace(/\s*→\s*$/, "");

export default function About() {
  const { t: nt } = useNv();
  const { t } = useTranslation();
  const h1 = nt("about.h1", { returnObjects: true });

  return (
    <Layout>
      <section className="hero">
        <div>
          <span className="ab-eye">{t("aboutUsBadge")}</span>
          <h1 className="s"><span>{h1[0]}</span><span className="a">{h1[1]}</span></h1>
          <Html as="p" className="lede" html={nt("about.lede")} />
          <Html as="p" className="proof" html={nt("about.proof")} />
        </div>
        <ShortFridge label={nt("about.fridgeLabel")} notes={MOTTO} magnet />
      </section>

      <section className="gsec enamel" id="story">
        <div className="wrap">
          <div className="ghead single">
            <div>
              <span className="ab-eye">{t("ourStory")}</span>
              <h2>{t("genInfo")} {t("genInfoSpan")}</h2>
            </div>
          </div>
          <ol className="story">
            {STORY.map(([h, p, tag], i) => (
              <li key={h} className="taped" style={{ "--r": `${STORY_TILT[i]}deg` }}>
                <span className="no" aria-hidden="true">{i + 1}</span>
                {tag && <span className="when">{tag === "today" ? t("today") : tag}</span>}
                <h3>{t(h)}</h3>
                <p>{t(p)}</p>
                {i === 3 && (
                  <p className="ab-chips"><span>{t("commitment100")}</span><span>{t("provenMethod")}</span></p>
                )}
              </li>
            ))}
          </ol>
          <div className="sign"><span className="hand">Agata Kozłowska</span><span>{t("director")}</span></div>
        </div>
      </section>

      <section className="gsec wall" id="philosophy">
        <div className="wrap ab-cols">
          <div className="ptext">
            <span className="ab-eye">{t("ourPhilosophy")}</span>
            <h2 className="ab-h2"><span>{t("philoTitle")}</span><span className="a">{t("philoTitleLine2")}</span></h2>
            <p>{t("philoP1")}</p>
            <p>{t("philoP2")}</p>
            <p>{t("philoP3")}</p>
          </div>
          <Sticky className="ab-note" c="var(--amber)" m="#6b1fa6" r={1}>
            <p className="hand">{t("philoP4")}</p>
            <p className="c">{t("philoCTA")}</p>
            <Link className="btn btn-ink" to="/courses">{t("philoBtn")} <Arrow /></Link>
          </Sticky>
        </div>
      </section>

      <section className="gsec enamel" id="changes">
        <div className="wrap philo">
          <div className="pair">
            <div className="pn old"><span className="tag">{t("yearsAgoLabel")}</span><p>{t("yearsAgoText")}</p>
              <svg className="x" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M10 20 190 100M190 18 12 104" stroke="#d0343f" strokeWidth="7" strokeLinecap="round" /></svg></div>
            <div className="pn new"><span className="tag">{t("todayLabel")}</span><p>{t("todayText")}</p></div>
          </div>
          <div className="ptext">
            <span className="ab-eye">{t("modernLearning")}</span>
            <h2 className="ab-h2"><span>{t("langChangesTitle")}</span><span className="a">{t("langChangesTitleSpan")}</span></h2>
            <p>{t("langChangesP1")}</p>
            <p>{t("langChangesP2")}</p>
            <p>{t("langChangesP3")}</p>
            <p>{t("langChangesP4")}</p>
            <p className="hand">{t("langChangesP5")}</p>
            <div className="ab-cta"><p>{t("langChangesCTA")}</p><a className="btn btn-ink" href={WA}>{t("langChangesBtn")} <Arrow /></a></div>
          </div>
        </div>
      </section>

      <section className="gsec wall" id="voice">
        <div className="wrap voice">
          <div className="tx">
            <span className="ab-eye">{t("authenticLearning")}</span>
            <h2 className="h2">{t("voiceTitle")}</h2>
            <p>{t("voiceP1")}</p>
            <p>{t("voiceP2")}</p>
            <p><b>{t("voiceP3")}</b></p>
            <div className="ab-cta"><p>{t("voiceCTA")}</p><Link className="btn btn-amber" to="/contact">{t("voiceBtn")} <Arrow /></Link></div>
          </div>
          <blockquote className="quote taped">
            <p>“{t("voiceQuote")}”</p>
            <footer>{t("voiceAuthor")}</footer>
          </blockquote>
        </div>
      </section>

      <section className="gsec enamel" id="handmade">
        <div className="wrap rev">
          <div className="tx">
            <span className="ab-eye">{t("revBadge")}</span>
            <h2 className="h2">{t("revTitle")}</h2>
            <p>{t("revP")}</p>
            <p className="sub">{t("revSub")}</p>
            <ul className="ab-list">
              {[1, 2, 3, 4].map((n, i) => <li key={n} style={{ "--c": NOTE_COLORS[i] }}>{t(`revItem${n}`)}</li>)}
            </ul>
            <div className="ab-cta">
              <p>{t("revCTA")}</p>
              <div className="btns">
                <a className="btn btn-ink" href={PLATFORM}>{t("revBtn1")} <Arrow /></a>
                <a className="btn btn-line-ink" href={WA}>{t("revBtn2")}</a>
              </div>
            </div>
          </div>
          <div className="ab-figs">
            <p className="cap">{t("yearsOfHistory").replace(/✦/g, "").trim()}</p>
            <div className="figs">
              {FIGS.map(([b, k, c, m, r]) => (
                <Sticky key={k} c={c} m={m} r={r}><b>{b}</b><span>{t(k)}</span></Sticky>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gsec wall" id="team">
        <div className="wrap">
          <div className="ghead">
            <div>
              <span className="ab-eye">{t("ourTeamBadge")}</span>
              <h2>{t("expertiseTitle")}</h2>
            </div>
            <p>{t("expertiseSubtitle")}</p>
          </div>
          <ul className="ab-exp">
            {EXP_TILT.map((r, i) => (
              <li key={i}>
                <Sticky c={NOTE_COLORS[i % 5]} m={MAGNETS[(i + 2) % 5]} r={r}>
                  <h3>{t(`expertise${i + 1}Title`)}</h3>
                  <p>{t(`expertise${i + 1}P`)}</p>
                </Sticky>
              </li>
            ))}
          </ul>

          <div className="ab-world">
            <div>
              <h2 className="h2">{t("worldTitle")}</h2>
              <p>{t("worldSubtitle")}</p>
            </div>
            <ul className="ab-pins">
              {LOCS.map((k, i) => <li key={k} style={{ "--r": `${PIN_TILT[i]}deg`, "--m": MAGNETS[i % 5] }}>{t(k)}</li>)}
            </ul>
          </div>

          <blockquote className="quote taped ab-tq"><p>{t("teamQuote")}</p></blockquote>

          <div className="ab-tcta">
            <div>
              <h3>{t("teamCTATitle")}</h3>
              <p>{t("teamCTASub")}</p>
            </div>
            <a className="btn btn-amber" href={WA}>{noArrow(t("teamCTABtn"))} <Arrow /></a>
          </div>
        </div>
      </section>

      {/* Production closes the founder story with this invitation (genInfoPara5) */}
      <FinalNote title={t("readyForJourney")} text={t("genInfoPara5")} second={{ to: "/courses", label: t("knowMore") }} />
    </Layout>
  );
}
