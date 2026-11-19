"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { useLang } from "@/i18n/LanguageContext";
import { isGitHubPages } from "@/lib/site";
import { buildBookingWhatsApp } from "@/lib/whatsapp";

// API base: same origin on Vercel; the GitHub Pages mirror is a static
// export with no server, so its form POSTs to the Vercel API instead.
const API_BASE = isGitHubPages ? "https://sonet-mia.vercel.app" : "";

/**
 * Session-booking form. The request is validated in the browser, then
 * sent straight to Sonet via the /api/booking route (Telegram). If that
 * delivery fails for any reason, it falls back to a WhatsApp deep link,
 * which the visitor opens to send the request to Sonet. No payment is
 * taken on this site.
 */
export function BookingForm() {
  const c = useContent();
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState(0);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — leave empty
  const [errors, setErrors] = useState<{ name?: string; contact?: string; message?: string; generic?: string }>({});
  const [sending, setSending] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [sentViaTelegram, setSentViaTelegram] = useState(false);

  const sessionTypes = c.contact.sessionTypes;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors({});
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = c.ui.formErrorName;
    const value = contact.trim();
    const looksEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const looksPhone = /^[+0-9][0-9\s-]{7,}$/.test(value);
    if (!looksEmail && !looksPhone) next.contact = c.ui.formErrorEmail;
    if (message.trim().length > 2000) next.message = c.ui.formErrorMessage;
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setSending(true);
    // Telegram delivery first: the request goes straight to Sonet. Any
    // failure (API down, not configured, network error) falls back to
    // the WhatsApp flow exactly as before.
    try {
      const res = await fetch(`${API_BASE}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          contact: value,
          sessionType: sessionTypes[type],
          date: date || undefined,
          message: message.trim() || undefined,
          website,
          lang,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (res.ok && data?.ok) {
        setSentViaTelegram(true);
        setSending(false);
        return;
      }
    } catch {
      // Network error — fall through to WhatsApp.
    }
    const whatsappUrl = buildBookingWhatsApp({
      name: name.trim(),
      contact: value,
      sessionType: sessionTypes[type],
      date: date || undefined,
      message: message.trim() || undefined,
      website,
      lang,
    });
    if (!whatsappUrl) {
      setErrors({ generic: c.ui.formErrorGeneric });
      setSending(false);
      return;
    }
    setWhatsappUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSending(false);
  }

  if (whatsappUrl || sentViaTelegram) {
    return (
      <div className="card" role="status">
        <div className="flex items-start gap-4">
          <span className="icon-tile">
            <CheckCircle2 size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="title-1">
              {sentViaTelegram ? c.ui.bookingTelegramSuccessTitle : c.ui.bookingSuccessTitle}
            </p>
            <p className="body-4 mt-2">
              {sentViaTelegram ? c.ui.bookingTelegramSuccessBody : c.ui.bookingSuccessBody}
            </p>
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary button-sm mt-4"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {c.ui.bookingSubmit}
              </a>
            ) : null}
            <button
              type="button"
              className="text-link button-sm mt-4 block"
              onClick={() => {
                setWhatsappUrl(null);
                setSentViaTelegram(false);
                setName("");
                setContact("");
                setMessage("");
                setDate("");
              }}
            >
              {c.ui.formSendAnother}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass =
    "mt-2 min-h-[44px] w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted";

  return (
    <form onSubmit={onSubmit} noValidate className="card">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="booking-name" className="title-2 block">
            {c.ui.formName}
          </label>
          <input
            id="booking-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            maxLength={100}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "booking-name-error" : undefined}
            className={inputClass}
            placeholder={c.ui.formNamePlaceholder}
          />
          {errors.name ? (
            <p id="booking-name-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="booking-contact" className="title-2 block">
            {c.ui.bookingContact}
          </label>
          <input
            id="booking-contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            autoComplete="email"
            maxLength={254}
            aria-invalid={errors.contact ? true : undefined}
            aria-describedby={errors.contact ? "booking-contact-error" : undefined}
            className={inputClass}
            placeholder={c.ui.bookingContactPlaceholder}
          />
          {errors.contact ? (
            <p id="booking-contact-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.contact}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="booking-type" className="title-2 block">
            {c.ui.bookingType}
          </label>
          <select
            id="booking-type"
            value={type}
            onChange={(e) => setType(Number(e.target.value))}
            className={inputClass}
          >
            {sessionTypes.map((label, i) => (
              <option key={label} value={i}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="booking-date" className="title-2 block">
            {c.ui.bookingDate} <span className="caption-1">{c.ui.bookingOptional}</span>
          </label>
          <input
            id="booking-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="booking-message" className="title-2 block">
            {c.ui.formMessage} <span className="caption-1">{c.ui.bookingOptional}</span>
          </label>
          <textarea
            id="booking-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            maxLength={2000}
            className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder={c.ui.formMessagePlaceholder}
          />
        </div>
        {/* Honeypot: hidden from sighted users and screen readers. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
          <label htmlFor="booking-website">Website</label>
          <input
            id="booking-website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>
        {errors.generic ? (
          <p role="alert" className="body-4 text-gold">
            {errors.generic}
          </p>
        ) : null}
        <button type="submit" className="btn-primary button-md mt-2" disabled={sending}>
          <MessageCircle size={18} aria-hidden="true" />
          {sending ? c.ui.formSending : c.ui.bookingSubmit}
        </button>
        <p className="caption-1">{c.contact.bookingHelper}</p>
      </div>
    </form>
  );
}
