"use client";

import { content, type SiteContent } from "@/lib/content";
import { bn } from "@/i18n/bn";
import { useLang } from "@/i18n/LanguageContext";

/** Returns the full page-content object in the current language:
 *  `content` (EN) or `bn` (Bangla). Both are typed as SiteContent, so
 *  pages read identical paths either way — no key lookups. */
export function useContent(): SiteContent {
  const { lang } = useLang();
  return lang === "bn" ? bn : content;
}
