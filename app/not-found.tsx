"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLang();
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-bg px-6 text-center">
      <div className="gold-rule" aria-hidden="true" />
      <h1 className="heading-1 mt-6 text-ink">{t("misc.notFoundHeading")}</h1>
      <p className="body-2 mt-4 max-w-[480px]">{t("misc.notFoundBody")}</p>
      <Link href="/" className="btn-primary button-md mt-8">
        {t("misc.notFoundBack")}
      </Link>
    </main>
  );
}
