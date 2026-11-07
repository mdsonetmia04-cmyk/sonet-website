import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: `Contact | ${content.personal.name}`,
  description: content.contact.description,
  alternates: { canonical: "https://sonet-website.vercel.app/contact" },
};

export default function Contact() {
  return <ContactPage />;
}
