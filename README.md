# nuvaClub Forum Design

Standalone UI/UX mock for helping readers understand the nuvaClub forum context:
writing posts, asking questions, and publishing milestones.

## Features

- 72 mock forum entries: 24 `寫貼文`, 24 `問問題`, 24 `里程碑`
- Composer flow for the three forum entry types
- `里程碑` question mark tooltip: `什麼是里程碑？`
- Clickable video popup for `https://www.youtube.com/watch?v=aG0ku2xCMgo`
- Filters for `24 小時`, `一週`, `一個月`, `全部`
- Sort by newest, oldest, heart count high-to-low, and heart count low-to-high

## Scenario Scope

- `寫貼文`: lightweight sharing for learning notes, AI flows, links, and observations.
- `問問題`: structured help requests for course questions or AI system-building blockers.
- `里程碑`: visible proof of a prototype, practice result, or learning checkpoint.

All forum data is mock data. This prototype focuses on the forum reading, filtering,
sorting, composing, and milestone-help experience only.

For the full reader-facing context, see [`docs/forum-scenario.md`](docs/forum-scenario.md).

## Local Run

```bash
npm install
npm run dev
```

## Production Check

```bash
npm run build
npm run preview
```
