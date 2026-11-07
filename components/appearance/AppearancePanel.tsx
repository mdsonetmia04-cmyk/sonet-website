"use client";

import type { RefObject } from "react";
import { RotateCcw, X } from "lucide-react";
import { useAppearance } from "@/providers/AppearanceProvider";
import { useLang } from "@/i18n/LanguageContext";
import type { Language } from "@/lib/appearance-preferences";
import { useContent } from "@/lib/useContent";
import { ThemeSelector } from "./ThemeSelector";
import { ColorModeSelector } from "./ColorModeSelector";
import { LanguageSelector } from "./LanguageSelector";
import { AdvancedControls } from "./AdvancedControls";

/**
 * Appearance Settings panel — popover on desktop, bottom sheet on mobile.
 *
 * Rendered inside the header (SettingsButton's relative wrapper):
 *  - desktop (sm+): absolute, right-aligned under the header
 *  - mobile: fixed bottom sheet, full-width with side margins
 *
 * The panel itself owns no open/close state; SettingsButton does.
 * `mounted` drives the enter transition (opacity + slight rise);
 * the transition is disabled under prefers-reduced-motion.
 */
export function AppearancePanel({
  panelRef,
  mounted,
  onClose,
}: {
  panelRef: RefObject<HTMLDivElement | null>;
  mounted: boolean;
  onClose: () => void;
}) {
  const c = useContent();
  const appearance = useAppearance();
  const { setLang } = useLang();

  /**
   * Language lives in AppearanceProvider; LanguageContext delegates to
   * it (useLang().setLang === appearance.setLanguage), so one call
   * updates the stored preference, <html lang>, and all page content.
   */
  function handleLanguageChange(lang: Language) {
    setLang(lang);
  }

  return (
    <>
      {/* Click-outside layer: dimmed on mobile (bottom sheet), invisible on desktop. */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 sm:bg-transparent"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-label={c.ui.appearanceSettings}
        tabIndex={-1}
        className={`fixed inset-x-3 bottom-3 z-50 max-h-[85dvh] overflow-y-auto rounded-2xl border border-border bg-surface text-body shadow-[0_16px_48px_var(--shadow)] outline-none transition-all duration-200 motion-reduce:transition-none sm:absolute sm:inset-x-auto sm:bottom-auto sm:right-0 sm:top-[calc(100%+8px)] sm:max-h-[calc(100dvh-90px)] sm:w-[380px] ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 sm:translate-y-1"
        }`}
      >
        <div className="flex items-start justify-between gap-3 px-5 pt-5">
          <div>
            <h2 className="heading-4">{c.ui.appearanceSettings}</h2>
            <p className="caption-1 mt-1">{c.ui.appearanceSubtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={c.ui.appearanceClose}
            className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-surface-2"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-5 px-5 py-5">
          <ThemeSelector
            value={appearance.selectedTheme}
            onChange={appearance.setSelectedTheme}
          />

          <div className="border-t border-border pt-5">
            <ColorModeSelector
              value={appearance.colorMode}
              onChange={appearance.setColorMode}
            />
          </div>

          <div className="border-t border-border pt-5">
            <LanguageSelector value={appearance.language} onChange={handleLanguageChange} />
          </div>

          <AdvancedControls
            textSize={appearance.textSize}
            onTextSizeChange={appearance.setTextSize}
            motion={appearance.motionPreference}
            onMotionChange={appearance.setMotionPreference}
          />

          <button
            type="button"
            onClick={appearance.resetToDefaults}
            className="btn-secondary button-sm w-full"
          >
            <RotateCcw size={16} aria-hidden="true" />
            {c.ui.resetDefaults}
          </button>
        </div>
      </div>
    </>
  );
}
