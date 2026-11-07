"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";
import { useLang } from "@/i18n/LanguageContext";

// Session-type keys; labels come from i18n booking.type.* and double as the
// <select> values, so the WhatsApp message can name the type in the site
// language too.
const sessionTypeKeys = [
  "englishGuidance",
  "writingConsultation",
  "aiPrompt",
  "aiContent",
  "aiVideo",
  "other",
] as const;
type SessionTypeKey = (typeof sessionTypeKeys)[number];

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState<SessionTypeKey>("englishGuidance");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
  const [sent, setSent] = useState(false);

  const ids = {
    name: compact ? "name-compact" : "name",
    contact: compact ? "contact-compact" : "contact",
    type: compact ? "type-compact" : "type",
    message: compact ? "message-compact" : "message",
  };

  function validate() {
    const next: { name?: string; contact?: string } = {};
    if (name.trim().length < 2) next.name = t("booking.form.errorName");
    const value = contact.trim();
    const looksEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const looksPhone = /^[+0-9][0-9\s-]{7,}$/.test(value);
    if (!looksEmail && !looksPhone) {
      next.contact = t("booking.form.errorContact");
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // WhatsApp message follows the site language.
    const lines = [
      t("booking.whatsapp.greeting"),
      "",
      `${t("booking.whatsapp.nameLabel")} ${name.trim()}`,
      `${t("booking.whatsapp.contactLabel")} ${contact.trim()}`,
      `${t("booking.whatsapp.sessionLabel")} ${t(`booking.type.${type}`)}`,
    ];
    if (message.trim()) {
      lines.push(`${t("booking.whatsapp.messageLabel")} ${message.trim()}`);
    }
    const text = encodeURIComponent(lines.join("\n"));
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
            <p className="title-1">{t("booking.form.successTitle")}</p>
            <p className="body-4 mt-2">{t("booking.form.successBody")}</p>
            <button type="button" className="text-link button-sm mt-4" onClick={() => setSent(false)}>
              {t("booking.form.sendAnother")}
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
          <label htmlFor={ids.name} className="title-2 block">
            {t("booking.form.nameLabel")}
          </label>
          <input
            id={ids.name}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${ids.name}-error` : undefined}
            className="mt-2 min-h-[44px] w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder={t("booking.form.namePlaceholder")}
          />
          {errors.name ? (
            <p id={`${ids.name}-error`} role="alert" className="body-4 mt-2 text-gold">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor={ids.contact} className="title-2 block">
            {t("booking.form.contactLabel")}
          </label>
          <input
            id={ids.contact}
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            autoComplete="email"
            aria-invalid={errors.contact ? true : undefined}
            aria-describedby={errors.contact ? `${ids.contact}-error` : undefined}
            className="mt-2 min-h-[44px] w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder={t("booking.form.contactPlaceholder")}
          />
          {errors.contact ? (
            <p id={`${ids.contact}-error`} role="alert" className="body-4 mt-2 text-gold">
              {errors.contact}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor={ids.type} className="title-2 block">
            {t("booking.form.typeLabel")}
          </label>
          <select
            id={ids.type}
            value={type}
            onChange={(e) => setType(e.target.value as SessionTypeKey)}
            className="mt-2 min-h-[44px] w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink"
          >
            {sessionTypeKeys.map((key) => (
              <option key={key} value={key}>
                {t(`booking.type.${key}`)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={ids.message} className="title-2 block">
            {t("booking.form.messageLabel")}{" "}
            <span className="caption-1">{t("booking.form.optional")}</span>
          </label>
          <textarea
            id={ids.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder={t("booking.form.messagePlaceholder")}
          />
        </div>
        <button type="submit" className="btn-primary button-md mt-2">
          {t("booking.form.submit")}
        </button>
        <p className="caption-1">{t("booking.form.helper")}</p>
      </div>
    </form>
  );
}
