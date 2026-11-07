"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { t as lookup, type Lang } from "./strings";
import { useAppearanceOptional } from "@/providers/AppearanceProvider";

/**
 * Legacy localStorage key, kept only as a migration source. The appearance
 * system (lib/appearance-preferences.ts) migrates `sonet-lang` → `language`
 * on first load; LanguageContext itself no longer reads or writes it.
 */
export const LANG_STORAGE_KEY = "sonet-lang";

export type LanguageContextValue = {
  /** Current site language ("en" or "bn"). */
  lang: Lang;
  /** Switch language; persists via the appearance system and sets <html lang>. */
  setLang: (lang: Lang) => void;
  /** Look up a string in the current language (falls back to English). */
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => lookup(key, "en"),
});

// useLayoutEffect on the client (runs before first paint, so a stored
// language applies without a visible flash); useEffect on the server
// (avoids the SSR useLayoutEffect warning).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Language provider backed by the appearance system: AppearanceProvider is
 * the single source of truth for language (stored under the `language` key,
 * default "en", migrated from legacy `sonet-lang`). This provider only
 * adapts that state to the existing useLang() API ({ lang, setLang, t })
 * that lib/useContent.ts and the pages depend on — its return shape is
 * unchanged.
 *
 * Defensive fallback: if rendered outside <AppearanceProvider> (it never
 * is in app/layout.tsx), it manages its own local "en" state so pages
 * still render instead of crashing.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const appearance = useAppearanceOptional();
  const [fallbackLang, setFallbackLang] = useState<Lang>("en");

  // Fallback path only: mirror the legacy stored language before paint.
  useIsomorphicLayoutEffect(() => {
    if (appearance) return;
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === "en" || stored === "bn") setFallbackLang(stored);
    } catch {
      /* storage unavailable — stay on English */
    }
  }, [appearance]);

  // Fallback path only: keep <html lang> and legacy storage in sync.
  useEffect(() => {
    if (appearance) return;
    document.documentElement.lang = fallbackLang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, fallbackLang);
    } catch {
      /* storage unavailable */
    }
  }, [appearance, fallbackLang]);

  const value = useMemo<LanguageContextValue>(() => {
    if (appearance) {
      return {
        lang: appearance.language,
        setLang: appearance.setLanguage,
        t: (key: string) => lookup(key, appearance.language),
      };
    }
    return {
      lang: fallbackLang,
      setLang: setFallbackLang,
      t: (key: string) => lookup(key, fallbackLang),
    };
  }, [appearance, fallbackLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}
