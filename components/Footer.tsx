"use client";

import { Icon } from "./icons";
import { useLang } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLang();
  const email = t("footer.email");
  return (
    <footer className="border-t-2 border-gold/40 bg-surface-2 py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="max-w-[420px] md:col-span-5">
            <p className="font-display text-2xl font-semibold text-ink">{t("footer.name")}</p>
            <p className="body-4 mt-4">{t("footer.bio")}</p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.youtube.com/@SweetCGILab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.youtube")}
                className="icon-tile !h-11 !w-11 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Icon name="youtube" size={20} />
              </a>
              <a
                href="https://facebook.com/mdsont.mia.777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.facebook")}
                className="icon-tile !h-11 !w-11 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Icon name="facebook" size={20} />
              </a>
              <a
                href="https://wa.me/8801797953059"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.whatsapp")}
                className="icon-tile !h-11 !w-11 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Icon name="whatsapp" size={20} />
              </a>
            </div>
          </div>
          <nav aria-label={t("footer.navAriaLabel")} className="md:col-span-3">
            <p className="title-2 font-semibold">{t("footer.quickLinksHeading")}</p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="#about" className="title-2 text-body hover:text-ink">
                {t("footer.about")}
              </a>
              <a href="#teaching" className="title-2 text-body hover:text-ink">
                {t("footer.teaching")}
              </a>
              <a href="#writing" className="title-2 text-body hover:text-ink">
                {t("footer.writing")}
              </a>
              <a href="#ai-creator" className="title-2 text-body hover:text-ink">
                {t("footer.aiServices")}
              </a>
              <a href="#contact" className="title-2 text-body hover:text-ink">
                {t("footer.contact")}
              </a>
            </div>
          </nav>
          <div className="md:col-span-4">
            <p className="title-2 font-semibold">{t("footer.contactHeading")}</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 break-words text-body hover:text-ink"
              >
                <Icon name="mail" size={20} /> {email}
              </a>
              <a
                href="https://wa.me/8801797953059"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body hover:text-ink"
              >
                <Icon name="whatsapp" size={20} /> {t("footer.whatsappNumber")}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="caption-1">{t("footer.copyright")}</p>
          <div className="flex gap-6">
            <a href="/privacy" className="caption-1 hover:text-ink">
              {t("footer.privacy")}
            </a>
            <a href="/terms" className="caption-1 hover:text-ink">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
