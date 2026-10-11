import { Link } from "react-router-dom";
import { Arrow, Html, SectionHead, WA, useNv } from "./ui.jsx";

const LEVEL_STYLE = [
  ["A1", "var(--amber)", -3], ["A2", "var(--teal)", 2], ["B1", "var(--pink)", -2],
  ["B2", "var(--lilac)", 3], ["C1", "var(--orange)", -2], ["C2", "var(--teal)", 2],
];

// Six CEFR levels as magnet tiles above the fridge ruler
export function Levels({ title, text, note, ctaTo, ctaLabel }) {
  const { t } = useNv();
  const levels = t("levels", { returnObjects: true });
  return (
    <section className="gsec wall" id="levels">
      <div className="wrap">
        <SectionHead title={title} text={text} />
        <ol className="lvls">
          {LEVEL_STYLE.map(([code, c, r], i) => (
            <li key={code} style={{ "--s": i, "--c": c, "--r": `${r}deg` }}>
              <span className="tile" aria-hidden="true">{code}</span>
              <div className="lcard"><h3><span className="sr">{code} · </span>{levels[i][0]}</h3><p>{levels[i][1]}</p></div>
            </li>
          ))}
        </ol>
        <div className="ruler" aria-hidden="true" />
        <div className="lv-cta">
          {ctaTo.startsWith("#")
            ? <a className="btn btn-amber" href={ctaTo}>{ctaLabel} <Arrow /></a>
            : <Link className="btn btn-amber" to={ctaTo}>{ctaLabel} <Arrow /></Link>}
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}

// Big amber note that closes every page: WhatsApp first, a second route after
export function FinalNote({ title, text, second, wall }) {
  const { t } = useNv();
  return (
    <section className={wall ? "gfinal wall" : "gfinal"}>
      <div className="wrap">
        <div className="bignote">
          <span className="pin" aria-hidden="true" />
          <h2>{title}</h2>
          <Html as="p" className="sub2" html={text} />
          <div className="ctas">
            <a className="btn btn-ink" href={WA}>{t("cta.talk")}</a>
            <Link className="btn btn-ink-line" to={second.to}>{second.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Small fridge with handwritten motto notes (About, Test)
export function ShortFridge({ label, notes, magnet }) {
  return (
    <div className="fridge short" role="group" aria-label={label}>
      <span className="handle" aria-hidden="true" />
      <div className="notes">
        {notes.map((n, i) => (
          <div key={i} className={`n mot ${n.k || ""}`.trim()} lang={n.lang}
            style={{ left: `${n.x}%`, top: `${n.y}%`, "--r": `${n.r}deg`, "--c": n.c, "--m": n.m }}>
            <Html className="w" html={n.text} />
          </div>
        ))}
      </div>
      {magnet && <span className="magnet" style={{ right: "9%", top: "62%" }} aria-hidden="true" />}
    </div>
  );
}
