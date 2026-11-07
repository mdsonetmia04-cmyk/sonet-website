"use client";

import { GraduationCap, Languages, BookOpen, Target } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function EducationPage() {
  const c = useContent();
  const ed = c.education;
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={ed.label} heading={ed.heading} intro={ed.intro} />

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-5">
                {/* Degree */}
                <article className="card lg:col-span-3">
                  <span className="icon-tile">
                    <GraduationCap size={24} aria-hidden="true" />
                  </span>
                  <h2 className="heading-3 mt-5">{ed.degree.degree}</h2>
                  <p className="title-2 mt-1">{ed.degree.institution}</p>
                  {ed.degree.date ? <p className="caption-1 mt-1">{ed.degree.date}</p> : null}
                  <p className="body-2 mt-4 leading-relaxed">{ed.degree.detail}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
                    <div>
                      <dt className="caption-1">{c.ui.educationCgpa}</dt>
                      <dd className="title-1 mt-1">{ed.degree.cgpa}</dd>
                    </div>
                    <div>
                      <dt className="caption-1">{c.ui.educationCourses}</dt>
                      <dd className="title-1 mt-1">{ed.degree.coursesCompleted}</dd>
                    </div>
                    <div>
                      <dt className="caption-1">{c.ui.educationMedium}</dt>
                      <dd className="title-1 mt-1">{ed.mediumOfInstruction}</dd>
                    </div>
                  </dl>
                </article>

                {/* IELTS */}
                <article className="card lg:col-span-2">
                  <span className="icon-tile">
                    <Languages size={24} aria-hidden="true" />
                  </span>
                  <h2 className="heading-3 mt-5">{ed.ielts.title}</h2>
                  <p className="caption-1 mt-1">
                    {ed.ielts.subtitle} · {ed.ielts.date}
                  </p>
                  <p className="body-2 mt-4 leading-relaxed">{ed.ielts.body}</p>
                  <dl className="mt-6 space-y-3 border-t border-border pt-6">
                    <div className="flex justify-between gap-4">
                      <dt className="caption-1">{ed.ielts.resultLabel}</dt>
                      <dd className="title-1">{ed.ielts.resultValue}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="caption-1">{ed.ielts.nextLabel}</dt>
                      <dd className="title-1">{ed.ielts.nextValue}</dd>
                    </div>
                  </dl>
                </article>
              </div>
            </Reveal>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {ed.stats.map((s) => (
                <div key={s.label} className="card text-center">
                  <p className="font-display text-4xl font-bold text-ink tabular">{s.figure}</p>
                  <p className="body-4 mt-2 text-muted">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="caption-1 mt-10 max-w-[680px]">{ed.timelineNote}</p>
          </div>
        </section>

        {/* Research interests + higher-education goals */}
        <Section id="research" index="01" label={ed.label} heading={c.ui.educationResearchHeading} band>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">
              <span className="icon-tile">
                <BookOpen size={24} aria-hidden="true" />
              </span>
              <h3 className="heading-4 mt-5">{c.ui.educationResearchInterests}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ed.researchInterests.map((r) => (
                  <li key={r} className="chip">{r}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <span className="icon-tile">
                <Target size={24} aria-hidden="true" />
              </span>
              <h3 className="heading-4 mt-5">{c.ui.educationHigherGoals}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ed.higherEducationGoals.map((g) => (
                  <li key={g} className="chip">{g}</li>
                ))}
              </ul>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
