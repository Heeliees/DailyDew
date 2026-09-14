CREATE TABLE `daily_scores` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`puzzle_date` text NOT NULL,
	`score` integer NOT NULL,
	`submission_id` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_daily_scores_puzzle_date` ON `daily_scores` (`puzzle_date`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_daily_scores_submission_id` ON `daily_scores` (`submission_id`);