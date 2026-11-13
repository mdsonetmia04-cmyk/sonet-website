import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { ExperiencePage } from "@/components/pages/ExperiencePage";

export const metadata: Metadata = {
  title: `Experience | ${content.personal.name}`,
  description: content.experience.intro,
  alternates: { canonical: `${siteUrl}/experience` },
};

export default function Experience() {
  return <ExperiencePage />;
}
