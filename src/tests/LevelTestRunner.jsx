import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import QuizShell, { Option, QuizProgress } from "../nevera/QuizShell.jsx";
import { Arrow, WA, useNv } from "../nevera/ui.jsx";
import { LEVELS } from "./banks/schema.js";
import { buildStage2, routingEstimate, score } from "./engine.js";
import "./test.css";

const SKIP = "__skip";
const LETTERS = ["A", "B", "C", "D"];
const MAX_PLAYS = 2;

// --- speech -----------------------------------------------------------------
function useVoice(tag) {
  const [voice, setVoice] = useState(undefined); // undefined = still looking, null = none
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) { setVoice(null); return; }
    const base = tag.slice(0, 2);
    const find = () => {
      const all = window.speechSynthesis.getVoices();
      const v = all.find((x) => x.lang === tag) || all.find((x) => x.lang?.replace("_", "-").startsWith(base));
      if (v) setVoice(v);
      return !!v;
    };
    if (find()) return;
    const onChange = () => find();
    window.speechSynthesis.addEventListener?.("voiceschanged", onChange);
    const t = setTimeout(() => { if (!find()) setVoice(null); }, 2000);
    return () => { clearTimeout(t); window.speechSynthesis.removeEventListener?.("voiceschanged", onChange); };
  }, [tag]);
  return voice;
}
function speak(text, voice, onEnd) {
  const s = window.speechSynthesis;
  s.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice; u.lang = voice.lang; u.rate = 0.92;
  u.onend = onEnd; u.onerror = onEnd;
  s.speak(u);
}

// --- saved progress -----------------------------------------------------------
const load = (key) => { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; } };
const save = (key, v) => { try { v ? sessionStorage.setItem(key, JSON.stringify(v)) : sessionStorage.removeItem(key); } catch { /* private mode */ } };

