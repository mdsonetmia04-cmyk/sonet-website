"use client";

import type { Language } from "@/lib/appearance-preferences";
import { useContent } from "@/lib/useContent";

/**
 * Website Language — English / বাংলা segmented control.
 * Language names are endonyms, shown in their own script in both
 * languages, so they are rendered literally rather than from strings.
 */
export function LanguageSelector({
  value,
  onChange,
}: {
  value: Language;
  onChange: (lang: Language) => void;
}) {
  const c = useContent();

  const options: { value: Language; label: string }[] = [
    { value: "en", label: "English" },
    { value: "bn", label: "বাংলা" },
  ];

  return (
    <div>
      <p className="title-2">{c.ui.websiteLanguageLabel}</p>
      <div
        role="group"
        aria-label={c.ui.websiteLanguageLabel}
        className="segmented mt-3 w-full"
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            aria-pressed={value === opt.value}
            onClick={() => onChange(opt.value)}
            className={`segmented-btn flex-1 ${value === opt.value ? "is-active" : ""}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
