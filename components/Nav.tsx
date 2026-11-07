"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/strings";
import { useContent } from "@/lib/useContent";

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

const themeOptions: { value: ThemeChoice; labelKey: "themeSystem" | "themeLight" | "themeDark"; icon: typeof Sun }[] = [
  { value: "system", labelKey: "themeSystem", icon: Monitor },
  { value: "light", labelKey: "themeLight", icon: Sun },
  { value: "dark", labelKey: "themeDark", icon: Moon },
];

function ThemeSwitcher({
  theme,
  onChange,
}: {
  theme: ThemeChoice;
  onChange: (choice: ThemeChoice) => void;
}) {
  const c = useContent();
  return (
    <div role="group" aria-label={c.ui.themeLabel} className="segmented">
      {themeOptions.map((opt) => {
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={theme === opt.value}
            aria-label={c.ui[opt.labelKey]}
            title={c.ui[opt.labelKey]}
            onClick={() => onChange(opt.value)}
            className={`segmented-btn ${theme === opt.value ? "is-active" : ""}`}
          >
            <span className="seg-icon" aria-hidden="true">
              <Icon size={16} />
            </span>
            <span className="hidden md:inline">{c.ui[opt.labelKey]}</span>
          </button>
        );
      })}
    </div>
  );
}

function LanguageToggle() {
  const c = useContent();
  const { lang, setLang } = useLang();
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "bn", label: "বাংলা" },
  ];
  return (
    <div role="group" aria-label={c.ui.languageLabel} className="segmented">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          aria-pressed={lang === opt.value}
          aria-label={`${c.ui.languageLabel}: ${opt.label}`}
          onClick={() => setLang(opt.value)}
          className={`segmented-btn ${lang === opt.value ? "is-active" : ""}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const c = useContent();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        {c.ui.skipToContent}
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-surface">
        <nav
          aria-label={c.ui.navLabel}
          className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 px-4 py-3 md:px-8"
        >
          <Link
            href="/"
            className="font-display shrink-0 text-xl font-bold tracking-tight text-ink"
            aria-label="SONET. — home"
          >
            {c.ui.brand}
          </Link>

          <ul className="hidden items-center gap-5 xl:flex">
            {c.nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`whitespace-nowrap text-[0.9375rem] font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-gold underline decoration-gold underline-offset-4"
                      : "text-body hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>
            <div className="hidden md:block">
              <ThemeSwitcher theme={theme} onChange={onThemeChange} />
            </div>
            <a
              href="/cv/Md-Sonet-Mia-CV.pdf"
              download
              className="btn-primary button-sm hidden sm:inline-flex"
            >
              <Download size={16} aria-hidden="true" />
              {c.ui.downloadCv}
            </a>
            <button
              type="button"
              aria-label={open ? c.ui.closeMenu : c.ui.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border text-ink xl:hidden"
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {open ? (
        <div
          className="menu-open fixed inset-0 top-[65px] z-40 overflow-y-auto bg-bg xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={c.ui.menuLabel}
        >
          <ul className="flex flex-col gap-1 px-6 py-6">
            {c.nav.map((item, i) => (
              <li
                key={item.id}
                className="menu-link"
                style={{ transitionDelay: `${Math.min(i * 40, 360)}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`heading-3 block py-2 ${isActive(item.href) ? "text-gold" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="menu-link mt-4" style={{ transitionDelay: "400ms" }}>
              <a
                href="/cv/Md-Sonet-Mia-CV.pdf"
                download
                className="btn-primary button-md"
              >
                <Download size={16} aria-hidden="true" />
                {c.ui.downloadCv}
              </a>
            </li>
            <li
              className="menu-link mt-6 flex flex-wrap items-center gap-3"
              style={{ transitionDelay: "440ms" }}
            >
              <LanguageToggle />
              <ThemeSwitcher theme={theme} onChange={onThemeChange} />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
