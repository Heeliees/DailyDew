import { env } from "cloudflare:workers";

export const dynamic = "force-dynamic";
const validDate = /^\d{4}-\d{2}-\d{2}$/;

async function readStats(date: string) {
  if (!env.DB) throw new Error("Scoreboard unavailable");
  const rows = await env.DB.prepare(
    "SELECT score, COUNT(*) AS count FROM daily_scores WHERE puzzle_date = ? GROUP BY score ORDER BY score"
  ).bind(date).all<{ score: number; count: number }>();
  const distribution = Array.from({ length: 9 }, () => 0);
  for (const row of rows.results) distribution[row.score] = Number(row.count);
  const summary = await env.DB.prepare(
    "SELECT COUNT(*) AS players, AVG(score) AS average FROM daily_scores WHERE puzzle_date = ?"
  ).bind(date).first<{ players: number; average: number | null }>();
  return {
    distribution,
    players: Number(summary?.players ?? 0),
    average: summary?.average == null ? null : Number(summary.average)
  };
}

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date") ?? "";
  if (!validDate.test(date)) return Response.json({ error: "Invalid puzzle date" }, { status: 400 });
  try {
    return Response.json(await readStats(date));
  } catch {
    return Response.json({ distribution: Array(9).fill(0), players: 0, average: null }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { date?: string; score?: number; deviceId?: string };
    if (!body.date || !validDate.test(body.date) || !Number.isInteger(body.score) ||
        body.score! < 0 || body.score! > 8 || !body.deviceId ||
        !/^[a-zA-Z0-9-]{16,64}$/.test(body.deviceId)) {
      return Response.json({ error: "Invalid score" }, { status: 400 });
    }
    if (!env.DB) throw new Error("Scoreboard unavailable");
    await env.DB.prepare(
      "INSERT OR IGNORE INTO daily_scores (puzzle_date, score, submission_id) VALUES (?, ?, ?)"
    ).bind(body.date, body.score, `${body.date}:${body.deviceId}`).run();
    return Response.json(await readStats(body.date));
  } catch {
    return Response.json({ error: "Scoreboard unavailable" }, { status: 503 });
  }
}
