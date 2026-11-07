"use client";

import Link from "next/link";
import { Download, Mail, MessageCircle, MapPin } from "lucide-react";
import { FacebookIcon, YoutubeIcon, GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useContent } from "@/lib/useContent";

export function Footer() {
  const c = useContent();
  const socials = c.contact.socials;

  function socialIcon(label: string) {
    switch (label) {
      case "Facebook":
        return <FacebookIcon size={18} />;
      case "YouTube":
        return <YoutubeIcon size={18} />;
      case "GitHub":
        return <GithubIcon size={18} />;
      case "WhatsApp":
        return <MessageCircle size={18} aria-hidden="true" />;
      case "LinkedIn":
        return <LinkedinIcon size={18} />;
      default:
        return null;
    }
  }

  return (
    <footer className="border-t border-border bg-surface-2 py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="max-w-[420px] md:col-span-5">
            <p className="font-display text-2xl font-bold text-ink">{c.ui.brand}</p>
            <p className="body-4 mt-4">{c.footer.bio}</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) =>
                s.url ? (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="icon-tile !h-11 !w-11 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {socialIcon(s.label)}
                  </a>
                ) : null
              )}
            </div>
            <a href="/cv/Md-Sonet-Mia-CV.pdf" download className="btn-primary button-sm mt-6">
              <Download size={16} aria-hidden="true" />
              {c.ui.downloadCv}
            </a>
          </div>
          <nav aria-label={c.footer.quickLinksHeading} className="md:col-span-3">
            <p className="title-2 font-semibold">{c.footer.quickLinksHeading}</p>
            <div className="mt-4 flex flex-col gap-2">
              {c.footerNav.map((item) => (
                <Link key={item.id} href={item.href} className="title-2 text-body hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="md:col-span-4">
            <p className="title-2 font-semibold">{c.footer.contactHeading}</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${c.contact.email}`}
                className="flex items-center gap-2 break-all text-body hover:text-ink"
              >
                <Mail size={18} aria-hidden="true" className="shrink-0" /> {c.contact.email}
              </a>
              <a
                href={c.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body hover:text-ink"
              >
                <MessageCircle size={18} aria-hidden="true" className="shrink-0" />{" "}
                {c.contact.whatsappDisplay}
              </a>
              <p className="flex items-center gap-2 text-body">
                <MapPin size={18} aria-hidden="true" className="shrink-0" /> {c.personal.location}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="caption-1">{c.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="caption-1 hover:text-ink">
              {c.ui.privacyLink}
            </Link>
            <Link href="/terms" className="caption-1 hover:text-ink">
              {c.ui.termsLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
