import type { Metadata } from "next";
import { content } from "@/lib/content";
import { CertificationsPage } from "@/components/pages/CertificationsPage";

export const metadata: Metadata = {
  title: `Certifications | ${content.personal.name}`,
  description: content.certifications.intro,
  alternates: { canonical: "https://sonet-website.vercel.app/certifications" },
};

export default function Certifications() {
  return <CertificationsPage />;
}
