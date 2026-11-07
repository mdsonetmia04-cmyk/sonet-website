/**
 * Appearance preferences — the single source of truth for the site's
 * theme/appearance system (theme variant, color mode, language, text
 * size, motion). Shared contract with the styling (globals.css /
 * components) and nav/panel agents: exact localStorage key names,
 * value vocabularies, defaults, and <html> data attributes.
 *
 * All storage access is wrapped in try/catch: the site must never crash
 * when localStorage is unavailable (private mode, blocked cookies, …).
 */

// ---------------------------------------------------------------------------
// Types & vocabularies
// ---------------------------------------------------------------------------

export type ThemeVariant = "warm-editorial" | "original";
export type ColorMode = "system" | "light" | "dark";
export type ResolvedColorMode = "light" | "dark";
export type Language = "en" | "bn";
export type TextSize = "standard" | "comfortable";
export type MotionPreference = "standard" | "reduced";

export interface AppearancePreferences {
  selectedTheme: ThemeVariant;
  colorMode: ColorMode;
  language: Language;
  textSize: TextSize;
  motionPreference: MotionPreference;
}

// ---------------------------------------------------------------------------
// Storage keys — EXACT names; do not rename without updating every agent.
// ---------------------------------------------------------------------------

export const APPEARANCE_STORAGE_KEYS = {
  selectedTheme: "selectedTheme",
  colorMode: "colorMode",
  language: "language",
  textSize: "textSize",
  motionPreference: "motionPreference",
} as const satisfies Record<keyof AppearancePreferences, string>;

/** Legacy keys from the pre-appearance-system site, migrated on first load. */
export const LEGACY_STORAGE_KEYS = {
  /** "system" | "light" | "dark" — migrated to `colorMode`. */
  theme: "sonet-theme",
  /** "en" | "bn" — migrated to `language`. */
  language: "sonet-lang",
} as const;

// ---------------------------------------------------------------------------
// Defaults for first-time visitors.
// Warm Editorial is the default theme REGARDLESS of system light/dark;
// "system" only determines the resolved color mode of the selected theme.
// ---------------------------------------------------------------------------

export const APPEARANCE_DEFAULTS: AppearancePreferences = {
  selectedTheme: "warm-editorial",
  colorMode: "system",
  language: "en",
  textSize: "standard",
  motionPreference: "standard",
};

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const THEME_VARIANTS: readonly string[] = ["warm-editorial", "original"];
const COLOR_MODES: readonly string[] = ["system", "light", "dark"];
const LANGUAGES: readonly string[] = ["en", "bn"];
const TEXT_SIZES: readonly string[] = ["standard", "comfortable"];
const MOTION_PREFERENCES: readonly string[] = ["standard", "reduced"];

function isOneOf<T extends string>(
  value: unknown,
  allowed: readonly string[],
): value is T {
  return typeof value === "string" && allowed.includes(value);
}

export function isValidThemeVariant(value: unknown): value is ThemeVariant {
  return isOneOf<ThemeVariant>(value, THEME_VARIANTS);
}

export function isValidColorMode(value: unknown): value is ColorMode {
  return isOneOf<ColorMode>(value, COLOR_MODES);
}

export function isValidLanguage(value: unknown): value is Language {
  return isOneOf<Language>(value, LANGUAGES);
}

export function isValidTextSize(value: unknown): value is TextSize {
  return isOneOf<TextSize>(value, TEXT_SIZES);
}

export function isValidMotionPreference(
  value: unknown,
): value is MotionPreference {
  return isOneOf<MotionPreference>(value, MOTION_PREFERENCES);
}

// ---------------------------------------------------------------------------
// Storage helpers (never throw)
// ---------------------------------------------------------------------------

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — preference lives in memory only */
  }
}

/** Persist one preference immediately. */
export function storePreference<K extends keyof AppearancePreferences>(
  key: K,
  value: AppearancePreferences[K],
): void {
  writeStored(APPEARANCE_STORAGE_KEYS[key], value);
}

/** Persist every preference at once (used by resetToDefaults). */
export function storeAllPreferences(prefs: AppearancePreferences): void {
  (Object.keys(APPEARANCE_STORAGE_KEYS) as (keyof AppearancePreferences)[]).forEach(
    (key) => storePreference(key, prefs[key]),
  );
}

// ---------------------------------------------------------------------------
// Loading + migration
// ---------------------------------------------------------------------------

/**
 * Read all five preferences from localStorage, validating every value.
 * Any invalid/missing value falls back to its default.
 *
 * Migration (first load only): when a NEW key is absent, a matching LEGACY
 * key is migrated if it holds a valid value — `sonet-theme` → colorMode,
 * `sonet-lang` → language — and the migrated value is written to the new
 * key so later loads read it directly. A present-but-invalid new key is
 * NOT migrated; it falls back to its default.
 */
