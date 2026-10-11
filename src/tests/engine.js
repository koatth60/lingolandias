// Adaptive placement-test engine (two stages, like computer-adaptive placement tests):
//   1. routing  – 12 items from A1 to C2 give a first estimate
//   2. core     – 12 grammar/vocabulary items around that estimate
//      reading  – one passage at the estimated level
//      listening– 4 short recordings around the estimate (only if the browser can speak the language)
// The final CEFR level is the highest level the learner answers reliably (>= 60 %),
// never above a lower level they clearly failed.
import { LEVELS } from "./banks/schema.js";

export const PASS = 0.6;
const FAIL = 0.4;

// Deterministic shuffle so a refresh (state restored from sessionStorage) shows the same test
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
}
function pick(list, n, rand) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, n);
}
const lvl = (l) => LEVELS.indexOf(l);
const clamp = (i) => Math.max(0, Math.min(LEVELS.length - 1, i));

export const normalise = (s) => String(s ?? "")
  .toLowerCase()
  .replace(/[’‘`´]/g, "'")
  .replace(/\s+/g, " ")
  .replace(/^[\s"'.,;:!?¡¿]+|[\s"'.,;:!?¡¿]+$/g, "")
  .trim();

export function isCorrect(item, response) {
  if (response == null || response === "") return false;
  if (item.type === "mcq") return response === item.answer;
  return item.answers.some((a) => normalise(a) === normalise(response));
}

// First estimate from the routing stage: highest level with both of its items right, as long as
// overall routing accuracy up to that level stays at 60 % or more. One lucky guess is not enough;
// stage 2 still looks one level above the estimate, so a strong learner is not held back.
export function routingEstimate(items, responses) {
  let est = 0, right = 0, seen = 0;
  LEVELS.forEach((L, i) => {
    const at = items.filter((it) => it.level === L);
    const ok = at.filter((it) => isCorrect(it, responses[it.id])).length;
    right += ok; seen += at.length;
    if (ok === at.length && right / seen >= 0.6) est = i;
  });
  return est;
}

// Stage 2 form, built once the routing stage is done
export function buildStage2(bank, est, seed, canListen) {
  const rand = rng(seed + 7);
  const lo = clamp(est - 1), hi = clamp(est + 1);
  // keep the window three levels wide at the edges (A1 -> A1..B1, C2 -> B2..C2)
  const window = [...new Set([lo, est, hi])];
  while (window.length < 3) window.push(window[0] === 0 ? window.length : window[0] - 1);
  window.sort((a, b) => a - b);

  const core = window.flatMap((i) => pick(bank.core.filter((it) => it.level === LEVELS[i]), 4, rand));

  const passages = bank.reading.filter((p) => p.level === LEVELS[est]);
  const passage = (passages.length ? pick(passages, 1, rand) : pick(bank.reading.filter((p) => Math.abs(lvl(p.level) - est) <= 1), 1, rand))[0];

  // two recordings at the estimate, one either side (counts merge at the edges)
  const want = {};
  [lo, est, est, hi].forEach((i) => { want[i] = (want[i] || 0) + 1; });
  const listening = canListen
    ? Object.keys(want).map(Number).sort((a, b) => a - b)
        .flatMap((i) => pick(bank.listening.filter((it) => it.level === LEVELS[i]), want[i], rand))
    : [];

  return {
    core: core.map((it) => it.id),
    passage: passage?.id ?? null,
    listening: listening.map((it) => it.id),
  };
}

// Final result: level, "+" when the next level is half-mastered, per-skill breakdown
export function score(bank, plan, responses) {
  const byId = new Map();
  bank.routing.forEach((it) => byId.set(it.id, it));
  bank.core.forEach((it) => byId.set(it.id, it));
  bank.listening.forEach((it) => byId.set(it.id, it));
  bank.reading.forEach((p) => p.items.forEach((it) => byId.set(it.id, { ...it, level: it.level || p.level })));

  const passage = bank.reading.find((p) => p.id === plan.passage);
  const ids = [
    ...bank.routing.map((it) => it.id),
    ...(plan.core || []),
    ...(passage ? passage.items.map((it) => it.id) : []),
    ...(plan.listening || []),
  ];
  const answered = ids.map((id) => byId.get(id)).filter(Boolean).map((it) => ({ ...it, ok: isCorrect(it, responses[it.id]) }));

  const perLevel = LEVELS.map((L) => {
    const at = answered.filter((it) => it.level === L);
    return { level: L, total: at.length, correct: at.filter((it) => it.ok).length };
  });

  // Only levels with 3+ answered items count as evidence (routing alone gives 2 per level,
  // and one unlucky slip on an easy item must not sink a strong learner).
  const acc = (i) => perLevel[i].correct / perLevel[i].total;
  const dense = (i) => perLevel[i].total >= 3;
  let reached = -1;
  for (let i = LEVELS.length - 1; i >= 0 && reached < 0; i--) {
    if (!dense(i) || acc(i) < PASS) continue;
    // a clearly failed lower level (with real evidence) contradicts this level
    const contradicted = perLevel.slice(0, i).some((_, j) => dense(j) && acc(j) < FAIL);
    if (!contradicted) reached = i;
  }
  if (reached < 0) {
    // little evidence: climb while at least half of each level is right
    for (let i = 0; i < LEVELS.length; i++) {
      if (!perLevel[i].total) continue;
      if (acc(i) >= 0.5) reached = i; else break;
    }
  }
  const base = Math.max(0, reached);
  const next = perLevel[base + 1];
  const plus = base < LEVELS.length - 1 && next && next.total >= 2 && next.correct / next.total >= 0.5;

  const skills = ["grammar", "vocabulary", "reading", "listening"].map((skill) => {
    const s = answered.filter((it) => it.skill === skill);
    return { skill, total: s.length, correct: s.filter((it) => it.ok).length };
  }).filter((s) => s.total > 0);

  const correct = answered.filter((it) => it.ok).length;
  return {
    level: LEVELS[base],
    plus,
    correct,
    total: answered.length,
    percentage: answered.length ? Math.round((correct / answered.length) * 100) : 0,
    perLevel,
    skills,
  };
}
