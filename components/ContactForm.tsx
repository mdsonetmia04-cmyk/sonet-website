"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";
import { useLang } from "@/i18n/LanguageContext";

/**
 * Contact form. No backend: validation runs client-side and a success
 * state confirms the message was "sent" (the visitor then follows up on
 * WhatsApp or email). Name + Message labels reuse the booking form keys.
 */
export function ContactForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: { name?: string; email?: string } = {};
    if (name.trim().length < 2) next.name = t("booking.form.errorName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = t("booking.form.errorContact");
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;
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
            <p className="title-1">{t("contact.form.success")}</p>
            <button type="button" className="text-link button-sm mt-4" onClick={() => setSent(false)}>
              {t("booking.form.sendAnother")}
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
            {t("booking.form.nameLabel")}
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass}
            placeholder={t("booking.form.namePlaceholder")}
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="title-2 block">
            {t("contact.form.emailLabel")}
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass}
            placeholder={t("contact.email")}
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className="body-4 mt-2 text-gold">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-message" className="title-2 block">
            {t("booking.form.messageLabel")}{" "}
            <span className="caption-1">{t("booking.form.optional")}</span>
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-2 text-base text-ink placeholder:text-muted"
            placeholder={t("booking.form.messagePlaceholder")}
          />
        </div>
        <button type="submit" className="btn-primary button-md mt-2">
          {t("contact.form.submit")}
        </button>
      </div>
    </form>
  );
}
