import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy — Md Sonet Mia",
  description: "Privacy policy for mdsonetmia.vercel.app.",
};

export default function Privacy() {
  return (
    <main className="bg-bg py-32">
      <div className="mx-auto max-w-[680px] px-6">
        <div className="gold-rule" aria-hidden="true" />
        <h1 className="heading-2 mt-4 text-ink">Privacy policy</h1>
        <p className="body-3 mt-6">
          This website does not run analytics, advertising trackers, or accounts. No personal
          data is collected or stored by this site itself.
        </p>
        <p className="body-3 mt-4">
          If you use the booking form, your message opens in WhatsApp with the details you typed,
          so you can send it to Sonet directly. Nothing is sent anywhere until you press send in
          WhatsApp, and this site keeps no copy of your message.
        </p>
        <p className="body-3 mt-4">
          Links to other sites, including YouTube, Facebook, Sweet Smart Calendar, PromptEx,
          Sweet CGI Lab, and SiteIncome Lab, take you to those services, and their own privacy
          policies apply there.
        </p>
        <p className="body-3 mt-4">
          Your theme choice (light, dark, or system) is stored only in your own browser.
        </p>
        <p className="body-3 mt-4">
          Questions about this policy can be sent to md.Sonet.mia2@gmail.com.
        </p>
        <Link href="/" className="text-link button-sm mt-8 inline-block">
          Back to the home page
        </Link>
      </div>
    </main>
  );
}
