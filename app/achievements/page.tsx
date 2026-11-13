import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { AchievementsPage } from "@/components/pages/AchievementsPage";

export const metadata: Metadata = {
  title: `Achievements | ${content.personal.name}`,
  description: content.achievements.intro,
  alternates: { canonical: `${siteUrl}/achievements` },
};

export default function Achievements() {
  return <AchievementsPage />;
}
