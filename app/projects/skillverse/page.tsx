"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Old slug for the SkillVerse project. Server redirects don't work in a
// static export, so this page redirects in the browser instead.
export default function SkillverseRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/projects/skillverse-by-sonet");
  }, [router]);
  return (
    <main className="mx-auto w-full max-w-[720px] px-4 py-24 text-center">
      <p className="body-2">
        Redirecting to SkillVerse…{" "}
        <Link href="/projects/skillverse-by-sonet" className="text-link font-semibold">
          Open SkillVerse
        </Link>
      </p>
    </main>
  );
}
