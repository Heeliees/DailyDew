import { getDailyPuzzle as legacyPuzzle, villagers as originalVillagers, generalEntries as originalGeneral } from './catalog-legacy.ts';
import type { QuizEntry } from './catalog-legacy';
import { newVillagers, newGeneralEntries } from './catalog-expansion.ts';
import { alternateClues, replacementClues } from './clue-variety.ts';
export type { QuizEntry } from './catalog-legacy';
export const CATALOG_VERSION = '2026.2';
export const VARIETY_START = '2026-09-23';

function clean(entry: QuizEntry): QuizEntry {
  return { ...entry, clues: entry.clues.map((clue, index) => replacementClues[entry.answer]?.[index] ?? clue) };
}
export const villagers = [...originalVillagers.map(clean), ...newVillagers];
export const generalEntries = [...originalGeneral.map(clean), ...newGeneralEntries];
const newAnswers = new Set([...newVillagers, ...newGeneralEntries].map(entry => entry.answer));

function hash(value: string) {
  let h = 2166136261;
  for (const character of value) h = Math.imul(h ^ character.charCodeAt(0), 16777619);
  return h >>> 0;
}
function shuffled<T>(items: T[], seed: string): T[] {
  let state = hash(seed);
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const j = state % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function clueOptions(entry: QuizEntry): string[][] {
  const size = entry.category === 'Villager' ? 1 : 2;
  return [
    entry.clues.slice(0, size),
    newAnswers.has(entry.answer) ? entry.clues.slice(size, size * 2) : alternateClues[entry.answer]
  ];
}
function present(entry: QuizEntry, appearance: number, date: string): QuizEntry {
  const options = clueOptions(entry);
  // Existing subjects first return with the new clues, then alternate every appearance.
  const selected = options[(appearance + (newAnswers.has(entry.answer) ? 0 : 1)) % options.length];
  const pool = [...new Set([...entry.clues, ...options.flat()])].filter(clue => !selected.includes(clue));
  return { ...entry, clues: [...selected, ...shuffled(pool, entry.answer + '-clues-' + date).slice(0, 4 - selected.length)] };
}

const epoch = Date.parse(VARIETY_START + 'T00:00:00Z');
const dayMs = 86400000;
const cache = new Map<string, QuizEntry[]>();
const lastSeen = new Map<string, number>();
const appearances = new Map<string, number>();
let nextDay = 0;
// Preserve already-published answers AND clues, and carry their cooldown across the cutover.
for (let offset = -9; offset < 0; offset++) {
  const date = new Date(epoch + offset * dayMs).toISOString().slice(0, 10);
  for (const entry of legacyPuzzle(date)) lastSeen.set(entry.answer, offset);
}
export function getDailyPuzzle(date: string): QuizEntry[] {
  const timestamp = Date.parse(date + 'T00:00:00Z');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(timestamp)) throw new Error('Invalid puzzle date');
  if (date < VARIETY_START) return legacyPuzzle(date);
  const target = Math.floor((timestamp - epoch) / dayMs);
  for (; nextDay <= target; nextDay++) {
    const key = new Date(epoch + nextDay * dayMs).toISOString().slice(0, 10);
    const rank = (entries: QuizEntry[], kind: string) => shuffled(entries, kind + '-' + key)
      .filter(entry => nextDay - (lastSeen.get(entry.answer) ?? -100000) >= 7)
      .sort((a, b) => (lastSeen.get(a.answer) ?? -100000) - (lastSeen.get(b.answer) ?? -100000));
    const selectedVillagers = rank(villagers, 'villagers').slice(0, 3);
    const available = rank(generalEntries, 'general');
    const selected: QuizEntry[] = [];
    const categories = new Map<string, number>();
    // Prefer five distinct categories; never let one category take more than two slots.
    for (const limit of [1, 2]) {
      for (const entry of available) {
        if (selected.length === 5) break;
        if (selected.includes(entry) || (categories.get(entry.category) ?? 0) >= limit) continue;
        selected.push(entry);
        categories.set(entry.category, (categories.get(entry.category) ?? 0) + 1);
      }
    }
    if (selectedVillagers.length !== 3 || selected.length !== 5) throw new Error('Catalogue cannot satisfy rotation');
    const answers = [...selectedVillagers, ...shuffled(selected, 'order-' + key)];
    const puzzle = answers.map(entry => {
      const count = appearances.get(entry.answer) ?? 0;
      appearances.set(entry.answer, count + 1);
      lastSeen.set(entry.answer, nextDay);
      return present(entry, count, key);
    });
    cache.set(key, puzzle);
  }
  return cache.get(date)!;
}
