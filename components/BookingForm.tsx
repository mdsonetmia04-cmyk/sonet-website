"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";

const sessionTypes = [
  "English guidance session",
  "Writing consultation",
  "AI prompt masterclass",
  "AI content strategy",
  "AI video workshop",
  "Something else",
];

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState(sessionTypes[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const next: { name?: string; contact?: string } = {};
    if (name.trim().length < 2) next.name = "Please add your name so Sonet knows who is writing.";
    const value = contact.trim();
    const looksEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const looksPhone = /^[+0-9][0-9\s-]{7,}$/.test(value);
    if (!looksEmail && !looksPhone) {
      next.contact = "That contact does not look right. Add a valid email address or WhatsApp number and try again.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const text = `Hello Sonet, I would like to book a session.%0A%0AName: ${encodeURIComponent(name.trim())}%0AContact: ${encodeURIComponent(contact.trim())}%0ASession: ${encodeURIComponent(type)}%0A${message.trim() ? `Message: ${encodeURIComponent(message.trim())}` : ""}`;
    window.open(`https://wa.me/8801797953059?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card" role="status">
        <div className="flex items-start gap-4">
          <span className="icon-tile">
            <Icon name="check" size={24} />
          </span>
          <div>
            <p className="title-1">Session request ready on WhatsApp</p>
            <p className="body-4 mt-2">
              Your message opened in WhatsApp. Send it there and Sonet will reply to confirm a time.
            </p>
            <button type="button" className="text-link button-sm mt-4" onClick={() => setSent(false)}>
              Send another request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor={compact ? "name-compact" : "name"} className="title-2 block">
            Your name
          </label>
          <input
            id={compact ? "name-compact" : "name"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="mt-2 min-h-[44px] w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder="Your full name"
          />
          {errors.name ? <p className="body-4 mt-2 text-gold">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor={compact ? "contact-compact" : "contact"} className="title-2 block">
            WhatsApp or email
          </label>
          <input
            id={compact ? "contact-compact" : "contact"}
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            autoComplete="email"
            className="mt-2 min-h-[44px] w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder="WhatsApp number or email address"
          />
          {errors.contact ? <p className="body-4 mt-2 text-gold">{errors.contact}</p> : null}
        </div>
        <div>
          <label htmlFor={compact ? "type-compact" : "type"} className="title-2 block">
            Session type
          </label>
          <select
            id={compact ? "type-compact" : "type"}
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-2 min-h-[44px] w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink"
          >
            {sessionTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={compact ? "message-compact" : "message"} className="title-2 block">
            Message <span className="caption-1">(optional)</span>
          </label>
          <textarea
            id={compact ? "message-compact" : "message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder="What would you like help with?"
          />
        </div>
        <button type="submit" className="btn-primary button-md mt-2">
          Book a session
        </button>
        <p className="caption-1">
          Sending opens WhatsApp with your request ready to send. No payment is taken on this site.
        </p>
      </div>
    </form>
  );
}
