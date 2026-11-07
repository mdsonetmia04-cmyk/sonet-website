"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageContext";

export function TermsContent() {
  const { t } = useLang();
  return (
    <main className="bg-bg pb-32 pt-40 md:py-32">
      <div className="mx-auto max-w-[680px] px-6">
        <div className="gold-rule" aria-hidden="true" />
        <h1 className="heading-2 mt-4 text-ink">{t("terms.title")}</h1>
        <p className="body-3 mt-6">{t("terms.para1")}</p>
        <p className="body-3 mt-4">{t("terms.para2")}</p>
        <p className="body-3 mt-4">{t("terms.para3")}</p>
        <p className="body-3 mt-4">{t("terms.para4")}</p>
        <Link href="/" className="text-link button-sm mt-8 inline-block">
          {t("misc.notFoundBack")}
        </Link>
      </div>
    </main>
  );
}
