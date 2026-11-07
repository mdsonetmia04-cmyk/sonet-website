import type { Metadata } from "next";
import { content } from "@/lib/content";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: `About | ${content.personal.name}`,
  description: content.about.bio,
  alternates: { canonical: "https://sonet-website.vercel.app/about" },
};

export default function About() {
  return <AboutPage />;
}
