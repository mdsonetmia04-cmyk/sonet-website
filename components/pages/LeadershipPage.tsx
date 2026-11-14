"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, HeartHandshake, Megaphone, HandHeart, Globe, Trophy } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * Leadership page. The three leadership entries show confirmed
 * information only. Every community activity gets its own card
 * (11 cards, all the same size); Awards & Recognition and Public
 * Speaking & Anchoring come first. Each card keeps the small
 * category label of its old grouping.
 */

export function LeadershipPage() {
  const c = useContent();
  const l = c.leadership;
  // One card per activity (11 cards, all the same size).
  // Awards & Recognition and Public Speaking & Anchoring come first.
  const cards: { label: string; icon: typeof Users; activity: { title: string; description: string; image?: string | null; imageAlt?: string | null; imageWidth?: number; imageHeight?: number } }[] = [
    { label: c.ui.leadershipRecognition, icon: Trophy, activity: l.activities[8] },
    { label: c.ui.leadershipEvents, icon: Megaphone, activity: l.activities[7] },
    { label: c.ui.leadershipYouth, icon: HeartHandshake, activity: l.activities[1] },
    { label: c.ui.leadershipYouth, icon: HeartHandshake, activity: l.activities[6] },
    { label: c.ui.leadershipCommunity, icon: Users, activity: l.activities[0] },
    { label: c.ui.leadershipEvents, icon: Megaphone, activity: l.activities[2] },
    { label: c.ui.leadershipVolunteering, icon: HandHeart, activity: l.activities[3] },
    { label: c.ui.leadershipVolunteering, icon: HandHeart, activity: l.activities[4] },
    { label: c.ui.leadershipVolunteering, icon: HandHeart, activity: l.activities[9] },
    { label: c.ui.leadershipSocial, icon: Globe, activity: l.activities[5] },
    { label: c.ui.leadershipSocial, icon: Globe, activity: l.activities[10] },
  ];

  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={l.label} heading={l.heading} intro={l.intro} />

        <section className="bg-bg py-10 md:py-14">
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
              <div className="mt-6 grid auto-rows-fr gap-6 md:grid-cols-3">
                {l.items.map((item) => (
                  <article key={item.title} className="card card-hover flex h-full flex-col">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        width={960}
                        height={943}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                      />
                    ) : null}
                    <h3 className="heading-4 mt-5">{item.title}</h3>
                    {item.organisation ? <p className="title-2 mt-1">{item.organisation}</p> : null}
                    {item.role ? <p className="caption-1 mt-1">{item.role}</p> : null}
                    {item.date ? <p className="caption-1">{item.date}</p> : null}
                    <p className="body-3 mt-3">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* One card per activity, all the same size */}
            <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => {
                const Icon = card.icon;
                const activity = card.activity;
                return (
                  <article key={activity.title} className="card card-hover flex h-full flex-col">
                    <span className="icon-tile">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <p className="caption-1 mt-4 uppercase tracking-[0.14em]">{card.label}</p>
                    {activity.image ? (
                      <Image
                        src={activity.image}
                        alt={activity.imageAlt ?? activity.title}
                        width={activity.imageWidth ?? 960}
                        height={activity.imageHeight ?? 600}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="mb-3 mt-3 aspect-[16/10] w-full rounded-lg object-cover"
                      />
                    ) : null}
                    <h3 className="heading-4">{activity.title}</h3>
                    <p className="body-3 mt-1">{activity.description}</p>
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
        <Section id="volunteering-photos" index="01" label={l.label} heading={c.ui.leadershipPhotosHeading} band>
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
                  className="aspect-[4/3] w-full rounded-xl border border-border object-cover"
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
