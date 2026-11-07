import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: `Projects | ${content.personal.name}`,
  description: content.projects.intro,
  alternates: { canonical: "https://sonet-website.vercel.app/projects" },
};

export default function Projects() {
  return <ProjectsPage />;
}
