"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Old slug for the PromptEx project. Server redirects don't work in a
// static export, so this page redirects in the browser instead.
export default function PromptExRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/projects/promptex");
  }, [router]);
  return (
    <main className="mx-auto w-full max-w-[720px] px-4 py-24 text-center">
      <p className="body-2">
        Redirecting to PromptEx…{" "}
        <Link href="/projects/promptex" className="text-link font-semibold">
          Open PromptEx
        </Link>
      </p>
    </main>
  );
}
