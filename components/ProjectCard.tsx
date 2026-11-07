"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { useContent } from "@/lib/useContent";

/** Status badge — flat colours only. Concept is never dressed up as live. */
export function StatusBadge({ status }: { status: Project["status"] }) {
  const c = useContent();
  const label =
    status === "Live"
      ? c.ui.statusLive
      : status === "In Development"
        ? c.ui.statusInDevelopment
        : c.ui.statusConcept;
  const cls =
    status === "Live"
      ? "bg-ink text-bg"
      : status === "In Development"
        ? "bg-gold text-on-gold"
        : "border border-border bg-surface-2 text-muted";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>
      {label}
    </span>
  );
}

/**
 * Project card. Projects with a video show the playable YouTube embed
 * as the cover; the rest keep the typographic cover (no fake screenshots).
 */
export function ProjectCard({ project }: { project: Project }) {
  const c = useContent();
  return (
    <article className="card card-hover flex flex-col">
      {project.videoId ? (
        <div className="aspect-[16/9] overflow-hidden rounded-lg">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
            title={project.videoTitle ?? project.title}
            className="h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : (
        <Link
          href={`/projects/${project.id}`}
          aria-label={`${project.title} — ${c.ui.viewProject}`}
          className="block"
        >
          <div className="project-cover flex aspect-[16/9] flex-col justify-between rounded-lg bg-ink p-5">
            <span className="font-display text-5xl font-bold text-gold" aria-hidden="true">
              {project.title.charAt(0)}
            </span>
            <span className="font-display text-lg font-semibold leading-snug text-bg">
              {project.title}
            </span>
          </div>
        </Link>
      )}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="chip">{project.category}</span>
        <StatusBadge status={project.status} />
        {project.placeholder ? (
          <span className="caption-2 text-muted">{c.ui.conceptNote}</span>
        ) : null}
      </div>
      <h3 className="heading-4 mt-4">
        <Link href={`/projects/${project.id}`} className="hover:text-gold">
          {project.title}
        </Link>
      </h3>
      <p className="body-3 mt-2 flex-1">{project.shortDescription}</p>
      <Link
        href={`/projects/${project.id}`}
        className="mt-5 inline-flex items-center gap-1.5 font-semibold text-gold hover:underline"
      >
        {c.ui.viewProject}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
