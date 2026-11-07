"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  APPEARANCE_DEFAULTS,
  APPEARANCE_STORAGE_KEYS,
  applyAppearanceAttributes,
  readStoredPreferences,
  resolveColorMode,
  resolveReducedMotion,
  storeAllPreferences,
  storePreference,
  type AppearancePreferences,
  type ColorMode,
  type Language,
  type MotionPreference,
  type ResolvedColorMode,
  type TextSize,
  type ThemeVariant,
} from "@/lib/appearance-preferences";

export type AppearanceContextValue = AppearancePreferences & {
  /** Resolved "light" | "dark" — "system" resolved against the OS. */
  resolvedColorMode: ResolvedColorMode;
  /** Effective reduced motion (stored "reduced", or OS preference when unset). */
  reducedMotion: boolean;
  setSelectedTheme: (theme: ThemeVariant) => void;
  setColorMode: (mode: ColorMode) => void;
  setLanguage: (lang: Language) => void;
  setTextSize: (size: TextSize) => void;
  setMotionPreference: (motion: MotionPreference) => void;
  /** Restore warm-editorial / system / en / standard / standard. */
  resetToDefaults: () => void;
};

const AppearanceContext = createContext<AppearanceContextValue | null>(null);

// useLayoutEffect on the client (runs before first paint, so a stored
// preference applies without a visible flash); useEffect on the server
// (avoids the SSR useLayoutEffect warning).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function prefersDark(): boolean {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * Single source of truth for all appearance preferences. Holds the five
 * stored preferences plus the resolved color mode, persists every change
 * to localStorage immediately, and keeps the <html> data attributes
 * (and lang) in sync on every change.
 *
 * State starts at the defaults (matching the server render, so hydration
 * never mismatches) and is hydrated from localStorage before first paint;
 * the inline pre-paint script in app/layout.tsx already set the <html>
 * attributes even earlier, so there is no theme/language flash.
 */
export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<AppearancePreferences>(APPEARANCE_DEFAULTS);
  const [systemDark, setSystemDark] = useState<boolean>(false);
  // null = no stored value seen yet (OS preference decides motion);
  // set to the stored value once storage has been read.
  const [storedMotion, setStoredMotion] = useState<MotionPreference | null>(null);

  // Read stored preferences (with legacy migration) before first paint.
  useIsomorphicLayoutEffect(() => {
    setPrefs(readStoredPreferences());
    setSystemDark(prefersDark());
    try {
      const raw = localStorage.getItem(APPEARANCE_STORAGE_KEYS.motionPreference);
      setStoredMotion(
        raw === "standard" || raw === "reduced" ? raw : null,
      );
    } catch {
      setStoredMotion(null);
    }
  }, []);

  // When colorMode is "system", follow the device live.
  useEffect(() => {
    let mq: MediaQueryList | null = null;
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    try {
      mq = window.matchMedia("(prefers-color-scheme: dark)");
      setSystemDark(mq.matches);
      mq.addEventListener("change", onChange);
    } catch {
      /* matchMedia unavailable — stay on the last known value */
    }
    return () => {
      try {
        mq?.removeEventListener("change", onChange);
      } catch {
        /* ignore */
      }
    };
  }, []);

  const resolvedColorMode = resolveColorMode(prefs.colorMode, systemDark);
  const reducedMotion = resolveReducedMotion(storedMotion, prefersReducedMotion());

  // Keep <html> attributes + lang in sync on every change.
  useEffect(() => {
    applyAppearanceAttributes({ prefs, resolvedColorMode, reducedMotion });
  }, [prefs, resolvedColorMode, reducedMotion]);

  const update = useCallback(
    <K extends keyof AppearancePreferences>(
      key: K,
      value: AppearancePreferences[K],
    ) => {
      storePreference(key, value);
      setPrefs((prev) => ({ ...prev, [key]: value }));
      if (key === "motionPreference") {
        setStoredMotion(value as MotionPreference);
      }
    },
    [],
  );

  const resetToDefaults = useCallback(() => {
    storeAllPreferences(APPEARANCE_DEFAULTS);
    setPrefs(APPEARANCE_DEFAULTS);
    setStoredMotion(APPEARANCE_DEFAULTS.motionPreference);
  }, []);

  const value = useMemo<AppearanceContextValue>(
    () => ({
      ...prefs,
      resolvedColorMode,
      reducedMotion,
      setSelectedTheme: (theme) => update("selectedTheme", theme),
      setColorMode: (mode) => update("colorMode", mode),
      setLanguage: (lang) => update("language", lang),
      setTextSize: (size) => update("textSize", size),
      setMotionPreference: (motion) => update("motionPreference", motion),
      resetToDefaults,
    }),
    [prefs, resolvedColorMode, reducedMotion, update, resetToDefaults],
  );

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
}

/** Read the appearance context; null when rendered outside the provider. */
export function useAppearanceOptional(): AppearanceContextValue | null {
  return useContext(AppearanceContext);
}

/** Read the appearance context; throws when rendered outside the provider. */
export function useAppearance(): AppearanceContextValue {
  const ctx = useContext(AppearanceContext);
  if (!ctx) {
    throw new Error("useAppearance must be used inside <AppearanceProvider>");
  }
  return ctx;
}
