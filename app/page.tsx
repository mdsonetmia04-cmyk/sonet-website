import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { canonical: `${siteUrl}/` },
};

export default function Home() {
  return <HomePage />;
}
