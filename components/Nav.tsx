"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "./icons";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/strings";

// Nav link ids in page order; labels come from i18n nav.* keys.
const linkIds = [
  "about",
  "education",
  "teaching",
  "writing",
  "projects",
  "ai-creator",
  "skills",
  "gallery",
  "contact",
] as const;
type LinkId = (typeof linkIds)[number];

// nav.* key for each link id (ai-creator -> nav.aiCreator, skills -> nav.skills).
const linkKey: Record<LinkId, string> = {
  about: "about",
  education: "education",
  teaching: "teaching",
  writing: "writing",
  projects: "projects",
  "ai-creator": "aiCreator",
  skills: "skills",
  gallery: "gallery",
  contact: "contact",
};

type ThemeChoice = "system" | "light" | "dark";

function applyTheme(choice: ThemeChoice) {
  const resolved =
    choice === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : choice;
  document.documentElement.setAttribute("data-theme", resolved);
}

const themeOptions: {
  value: ThemeChoice;
  shortKey: string;
  fullKey: string;
  icon: IconName;
}[] = [
  { value: "system", shortKey: "nav.themeSystemShort", fullKey: "nav.themeSystem", icon: "monitor" },
  { value: "light", shortKey: "nav.themeLightShort", fullKey: "nav.themeLight", icon: "sun" },
  { value: "dark", shortKey: "nav.themeDarkShort", fullKey: "nav.themeDark", icon: "moon" },
];

function ThemeSwitcher({
  theme,
  onChange,
}: {
  theme: ThemeChoice;
  onChange: (choice: ThemeChoice) => void;
}) {
  const { t } = useLang();
  return (
    <div role="group" aria-label={t("nav.themeLabel")} className="segmented">
      {themeOptions.map((opt) => (
        <button
          key={opt.value}
          type="button"
          aria-pressed={theme === opt.value}
          aria-label={t(opt.fullKey)}
          title={t(opt.fullKey)}
          onClick={() => onChange(opt.value)}
          className={`segmented-btn ${theme === opt.value ? "is-active" : ""}`}
        >
          <span className="seg-icon" aria-hidden="true">
            <Icon name={opt.icon} size={16} />
          </span>
          <span className="hidden md:inline">{t(opt.shortKey)}</span>
        </button>
      ))}
    </div>
  );
}

function LanguageToggle() {
  const { t, lang, setLang } = useLang();
  const options: { value: Lang; labelKey: string }[] = [
    { value: "en", labelKey: "nav.langEnglish" },
    { value: "bn", labelKey: "nav.langBangla" },
  ];
  return (
    <div role="group" aria-label={t("nav.languageLabel")} className="segmented">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          aria-pressed={lang === opt.value}
          aria-label={`${t("nav.languageLabel")}: ${t(opt.labelKey)}`}
          onClick={() => setLang(opt.value)}
          className={`segmented-btn ${lang === opt.value ? "is-active" : ""}`}
        >
          {t(opt.labelKey)}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<ThemeChoice>("system");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sonet-theme") as ThemeChoice | null;
      if (stored) setTheme(stored);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const id of linkIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  function onThemeChange(choice: ThemeChoice) {
    setTheme(choice);
    try {
      localStorage.setItem("sonet-theme", choice);
    } catch {
      /* storage unavailable */
    }
    applyTheme(choice);
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        {t("nav.skipToContent")}
      </a>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          aria-label={t("nav.mainAriaLabel")}
          className="flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-3 gap-y-2 rounded-[28px] border border-border bg-surface/90 px-4 py-2 shadow-[0_8px_24px_var(--shadow)] backdrop-blur-md md:px-6 lg:flex-nowrap lg:rounded-full"
        >
          <a href="#top" className="font-display order-1 text-xl font-semibold text-ink">
            {t("nav.brand")}
          </a>
          <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
            {linkIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`title-2 transition-colors duration-300 ${
                    active === id
                      ? "text-gold underline decoration-gold underline-offset-4"
                      : "text-body hover:text-ink"
                  }`}
                >
                  {t(`nav.${linkKey[id]}`)}
                </a>
              </li>
            ))}
          </ul>
          {/* Controls: own row on mobile so both toggles stay visible, inline on desktop. */}
          <div className="order-3 flex w-full items-center justify-between gap-2 lg:order-none lg:w-auto lg:justify-end">
            <LanguageToggle />
            <ThemeSwitcher theme={theme} onChange={onThemeChange} />
          </div>
          <div className="order-2 ml-auto flex items-center gap-2 lg:order-none lg:ml-0">
            <a href="#book" className="btn-primary button-sm hidden sm:inline-flex">
              {t("nav.bookSession")}
            </a>
            <button
              type="button"
              aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border text-ink lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </nav>
      </header>

      {open ? (
        <div
          className={`menu-open fixed inset-0 z-40 bg-bg/95 pt-40 backdrop-blur-md lg:hidden`}
          role="dialog"
          aria-modal="true"
          aria-label={t("nav.menuAriaLabel")}
        >
          <ul className="flex flex-col gap-2 px-6">
            {linkIds.map((id, i) => (
              <li
                key={id}
                className="menu-link"
                style={{ transitionDelay: `${Math.min(i * 60, 400)}ms` }}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="heading-3 block py-2 text-ink"
                >
                  {t(`nav.${linkKey[id]}`)}
                </a>
              </li>
            ))}
            <li className="menu-link" style={{ transitionDelay: "400ms" }}>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="btn-primary button-md mt-4"
              >
                {t("nav.bookSession")}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
