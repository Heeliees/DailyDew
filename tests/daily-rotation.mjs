import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { getDailyPuzzle, villagers, generalEntries } from '../app/data/catalog.ts';
import { answerImages } from '../app/data/answer-images.ts';

const recent = [];
for (let offset = 0; offset < 370; offset++) {
  const date = new Date(Date.UTC(2026, 8, 16 + offset)).toISOString().slice(0, 10);
  const puzzle = getDailyPuzzle(date);
  assert.equal(puzzle.length, 8);
  assert(puzzle.slice(0, 3).every(entry => entry.category === 'Villager'));
  const answers = puzzle.map(entry => entry.answer);
  assert.equal(new Set([...recent.flat(), ...answers]).size, recent.flat().length + 8, date);
  assert.deepEqual(getDailyPuzzle(date), puzzle);
  recent.push(answers);
  if (recent.length > 6) recent.shift();
}
for (const entry of [...villagers, ...generalEntries]) assert.equal(entry.clues.length, 4);
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
