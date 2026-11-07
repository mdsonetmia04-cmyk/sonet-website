"use client";

import { useEffect, useRef } from "react";

const words = [
  "Teach", "with", "patience.", "Create", "with", "curiosity.", "Earn", "with", "honest", "work.",
  "In", "English", "and", "Bangla,", "for", "learners", "everywhere.",
];

/** Mandatory tagline reveal: words move from 30 percent opacity to full colour in reading order. */
export function Tagline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>(".tagline-word"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const s of spans) s.classList.add("is-lit");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          spans.forEach((s, i) => {
            window.setTimeout(() => s.classList.add("is-lit"), i * 90);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="A note on teaching and creating" className="bg-bg py-16 md:py-24">
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
