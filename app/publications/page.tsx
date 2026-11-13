import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { PublicationsPage } from "@/components/pages/PublicationsPage";

export const metadata: Metadata = {
  title: `Books & Drafts | ${content.personal.name}`,
  description: content.publications.intro,
  alternates: { canonical: `${siteUrl}/publications` },
};

export default function Publications() {
  return <PublicationsPage />;
}
