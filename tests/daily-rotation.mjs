import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { getDailyPuzzle, villagers, generalEntries, clueOptions, VARIETY_START } from '../app/data/catalog.ts';
import { getDailyPuzzle as legacyPuzzle } from '../app/data/catalog-legacy.ts';
import { answerImages } from '../app/data/answer-images.ts';

const recent = [];
const lastClues = new Map();
const used = new Set();
for (let offset = 0; offset < 370; offset++) {
  const date = new Date(Date.UTC(2026, 8, 16 + offset)).toISOString().slice(0, 10);
  const puzzle = getDailyPuzzle(date);
  assert.equal(puzzle.length, 8);
  assert(puzzle.slice(0, 3).every(entry => entry.category === 'Villager'));
  const answers = puzzle.map(entry => entry.answer);
  assert.equal(new Set([...recent.flat(), ...answers]).size, recent.flat().length + 8, date);
  assert.deepEqual(getDailyPuzzle(date), puzzle);
  if (date < VARIETY_START) assert.deepEqual(puzzle, legacyPuzzle(date), 'Published puzzle must not change');
  else {
    const categories = puzzle.slice(3).map(entry => entry.category);
    assert(new Set(categories).size >= 3, date);
    for (const category of categories) assert(categories.filter(c => c === category).length <= 2, date);
    for (const entry of puzzle) {
      const hard = entry.clues.slice(0, entry.category === 'Villager' ? 1 : 2);
      if (lastClues.has(entry.answer)) assert.notDeepEqual(hard, lastClues.get(entry.answer), entry.answer);
      lastClues.set(entry.answer, hard);
      used.add(entry.answer);
      assert.equal(entry.clues.length, 4);
      assert.equal(new Set(entry.clues).size, 4, entry.answer);
    }
  }
  recent.push(answers);
  if (recent.length > 6) recent.shift();
}
assert.equal(used.size, villagers.length + generalEntries.length, 'Every catalogue subject must get selected');
for (const entry of [...villagers, ...generalEntries]) {
  const options = clueOptions(entry);
  assert.equal(options.length, 2);
  for (const clues of options) assert.equal(clues.length, entry.category === 'Villager' ? 1 : 2);
  assert.notDeepEqual(options[0], options[1]);
}
for (const entry of [...villagers, ...generalEntries]) assert(answerImages[entry.answer]?.startsWith('https://'), entry.answer);

// Existing scores become Easy, and duplicate submissions cannot change mode.
const db = new DatabaseSync(':memory:');
db.exec('CREATE TABLE daily_scores (puzzle_date TEXT, score INTEGER, submission_id TEXT UNIQUE)');
db.exec("INSERT INTO daily_scores VALUES ('2026-09-15',8,'existing')");
db.exec(readFileSync(new URL('../drizzle/0001_wealthy_arachne.sql', import.meta.url), 'utf8'));
assert.equal(db.prepare('SELECT difficulty FROM daily_scores').get().difficulty, 'easy');
db.exec("INSERT OR IGNORE INTO daily_scores VALUES ('2026-09-15',0,'existing','hard')");
db.exec("INSERT INTO daily_scores VALUES ('2026-09-15',6,'new','hard')");
assert.equal(db.prepare('SELECT COUNT(*) AS n FROM daily_scores').get().n, 2);
assert.equal(db.prepare('SELECT AVG(score) AS average FROM daily_scores').get().average, 7);
assert.equal(db.prepare("SELECT score FROM daily_scores WHERE difficulty='easy'").get().score, 8);
console.log('Passed: 370-day rotation, clue counts, legacy Easy migration and duplicate protection.');
