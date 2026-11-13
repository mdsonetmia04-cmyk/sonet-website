import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: `Contact | ${content.personal.name}`,
  description: content.contact.description,
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function Contact() {
  return <ContactPage />;
}
