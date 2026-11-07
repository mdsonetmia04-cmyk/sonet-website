"use client";

import Image from "next/image";
import { BookOpen, Mic, Image as ImageIcon, ExternalLink } from "lucide-react";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * Publications page: 5 books (covers where real ones exist, text-only
 * otherwise — the 310x163 Bishorjon cover renders as a small thumb
 * only), SkillVerse By Sonet as featured channel (no URL invented),
 * Think and Spark podcast, Adobe Stock, and the 20-photo gallery.
 */
export function PublicationsPage() {
  const c = useContent();
  const pub = c.publications;
  const g = c.gallery;

  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={pub.label} heading={pub.heading} intro={pub.intro} />

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <Reveal>
              <p className="body-2 max-w-[720px] text-lg leading-relaxed">{pub.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pub.writingServices.map((s) => (
                  <li key={s} className="chip !px-3 !py-1.5 !text-sm">{s}</li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-[560px]">
                {pub.stats.map((s) => (
                  <div key={s.label} className="card text-center">
                    <p className="font-display text-3xl font-bold text-ink tabular md:text-4xl">{s.figure}</p>
                    <p className="body-4 mt-2 text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Books */}
            <div className="mt-16">
              <h2 className="heading-3">{pub.booksHeading}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pub.books.map((book) => (
                  <article key={book.title} className="card card-hover">
                    {book.coverImage ? (
                      book.coverImage === "/images/book-bishorjon.jpg" ? (
                        <Image
                          src={book.coverImage}
                          alt={book.coverImageAlt ?? book.title}
                          width={310}
                          height={163}
                          loading="lazy"
                          className="w-full max-w-[310px] rounded-lg border border-border object-cover"
                        />
                      ) : (
                        <Image
                          src={book.coverImage}
                          alt={book.coverImageAlt ?? book.title}
                          width={book.coverImage.endsWith(".png") ? 260 : 1920}
                          height={book.coverImage.endsWith(".png") ? 372 : 1080}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full rounded-lg border border-border object-cover"
                        />
                      )
                    ) : (
                      <div className="flex aspect-[16/9] flex-col justify-between rounded-lg bg-ink p-5">
                        <span className="font-display text-5xl font-bold text-gold" aria-hidden="true">
                          {book.title.charAt(0)}
                        </span>
                        <span className="font-display text-lg font-semibold leading-snug text-bg">
                          {book.title}
                        </span>
                      </div>
                    )}
                    <h3 className="heading-4 mt-5">{book.title}</h3>
                    <p className="caption-1 mt-1">{book.kind}</p>
                    {book.description ? <p className="body-3 mt-2">{book.description}</p> : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured channel + podcast */}
        <Section id="channels" index="01" label={pub.label} heading={pub.featuredChannel.name} band>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">
              <span className="icon-tile">
                <BookOpen size={24} aria-hidden="true" />
              </span>
              <h3 className="heading-4 mt-5">{pub.featuredChannel.name}</h3>
              <p className="body-2 mt-2">{pub.featuredChannel.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pub.featuredChannel.topics.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
              {pub.featuredChannel.placeholderNote ? (
                <p className="caption-1 mt-4 border-t border-border pt-3">{c.ui.placeholderNote}</p>
              ) : null}
            </article>
            <article className="card">
              <span className="icon-tile">
                <Mic size={24} aria-hidden="true" />
              </span>
              <h3 className="heading-4 mt-5">{pub.podcast.name}</h3>
              <p className="body-2 mt-2">{pub.podcast.description}</p>
              <p className="body-3 mt-2">{pub.podcast.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pub.podcast.topics.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {pub.podcast.images.map((img) => (
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
        </Section>

        {/* Adobe Stock */}
        <Section id="adobe-stock" index="02" label={pub.adobeStock.label} heading={pub.adobeStock.heading} intro={pub.adobeStock.intro}>
          <p className="body-2 max-w-[720px] text-lg leading-relaxed">{pub.adobeStock.body}</p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-[640px]">
            {pub.adobeStock.stats.map((s) => (
              <div key={s.label} className="card text-center">
                <p className="font-display text-2xl font-bold text-ink tabular md:text-3xl">{s.figure}</p>
                <p className="body-4 mt-2 text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pub.adobeStock.guides.map((guide) => (
              <article key={guide.title} className="card">
                <h3 className="title-1">{guide.title}</h3>
                <p className="body-4 mt-2">{guide.description}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery" index="03" label={g.label} heading={g.heading} intro={g.intro} band>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {g.photos.map((photo) => (
              <figure key={photo.src} className="card !p-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full rounded-lg object-cover"
                />
                <figcaption className="caption-1 px-1 py-2">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={g.albumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary button-md"
            >
              <ImageIcon size={18} aria-hidden="true" />
              {g.albumLinkLabel}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
