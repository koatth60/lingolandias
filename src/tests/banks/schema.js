// Shape of a level-test question bank, plus a validator used in development.
//
// A bank has four pools. Every item carries a CEFR level (A1..C2) and a skill.
//   routing:   12 items, exactly 2 per level, mixed grammar/vocabulary. Everyone answers all of them.
//   core:      at least 8 items per level (grammar, vocabulary and gap-fill). The engine serves
//              items around the level the routing stage suggests.
//   reading:   at least 1 passage per level, each with 3-4 questions about it.
//   listening: at least 3 items per level; `audio` is read aloud with the browser's speech engine.
//
// Item types
//   { type: "mcq", prompt?, stem, options: [4 strings], answer: index }   one correct option
//   { type: "gap", prompt?, stem: "text with ___ once", answers: [accepted strings] }
//        typed answer; compared case-insensitively, trimmed, apostrophes normalised
// Shared item fields: id (unique in the bank), level, skill ("grammar"|"vocabulary"|"reading"|"listening")
// Reading passage: { id, level, title, text, items: [mcq items with skill "reading"] }
// Listening item: mcq item with skill "listening" and `audio` (the sentence/dialogue spoken aloud,
//   never shown on screen); `stem` is the question the learner reads.

export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const SKILLS = ["grammar", "vocabulary", "reading", "listening"];

export function validateBank(bank) {
  const errors = [];
  const ids = new Set();
  const err = (where, msg) => errors.push(`${where}: ${msg}`);

  const checkItem = (it, where, skill) => {
    if (!it.id) err(where, "missing id");
    else if (ids.has(it.id)) err(where, `duplicate id ${it.id}`);
    ids.add(it.id);
    if (!LEVELS.includes(it.level)) err(where, `bad level ${it.level}`);
    if (!SKILLS.includes(it.skill)) err(where, `bad skill ${it.skill}`);
    if (skill && it.skill !== skill) err(where, `skill should be ${skill}`);
    if (typeof it.stem !== "string" || !it.stem.trim()) err(where, "missing stem");
    if (it.type === "mcq") {
      if (!Array.isArray(it.options) || it.options.length !== 4) err(where, "mcq needs 4 options");
      else if (new Set(it.options.map((o) => o.trim().toLowerCase())).size !== 4) err(where, "duplicate options");
      if (!Number.isInteger(it.answer) || it.answer < 0 || it.answer > 3) err(where, "bad answer index");
    } else if (it.type === "gap") {
      if ((it.stem.match(/___/g) || []).length !== 1) err(where, "gap stem needs exactly one ___");
      if (!Array.isArray(it.answers) || !it.answers.length) err(where, "gap needs answers");
    } else err(where, `bad type ${it.type}`);
    if (it.skill === "listening" && !it.audio) err(where, "listening item needs audio");
  };

  const perLevel = (list) => Object.fromEntries(LEVELS.map((l) => [l, list.filter((x) => x.level === l).length]));

  (bank.routing || []).forEach((it, i) => checkItem(it, `routing[${i}]`));
  const r = perLevel(bank.routing || []);
  LEVELS.forEach((l) => r[l] !== 2 && err("routing", `${l} has ${r[l]} items, needs 2`));

  (bank.core || []).forEach((it, i) => checkItem(it, `core[${i}]`));
  const c = perLevel(bank.core || []);
  LEVELS.forEach((l) => c[l] < 8 && err("core", `${l} has ${c[l]} items, needs 8+`));

  (bank.reading || []).forEach((p, i) => {
    const where = `reading[${i}]`;
    if (!LEVELS.includes(p.level)) err(where, "bad level");
    if (!p.text || p.text.length < 200) err(where, "passage too short");
    if (!Array.isArray(p.items) || p.items.length < 3) err(where, "needs 3+ questions");
    (p.items || []).forEach((it, j) => checkItem({ ...it, level: it.level || p.level }, `${where}.items[${j}]`, "reading"));
  });
  const rp = perLevel(bank.reading || []);
  LEVELS.forEach((l) => rp[l] < 1 && err("reading", `${l} has no passage`));

  (bank.listening || []).forEach((it, i) => checkItem(it, `listening[${i}]`, "listening"));
  const ls = perLevel(bank.listening || []);
  LEVELS.forEach((l) => ls[l] < 3 && err("listening", `${l} has ${ls[l]} items, needs 3+`));

  return errors;
}
