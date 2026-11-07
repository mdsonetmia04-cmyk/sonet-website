"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StatusBadge } from "@/components/ProjectCard";

/**
 * Project detail page. Typographic cover (no fake screenshots),
 * honest status, real results only, external link only where real.
 */
export function ProjectDetailPage({ slug }: { slug: string }) {
  const c = useContent();
  const project = c.projects.items.find((p) => p.id === slug);

  if (!project) {
    return (
      <>
        <Nav />
        <main id="main" className="mx-auto max-w-[1280px] px-6 py-24 text-center md:px-8">
          <h1 className="heading-1">{c.notFound.heading}</h1>
          <p className="body-2 mx-auto mt-4 max-w-[480px]">{c.notFound.body}</p>
          <Link href="/projects" className="btn-primary button-md mt-8">
            {c.ui.backToProjects}
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main id="main">
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-8 md:py-20">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-semibold text-gold hover:underline"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {c.ui.backToProjects}
            </Link>
            <div className="mt-8 flex aspect-[21/9] flex-col justify-between rounded-2xl bg-ink p-6 md:p-10">
              <span className="font-display text-6xl font-bold text-gold md:text-8xl" aria-hidden="true">
                {project.title.charAt(0)}
              </span>
              <span className="font-display text-2xl font-semibold leading-snug text-bg md:text-4xl">
                {project.title}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="chip">{project.category}</span>
              <StatusBadge status={project.status} />
              {project.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <h1 className="heading-1 mt-6">{project.title}</h1>
            <p className="body-2 mt-4 max-w-[720px] text-lg leading-relaxed">
              {project.shortDescription}
            </p>
            {project.placeholder ? (
              <p className="caption-1 mt-4 border-l-2 border-gold pl-4">{c.ui.conceptNote}</p>
            ) : null}
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary button-md mt-8"
              >
                {project.urlLabel ?? c.ui.visitSite}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </section>

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {project.objectives.length > 0 ? (
                <>
                  <h2 className="heading-3">{c.ui.objectives}</h2>
                  <ul className="mt-5 space-y-3">
                    {project.objectives.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <CheckCircle2 size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                        <span className="body-2">{o}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              {project.results.length > 0 ? (
                <>
                  <h2 className="heading-3 mt-12">{c.ui.results}</h2>
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {project.results.map((r) => (
                      <div key={r.label} className="card text-center">
                        <p className="font-display text-3xl font-bold text-ink tabular">{r.figure}</p>
                        <p className="body-4 mt-2 text-muted">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
            <aside className="card h-fit">
              <dl className="space-y-5">
                <div>
                  <dt className="caption-1">{c.ui.role}</dt>
                  <dd className="title-1 mt-1">{project.role}</dd>
                </div>
                <div>
                  <dt className="caption-1">{c.ui.tools}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.tools.length > 0 ? (
                      project.tools.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))
                    ) : (
                      <span className="body-4 text-muted">{c.ui.conceptNote}</span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="caption-1">{c.ui.categoryLabel}</dt>
                  <dd className="title-1 mt-1">{project.category}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
