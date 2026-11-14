"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function AboutPage() {
  const c = useContent();
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={c.about.label} heading={c.about.heading} />
        <section className="bg-bg py-10 md:py-14">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-8 lg:grid-cols-5 lg:items-start">
            <Reveal className="lg:col-span-2">
              <Image
                src={c.personal.formalImage}
                alt={c.personal.formalImageAlt}
                width={876}
                height={865}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="w-full rounded-2xl border border-border object-cover"
              />
              <dl className="card mt-8 !p-6">
                {c.about.details.map((d) => (
                  <div key={d.label} className="flex justify-between gap-4 border-b border-border py-3 last:border-0 last:pb-0 first:pt-0">
                    <dt className="caption-1 shrink-0">{d.label}</dt>
                    <dd className="title-2 text-right">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="lg:col-span-3">
              <p className="body-2 text-lg leading-relaxed">{c.about.bio}</p>
              <div className="mt-8 border-l-2 border-gold pl-6">
                <p className="title-1">{c.about.mission}</p>
              </div>
              {c.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="body-2 mt-5 leading-relaxed">
                  {p}
                </p>
              ))}
              <h2 className="heading-3 mt-8">{c.ui.aboutValues}</h2>
              <ul className="mt-4 space-y-3">
                {c.about.values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <span className="body-2">{v}</span>
                  </li>
                ))}
              </ul>
              <h2 className="heading-3 mt-8">{c.ui.aboutVision}</h2>
              <p className="body-2 mt-4 leading-relaxed">{c.about.vision}</p>
              <blockquote className="mt-10 rounded-xl bg-surface-2 p-6">
                <Quote size={20} aria-hidden="true" className="text-gold" />
                <p className="font-display mt-3 text-xl font-semibold leading-snug text-ink">
                  {c.about.reflectionQuote}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Languages — levels as words only, no percentages, no bars */}
        <Section id="languages" index="01" label={c.ui.languagesHeading} heading={c.ui.languagesHeading} band>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.skills.languages.map((l) => (
              <li key={l.name} className="card flex items-center justify-between !py-4">
                <span className="title-1">{l.name}</span>
                <span className="chip">{l.level}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Hobbies */}
        <Section id="hobbies" index="02" label={c.hobbies.label} heading={c.hobbies.heading} intro={c.hobbies.intro}>
          <div className="grid gap-6 md:grid-cols-2">
            {c.hobbies.images.map((img) => (
              <figure key={img.src} className="card !p-3">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full rounded-lg object-cover"
                />
                <figcaption className="caption-1 px-2 py-3">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="heading-4">{c.hobbies.activitiesHeading}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.hobbies.activities.map((a) => (
                  <li key={a} className="chip">{a}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="heading-4">{c.hobbies.plantsHeading}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.hobbies.plants.map((p) => (
                  <li key={p} className="chip">{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.hobbies.sports.map((s) => (
              <article key={s.title} className="card">
                <h3 className="title-1">{s.title}</h3>
                <p className="body-4 mt-2">{s.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/publications" className="btn-secondary button-md">
              {c.publications.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
