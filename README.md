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
