import type { Metadata } from "next";
import { content } from "@/lib/content";
import { LeadershipPage } from "@/components/pages/LeadershipPage";

export const metadata: Metadata = {
  title: `Leadership | ${content.personal.name}`,
  description: content.leadership.intro,
  alternates: { canonical: "https://sonet-website.vercel.app/leadership" },
};

export default function Leadership() {
  return <LeadershipPage />;
}
