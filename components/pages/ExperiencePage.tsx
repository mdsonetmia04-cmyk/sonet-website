"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Briefcase } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function ExperiencePage() {
  const c = useContent();
  const e = c.experience;
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={e.label} heading={e.heading} intro={e.intro} />

        {/* Overview + stats */}
        <section className="bg-bg py-10 md:py-14">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="caption-1 uppercase tracking-[0.14em] text-gold">{e.title}</p>
                  <p className="heading-3 mt-2">{e.yearsExperience} · {e.studentsPerDay}</p>
                  <p className="body-2 mt-2">{e.materialsPerMonth}</p>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {e.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-display text-3xl font-bold text-ink tabular md:text-4xl">{s.figure}</p>
                      <p className="caption-2 mt-1 text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Responsibilities */}
            <div className="mt-12">
              <h2 className="heading-3">{c.ui.experienceResponsibilities}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {e.responsibilities.map((r) => (
                  <li key={r} className="chip !px-3 !py-1.5 !text-sm">{r}</li>
                ))}
              </ul>
            </div>

            {/* Roles */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {e.roles.map((role) => (
                <article key={role.organisation} className="card card-hover">
                  <span className="icon-tile">
                    <Briefcase size={24} aria-hidden="true" />
                  </span>
                  <h3 className="heading-4 mt-5">{role.title}</h3>
                  <p className="title-2 mt-1">{role.organisation}</p>
                  <p className="caption-1 mt-1">{role.dates}</p>
                  <ul className="mt-4 space-y-2">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        <span className="body-4">{r}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Services */}
            <div className="mt-14">
              <h2 className="heading-3">{c.ui.experienceServices}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {e.services.map((s) => (
                  <li key={s} className="card !py-4">
                    <span className="title-2">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teaching photos */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {e.teachingImages.map((img) => (
                <figure key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full rounded-xl border border-border object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Session cards */}
        <Section id="sessions" index="01" label={e.label} heading={c.contact.bookingHeading} intro={c.contact.bookingIntro} band>
          <div className="grid gap-6 md:grid-cols-3">
            {e.sessions.map((s) => (
              <article key={s.title} className="card card-hover flex flex-col">
                <span className="icon-tile">
                  <Clock size={24} aria-hidden="true" />
                </span>
                <h3 className="heading-4 mt-5">{s.title}</h3>
                <p className="caption-1 mt-1">{s.durationLabel}</p>
                <p className="body-3 mt-3 flex-1">{s.description}</p>
                <p className="title-2 mt-4">{s.price}</p>
                <Link href="/contact#booking" className="btn-secondary button-sm mt-4">
                  {c.contact.bookingHeading}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Section>

        {/* Acting / theatre */}
        <Section id="acting" index="02" label={e.acting.label} heading={e.acting.heading} intro={e.acting.intro}>
          <p className="title-1 mb-6">{e.acting.playTitle}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {e.acting.cards.map((card) => (
              <article key={card.title} className="card">
                <h3 className="title-1">{card.title}</h3>
                <p className="body-4 mt-2">{card.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {e.acting.images.map((img) => (
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
                {img.caption ? (
                  <figcaption className="caption-1 px-2 py-3">{img.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
