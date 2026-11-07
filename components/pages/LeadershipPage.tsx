"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, HeartHandshake, Megaphone, HandHeart, Globe } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * Leadership page. The three leadership entries are flagged placeholder
 * in the content layer (positions/dates unverified) — they render with
 * an explicit "details to be confirmed" note, never as verified facts.
 * The five remaining subsections surface all six community activities
 * from the content layer (Volunteering carries two).
 */

export function LeadershipPage() {
  const c = useContent();
  const l = c.leadership;
  // Each subsection surfaces activities from the content layer.
  // Volunteering carries two activities (Disaster Relief, Book Distribution).
  const subsections: { title: string; icon: typeof Users; activities: { title: string; description: string }[] }[] = [
    { title: c.ui.leadershipCommunity, icon: Users, activities: [l.activities[0]] },
    { title: c.ui.leadershipYouth, icon: HeartHandshake, activities: [l.activities[1]] },
    { title: c.ui.leadershipVolunteering, icon: HandHeart, activities: [l.activities[3], l.activities[4]] },
    { title: c.ui.leadershipEvents, icon: Megaphone, activities: [l.activities[2]] },
    { title: c.ui.leadershipSocial, icon: Globe, activities: [l.activities[5]] },
  ];

  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={l.label} heading={l.heading} intro={l.intro} />

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            {/* Stats */}
            <Reveal>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {l.stats.map((s) => (
                  <div key={s.label} className="card text-center">
                    <p className="font-display text-4xl font-bold text-ink tabular">{s.figure}</p>
                    <p className="body-4 mt-2 text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Leadership roles */}
            <div className="mt-14">
              <h2 className="heading-3">{c.ui.leadershipRoles}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {l.items.map((item) => (
                  <article key={item.title} className="card card-hover">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        width={960}
                        height={943}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full rounded-lg object-cover"
                      />
                    ) : null}
                    <h3 className="heading-4 mt-5">{item.title}</h3>
                    {item.organisation ? <p className="title-2 mt-1">{item.organisation}</p> : null}
                    {item.role ? <p className="caption-1 mt-1">{item.role}</p> : null}
                    {item.date ? <p className="caption-1">{item.date}</p> : null}
                    <p className="body-3 mt-3">{item.description}</p>
                    {item.placeholder ? (
                      <p className="caption-1 mt-4 border-t border-border pt-3">{c.ui.placeholderNote}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            {/* The other five subsections, each with its activities */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {subsections.map((section) => {
                const Icon = section.icon;
                return (
                  <article key={section.title} className="card card-hover">
                    <span className="icon-tile">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <p className="caption-1 mt-4 uppercase tracking-[0.14em]">{section.title}</p>
                    {section.activities.map((activity) => (
                      <div key={activity.title} className="mt-3">
                        <h3 className="heading-4">{activity.title}</h3>
                        <p className="body-3 mt-1">{activity.description}</p>
                      </div>
                    ))}
                  </article>
                );
              })}
            </div>

            {/* Scope */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              {l.scope.map((s) => (
                <div key={s.label} className="card text-center">
                  <p className="font-display text-4xl font-bold text-ink tabular">{s.figure}</p>
                  <p className="body-4 mt-2 text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteering photos */}
        <Section id="volunteering-photos" label={l.label} heading={c.ui.leadershipPhotosHeading} band>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {l.photos.map((img) => (
              <figure key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="w-full rounded-xl border border-border object-cover"
                />
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={l.joinCtaHref} className="btn-primary button-md">
              {l.joinCta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
