"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * Achievements as an elegant timeline. Dates are shown only where
 * the owner provided them (Rising Star 2023, Chief Sergeant at
 * Arms 2022, Best Volunteer 2024) — no date is invented.
 * Timeline photos render where a real photo exists; the gallery
 * cards are all the same size.
 */
export function AchievementsPage() {
  const c = useContent();
  const a = c.achievements;
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={a.label} heading={a.heading} intro={a.intro} />

        <section className="bg-bg py-10 md:py-14">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {a.stats.map((s) => (
                <div key={s.label} className="card text-center">
                  <p className="font-display text-4xl font-bold text-ink tabular">{s.figure}</p>
                  <p className="body-4 mt-2 text-muted">{s.label}</p>
                </div>
              ))}
            </div>

            <ol className="relative mt-16 space-y-0 border-l-2 border-border pl-8 md:pl-12">
              {a.items.map((item) => (
                <li key={item.title} className="relative pb-12 last:pb-0">
                  <span
                    className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-bg md:-left-[57px]"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <Reveal>
                    <span className="icon-tile">
                      <Award size={24} aria-hidden="true" />
                    </span>
                    <h2 className="heading-4 mt-4">{item.title}</h2>
                    {item.date ? <p className="caption-1 mt-1">{item.date}</p> : null}
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        width={960}
                        height={600}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="mb-2 mt-4 aspect-[16/10] w-full max-w-[640px] rounded-lg border border-border object-cover"
                      />
                    ) : null}
                    <p className="body-2 mt-2 max-w-[640px]">{item.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Section id="achievement-photos" index="01" label={a.label} heading={c.ui.achievementsPhotosHeading} band>
          <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {a.carousel.map((img) => (
              <figure key={img.src} className="card flex h-full flex-col !p-3">
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <figcaption className="px-2 py-3">
                  <span className="title-2 block">{img.caption}</span>
                  <span className="caption-1">{img.sub}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
