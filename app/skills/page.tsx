import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { SkillsPage } from "@/components/pages/SkillsPage";

export const metadata: Metadata = {
  title: `Skills | ${content.personal.name}`,
  description: content.skills.intro,
  alternates: { canonical: `${siteUrl}/skills` },
};

export default function Skills() {
  return <SkillsPage />;
}
