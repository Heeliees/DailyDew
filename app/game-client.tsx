"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, BarChart3, Check, Copy, Flame, Heart, Sprout } from "lucide-react";
import { getDailyPuzzle } from "./data/catalog";

type GlobalStats = { distribution: number[]; players: number; average: number | null };
type Play = { date: string; score: number; pattern: boolean[] };
type History = { plays: Play[] };
const EMPTY_GLOBAL: GlobalStats = { distribution: Array(9).fill(0), players: 0, average: null };
const API_ROOT =
  typeof window !== "undefined" && window.location.hostname === "heeliees.github.io"
    ? "https://daily-dew.raheelio123.chatgpt.site"
    : "";

function nzDate() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Pacific/Auckland", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}
function normalise(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}
function editDistance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0]; row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const saved = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = saved;
    }
  }
  return row[b.length];
}
function isMatch(guess: string, answers: string[]) {
  const value = normalise(guess);
  if (!value) return false;
  return answers.some((answer) => {
    const target = normalise(answer);
    const allowance = target.length <= 5 ? 1 : target.length <= 11 ? 2 : 3;
    return value === target || editDistance(value, target) <= allowance;
  });
}
function dayGap(a: string, b: string) {
  return Math.round((Date.parse(`${a}T00:00:00Z`) - Date.parse(`${b}T00:00:00Z`)) / 86400000);
}
function historyStats(history: History) {
  const plays = [...history.plays].sort((a, b) => a.date.localeCompare(b.date));
  if (!plays.length) return { streak: 0, best: 0, worst: 0, average: 0 };
  let streak = 1;
  for (let i = plays.length - 1; i > 0 && dayGap(plays[i].date, plays[i - 1].date) === 1; i -= 1) streak += 1;
  const scores = plays.map((play) => play.score);
  return { streak, best: Math.max(...scores), worst: Math.min(...scores), average: scores.reduce((a, b) => a + b, 0) / scores.length };
}
function harvestMessage(score: number) {
  if (score === 8) return ["Perfection!", "Grandpa's shrine is glowing. That was an iridium-quality harvest."];
  if (score === 7) return ["Nearly a Stardrop!", "One tiny weed stood between you and perfection."];
  if (score >= 5) return ["Gold-quality harvest!", "The valley would be proud of this crop."];
  if (score >= 3) return ["A solid first season", "A few crops wilted, but the farm is definitely growing."];
  if (score >= 1) return ["A humble parsnip", "Not every harvest is golden. Tomorrow brings fresh soil."];
  return ["The crows got the field", "Sleep it off—there'll be eight fresh clues tomorrow."];
}

