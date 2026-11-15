"use client";

import { useState } from "react";
import { BadgeCheck, Layers } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/Section";

/**
 * Certifications gallery, filterable by category. Real entries first;
 * aggregate counts are labelled as counts (not named certificates).
 * Category keys are English in both languages (they must match the
 * `category` stored on each item); `certs.filters` holds only the
 * button labels, translated in bn.ts. Index i of filterKeys matches
 * index i of certs.filters. A filter with no certificates shows an
 * explicit empty state instead of a blank page.
 */
export function CertificationsPage() {
  const c = useContent();
  const certs = c.certifications;
  const [filter, setFilter] = useState<string>("All");
  const filterKeys = ["All", "Language", "Leadership", "Digital & AI"];
  const visible =
    filter === "All" ? certs.items : certs.items.filter((item) => item.category === filter);

  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={certs.label} heading={certs.heading} intro={certs.intro} />
        <section className="bg-bg py-10 md:py-14">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <div role="group" aria-label={certs.filterLabel} className="flex flex-wrap gap-2">
              {filterKeys.map((key, i) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={filter === key}
                  onClick={() => setFilter(key)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === key
                      ? "border-ink bg-ink text-bg"
                      : "border-border bg-surface text-body hover:text-ink"
                  }`}
                >
                  {certs.filters[i]}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((item) => {
                return (
                  <article key={item.title} className="card card-hover">
                    <span className="icon-tile">
                      {item.kind === "real" ? (
                        <BadgeCheck size={24} aria-hidden="true" />
                      ) : (
                        <Layers size={24} aria-hidden="true" />
                      )}
                    </span>
                    <h2 className="heading-4 mt-5">{item.title}</h2>
                    {item.date ? <p className="caption-1 mt-1">{item.date}</p> : null}
                    <p className="body-3 mt-3">{item.detail}</p>
                    {item.credential ? (
                      <p className="mt-4">
                        <span className="chip">{item.credential}</span>
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
            {visible.length === 0 ? (
              <p className="body-2 mt-10 text-center text-muted">{c.ui.noCertsInCategory}</p>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
