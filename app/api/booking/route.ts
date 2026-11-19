import { NextResponse, type NextRequest } from "next/server";
import { buildBookingTelegramText } from "@/lib/telegram";

// Receives a session-booking request from the contact form and forwards
// it to Sonet's Telegram bot. The bot token and chat ID are server-only
// env vars (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) — never in code, never
// exposed to the browser. Without them the route honestly reports
// 503 not_configured and the form falls back to WhatsApp.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  "https://sonet-mia.vercel.app",
  "https://mdsonetmia04-cmyk.github.io",
  "http://localhost:3000",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+0-9][0-9\s-]{7,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const MAX_NAME = 100;
const MAX_CONTACT = 254;
const MAX_SESSION_TYPE = 150;
const MAX_MESSAGE = 2000;

// Simple in-memory per-IP rate limit: 5 requests per minute.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now >= entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = { Vary: "Origin" };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function json(
  body: Record<string, unknown>,
  status: number,
  origin: string | null
): NextResponse {
  return NextResponse.json(body, { status, headers: corsHeaders(origin) });
}

export async function OPTIONS(req: NextRequest): Promise<NextResponse> {
  const headers: Record<string, string> = {
    ...corsHeaders(req.headers.get("origin")),
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
  return new NextResponse(null, { status: 204, headers });
}

type BookingPayload = {
  name: string;
  contact: string;
  sessionType: string;
  date?: string;
  message?: string;
  website?: string;
  lang?: string;
};

function validString(value: unknown, min: number, max: number): value is string {
  return typeof value === "string" && value.trim().length >= min && value.trim().length <= max;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const origin = req.headers.get("origin");
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (rateLimited(ip)) {
    return json({ ok: false, error: "rate_limited" }, 429, origin);
  }

  let payload: BookingPayload;
  try {
    payload = (await req.json()) as BookingPayload;
  } catch {
    return json({ ok: false, error: "invalid" }, 400, origin);
  }

  // Server-side validation — same rules as the browser form.
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return json({ ok: false, error: "invalid" }, 400, origin); // honeypot
  }
  if (!validString(payload.name, 2, MAX_NAME)) {
    return json({ ok: false, error: "invalid" }, 400, origin);
  }
  if (
    !validString(payload.contact, 1, MAX_CONTACT) ||
    (!EMAIL_RE.test(payload.contact.trim()) && !PHONE_RE.test(payload.contact.trim()))
  ) {
    return json({ ok: false, error: "invalid" }, 400, origin);
  }
  if (!validString(payload.sessionType, 2, MAX_SESSION_TYPE)) {
    return json({ ok: false, error: "invalid" }, 400, origin);
  }
  const date = typeof payload.date === "string" ? payload.date.trim() : "";
  if (date.length > 0 && !DATE_RE.test(date)) {
    return json({ ok: false, error: "invalid" }, 400, origin);
  }
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  if (message.length > MAX_MESSAGE) {
    return json({ ok: false, error: "invalid" }, 400, origin);
  }
  const lang = payload.lang === "bn" ? "bn" : "en";

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return json({ ok: false, error: "not_configured" }, 503, origin);
  }

  const text = buildBookingTelegramText({
    name: payload.name.trim(),
    contact: payload.contact.trim(),
    sessionType: payload.sessionType.trim(),
    date: date || undefined,
    message: message || undefined,
    lang,
  });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: controller.signal,
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!res.ok || !data?.ok) {
      return json({ ok: false, error: "telegram_failed" }, 502, origin);
    }
  } catch {
    return json({ ok: false, error: "telegram_failed" }, 502, origin);
  } finally {
    clearTimeout(timer);
  }

  return json({ ok: true }, 200, origin);
}
