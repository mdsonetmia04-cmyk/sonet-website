"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin, GraduationCap, HeartHandshake, Cpu, Rocket } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

const whatIDoIcons = [GraduationCap, HeartHandshake, Cpu, Rocket];

export function HomePage() {
  const c = useContent();
  const featured = c.projects.items.filter((p) => p.status === "Live");
  const careerPreview = c.careerInterests.roles.slice(0, 5);

  return (
    <>
      <Nav />
      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="bg-bg" aria-label={c.personal.name}>
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="caption-1 uppercase tracking-[0.14em] text-gold">
                {c.hero.eyebrow}
              </p>
              <h1 className="hero-title mt-4">{c.hero.headline}</h1>
              <p className="body-2 mt-6 text-lg leading-relaxed">{c.hero.quote1}</p>
              <p className="body-2 mt-4 text-lg leading-relaxed">{c.hero.quote2}</p>
              <p className="body-3 mt-6 flex items-center gap-2 text-muted">
                <MapPin size={18} aria-hidden="true" className="text-gold" />
                {c.personal.location}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary button-md">
                  {c.ui.exploreWork}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="/cv/Md-Sonet-Mia-CV.pdf" download className="btn-secondary button-md">
                  <Download size={18} aria-hidden="true" />
                  {c.ui.downloadCv}
                </a>
              </div>
              <p className="caption-1 mt-6">{c.hero.proofLine}</p>
            </Reveal>
            <Reveal className="mx-auto w-full max-w-[520px]">
              <Image
                src={c.personal.portraitImage}
                alt={c.personal.portraitAlt}
                width={1885}
                height={1890}
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="aspect-square w-full rounded-2xl border border-border object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* ---------- Professional snapshot ---------- */}
        <section className="border-y border-border bg-surface" aria-label="Snapshot">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-8">
            {c.snapshotStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-bold text-ink tabular md:text-5xl">
                  {s.figure}
                </p>
                <p className="body-4 mt-2 text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- What I Do ---------- */}
        <Section id="what-i-do" label={c.whatIDo.label} heading={c.whatIDo.heading} intro={c.whatIDo.intro}>
          <div className="grid gap-6 md:grid-cols-2">
            {c.whatIDo.items.map((item, i) => {
              const Icon = whatIDoIcons[i % whatIDoIcons.length];
              return (
                <article key={item.title} className="card card-hover">
                  <span className="icon-tile">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="heading-4 mt-5">{item.title}</h3>
                  <p className="body-3 mt-2">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Section>

        {/* ---------- Featured projects ---------- */}
        <Section
          id="featured-projects"
          label={c.projects.label}
          heading={c.ui.featuredProjects}
          intro={c.projects.intro}
          band
        >
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects" className="btn-secondary button-md">
              {c.ui.viewAllProjects}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Section>

        {/* ---------- Career interests ---------- */}
        <Section
          id="career-interests"
          label={c.careerInterests.label}
          heading={c.careerInterests.heading}
          intro={c.careerInterests.intro}
        >
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {careerPreview.map((role) => (
              <li key={role} className="card flex items-center gap-3 !py-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span className="title-2">{role}</span>
              </li>
            ))}
            <li className="card flex items-center !py-4">
              <Link href="/contact" className="inline-flex items-center gap-1.5 font-semibold text-gold hover:underline">
                {c.contact.finalCtaLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </Section>

        {/* ---------- Final CTA ---------- */}
        <section className="bg-ink py-16 md:py-24" aria-label={c.contact.finalCtaHeading}>
          <div className="mx-auto max-w-[1280px] px-6 text-center md:px-8">
            <Reveal>
              <div className="gold-rule mx-auto" aria-hidden="true" />
              <h2 className="heading-2 mx-auto mt-6 max-w-[720px] !text-bg">
                {c.contact.finalCtaHeading}
              </h2>
              <p className="body-2 mx-auto mt-4 max-w-[620px] !text-bg/80">
                {c.contact.finalCtaText}
              </p>
              <Link href="/contact" className="btn-primary button-md mt-8 !bg-gold !text-white hover:!bg-gold-hover">
                {c.contact.finalCtaLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
