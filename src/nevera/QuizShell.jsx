import Layout from "./Layout.jsx";
import "./quiz.css";

// Page frame shared by the English and Spanish level tests
export default function QuizShell({ hand, title, text, children }) {
  return (
    <Layout>
      <section className="qhead">
        <div className="qwrap">
          {hand && <p className="hand">{hand}</p>}
          <h1>{title}</h1>
          {text && <p>{text}</p>}
        </div>
      </section>
      <section className="qpage">
        <div className="qwrap">{children}</div>
      </section>
    </Layout>
  );
}

export function QuizProgress({ current, total, label }) {
  const pct = Math.min(100, Math.round(((current - 1) / total) * 100));
  return (
    <div className="qprogress">
      <span className="count">{label} {Math.min(current, total)}/{total}</span>
      <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={current - 1} aria-label={`${label} ${current}/${total}`}>
        <span style={{ transform: `scaleX(${pct / 100})` }} />
      </div>
    </div>
  );
}

// Answer strip: A/B/C chip + text. state: idle | selected | correct | wrong | dim
export function Option({ letter, children, state = "idle", ...rest }) {
  return (
    <button type="button" className="qopt" data-state={state} {...rest}>
      <span className="chip" aria-hidden="true">{state === "correct" ? "✓" : state === "wrong" ? "✗" : letter}</span>
      <span>{children}</span>
    </button>
  );
}
