// Client-side replacement for the old POST /api/contact route.
//
// There is no email service connected, so nothing is ever "sent" from
// a server: the form validates the visitor's input and builds a
// WhatsApp deep link (wa.me/8801797953059) with the message prefilled,
// which the visitor opens to send the message from their own WhatsApp.
// This used to run as a Next.js API route; a static export (GitHub
// Pages) has no server, so the same logic now runs in the browser.
// Returns the link, or null when the input is invalid (or the
// honeypot field was filled — bots get nothing useful back).

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

export function buildContactWhatsApp(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
  lang: "en" | "bn";
}): string | null {
  if (input.website.trim().length > 0) return null; // honeypot
  const name = input.name.trim();
  const email = input.email.trim();
  const subject = input.subject.trim();
  const message = input.message.trim();
  if (name.length < 2 || name.length > MAX_NAME) return null;
  if (!EMAIL_RE.test(email) || email.length > MAX_EMAIL) return null;
  if (subject.length < 2 || subject.length > MAX_SUBJECT) return null;
  if (message.length < 2 || message.length > MAX_MESSAGE) return null;
  const L = LABELS[input.lang];
  const lines = [
    L.greeting,
    "",
    `${L.name} ${name}`,
    `${L.email} ${email}`,
    `${L.subject} ${subject}`,
    "",
    `${L.message} ${message}`,
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function buildBookingWhatsApp(input: {
  name: string;
  contact: string;
  sessionType: string;
  date?: string;
  message?: string;
  website: string;
  lang: "en" | "bn";
}): string | null {
  if (input.website.trim().length > 0) return null; // honeypot
  const name = input.name.trim();
  const contact = input.contact.trim();
  const sessionType = input.sessionType.trim();
  const message = (input.message ?? "").trim();
  const date = (input.date ?? "").trim();
  if (name.length < 2 || name.length > MAX_NAME) return null;
  if (
    (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) ||
    contact.length > MAX_EMAIL
  )
    return null;
  if (sessionType.length < 2 || sessionType.length > MAX_SUBJECT) return null;
  if (date.length > 0 && !DATE_RE.test(date)) return null;
  if (message.length > MAX_MESSAGE) return null;
  const L = LABELS[input.lang];
  const lines = [
    L.greeting,
    "",
    `${L.name} ${name}`,
    `${L.contact} ${contact}`,
    `${L.session} ${sessionType}`,
  ];
  if (date) lines.push(`${L.date} ${date}`);
  if (message) lines.push("", `${L.message} ${message}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
