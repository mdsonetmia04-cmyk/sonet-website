import { NextResponse } from "next/server";

/**
 * POST /api/contact
 * Validates a contact or session-booking request and returns a WhatsApp
 * deep link (wa.me/8801797953059) with the message prefilled.
 *
 * There is no email service connected, so nothing is "sent" from the
 * server — the visitor opens the returned link and sends the message
 * from their own WhatsApp. The UI copy says exactly that.
 *
 * Spam protection: a honeypot field ("website"). Any submission that
 * fills it gets a success-shaped 200 with no link and no message built.
 */

const WHATSAPP_NUMBER = "8801797953059";
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 150;
const MAX_MESSAGE = 2000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+0-9][0-9\s-]{7,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

type Labels = {
  greeting: string;
  name: string;
  email: string;
  contact: string;
  subject: string;
  message: string;
  session: string;
  date: string;
};

const LABELS: Record<"en" | "bn", Labels> = {
  en: {
    greeting: "Hello Sonet,",
    name: "Name:",
    email: "Email:",
    contact: "Contact:",
    subject: "Subject:",
    message: "Message:",
    session: "Session type:",
    date: "Preferred date:",
  },
  bn: {
    greeting: "আসসালামু আলাইকুম সনেট,",
    name: "নাম:",
    email: "ইমেইল:",
    contact: "যোগাযোগ:",
    subject: "বিষয়:",
    message: "বার্তা:",
    session: "সেশনের ধরন:",
    date: "পছন্দের তারিখ:",
  },
};

function errorResponse(errors: Record<string, string>) {
  return NextResponse.json({ errors }, { status: 400 });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return errorResponse({ generic: "Invalid request body." });
  }

  // Honeypot: bots fill it, humans never see it. Answer success-shaped
  // with no link so the sender gets nothing useful.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const kind = body.kind;
  if (kind !== "contact" && kind !== "booking") {
    return errorResponse({ kind: "Unknown request type." });
  }

  const lang = body.lang === "bn" ? "bn" : "en";
  const L = LABELS[lang];
  const errors: Record<string, string> = {};

  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (name.length < 2 || name.length > MAX_NAME) {
    errors.name = "Name must be between 2 and 100 characters.";
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";

  let subject = "";
  let message = "";
  let sessionType = "";
  let date = "";

  if (kind === "contact") {
    if (!EMAIL_RE.test(email) || email.length > MAX_EMAIL) {
      errors.email = "A valid email address is required.";
    }
    subject = typeof body.subject === "string" ? body.subject.trim() : "";
    if (subject.length < 2 || subject.length > MAX_SUBJECT) {
      errors.subject = "Subject must be between 2 and 150 characters.";
    }
    message = typeof body.message === "string" ? body.message.trim() : "";
    if (message.length < 2 || message.length > MAX_MESSAGE) {
      errors.message = "Message must be between 2 and 2000 characters.";
    }
  } else {
    if (
      (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) ||
      contact.length > MAX_EMAIL
    ) {
      errors.contact = "A valid email address or phone number is required.";
    }
    sessionType = typeof body.sessionType === "string" ? body.sessionType.trim() : "";
    if (sessionType.length < 2 || sessionType.length > MAX_SUBJECT) {
      errors.sessionType = "A session type is required.";
    }
    if (typeof body.date === "string" && body.date.trim().length > 0) {
      date = body.date.trim();
      if (!DATE_RE.test(date)) {
        errors.date = "Date must be in YYYY-MM-DD format.";
      }
    }
    message = typeof body.message === "string" ? body.message.trim() : "";
    if (message.length > MAX_MESSAGE) {
      errors.message = "Message must be at most 2000 characters.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return errorResponse(errors);
  }

  const lines: string[] = [L.greeting, "", `${L.name} ${name}`];
  if (kind === "contact") {
    lines.push(`${L.email} ${email}`);
    lines.push(`${L.subject} ${subject}`);
  } else {
    lines.push(`${L.contact} ${contact}`);
    lines.push(`${L.session} ${sessionType}`);
    if (date) lines.push(`${L.date} ${date}`);
  }
  if (message) {
    lines.push("", `${L.message} ${message}`);
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  return NextResponse.json({ whatsappUrl });
}
