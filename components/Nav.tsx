"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Download, Menu, X } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { SettingsButton } from "./appearance/SettingsButton";

export function Nav() {
  const c = useContent();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

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
            <span className="hidden sm:inline-flex">
              <Link href="/contact#booking" className="btn-primary button-sm">
                <CalendarCheck size={16} aria-hidden="true" />
                {c.ui.bookSession}
              </Link>
            </span>
            <span className="hidden lg:inline-flex">
              <a
                href="/cv/Md-Sonet-Mia-CV.pdf"
                download
                className="btn-secondary button-sm"
              >
                <Download size={16} aria-hidden="true" />
                {c.ui.downloadCv}
              </a>
            </span>
            <SettingsButton onOpen={() => setOpen(false)} />
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
              <Link
                href="/contact#booking"
                onClick={() => setOpen(false)}
                className="btn-primary button-md w-full"
              >
                <CalendarCheck size={16} aria-hidden="true" />
                {c.ui.bookSession}
              </Link>
            </li>
            <li className="menu-link mt-3" style={{ transitionDelay: "440ms" }}>
              <a
                href="/cv/Md-Sonet-Mia-CV.pdf"
                download
                className="btn-secondary button-md w-full"
              >
                <Download size={16} aria-hidden="true" />
                {c.ui.downloadCv}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
