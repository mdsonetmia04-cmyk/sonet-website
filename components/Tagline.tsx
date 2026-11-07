"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";

/** Mandatory tagline reveal: words move from 30 percent opacity to full colour in reading order. */
export function Tagline() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  // Lines come from i18n (tagline.line1–4); splitting on spaces works for
  // both English and Bangla.
  const words = [
    ...t("tagline.line1").split(" "),
    ...t("tagline.line2").split(" "),
    ...t("tagline.line3").split(" "),
    ...t("tagline.line4").split(" "),
  ];

  // Re-run the reveal whenever the language changes: the words are new
  // spans (unlit), so light them in reading order once the section is in view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>(".tagline-word"));
    const timers: number[] = [];
    const lightAll = () => {
      for (const s of spans) s.classList.add("is-lit");
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lightAll();
      return;
    }
    for (const s of spans) s.classList.remove("is-lit");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          spans.forEach((s, i) => {
            timers.push(window.setTimeout(() => s.classList.add("is-lit"), i * 90));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      for (const id of timers) window.clearTimeout(id);
    };
  }, [lang]);

  return (
    <section aria-label={t("tagline.ariaLabel")} className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div ref={ref} className="max-w-[680px]">
          <p className="heading-1 font-display font-semibold text-ink">
            {words.map((w, i) => (
              <span key={i} className="tagline-word">
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
