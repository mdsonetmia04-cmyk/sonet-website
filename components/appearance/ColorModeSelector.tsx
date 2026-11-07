"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import type { ColorMode } from "@/lib/appearance-preferences";
import { useContent } from "@/lib/useContent";

/** Display Mode — System / Light / Dark segmented control. */
export function ColorModeSelector({
  value,
  onChange,
}: {
  value: ColorMode;
  onChange: (mode: ColorMode) => void;
}) {
  const c = useContent();

  const options: {
    value: ColorMode;
    label: string;
    icon: typeof Sun;
  }[] = [
    { value: "system", label: c.ui.themeSystem, icon: Monitor },
    { value: "light", label: c.ui.themeLight, icon: Sun },
    { value: "dark", label: c.ui.themeDark, icon: Moon },
  ];

  return (
    <div>
      <p className="title-2">{c.ui.displayModeLabel}</p>
      <div role="group" aria-label={c.ui.displayModeLabel} className="segmented mt-3 w-full">
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={value === opt.value}
              onClick={() => onChange(opt.value)}
              className={`segmented-btn flex-1 ${value === opt.value ? "is-active" : ""}`}
            >
              <span className="seg-icon" aria-hidden="true">
                <Icon size={16} />
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
