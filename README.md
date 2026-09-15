# Daily Dew

Daily Dew is a free, fan-made daily Stardew Valley trivia game. Every New Zealand day brings eight new typed-answer clues:

- three villager questions covering gifts, schedules, and heart events
- five questions covering fish, crops, crafting, locations, monsters, festivals, and more
- forgiving spelling, local streaks and score history
- an anonymous global score distribution and daily average

Play it at [heeliees.github.io/DailyDew](https://heeliees.github.io/DailyDew/).

## Development

Requires Node.js 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

Run the production checks with:

```bash
pnpm exec tsc --noEmit
pnpm build
```

## Data and attribution

Question facts are curated from the [Stardew Valley Wiki](https://stardewvalleywiki.com/Stardew_Valley_Wiki) and versioned for annual review. Daily Dew is not affiliated with ConcernedApe.

## September 2026 gameplay update

Easy and Hard share the same eight answers. Hard shows the first clue for villagers and the first two clues for other entries; those clues must uniquely identify the answer together. A device gets one scored run per date, with its selected difficulty retained on reload. Existing results without a difficulty count as Easy.

The new rotation begins on 16 September 2026 (New Zealand date), preserving earlier puzzles and excluding answers from the previous six days. The catalogue must contain at least 21 villagers and 35 other unique subjects. When refreshing the catalogue annually, preserve published schedules and the previous six days of answers at the cutover; do not blindly change historical seeds or entry ordering.

Verify rotation and the legacy-score migration with `node --experimental-strip-types tests/daily-rotation.mjs`. Deploy the Sites backend and its additive migration before publishing the GitHub Pages frontend. The migration defaults all existing rows to Easy; old clients also submit as Easy.
