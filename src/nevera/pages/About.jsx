import { Link } from "react-router-dom";
import Layout from "../Layout.jsx";
import { FinalNote, ShortFridge } from "../blocks.jsx";
import { Arrow, Html, SectionHead, Sticky, useNv } from "../ui.jsx";

// The founder's motto stays in English in every edition: it is how the school talks about itself
const MOTTO = [
  { text: "Speak first.<br>Name it later.", lang: "en", x: 9, y: 9, r: -5, c: "var(--amber)", m: "#d0343f" },
  { text: "Communication before perfection.", lang: "en", k: "wide", x: 50, y: 12, r: 4, c: "var(--teal)", m: "#2c6fd1" },
  { text: "Human-centered online.", lang: "en", k: "wide", x: 16, y: 54, r: 3, c: "var(--pink)", m: "#6b1fa6" },
];
const STORY_TILT = [-1.5, 1.5, 1, -1];
const FIGS = [["var(--amber)", "#d0343f", -2], ["var(--teal)", "#6b1fa6", 1.5], ["var(--pink)", "#2c6fd1", -1]];

export default function About() {
  const { t } = useNv();
  const h1 = t("about.h1", { returnObjects: true });
  const story = t("about.story", { returnObjects: true });
  const philo = t("about.philo", { returnObjects: true });
  const voice = t("about.voice", { returnObjects: true });
  const rev = t("about.rev", { returnObjects: true });

  return (
    <Layout>
      <section className="hero">
        <div>
          <h1 className="s"><span>{h1[0]}</span><span className="a">{h1[1]}</span></h1>
          <Html as="p" className="lede" html={t("about.lede")} />
          <Html as="p" className="proof" html={t("about.proof")} />
        </div>
        <ShortFridge label={t("about.fridgeLabel")} notes={MOTTO} magnet />
      </section>

      <section className="gsec enamel" id="story">
        <div className="wrap">
          <SectionHead title={story.title} text={story.text} />
          <ol className="story">
            {story.items.map(([h, paras], i) => (
              <li key={h} className="taped" style={{ "--r": `${STORY_TILT[i]}deg` }}>
                <span className="no" aria-hidden="true">{i + 1}</span><h3>{h}</h3>
                {paras.map((p, j) => <p key={j}>{p}</p>)}
              </li>
            ))}
          </ol>
          <div className="sign"><span className="hand">Agata</span><span>{story.sign}</span></div>
        </div>
      </section>

      <section className="gsec wall" id="philosophy">
        <div className="wrap philo">
          <div className="pair" aria-hidden="true">
            <div className="pn old"><span className="tag">{philo.old}</span><p>{philo.oldText}</p>
              <svg className="x" viewBox="0 0 200 120" preserveAspectRatio="none"><path d="M10 20 190 100M190 18 12 104" stroke="#d0343f" strokeWidth="7" strokeLinecap="round" /></svg></div>
            <div className="pn new"><span className="tag">{philo.now}</span><p>{philo.nowText}</p></div>
          </div>
          <div className="ptext">
            <h2>{philo.title}</h2>
            {philo.paras.map((p, i) => <p key={i}>{p}</p>)}
            <p className="hand">{philo.hand}</p>
          </div>
        </div>
      </section>

      <section className="gsec enamel" id="voice">
        <div className="wrap voice">
          <div className="tx">
            <h2 className="h2">{voice.title}</h2>
            {voice.paras.map((p, i) => <Html as="p" key={i} html={p} />)}
            <div className="cta-line"><p>{voice.ask}</p><Link className="btn btn-ink" to="/courses">{t("cta.findPlace")} <Arrow /></Link></div>
          </div>
          <blockquote className="quote taped">
            <p>“{voice.quote}”</p>
            <footer>{voice.quoteBy}</footer>
          </blockquote>
        </div>
      </section>

      <section className="gsec wall" id="handmade">
        <div className="wrap rev">
          <div className="tx">
            <h2 className="h2">{rev.title}</h2>
            <p className="sub">{rev.sub}</p>
            {rev.paras.map((p, i) => <Html as="p" key={i} html={p} />)}
            <p className="accent" lang="en">Human-centered online.</p>
          </div>
          <div className="figs">
            {rev.figs.map(([b, s], i) => (
              <Sticky key={s} c={FIGS[i][0]} m={FIGS[i][1]} r={FIGS[i][2]}><b>{b}</b><span>{s}</span></Sticky>
            ))}
          </div>
        </div>
      </section>

      <FinalNote title={t("about.final.title")} text={t("about.final.text")} second={{ to: "/test", label: t("cta.test") }} />
    </Layout>
  );
}