// --- one question --------------------------------------------------------------
function Item({ item, value, onChange, t, locked }) {
  if (item.type === "gap") {
    const [before, after] = item.stem.split("___");
    return (
      <>
        {item.prompt && <p className="qprompt">{item.prompt}</p>}
        <p className="tstem">
          {before}
          <input className="qinput tgap" aria-label={t("lt.typeHere")} placeholder={t("lt.typeHere")} autoComplete="off" autoCapitalize="off" spellCheck={false}
            value={value === SKIP || value == null ? "" : value} onChange={(e) => onChange(e.target.value)} />
          {after}
        </p>
      </>
    );
  }
  return (
    <>
      {item.prompt && <p className="qprompt">{item.prompt}</p>}
      <p className="tstem">{item.stem}</p>
      <ul className="qopts" role="list">
        {item.options.map((o, i) => (
          <li key={i}>
            <Option letter={LETTERS[i]} state={value === i ? "selected" : "idle"} aria-pressed={value === i} disabled={locked}
              onClick={() => onChange(i)}>{o}</Option>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function LevelTestRunner({ bank, endpoint, testKey }) {
  const { t, i18n } = useNv();
  const key = `lingolandias-test-${bank.lang}`;
  const voice = useVoice(bank.voice);
  const canListen = !!voice;

  const saved = useMemo(() => load(key), [key]);
  const [s, setS] = useState(() => ({ stage: "intro", idx: 0, responses: {}, plan: null, seed: Math.floor(Math.random() * 1e9) }));
  const [hint, setHint] = useState(false);
  const [plays, setPlays] = useState({});
  const [speaking, setSpeaking] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", consent: false });
  const [send, setSend] = useState(null); // null | sending | ok | ko
  const card = useRef(null);

  useEffect(() => { if (s.stage !== "intro") save(key, s); }, [s, key]);
  useEffect(() => { card.current?.focus(); setHint(false); }, [s.stage, s.idx]);
  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const passage = s.plan?.passage ? bank.reading.find((p) => p.id === s.plan.passage) : null;
  const byId = useMemo(() => {
    const m = new Map();
    bank.core.forEach((it) => m.set(it.id, it));
    bank.listening.forEach((it) => m.set(it.id, it));
    return m;
  }, [bank]);

  const parts = [
    { stage: "routing", items: bank.routing },
    { stage: "core", items: (s.plan?.core || []).map((id) => byId.get(id)) },
    { stage: "reading", items: passage?.items || [] },
    { stage: "listening", items: (s.plan?.listening || []).map((id) => byId.get(id)) },
  ].filter((p) => p.stage === "routing" || p.items.length);
  // routing + core are both "grammar and vocabulary" for the learner
  const partNo = { routing: 1, core: 1, reading: 2, listening: 3 }[s.stage];
  const partTotal = 2 + (s.plan ? (s.plan.listening?.length ? 1 : 0) : canListen ? 1 : 0);
  const part = parts.find((p) => p.stage === s.stage);
  const item = part?.items[s.idx];
  const gvCount = bank.routing.length + (s.plan?.core?.length ?? 12);
  const progress = s.stage === "routing" ? [s.idx + 1, gvCount] : s.stage === "core" ? [bank.routing.length + s.idx + 1, gvCount] : part ? [s.idx + 1, part.items.length] : [1, 1];

  const result = useMemo(() => (s.stage === "details" || s.stage === "result") && s.plan ? score(bank, s.plan, s.responses) : null, [s, bank]);

  const value = item ? s.responses[item.id] : undefined;
  const answered = value !== undefined && value !== "" ;

  const setValue = (v) => { setHint(false); setS((p) => ({ ...p, responses: { ...p.responses, [item.id]: v } })); };

  const advance = (responses) => {
    setS((p) => {
      const r = responses || p.responses;
      const cur = parts.find((x) => x.stage === p.stage);
      if (p.idx + 1 < cur.items.length) return { ...p, responses: r, idx: p.idx + 1 };
      if (p.stage === "routing") {
        const est = routingEstimate(bank.routing, r);
        const plan = buildStage2(bank, est, p.seed, canListen);
        return { ...p, responses: r, stage: "core", idx: 0, plan, est };
      }
      const order = ["core", "reading", "listening"];
      const nextStage = order.slice(order.indexOf(p.stage) + 1).find((st) => (st === "reading" ? p.plan.passage : p.plan[st]?.length));
      return { ...p, responses: r, stage: nextStage || "details", idx: 0 };
    });
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  const next = () => {
    if (!answered) { setHint(true); return; }
    advance();
  };
  const skip = () => advance({ ...s.responses, [item.id]: SKIP });

  const play = () => {
    const used = plays[item.id] || 0;
    if (!voice || used >= MAX_PLAYS || speaking) return;
    setPlays((p) => ({ ...p, [item.id]: used + 1 }));
    setSpeaking(true);
    speak(item.audio, voice, () => setSpeaking(false));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSend("sending");
    const r = result;
    const extra = {
      name: form.name.trim(), level: r.level, plus: r.plus, correct: r.correct, total: r.total,
      skills: r.skills, perLevel: r.perLevel, siteLanguage: i18n.resolvedLanguage,
    };
    const payload = testKey === "en"
      ? { email: form.email.trim(), percentage: String(r.percentage), ...extra }
      : { email: form.email.trim(), score: r.correct, totalQuestions: r.total, ...extra };
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      setSend(res.ok ? "ok" : "ko");
    } catch {
      setSend("ko");
    }
    setS((p) => ({ ...p, stage: "result" }));
  };

  const restart = () => {
    save(key, null);
    setPlays({}); setSend(null);
    setS({ stage: "intro", idx: 0, responses: {}, plan: null, seed: Math.floor(Math.random() * 1e9) });
  };

  const head = { hand: t(`lt.${testKey}.hand`), title: t(`lt.${testKey}.title`) };

  // ---- intro ----
  if (s.stage === "intro") {
    const intro = t("lt.intro", { returnObjects: true });
    const resumable = saved && saved.stage && saved.stage !== "intro" && saved.stage !== "result";
    return (
      <QuizShell {...head} text={intro.lede}>
        <div className="qcard tintro" style={{ "--qm": "#d0343f" }} ref={card} tabIndex={-1}>
          <p className="ttime">{intro.time}</p>
          <ol className="tparts">
            {intro.parts.map(([h, p], i) => (
              <li key={h} className={i === 2 && voice === null ? "off" : undefined}><b>{h}</b><span>{p}</span></li>
            ))}
          </ol>
          {voice === null && <p className="tnote">{intro.noAudio}</p>}
          <ul className="trules">{intro.rules.map((r) => <li key={r}>{r}</li>)}</ul>
          <div className="qactions">
            {voice && <button type="button" className="btn btn-ink-line" onClick={() => speak(intro.soundSample[testKey], voice, () => {})}>{intro.soundCheck}</button>}
            {resumable && <button type="button" className="btn btn-ink-line" onClick={() => { setS(saved); }}>{intro.resume}</button>}
            <button type="button" className="btn btn-ink" onClick={() => { if (resumable) save(key, null); setS((p) => ({ ...p, stage: "routing", idx: 0 })); }}>
              {intro.start} <Arrow />
            </button>
          </div>
        </div>
      </QuizShell>
    );
  }

  // ---- email step ----
  if (s.stage === "details") {
    return (
      <QuizShell {...head}>
        <form className="qcard" style={{ "--qm": "#127a6e" }} ref={card} tabIndex={-1} onSubmit={submit}>
          <h2 className="ttitle">{t("lt.details.title")}</h2>
          <p className="qtext">{t("lt.details.text")}</p>
          <div className="qform">
            <label>{t("lt.details.name")}<input className="qinput" autoComplete="given-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>{t("lt.details.email")}<input className="qinput" type="email" required autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
            <label className="tconsent"><input type="checkbox" required checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} /><span>{t("lt.details.consent")}</span></label>
          </div>
          <div className="qactions">
            <button type="button" className="tlink" onClick={() => setS((p) => ({ ...p, stage: "result" }))}>{t("lt.details.skip")}</button>
            <button type="submit" className="btn btn-ink" disabled={send === "sending"} aria-busy={send === "sending"}>{t("lt.details.send")} <Arrow /></button>
          </div>
        </form>
      </QuizShell>
    );
  }

  // ---- result ----
  if (s.stage === "result" && result) {
    const levels = t("levels", { returnObjects: true });
    const li = LEVELS.indexOf(result.level);
    return (
      <QuizShell {...head}>
        <div className="qcard tresult" style={{ "--qm": "#6b1fa6" }} ref={card} tabIndex={-1}>
          <p className="hand">{t("lt.result.hand")}</p>
          <p className="tlevel">{result.level}{result.plus && <span aria-label="+">+</span>}</p>
          <h2 className="ttitle">{levels[li][0]}</h2>
          <p className="qtext">{levels[li][1]}{result.plus ? ` ${t("lt.result.plus")}` : ""}</p>
          <p className="tsummary">{t("lt.result.summary", { correct: result.correct, total: result.total })}</p>
          <ul className="tskills">
            {result.skills.map((k) => {
              const pct = Math.round((k.correct / k.total) * 100);
              return (
                <li key={k.skill}>
                  <span>{t(`lt.result.skills.${k.skill}`)}</span>
                  <span className="bar" aria-hidden="true"><span style={{ transform: `scaleX(${pct / 100})` }} /></span>
                  <b>{k.correct}/{k.total}</b>
                </li>
              );
            })}
          </ul>
          <ol className="tscale" aria-hidden="true">
            {LEVELS.map((L, i) => <li key={L} data-on={i <= li ? "true" : undefined}>{L}</li>)}
          </ol>
          {send === "ok" && <p className="qstatus ok" role="status">{t("lt.result.sent", { email: form.email })}</p>}
          {send === "ko" && <p className="qstatus ko" role="alert">{t("lt.result.sendError")}</p>}
          <p className="tnote">{t("lt.result.note")}</p>
          <div className="qactions">
            <button type="button" className="tlink" onClick={restart}>{t("lt.result.retake")}</button>
            <Link className="btn btn-ink-line" to="/courses">{t("lt.result.classes")}</Link>
            <a className="btn btn-ink" href={WA}>{t("lt.result.talk")} <Arrow /></a>
          </div>
        </div>
      </QuizShell>
    );
  }

  if (!item) return null;

  // ---- questions ----
  const isListening = s.stage === "listening";
  const used = plays[item.id] || 0;
  const mustListen = isListening && used === 0;
  const last = s.idx + 1 === part.items.length && (s.stage === "listening" || (s.stage === "reading" && !s.plan.listening?.length));

  const question = (
    <div className="qcard" style={{ "--qm": ["#d0343f", "#2c6fd1", "#e8792a", "#127a6e"][(partNo - 1) % 4] }} ref={card} tabIndex={-1} lang={bank.lang}>
      {isListening && (
        <div className="tlisten" lang={i18n.resolvedLanguage}>
          <button type="button" className="btn btn-amber" onClick={play} disabled={used >= MAX_PLAYS || speaking} aria-busy={speaking}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            {t("lt.play")}
          </button>
          <span>{used < MAX_PLAYS ? t("lt.playsLeft", { count: MAX_PLAYS - used }) : t("lt.noPlaysLeft")}</span>
        </div>
      )}
      <Item item={item} value={value} onChange={setValue} t={t} locked={mustListen} />
      <div className="qactions" lang={i18n.resolvedLanguage}>
        {hint && <p className="qhint" role="alert">{mustListen ? t("lt.listenFirst") : t("lt.chooseOrSkip")}</p>}
        <button type="button" className="tlink" onClick={skip}>{t("lt.dontKnow")}</button>
        <button type="button" className="btn btn-ink" onClick={next}>{last ? t("lt.finish") : t("lt.next")} <Arrow /></button>
      </div>
    </div>
  );

  return (
    <QuizShell {...head}>
      <p className="tpart">{t("lt.partOf", { n: partNo, total: partTotal })} · {t("lt.parts", { returnObjects: true })[partNo - 1]}</p>
      <QuizProgress current={progress[0]} total={progress[1]} label={t("lt.question")} />
      {s.stage === "reading" && passage ? (
        <div className="treading">
          <article className="tpassage" lang={bank.lang}>
            <p className="tnote" lang={i18n.resolvedLanguage}>{t("lt.readingHint")}</p>
            <h2>{passage.title}</h2>
            {passage.text.split(/\n+/).map((para, i) => <p key={i}>{para}</p>)}
          </article>
          {question}
        </div>
      ) : question}
    </QuizShell>
  );
}
