"use client";

import Link from "next/link";
import { useContent } from "@/lib/useContent";

export default function NotFound() {
  const c = useContent();
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-bg px-6 text-center">
      <div className="gold-rule mx-auto" aria-hidden="true" />
      <h1 className="heading-1 mt-6 text-ink">{c.notFound.heading}</h1>
      <p className="body-2 mt-4 max-w-[480px]">{c.notFound.body}</p>
      <Link href={c.notFound.backHref} className="btn-primary button-md mt-8">
        {c.notFound.backLabel}
      </Link>
    </main>
  );
}
