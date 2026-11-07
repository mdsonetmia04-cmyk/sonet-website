import type { Metadata } from "next";
import { content } from "@/lib/content";
import { SkillsPage } from "@/components/pages/SkillsPage";

export const metadata: Metadata = {
  title: `Skills | ${content.personal.name}`,
  description: content.skills.intro,
  alternates: { canonical: "https://sonet-website.vercel.app/skills" },
};

export default function Skills() {
  return <SkillsPage />;
}
