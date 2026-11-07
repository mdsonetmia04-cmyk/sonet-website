"use client";

import { Check } from "lucide-react";
import type { ThemeVariant } from "@/lib/appearance-preferences";
import { useContent } from "@/lib/useContent";

/**
 * Theme picker — two selectable preview cards with CSS-drawn mini
 * interface previews (no images). The miniatures are schematic:
 * Warm Editorial is drawn in its defining palette (warm cream,
 * charcoal, bronze); Original is drawn in its own palette
 * (warm cream, navy, gold).
 */
export function ThemeSelector({
  value,
  onChange,
}: {
  value: ThemeVariant;
  onChange: (theme: ThemeVariant) => void;
}) {
  const c = useContent();

  const themes: {
    value: ThemeVariant;
    name: string;
    desc: string;
    isDefault: boolean;
    preview: React.ReactNode;
  }[] = [
    {
      value: "warm-editorial",
      name: c.ui.themeWarmName,
      desc: c.ui.themeWarmDesc,
      isDefault: true,
      preview: (
        <div
          className="flex h-16 flex-col gap-1.5 overflow-hidden rounded-lg p-2"
          style={{ backgroundColor: "#faf5ef" }}
          aria-hidden="true"
        >
          <div className="h-2 w-3/4 rounded-full" style={{ backgroundColor: "#26221a" }} />
          <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: "#e6dcc6" }} />
          <div className="h-1.5 w-2/3 rounded-full" style={{ backgroundColor: "#e6dcc6" }} />
          <div className="mt-auto h-2 w-8 rounded-full" style={{ backgroundColor: "#a66c1d" }} />
        </div>
      ),
    },
    {
      value: "original",
      name: c.ui.themeOriginalName,
      desc: c.ui.themeOriginalDesc,
      isDefault: false,
      preview: (
        <div
          className="flex h-16 flex-col gap-1.5 overflow-hidden rounded-lg p-2 ring-1 ring-black/10"
          style={{ backgroundColor: "#ffffff" }}
          aria-hidden="true"
        >
          <div className="h-2 w-3/4 rounded-full" style={{ backgroundColor: "#172b3b" }} />
          <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: "#ddd5c4" }} />
          <div className="h-1.5 w-2/3 rounded-full" style={{ backgroundColor: "#ddd5c4" }} />
          <div className="mt-auto h-2 w-8 rounded-full" style={{ backgroundColor: "#b58b5b" }} />
        </div>
      ),
    },
  ];

  return (
    <div>
      <p className="title-2">{c.ui.themeSectionLabel}</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {themes.map((theme) => {
          const selected = value === theme.value;
          return (
            <button
              key={theme.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(theme.value)}
              className={`relative rounded-xl border p-3 text-left transition-colors duration-200 motion-reduce:transition-none ${
                selected
                  ? "border-gold bg-gold-soft/50"
                  : "border-border bg-surface hover:border-gold/60"
              }`}
            >
              {selected ? (
                <span
                  className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-on-gold"
                  aria-hidden="true"
                >
                  <Check size={12} strokeWidth={3} />
                </span>
              ) : null}
              {theme.preview}
              <span className="mt-2.5 flex items-center gap-2">
                <span className="text-sm font-semibold leading-5 text-ink">
                  {theme.name}
                </span>
                {theme.isDefault ? (
                  <span className="rounded-md bg-gold-soft px-1.5 py-0 text-[0.6875rem] font-medium leading-4 text-ink">
                    {c.ui.themeDefaultBadge}
                  </span>
                ) : null}
              </span>
              <span className="caption-1 mt-0.5 block">{theme.desc}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
