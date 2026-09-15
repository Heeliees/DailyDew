import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const dailyScores = sqliteTable(
  "daily_scores",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    puzzleDate: text("puzzle_date").notNull(),
    score: integer("score").notNull(),
    difficulty: text("difficulty").notNull().default("easy"),
    submissionId: text("submission_id").notNull(),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`)
  },
  (table) => [
    index("idx_daily_scores_puzzle_date").on(table.puzzleDate),
    uniqueIndex("idx_daily_scores_submission_id").on(table.submissionId)
  ]
);
