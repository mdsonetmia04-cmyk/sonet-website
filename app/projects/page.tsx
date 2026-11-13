import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { content } from "@/lib/content";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: `Projects | ${content.personal.name}`,
  description: content.projects.intro,
  alternates: { canonical: `${siteUrl}/projects` },
};

export default function Projects() {
  return <ProjectsPage />;
}
