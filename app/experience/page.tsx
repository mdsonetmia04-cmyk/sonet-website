import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ExperiencePage } from "@/components/pages/ExperiencePage";

export const metadata: Metadata = {
  title: `Experience | ${content.personal.name}`,
  description: content.experience.intro,
  alternates: { canonical: "https://sonet-website.vercel.app/experience" },
};

export default function Experience() {
  return <ExperiencePage />;
}
