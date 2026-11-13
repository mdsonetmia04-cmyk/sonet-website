import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { LeadershipPage } from "@/components/pages/LeadershipPage";

export const metadata: Metadata = {
  title: `Leadership | ${content.personal.name}`,
  description: content.leadership.intro,
  alternates: { canonical: `${siteUrl}/leadership` },
};

export default function Leadership() {
  return <LeadershipPage />;
}
