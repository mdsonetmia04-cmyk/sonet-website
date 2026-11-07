"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#teaching", label: "Teaching", id: "teaching" },
  { href: "#writing", label: "Writing", id: "writing" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#ai-creator", label: "AI creator", id: "ai-creator" },
  { href: "#gallery", label: "Gallery", id: "gallery" },
  { href: "#contact", label: "Contact", id: "contact" },
];

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

export function Nav() {
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
    const ids = ["about", "teaching", "writing", "projects", "ai-creator", "gallery", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const id of ids) {
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
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          aria-label="Main navigation"
          className="flex w-full max-w-[1200px] items-center justify-between gap-4 rounded-full border border-border bg-surface/90 px-4 py-2 shadow-[0_8px_24px_var(--shadow)] backdrop-blur-md md:px-6"
        >
          <a href="#top" className="font-display text-xl font-semibold text-ink">
            Md Sonet Mia
          </a>
          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`title-2 transition-colors duration-300 ${
                    active === link.id
                      ? "text-gold underline decoration-gold underline-offset-4"
                      : "text-body hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="theme-select">
              Colour theme
            </label>
            <select
              id="theme-select"
              value={theme}
              onChange={(e) => onThemeChange(e.target.value as ThemeChoice)}
              className="button-sm min-h-[44px] cursor-pointer rounded-lg border border-border bg-surface px-2 text-ink"
            >
              <option value="system">System theme</option>
              <option value="light">Light theme</option>
              <option value="dark">Dark theme</option>
            </select>
            <a href="#book" className="btn-primary button-sm hidden sm:inline-flex">
              Book a session
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
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
          className={`menu-open fixed inset-0 z-40 bg-bg/95 pt-24 backdrop-blur-md lg:hidden`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <ul className="flex flex-col gap-2 px-6">
            {links.map((link, i) => (
              <li
                key={link.id}
                className="menu-link"
                style={{ transitionDelay: `${Math.min(i * 60, 400)}ms` }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="heading-3 block py-2 text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="menu-link" style={{ transitionDelay: "400ms" }}>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="btn-primary button-md mt-4"
              >
                Book a session
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
