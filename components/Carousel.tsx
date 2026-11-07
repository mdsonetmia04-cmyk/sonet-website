"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";

export type CarouselItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  sub?: string;
};

/**
 * Simple auto-rotating carousel: crossfades every 5s, pauses on hover or
 * focus, never auto-advances under prefers-reduced-motion. Prev/next
 * buttons and dots are fully keyboard reachable.
 */
export function Carousel({
  items,
  intervalMs = 5000,
  label,
}: {
  items: CarouselItem[];
  intervalMs?: number;
  label: string;
}) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || items.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      intervalMs
    );
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, items.length, intervalMs]);

  const current = items[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_24px_var(--shadow)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full">
        {items.map((item, i) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i === index ? undefined : true}
            className={`carousel-fade absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/55 to-transparent px-4 pb-3 pt-10">
          <button
            type="button"
            aria-label={t("carousel.prev")}
            onClick={() => setIndex((index - 1 + items.length) % items.length)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-surface/90 text-ink shadow-[0_8px_24px_var(--shadow)] transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span aria-hidden="true" className="text-xl leading-none">‹</span>
          </button>
          <div className="flex gap-2">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={t("carousel.slide").replace("{n}", String(i + 1))}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-gold" : "w-2.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={t("carousel.next")}
            onClick={() => setIndex((index + 1) % items.length)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-surface/90 text-ink shadow-[0_8px_24px_var(--shadow)] transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span aria-hidden="true" className="text-xl leading-none">›</span>
          </button>
        </div>
      </div>
      {current.caption ? (
        <div className="border-t border-border bg-surface px-5 py-4">
          <p className="title-1">{current.caption}</p>
          {current.sub ? <p className="caption-1 mt-1">{current.sub}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
