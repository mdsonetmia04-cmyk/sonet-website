import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ProjectDetailPage } from "@/components/pages/ProjectDetailPage";

export function generateStaticParams() {
  return content.projects.items.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = content.projects.items.find((p) => p.id === slug);
  if (!project) {
    return { title: `Project not found | ${content.personal.name}` };
  }
  return {
    title: `${project.title} | ${content.personal.name}`,
    description: project.shortDescription,
    alternates: { canonical: `https://sonet-website.vercel.app/projects/${project.id}` },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
