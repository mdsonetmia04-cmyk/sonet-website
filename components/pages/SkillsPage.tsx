"use client";

import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";

/** Skills page: six categories as clean tags only. No percentage bars,
 *  no levels-as-numbers anywhere — languages carry word levels only. */
export function SkillsPage() {
  const c = useContent();
  const s = c.skills;
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={s.label} heading={s.heading} intro={s.intro} />
        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {s.categories.map((cat) => (
                <article key={cat.category} className="card">
                  <h2 className="heading-4">{cat.category}</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.tags.map((tag) => (
                      <li key={tag} className="chip">{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="card">
                <h2 className="heading-4">{c.ui.digitalToolsHeading}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.digitalTools.map((tool) => (
                    <li key={tool} className="chip">{tool}</li>
                  ))}
                </ul>
              </article>
              <article className="card">
                <h2 className="heading-4">{c.ui.languagesHeading}</h2>
                <ul className="mt-4 space-y-3">
                  {s.languages.map((l) => (
                    <li key={l.name} className="flex items-center justify-between gap-4">
                      <span className="title-2">{l.name}</span>
                      <span className="chip">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
        <Section id="ai-capabilities" index="01" label={s.label} heading={c.ui.skillsAiHeading} band>
          <ul className="flex flex-wrap gap-2">
            {s.aiCapabilities.map((cap) => (
              <li key={cap} className="chip !px-3 !py-1.5 !text-sm">{cap}</li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