export function readStoredPreferences(): AppearancePreferences {
  const rawSelectedTheme = readStored(APPEARANCE_STORAGE_KEYS.selectedTheme);
  const rawColorMode = readStored(APPEARANCE_STORAGE_KEYS.colorMode);
  const rawLanguage = readStored(APPEARANCE_STORAGE_KEYS.language);
  const rawTextSize = readStored(APPEARANCE_STORAGE_KEYS.textSize);
  const rawMotion = readStored(APPEARANCE_STORAGE_KEYS.motionPreference);

  let colorMode: ColorMode;
  if (isValidColorMode(rawColorMode)) {
    colorMode = rawColorMode;
  } else if (rawColorMode === null) {
    // New key absent — try the legacy key.
    const legacy = readStored(LEGACY_STORAGE_KEYS.theme);
    if (isValidColorMode(legacy)) {
      colorMode = legacy;
      writeStored(APPEARANCE_STORAGE_KEYS.colorMode, legacy);
    } else {
      colorMode = APPEARANCE_DEFAULTS.colorMode;
    }
  } else {
    colorMode = APPEARANCE_DEFAULTS.colorMode;
  }

  let language: Language;
  if (isValidLanguage(rawLanguage)) {
    language = rawLanguage;
  } else if (rawLanguage === null) {
    const legacy = readStored(LEGACY_STORAGE_KEYS.language);
    if (isValidLanguage(legacy)) {
      language = legacy;
      writeStored(APPEARANCE_STORAGE_KEYS.language, legacy);
    } else {
      language = APPEARANCE_DEFAULTS.language;
    }
  } else {
    language = APPEARANCE_DEFAULTS.language;
  }

  return {
    selectedTheme: isValidThemeVariant(rawSelectedTheme)
      ? rawSelectedTheme
      : APPEARANCE_DEFAULTS.selectedTheme,
    colorMode,
    language,
    textSize: isValidTextSize(rawTextSize)
      ? rawTextSize
      : APPEARANCE_DEFAULTS.textSize,
    motionPreference: isValidMotionPreference(rawMotion)
      ? rawMotion
      : APPEARANCE_DEFAULTS.motionPreference,
  };
}

// ---------------------------------------------------------------------------
// Resolution
// ---------------------------------------------------------------------------

/** Resolve "system" against the OS color scheme; light/dark pass through. */
export function resolveColorMode(
  colorMode: ColorMode,
  systemPrefersDark: boolean,
): ResolvedColorMode {
  if (colorMode === "system") return systemPrefersDark ? "dark" : "light";
  return colorMode;
}

/**
 * Effective reduced motion: the stored preference is "reduced", OR there is
 * no stored preference (absent/invalid) AND the OS prefers reduced motion.
 * An explicit stored "standard" wins over the OS preference.
 */
export function resolveReducedMotion(
  motionPreference: MotionPreference | null,
  systemPrefersReducedMotion: boolean,
): boolean {
  if (motionPreference === "reduced") return true;
  if (motionPreference === "standard") return false;
  return systemPrefersReducedMotion;
}

// ---------------------------------------------------------------------------
// Applying preferences to <html>
// ---------------------------------------------------------------------------

export interface ResolvedAppearance {
  prefs: AppearancePreferences;
  resolvedColorMode: ResolvedColorMode;
  reducedMotion: boolean;
}

/**
 * Set every appearance attribute on <html> (and <html lang>) in one place,
 * so the pre-paint script and the runtime provider can never drift apart:
 *  - data-theme-variant: "warm-editorial" | "original"
 *  - data-color-mode: RESOLVED "light" | "dark"
 *  - data-theme: same resolved value (legacy attribute, kept for compat)
 *  - data-text-size: "standard" | "comfortable"
 *  - data-motion: "reduced" | "standard"
 *  - lang: "en" | "bn"
 */
export function applyAppearanceAttributes({
  prefs,
  resolvedColorMode,
  reducedMotion,
}: ResolvedAppearance): void {
  if (typeof document === "undefined") return;
  try {
    const el = document.documentElement;
    el.setAttribute("data-theme-variant", prefs.selectedTheme);
    el.setAttribute("data-color-mode", resolvedColorMode);
    el.setAttribute("data-theme", resolvedColorMode);
    el.setAttribute("data-text-size", prefs.textSize);
    el.setAttribute("data-motion", reducedMotion ? "reduced" : "standard");
    el.setAttribute("lang", prefs.language);
  } catch {
    /* DOM unavailable — nothing to apply */
  }
}
