import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — Md Sonet Mia",
  description: "Terms of use for mdsonetmia.vercel.app.",
};

export default function Terms() {
  return (
    <main className="bg-bg py-32">
      <div className="mx-auto max-w-[680px] px-6">
        <div className="gold-rule" aria-hidden="true" />
        <h1 className="heading-2 mt-4 text-ink">Terms</h1>
        <p className="body-3 mt-6">
          The content on this site, including text, photos, and project descriptions, belongs to
          Md Sonet Mia unless stated otherwise. You may share links to this site freely. Please do
          not copy photos or text and present them as your own work.
        </p>
        <p className="body-3 mt-4">
          Booking a session through this site sends your request to Sonet on WhatsApp. Session
          times, fees if any, and availability are confirmed with Sonet directly. No payment is
          taken on this site.
        </p>
        <p className="body-3 mt-4">
          Links to other sites and services are provided for convenience. Sonet is not responsible
          for the content or availability of those external sites.
        </p>
        <p className="body-3 mt-4">
          Questions about these terms can be sent to md.Sonet.mia2@gmail.com.
        </p>
        <Link href="/" className="text-link button-sm mt-8 inline-block">
          Back to the home page
        </Link>
      </div>
    </main>
  );
}
