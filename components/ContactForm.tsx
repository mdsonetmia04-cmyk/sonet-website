"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { useLang } from "@/i18n/LanguageContext";

/**
 * Contact form. There is no email service connected, so the form never
 * claims an email was sent: it validates server-side (app/api/contact)
 * and returns a WhatsApp deep link, which the visitor opens to send
 * the message to Sonet.
 */
export function ContactForm() {
  const c = useContent();
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — leave empty
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string; generic?: string }>({});
  const [sending, setSending] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors({});
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = c.ui.formErrorName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = c.ui.formErrorEmail;
    if (subject.trim().length < 2) next.subject = c.ui.formErrorSubject;
    if (message.trim().length < 2) next.message = c.ui.formErrorMessage;
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "contact",
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          website,
          lang,
        }),
      });
      const data = (await res.json()) as { whatsappUrl?: string; errors?: Record<string, string> };
      if (!res.ok || !data.whatsappUrl) {
        setErrors({ generic: c.ui.formErrorGeneric });
        return;
      }
      setWhatsappUrl(data.whatsappUrl);
      window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setErrors({ generic: c.ui.formErrorGeneric });
    } finally {
      setSending(false);
    }
  }

  if (whatsappUrl) {
    return (
      <div className="card" role="status">
        <div className="flex items-start gap-4">
          <span className="icon-tile">
            <CheckCircle2 size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="title-1">{c.ui.formSuccessTitle}</p>
            <p className="body-4 mt-2">{c.ui.formSuccessBody}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary button-sm mt-4"
            >
              <MessageCircle size={16} aria-hidden="true" />
              {c.ui.formSubmit}
            </a>
            <button
              type="button"
              className="text-link button-sm mt-4 block"
              onClick={() => {
                setWhatsappUrl(null);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
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
          <label htmlFor="contact-name" className="title-2 block">
            {c.ui.formName}
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            maxLength={100}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass}
            placeholder={c.ui.formNamePlaceholder}
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="title-2 block">
            {c.ui.formEmail}
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            maxLength={254}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass}
            placeholder={c.ui.formEmailPlaceholder}
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-subject" className="title-2 block">
            {c.ui.formSubject}
          </label>
          <input
            id="contact-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            maxLength={150}
            aria-invalid={errors.subject ? true : undefined}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            className={inputClass}
            placeholder={c.ui.formSubjectPlaceholder}
          />
          {errors.subject ? (
            <p id="contact-subject-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.subject}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-message" className="title-2 block">
            {c.ui.formMessage}
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            maxLength={2000}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder={c.ui.formMessagePlaceholder}
          />
          {errors.message ? (
            <p id="contact-message-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.message}
            </p>
          ) : null}
        </div>
        {/* Honeypot: hidden from sighted users and screen readers. Bots fill it; humans don't. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
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
          {sending ? c.ui.formSending : c.ui.formSubmit}
        </button>
        <p className="caption-1">{c.ui.formWhatsAppNote}</p>
      </div>
    </form>
  );
}
