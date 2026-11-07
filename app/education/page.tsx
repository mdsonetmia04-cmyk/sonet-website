import type { Metadata } from "next";
import { content } from "@/lib/content";
import { EducationPage } from "@/components/pages/EducationPage";

export const metadata: Metadata = {
  title: `Education | ${content.personal.name}`,
  description: content.education.intro,
  alternates: { canonical: "https://sonet-website.vercel.app/education" },
};

export default function Education() {
  return <EducationPage />;
}