export default function DailyGame() {
  const date = useMemo(nzDate, []);
  const puzzle = useMemo(() => getDailyPuzzle(date), [date]);
  const [question, setQuestion] = useState(0);
  const [guess, setGuess] = useState("");
  const [pattern, setPattern] = useState<boolean[]>([]);
  const [feedback, setFeedback] = useState<null | { correct: boolean; answer: string }>(null);
  const [finished, setFinished] = useState(false);
  const [history, setHistory] = useState<History>({ plays: [] });
  const [global, setGlobal] = useState<GlobalStats>(EMPTY_GLOBAL);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const score = pattern.filter(Boolean).length;
  const local = historyStats(history);
  const current = puzzle[question];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("daily-dew-history") ?? '{"plays":[]}') as History;
      setHistory(saved);
      const today = saved.plays.find((play) => play.date === date);
      if (today) { setPattern(today.pattern ?? Array.from({ length: 8 }, (_, i) => i < today.score)); setFinished(true); }
    } catch { setHistory({ plays: [] }); }
    fetch(`${API_ROOT}/api/stats?date=${date}`)
      .then(async (response) => setGlobal((await response.json()) as GlobalStats))
      .catch(() => undefined);
  }, [date]);

  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat("en-NZ", { timeZone: "Pacific/Auckland", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).formatToParts(new Date());
      const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
      const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
      const s = Number(parts.find((p) => p.type === "second")?.value ?? 0);
      const remaining = 86400 - (h * 3600 + m * 60 + s);
      setCountdown(`${String(Math.floor(remaining / 3600)).padStart(2, "0")}:${String(Math.floor((remaining % 3600) / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`);
    };
    tick(); const timer = window.setInterval(tick, 1000); return () => window.clearInterval(timer);
  }, []);

  async function finish(nextPattern: boolean[]) {
    const nextScore = nextPattern.filter(Boolean).length;
    setFinished(true);
    if (!history.plays.some((play) => play.date === date)) {
      const nextHistory = { plays: [...history.plays, { date, score: nextScore, pattern: nextPattern }] };
      setHistory(nextHistory); localStorage.setItem("daily-dew-history", JSON.stringify(nextHistory));
    }
    let deviceId = localStorage.getItem("daily-dew-device");
    if (!deviceId) { deviceId = crypto.randomUUID(); localStorage.setItem("daily-dew-device", deviceId); }
    try {
      const response = await fetch(`${API_ROOT}/api/stats`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ date, score: nextScore, deviceId }) });
      if (response.ok) setGlobal(await response.json());
    } catch { /* Local results remain available. */ }
  }
  function submitAnswer(value = guess) {
    if (!value.trim() || feedback || finished) return;
    const correct = isMatch(value, [current.answer, ...(current.aliases ?? [])]);
    const nextPattern = [...pattern, correct];
    setPattern(nextPattern); setFeedback({ correct, answer: current.answer });
    window.setTimeout(() => {
      setFeedback(null); setGuess("");
      if (question === 7) finish(nextPattern);
      else { setQuestion((q) => q + 1); window.setTimeout(() => inputRef.current?.focus(), 20); }
    }, 1150);
  }

  useEffect(() => {
    const context = (document as Document & { modelContext?: { registerTool?: (tool: unknown, options?: unknown) => void } }).modelContext;
    if (!context?.registerTool || finished) return;
    const controller = new AbortController();
    try {
      context.registerTool({
        name: "submit_daily_dew_guess", title: "Submit Daily Dew guess",
        description: "Submit one answer for the currently visible Daily Dew clue.",
        inputSchema: { type: "object", properties: { answer: { type: "string" } }, required: ["answer"], additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute: (input: unknown) => {
          const answer = (input as { answer?: unknown })?.answer;
          if (typeof answer !== "string" || !answer.trim()) throw new Error("Answer is required");
          submitAnswer(answer); return { submitted: true, question: question + 1 };
        }
      }, { signal: controller.signal });
    } catch { /* Experimental API unavailable. */ }
    return () => controller.abort();
  }, [question, finished, current]);

  async function copyResults() {
    const grid = pattern.map((correct, i) => `${correct ? "🟩" : "🟫"}${i === 2 ? "\n" : ""}`).join("");
    await navigator.clipboard.writeText(`Daily Dew — ${date}\n${score}/8\n${grid}\nA fresh harvest every day 🌱`);
    setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  }

  if (finished) {
    const [title, message] = harvestMessage(score);
    const max = Math.max(1, ...global.distribution);
    return <section className="game-card results-card" aria-label="Daily Dew results">
      <div className="result-sunburst" aria-hidden="true">✦</div>
      <p className="eyebrow">Today&apos;s harvest</p><h1>{title}</h1>
      <div className="big-score"><strong>{score}</strong><span>/ 8</span></div>
      <p className="result-message">{message}</p>
      <div className="answer-seeds" aria-label={`${score} correct out of 8`}>{pattern.map((correct, index) => <span key={index} className={correct ? "seed correct" : "seed missed"}>{correct ? "🌱" : "🪨"}</span>)}</div>
      <div className="global-panel">
        <div className="panel-heading"><div><p className="eyebrow">The valley today</p><h2>Score distribution</h2></div><div className="average-badge"><strong>{global.average == null ? "—" : global.average.toFixed(1)}</strong><span>global avg</span></div></div>
        <div className="bar-chart" aria-label="Number of players at each score">{global.distribution.map((count, value) => <div className="bar-column" key={value}><span className="bar-count">{count || ""}</span><span className={value === score ? "bar yours" : "bar"} style={{ height: `${Math.max(5, (count / max) * 100)}%` }} /><span className="bar-label">{value}</span></div>)}</div>
        <p className="players-note">{global.players ? `Based on ${global.players.toLocaleString()} farmer${global.players === 1 ? "" : "s"} today` : "Be the first farmer on the board today"}</p>
      </div>
      <div className="local-grid">
        <div><Flame/><strong>{local.streak}</strong><span>day streak</span></div><div><Sprout/><strong>{local.best}/8</strong><span>best score</span></div>
        <div><Heart/><strong>{local.worst}/8</strong><span>worst score</span></div><div><BarChart3/><strong>{local.average.toFixed(1)}</strong><span>your average</span></div>
      </div>
      <div className="result-actions"><button className="primary-button" onClick={copyResults}>{copied ? <Check/> : <Copy/>}{copied ? "Copied!" : "Copy results"}</button><span>Next harvest in <strong>{countdown}</strong></span></div>
    </section>;
  }

  return <section className="game-card" aria-live="polite">
    <div className="game-topline"><div><span className="question-label">Question {question + 1} of 8</span><span className="category-pill">{current.icon} {current.category}</span></div><strong>{score} pts</strong></div>
    <div className="progress-track" aria-label={`${question} of 8 questions complete`}><span style={{ width: `${(question / 8) * 100}%` }} /></div>
    <div className="prompt-area"><p className="eyebrow">{question < 3 ? "Guess the villager" : `Name this ${current.category.toLowerCase()}`}</p><h1>Who or what am I?</h1>
      <div className="clue-board">{current.clues.map((clue, index) => <div className="clue-row" key={clue}><span>{index + 1}</span><p>{clue}</p></div>)}</div>
    </div>
    <form className="answer-form" onSubmit={(event) => { event.preventDefault(); submitAnswer(); }}>
      <label htmlFor="daily-answer">Your answer</label><div className={feedback ? `answer-box ${feedback.correct ? "is-correct" : "is-wrong"}` : "answer-box"}>
        <input ref={inputRef} id="daily-answer" value={guess} onChange={(event) => setGuess(event.target.value)} placeholder={question < 3 ? "Type the villager's name…" : `Type the ${current.category.toLowerCase()}…`} autoComplete="off" spellCheck="false" disabled={!!feedback} autoFocus />
        <button type="submit" aria-label="Submit answer" disabled={!guess.trim() || !!feedback}><ArrowRight/></button>
      </div>
      {feedback ? <p className={feedback.correct ? "feedback correct-text" : "feedback wrong-text"}>{feedback.correct ? "Perfect! That's right." : `Not quite — it was ${feedback.answer}.`}</p> : <p className="forgiving-note">Close spellings count. You get one guess per clue.</p>}
    </form>
    <a className="source-link" href={current.source} target="_blank" rel="noreferrer">Check this clue on the Stardew Valley Wiki ↗</a>
  </section>;
}
