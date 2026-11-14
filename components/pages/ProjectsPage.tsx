"use client";

import { useMemo, useState } from "react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

/**
 * Projects gallery, filterable by the categories that actually exist
 * in the content layer (Education, AI tools, Employment, YouTube,
 * YouTube Shorts, Blog). Concepts are labelled as concepts and never
 * presented as live work.
 */
export function ProjectsPage() {
  const c = useContent();
  const [filter, setFilter] = useState<string>("All");
  const categories = useMemo(() => {
    const seen = new Set<string>();
    for (const p of c.projects.items) seen.add(p.category);
    return ["All", ...seen];
  }, [c]);
  const visible =
    filter === "All" ? c.projects.items : c.projects.items.filter((p) => p.category === filter);

  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={c.projects.label} heading={c.projects.heading} intro={c.projects.intro} />
        <section className="bg-bg py-10 md:py-14">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <div
              role="group"
              aria-label={c.ui.filterLabel}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === cat
                      ? "border-ink bg-ink text-bg"
                      : "border-border bg-surface text-body hover:text-ink"
                  }`}
                >
                  {cat === "All" ? c.ui.filterAll : cat}
                </button>
              ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
