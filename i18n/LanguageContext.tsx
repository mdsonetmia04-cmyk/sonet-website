"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { t as lookup, type Lang } from "./strings";

/** localStorage key for the persisted language choice. */
export const LANG_STORAGE_KEY = "sonet-lang";

export type LanguageContextValue = {
  /** Current site language ("en" or "bn"). */
  lang: Lang;
  /** Switch language; persists to localStorage and sets <html lang>. */
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Read the stored choice before first paint. The inline script in
  // app/layout.tsx already set <html lang> even earlier, so screen
  // readers and the first paint see the right language.
  useIsomorphicLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === "en" || stored === "bn") setLangState(stored);
    } catch {
      /* storage unavailable — stay on English */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang: setLangState,
    t: (key: string) => lookup(key, lang),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}
