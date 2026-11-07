"use client";

import type { MotionPreference, TextSize } from "@/lib/appearance-preferences";
import { useContent } from "@/lib/useContent";

/**
 * Advanced Appearance — Text Size and Motion. Visually secondary:
 * grouped in a quiet surface-2 panel below the main sections.
 */
export function AdvancedControls({
  textSize,
  onTextSizeChange,
  motion,
  onMotionChange,
}: {
  textSize: TextSize;
  onTextSizeChange: (size: TextSize) => void;
  motion: MotionPreference;
  onMotionChange: (motion: MotionPreference) => void;
}) {
  const c = useContent();

  const textSizeOptions: { value: TextSize; label: string }[] = [
    { value: "standard", label: c.ui.textSizeStandard },
    { value: "comfortable", label: c.ui.textSizeComfortable },
  ];
  const motionOptions: { value: MotionPreference; label: string }[] = [
    { value: "standard", label: c.ui.motionStandard },
    { value: "reduced", label: c.ui.motionReduced },
  ];

  return (
    <div className="rounded-xl bg-surface-2 p-4">
      <p className="title-2">{c.ui.advancedLabel}</p>

      <p className="mt-4 text-sm font-semibold leading-5 text-body">{c.ui.textSizeLabel}</p>
      <div role="group" aria-label={c.ui.textSizeLabel} className="segmented mt-2 w-full">
        {textSizeOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            aria-pressed={textSize === opt.value}
            onClick={() => onTextSizeChange(opt.value)}
            className={`segmented-btn flex-1 ${textSize === opt.value ? "is-active" : ""}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm font-semibold leading-5 text-body">{c.ui.motionLabel}</p>
      <div role="group" aria-label={c.ui.motionLabel} className="segmented mt-2 w-full">
        {motionOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            aria-pressed={motion === opt.value}
            onClick={() => onMotionChange(opt.value)}
            className={`segmented-btn flex-1 ${motion === opt.value ? "is-active" : ""}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
