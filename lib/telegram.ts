// Builds the Telegram message text for a session-booking request.
//
// Same wording and bilingual labels as the WhatsApp builder in
// lib/whatsapp.ts — the visitor's request reaches Sonet as a plain
// Telegram message. No secrets here: the bot token and chat ID live in
// server-only env vars read by app/api/booking/route.ts.

type Labels = {
  greeting: string;
  name: string;
  contact: string;
  session: string;
  date: string;
  message: string;
};

const LABELS: Record<"en" | "bn", Labels> = {
  en: {
    greeting: "Hello Sonet,",
    name: "Name:",
    contact: "Contact:",
    session: "Session type:",
    date: "Preferred date:",
    message: "Message:",
  },
  bn: {
    greeting: "আসসালামু আলাইকুম সনেট,",
    name: "নাম:",
    contact: "যোগাযোগ:",
    session: "সেশনের ধরন:",
    date: "পছন্দের তারিখ:",
    message: "বার্তা:",
  },
};

export function buildBookingTelegramText(input: {
  name: string;
  contact: string;
  sessionType: string;
  date?: string;
  message?: string;
  lang: "en" | "bn";
}): string {
  const L = LABELS[input.lang];
  const lines = [
    L.greeting,
    "",
    `${L.name} ${input.name}`,
    `${L.contact} ${input.contact}`,
    `${L.session} ${input.sessionType}`,
  ];
  if (input.date) lines.push(`${L.date} ${input.date}`);
  if (input.message) lines.push("", `${L.message} ${input.message}`);
  return lines.join("\n");
}
