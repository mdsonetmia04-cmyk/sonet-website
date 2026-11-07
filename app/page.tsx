"use client";

import Image from "next/image";
import { useEffect, useState, type ComponentType } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";
import { ContactForm } from "@/components/ContactForm";
import { Carousel, type CarouselItem } from "@/components/Carousel";
import { Icon, type IconName } from "@/components/icons";
import {
  CalculatorIcon,
  AiIcon,
  NoteIcon,
  TrafficHeroIcon,
  LearningEnglishIcon,
  SpokenEnglishIcon,
  VolunteeringIcon,
  SdgTrackerIcon,
  AllInOneIcon,
  ProblemSolverIcon,
} from "@/components/AppIcons";
import { useLang } from "@/i18n/LanguageContext";

// Project metadata that never translates (URLs, layout). Names, outcomes,
// facts and tags come from i18n projects.<key>.*.
const projects = [
  { key: "ssc", url: "https://sweet-smart-calendar.vercel.app", large: true },
  { key: "promptex", url: "https://promptex-nine.vercel.app", large: false },
  { key: "cgi", url: "https://www.youtube.com/@SweetCGILab", large: false },
  { key: "siteincome", url: "https://siteincomelab.blogspot.com", large: false },
] as const;

const apps: { key: string; Icon: ComponentType }[] = [
  { key: "calculator", Icon: CalculatorIcon },
  { key: "sweetAi", Icon: AiIcon },
  { key: "note", Icon: NoteIcon },
  { key: "traffic", Icon: TrafficHeroIcon },
  { key: "learningEnglish", Icon: LearningEnglishIcon },
  { key: "spokenEnglish", Icon: SpokenEnglishIcon },
  { key: "volunteering", Icon: VolunteeringIcon },
  { key: "sdg", Icon: SdgTrackerIcon },
  { key: "allInOne", Icon: AllInOneIcon },
  { key: "problemSolver", Icon: ProblemSolverIcon },
];

// Every image in exactly ONE place (v3 image-placement map). Dimensions are
// the real file sizes, read from public/images.
const teachingCarousel: { src: string; width: number; height: number; altKey: string }[] = [
  { src: "/images/teaching-english.jpg", width: 1920, height: 1279, altKey: "teaching.carousel1Alt" },
  { src: "/images/teaching-presenting.jpg", width: 1279, height: 1920, altKey: "teaching.carousel2Alt" },
  { src: "/images/teaching-speaking.jpg", width: 1359, height: 1369, altKey: "teaching.carousel3Alt" },
];

const achievementCarousel: { src: string; width: number; height: number; captionKey: string; subKey: string }[] = [
  { src: "/images/chief-sergeant.jpg", width: 960, height: 943, captionKey: "achievements.carousel1.caption", subKey: "achievements.carousel1.sub" },
  { src: "/images/event-group.jpg", width: 720, height: 450, captionKey: "achievements.carousel2.caption", subKey: "achievements.carousel2.sub" },
  { src: "/images/event-volunteer.jpg", width: 720, height: 434, captionKey: "achievements.carousel3.caption", subKey: "achievements.carousel3.sub" },
  { src: "/images/training-portrait.jpg", width: 723, height: 569, captionKey: "achievements.carousel4.caption", subKey: "achievements.carousel4.sub" },
  { src: "/images/speaking-mic.jpg", width: 932, height: 950, captionKey: "achievements.carousel5.caption", subKey: "achievements.carousel5.sub" },
];

const volunteeringPhotos: { src: string; width: number; height: number; altKey: string }[] = [
  { src: "/images/volunteer-kids-1.jpg", width: 1008, height: 756, altKey: "volunteering.photo1Alt" },
  { src: "/images/volunteer-kids-2.jpg", width: 1920, height: 1440, altKey: "volunteering.photo2Alt" },
  { src: "/images/presentation-group.jpg", width: 720, height: 480, altKey: "volunteering.photo3Alt" },
  { src: "/images/cultural-dress.jpg", width: 1920, height: 864, altKey: "volunteering.photo4Alt" },
];

const gallery: { src: string; width: number; height: number; key: string }[] = [
  { src: "/images/gallery-01.jpg", width: 1280, height: 960, key: "photo1" },
  { src: "/images/gallery-02.jpg", width: 1593, height: 972, key: "photo2" },
  { src: "/images/gallery-03.jpg", width: 1280, height: 960, key: "photo3" },
  { src: "/images/gallery-04.jpg", width: 1920, height: 1148, key: "photo4" },
  { src: "/images/gallery-05.jpg", width: 1002, height: 736, key: "photo5" },
  { src: "/images/gallery-06.jpg", width: 720, height: 912, key: "photo6" },
  { src: "/images/gallery-07.jpg", width: 720, height: 525, key: "photo7" },
  { src: "/images/gallery-08.jpg", width: 1920, height: 1088, key: "photo8" },
  { src: "/images/gallery-09.jpg", width: 930, height: 689, key: "photo9" },
  { src: "/images/gallery-10.jpg", width: 1920, height: 1080, key: "photo10" },
  { src: "/images/gallery-11.jpg", width: 1527, height: 1279, key: "photo11" },
  { src: "/images/gallery-12.jpg", width: 1101, height: 647, key: "photo12" },
  { src: "/images/gallery-13.jpg", width: 934, height: 672, key: "photo13" },
  { src: "/images/gallery-14.jpg", width: 1280, height: 852, key: "photo14" },
  { src: "/images/gallery-15.jpg", width: 719, height: 531, key: "photo15" },
  { src: "/images/gallery-16.jpg", width: 705, height: 778, key: "photo16" },
  { src: "/images/gallery-17.jpg", width: 720, height: 609, key: "photo17" },
  { src: "/images/gallery-18.jpg", width: 1920, height: 1440, key: "photo18" },
  { src: "/images/gallery-19.jpg", width: 1920, height: 1440, key: "photo19" },
  { src: "/images/gallery-20.jpg", width: 720, height: 700, key: "photo20" },
];

const books: { key: string; cover?: { src: string; width: number; height: number } }[] = [
  { key: "book1", cover: { src: "/images/book-two-hearts.jpg", width: 1920, height: 1080 } },
  { key: "book2", cover: { src: "/images/book-smritimoy-kabya.jpg", width: 260, height: 372 } },
  // book-bishorjon.jpg is only 310x163: shown as a small thumb, never full-bleed.
  { key: "book3", cover: { src: "/images/book-bishorjon.jpg", width: 310, height: 163 } },
  { key: "book4" },
  { key: "book5" },
];

const teachingServices: { icon: IconName; key: string }[] = [
  { icon: "book", key: "service1" },
  { icon: "chat", key: "service2" },
  { icon: "pen", key: "service3" },
  { icon: "users", key: "service4" },
];

const writingServices = ["service1", "service2", "service3"];
const aiCourses = ["course1", "course2", "course3"];
const aiChips = ["chip1", "chip2", "chip3", "chip4"];
const stockGuides = ["guide1", "guide2", "guide3"];
const awardKeys = ["award1", "award2", "award3", "award4", "award5", "award6"];
const activityKeys = ["activity1", "activity2", "activity3", "activity4", "activity5", "activity6"];
const languages = ["bangla", "english", "hindi", "arabic", "urdu", "korean"];
const hobbies = ["football", "badminton", "chess", "debate"];
const hobbyActivities = ["activity1", "activity2", "activity3", "activity4", "activity5"];
const hobbyPlants = ["plant1", "plant2", "plant3", "plant4", "plant5"];
const toolKeys = ["tool1", "tool2", "tool3", "tool4", "tool5", "tool6", "tool7"];
const podcastTopics = ["topic1", "topic2", "topic3", "topic4"];

/** Gold stat row: figures are the original site's real numbers, rendered as text. */
function StatRow({ stats }: { stats: { figure: string; label: string }[] }) {
  const cols =
    stats.length === 3
      ? "sm:grid-cols-3"
      : stats.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-4 ${cols}`}>
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-surface p-5">
          <p className="font-display text-3xl font-semibold tabular text-gold">{s.figure}</p>
          <p className="caption-1 mt-2">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/** Skill/language level: name + real percentage + gold bar (never a 0% counter). */
function LevelBar({ name, level }: { name: string; level: string }) {
  const pct = parseInt(level, 10) || 0;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="title-1">{name}</p>
        <p className="tabular font-display text-lg font-semibold text-gold">{level}</p>
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        <div className="level-fill h-full rounded-full bg-gold" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Gallery lightbox: Escape closes, arrow keys move, body scroll locks.
  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  // Education body carries the CGPA inside the sentence; the cgpa key is
  // the gold-styled span. Split on it so the span renders in both languages.
  const eduBody = t("education.body");
  const eduCgpa = t("education.cgpa");
  const eduParts = eduBody.split(eduCgpa);

  const teachingItems: CarouselItem[] = teachingCarousel.map((item) => ({
    src: item.src,
    width: item.width,
    height: item.height,
    alt: t(item.altKey),
  }));
  const achievementItems: CarouselItem[] = achievementCarousel.map((item) => ({
    src: item.src,
    width: item.width,
    height: item.height,
    alt: t(item.captionKey),
    caption: t(item.captionKey),
    sub: t(item.subKey),
  }));

  const aboutDetails = ["detailFullName", "detailBorn", "detailNationality", "detailLocation"];

  return (
    <div id="top" className="bg-bg text-body">
      <Nav />
      <main id="main">
        {/* Hero — portrait-forward, name as H1 */}
        <section aria-label={t("hero.ariaLabel")} className="bg-bg pb-16 pt-40 md:pb-24 md:pt-44">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-8">
            <div className="md:col-span-7">
              <div className="gold-rule" aria-hidden="true" />
              <p className="caption-1 mt-4">{t("hero.eyebrow")}</p>
              <h1 className="hero-title hero-gradient mt-4 max-w-[680px]">
                {t("hero.headline")}
              </h1>
              <p className="body-1 mt-6 max-w-[680px] text-body">
                {t("hero.subhead")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#book" className="btn-primary button-md">
                  {t("hero.bookSession")}
                </a>
                <a href="#skills" className="btn-secondary button-md">
                  {t("hero.exploreSkills")}
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border-2 border-gold/50" />
                <Image
                  src="/images/hero-portrait.jpg"
                  alt={t("hero.imageAlt")}
                  width={1885}
                  height={1890}
                  priority
                  className="relative aspect-square w-full rounded-[28px] border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <Section
          id="about"
          num="01"
          label={t("about.label")}
          heading={t("about.heading")}
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <Image
                  src="/images/about-formal.jpg"
                  alt={t("about.imageAlt")}
                  width={876}
                  height={865}
                  className="w-full rounded-2xl border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
                />
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <p className="body-2 max-w-[680px]">{t("about.para1")}</p>
                <p className="body-2 mt-4 max-w-[680px]">{t("about.para2")}</p>
                <p className="body-2 mt-4 max-w-[680px]">{t("about.para3")}</p>
                <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {aboutDetails.map((key) => (
                    <div key={key} className="rounded-2xl border border-border bg-surface p-4">
                      <dt className="caption-1">{t(`about.${key}.label`)}</dt>
                      <dd className="title-1 mt-1">{t(`about.${key}.value`)}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* My Projects */}
        <Section
          id="projects"
          num="02"
          label={t("projects.label")}
          heading={t("projects.heading")}
          intro={t("projects.intro")}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p) => {
              const name = t(`projects.${p.key}.name`);
              return (
                <article
                  key={p.key}
                  className={`card card-hover flex flex-col ${p.large ? "md:col-span-2" : ""}`}
                >
                  <h3 className="heading-3">{name}</h3>
                  <p className="body-4 mt-4 flex-1">{t(`projects.${p.key}.outcome`)}</p>
                  <p className="caption-1 mt-4 tabular">{t(`projects.${p.key}.fact`)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(["tag1", "tag2", "tag3"] as const).map((tag) => (
                      <span key={tag} className="chip">
                        {t(`projects.${p.key}.${tag}`)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link button-sm inline-flex items-center gap-2"
                    >
                      {t("projects.visit").replace("{name}", name)} <Icon name="arrow" size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        {/* Education */}
        <Section
          id="education"
          num="03"
          label={t("education.label")}
          heading={t("education.heading")}
          intro={t("education.intro")}
          band
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card h-full">
                <p className="title-1 font-display text-xl">{t("education.degree")}</p>
                <p className="caption-1 mt-1">{t("education.university")}</p>
                <p className="body-4 mt-3">
                  {eduParts.length === 2 ? (
                    <>
                      {eduParts[0]}
                      <span className="tabular font-semibold text-ink">{eduCgpa}</span>
                      {eduParts[1]}
                    </>
                  ) : (
                    eduBody
                  )}
                </p>
                <p className="body-4 mt-4">{t("education.ba.desc")}</p>
                <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-4">
                  <p className="caption-1">
                    <span className="tabular font-semibold text-ink">{t("education.ba.date")}</span>
                  </p>
                  <p className="caption-1">
                    {t("education.ba.coursesLabel")}:{" "}
                    <span className="tabular font-semibold text-ink">{t("education.ba.coursesValue")}</span>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="card card-gold h-full">
                <p className="title-1 font-display text-xl">{t("education.ielts.title")}</p>
                <p className="caption-1 mt-1">{t("education.ielts.subtitle")}</p>
                <p className="body-4 mt-3">{t("education.ielts.body")}</p>
                <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-4">
                  <p className="caption-1">
                    {t("education.ielts.resultLabel")}:{" "}
                    <span className="tabular font-display text-xl font-semibold text-gold">{t("education.ielts.resultValue")}</span>
                  </p>
                  <p className="caption-1">
                    {t("education.ielts.nextLabel")}:{" "}
                    <span className="tabular font-display text-xl font-semibold text-gold">{t("education.ielts.nextValue")}</span>
                  </p>
                  <p className="caption-1">
                    <span className="tabular font-semibold text-ink">{t("education.ielts.date")}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-6">
            <StatRow
              stats={["study", "courses", "languages", "certifications"].map((key) => ({
                figure: t(`education.stats.${key}.figure`),
                label: t(`education.stats.${key}.label`),
              }))}
            />
          </div>
        </Section>

        {/* Teaching Services */}
        <Section
          id="teaching"
          num="04"
          label={t("teaching.label")}
          heading={t("teaching.heading")}
          intro={t("teaching.intro")}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {teachingServices.map((s) => (
                  <Reveal key={s.key}>
                    <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                      <span className="icon-tile">
                        <Icon name={s.icon} size={24} />
                      </span>
                      <p className="title-1">{t(`teaching.${s.key}.title`)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {(["session1", "session2", "session3"] as const).map((key) => (
                  <Reveal key={key}>
                    <div className="card card-hover flex h-full flex-col">
                      <p className="title-1 font-display text-xl">{t(`teaching.${key}.title`)}</p>
                      <p className="caption-1 mt-2 tabular">
                        {t(`teaching.${key}.duration`)} · {t(`teaching.${key}.price`)}
                      </p>
                      <p className="body-4 mt-3 flex-1">{t(`teaching.${key}.desc`)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <div className="mt-6">
                  <StatRow
                    stats={["schools", "students", "sessions", "years"].map((key) => ({
                      figure: t(`teaching.stats.${key}.figure`),
                      label: t(`teaching.stats.${key}.label`),
                    }))}
                  />
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <Carousel items={teachingItems} label={t("teaching.label")} />
              </Reveal>
              <Reveal>
                <div className="mt-6">
                  <h3 className="heading-4">{t("teaching.rolesHeading")}</h3>
                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {(["role1", "role2"] as const).map((key) => (
                      <li key={key} className="py-4">
                        <p className="title-2">{t(`teaching.${key}.title`)}</p>
                        <p className="caption-1 mt-1">
                          {t(`teaching.${key}.org`)} · {t(`teaching.${key}.dates`)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Book a Session, compact mid page */}
        <Section
          id="book-mid"
          num="05"
          label={t("bookMid.label")}
          heading={t("bookMid.heading")}
          intro={t("bookMid.intro")}
          band
        >
          <div className="max-w-[680px]">
            <BookingForm compact />
          </div>
        </Section>

        {/* Acting and Theatre */}
        <Section
          id="acting"
          num="06"
          label={t("acting.label")}
          heading={t("acting.heading")}
          intro={t("acting.intro")}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <Image
                  src="/images/merchant-venice-1.jpg"
                  alt={t("acting.image1Alt")}
                  width={1920}
                  height={1279}
                  className="w-full rounded-2xl border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
                />
                <p className="caption-1 mt-4">{t("acting.image1Caption")}</p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <Image
                  src="/images/merchant-venice-2.jpg"
                  alt={t("acting.image2Alt")}
                  width={1158}
                  height={651}
                  className="w-full rounded-2xl border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
                />
              </Reveal>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {(["card1", "card2", "card3"] as const).map((key) => (
              <Reveal key={key}>
                <div className="card card-hover h-full">
                  <p className="title-1 font-display text-xl">{t(`acting.${key}.title`)}</p>
                  <p className="body-4 mt-3">{t(`acting.${key}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Writing and Author */}
        <Section
          id="writing"
          num="07"
          label={t("writing.label")}
          heading={t("writing.heading")}
          intro={t("writing.intro")}
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="body-2 max-w-[680px]">{t("writing.body")}</p>
              </Reveal>
              <h3 className="heading-4 mt-12">{t("writing.servicesHeading")}</h3>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {writingServices.map((key) => (
                  <li key={key} className="py-4">
                    <p className="title-1 font-display">{t(`writing.${key}.title`)}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <StatRow
                  stats={["books", "published", "genres"].map((key) => ({
                    figure: t(`writing.stats.${key}.figure`),
                    label: t(`writing.stats.${key}.label`),
                  }))}
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <h3 className="heading-4">{t("writing.booksHeading")}</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {books.map((b) => (
                  <li key={b.key} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                    {b.cover ? (
                      <span className="flex h-32 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-2">
                        <Image
                          src={b.cover.src}
                          alt={t(`writing.${b.key}.title`)}
                          width={b.cover.width}
                          height={b.cover.height}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ) : null}
                    <div>
                      <p className="title-1">{t(`writing.${b.key}.title`)}</p>
                      <p className="caption-1 mt-1">{t(`writing.${b.key}.kind`)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Achievements */}
        <Section
          id="achievements"
          num="08"
          label={t("achievements.label")}
          heading={t("achievements.heading")}
          intro={t("achievements.intro")}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {awardKeys.map((key) => (
                  <Reveal key={key}>
                    <div className="card card-hover h-full">
                      <span className="icon-tile">
                        <Icon name="trophy" size={24} />
                      </span>
                      <p className="title-1 mt-4 font-display text-xl">{t(`achievements.${key}.title`)}</p>
                      <p className="body-4 mt-2">{t(`achievements.${key}.desc`)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-6">
                <StatRow
                  stats={["awards", "certifications", "trainings", "events"].map((key) => ({
                    figure: t(`achievements.stats.${key}.figure`),
                    label: t(`achievements.stats.${key}.label`),
                  }))}
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <Carousel items={achievementItems} label={t("achievements.label")} />
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Volunteering */}
        <Section
          id="volunteering"
          num="09"
          label={t("volunteering.label")}
          heading={t("volunteering.heading")}
          intro={t("volunteering.intro")}
          band
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {volunteeringPhotos.map((p) => (
              <Reveal key={p.src}>
                <Image
                  src={p.src}
                  alt={t(p.altKey)}
                  width={p.width}
                  height={p.height}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activityKeys.map((key) => (
              <Reveal key={key}>
                <div className="card card-hover h-full">
                  <p className="title-1 font-display text-xl">{t(`volunteering.${key}.title`)}</p>
                  <p className="body-4 mt-2">{t(`volunteering.${key}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <StatRow
              stats={["activities", "lives", "trainings", "organizations"].map((key) => ({
                figure: t(`volunteering.stats.${key}.figure`),
                label: t(`volunteering.stats.${key}.label`),
              }))}
            />
          </div>
          <Reveal>
            <div className="mt-6 flex flex-wrap gap-4">
              {(["international", "national", "local"] as const).map((key) => (
                <p key={key} className="chip !px-4 !py-2 !text-sm">
                  {t(`volunteering.scope.${key}.label`)}:{" "}
                  <span className="tabular font-semibold">{t(`volunteering.scope.${key}.value`)}</span>
                </p>
              ))}
              <a href="#contact" className="btn-secondary button-md ml-auto">
                {t("volunteering.joinCta")}
              </a>
            </div>
          </Reveal>
        </Section>

        {/* Applications */}
        <Section
          id="applications"
          num="10"
          label={t("apps.label")}
          heading={t("apps.heading")}
          intro={t("apps.intro")}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {apps.map((a) => {
              const AppIcon = a.Icon;
              return (
                <Reveal key={a.key}>
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                    <span className="icon-tile">
                      <AppIcon />
                    </span>
                    <div>
                      <p className="title-1">{t(`apps.${a.key}.name`)}</p>
                      <p className="body-4 mt-1">{t(`apps.${a.key}.purpose`)}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <div className="mt-8">
              <a href="#contact" className="btn-primary button-md">
                {t("apps.useButton")}
              </a>
            </div>
          </Reveal>
        </Section>

        {/* Think and Spark */}
        <Section
          id="think-spark"
          num="11"
          label={t("podcast.label")}
          heading={t("podcast.heading")}
          intro={t("podcast.intro")}
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <Image
                  src="/images/speaking-stage.jpg"
                  alt={t("podcast.imageAlt")}
                  width={1920}
                  height={1279}
                  className="w-full rounded-2xl border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
                />
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <p className="body-2">{t("podcast.body")}</p>
                <h3 className="heading-4 mt-8">{t("podcast.topicsHeading")}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {podcastTopics.map((key) => (
                    <span key={key} className="chip !px-3 !py-1.5 !text-sm">
                      {t(`podcast.${key}`)}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Image
                    src="/images/capacity-building.jpg"
                    alt={t("podcast.capacityAlt")}
                    width={1655}
                    height={1228}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
                  />
                  <Image
                    src="/images/teamwork.jpg"
                    alt={t("podcast.teamworkAlt")}
                    width={1920}
                    height={1279}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* AI Creator */}
        <Section
          id="ai-creator"
          num="12"
          label={t("ai.label")}
          heading={t("ai.heading")}
          intro={t("ai.intro")}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="flex flex-col gap-6">
                {aiCourses.map((key) => (
                  <Reveal key={key}>
                    <div className="card card-hover">
                      <p className="title-1 font-display text-xl">{t(`ai.${key}.title`)}</p>
                      <p className="body-4 mt-2">{t(`ai.${key}.desc`)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="flex h-full flex-col justify-center rounded-2xl border border-gold/40 bg-surface-2 p-8">
                  <div className="flex flex-wrap gap-2">
                    {aiChips.map((chip) => (
                      <span key={chip} className="chip !px-3 !py-1.5 !text-sm">
                        {t(`ai.${chip}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Adobe Stock */}
        <Section
          id="adobe-stock"
          num="13"
          label={t("stock.label")}
          heading={t("stock.heading")}
          intro={t("stock.intro")}
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="body-2 max-w-[680px]">{t("stock.body")}</p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {stockGuides.map((key) => (
                    <li key={key} className="py-4">
                      <p className="title-2">{t(`stock.${key}.title`)}</p>
                      <p className="body-4 mt-1">{t(`stock.${key}.desc`)}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <StatRow
                  stats={["downloads", "earnings", "status"].map((key) => ({
                    figure: t(`stock.stats.${key}.figure`),
                    label: t(`stock.stats.${key}.label`),
                  }))}
                />
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Digital Skills */}
        <Section
          id="skills"
          num="14"
          label={t("skills.label")}
          heading={t("skills.heading")}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <h3 className="heading-4">{t("skills.groupTools")}</h3>
                <div className="mt-6 flex flex-col gap-6">
                  {toolKeys.map((key) => (
                    <LevelBar
                      key={key}
                      name={t(`skills.${key}.name`)}
                      level={t(`skills.${key}.level`)}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <StatRow
                  stats={["tools", "platforms", "proficiency"].map((key) => ({
                    figure: t(`skills.stats.${key}.figure`),
                    label: t(`skills.stats.${key}.label`),
                  }))}
                />
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Language Proficiency */}
        <Section
          id="languages"
          num="15"
          label={t("languages.label")}
          heading={t("languages.heading")}
          band
        >
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
            {languages.map((key) => (
              <Reveal key={key}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="title-1 font-display">
                    {t(`languages.${key}.name`)}{" "}
                    <span className="caption-1">· {t(`languages.${key}.level`)}</span>
                  </p>
                  <p className="tabular font-display text-lg font-semibold text-gold">{t(`languages.${key}.percent`)}</p>
                </div>
                <div
                  className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2"
                  role="progressbar"
                  aria-valuenow={parseInt(t(`languages.${key}.percent`), 10) || 0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={t(`languages.${key}.name`)}
                >
                  <div
                    className="level-fill h-full rounded-full bg-gold"
                    style={{ width: t(`languages.${key}.percent`) }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Personal Reflections — original quote only */}
        <section aria-label={t("reflections.ariaLabel")} className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[680px] px-6 text-center md:px-8">
            <Reveal>
              <div className="gold-rule mx-auto" aria-hidden="true" />
              <p className="caption-1 mt-4">{t("reflections.label")}</p>
              <p className="body-1 mt-8 font-display text-2xl font-medium leading-relaxed text-ink md:text-3xl md:leading-relaxed">
                {t("reflections.quote")}
              </p>
              <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        {/* Hobbies and Sports */}
        <Section
          id="hobbies"
          num="16"
          label={t("hobbies.label")}
          heading={t("hobbies.heading")}
          intro={t("hobbies.intro")}
          band
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Image
                src="/images/football-team.jpg"
                alt={t("hobbies.footballImageAlt")}
                width={1024}
                height={576}
                loading="lazy"
                className="w-full rounded-2xl border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
              />
              <p className="caption-1 mt-4">{t("hobbies.footballCaption")}</p>
            </Reveal>
            <Reveal>
              <Image
                src="/images/speaking-podium.jpg"
                alt={t("hobbies.debateImageAlt")}
                width={1229}
                height={864}
                loading="lazy"
                className="w-full rounded-2xl border border-border object-cover shadow-[0_8px_24px_var(--shadow)]"
              />
              <p className="caption-1 mt-4">{t("hobbies.debateCaption")}</p>
            </Reveal>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {hobbies.map((key) => (
              <li key={key} className="rounded-2xl border border-border bg-surface p-6">
                <p className="title-1">{t(`hobbies.${key}.title`)}</p>
                <p className="body-4 mt-2">{t(`hobbies.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
          <Reveal>
            <h3 className="heading-4 mt-12">{t("hobbies.activitiesHeading")}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {hobbyActivities.map((key) => (
                <span key={key} className="chip !px-3 !py-1.5 !text-sm">
                  {t(`hobbies.${key}`)}
                </span>
              ))}
            </div>
            <h3 className="heading-4 mt-8">{t("hobbies.plantsHeading")}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {hobbyPlants.map((key) => (
                <span key={key} className="chip !px-3 !py-1.5 !text-sm">
                  {t(`hobbies.${key}`)}
                </span>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* Gallery */}
        <Section
          id="gallery"
          num="17"
          label={t("gallery.label")}
          heading={t("gallery.heading")}
          intro={t("gallery.intro")}
        >
          <div className="mb-8">
            <StatRow
              stats={["photos", "events", "memories"].map((key) => ({
                figure: t(`gallery.stats.${key}.figure`),
                label: t(`gallery.stats.${key}.label`),
              }))}
            />
          </div>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {gallery.map((g, i) => (
              <figure key={g.src} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={t(`gallery.${g.key}.alt`)}
                  className="block w-full overflow-hidden rounded-2xl border border-border text-left transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <Image
                    src={g.src}
                    alt={t(`gallery.${g.key}.alt`)}
                    width={g.width}
                    height={g.height}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </button>
                <figcaption className="caption-1 mt-2">{t(`gallery.${g.key}.caption`)}</figcaption>
              </figure>
            ))}
          </div>
          <Reveal>
            <div className="mt-8">
              <a
                href={t("gallery.albumUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link button-md inline-flex items-center gap-2"
              >
                {t("gallery.albumLink")} <Icon name="arrow" size={16} />
              </a>
            </div>
          </Reveal>
        </Section>

        {/* Book a Session, full form */}
        <Section
          id="book"
          num="18"
          label={t("booking.label")}
          heading={t("booking.heading")}
          intro={t("booking.intro")}
          band
        >
          <div className="mx-auto max-w-[720px]">
            <BookingForm />
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          num="19"
          label={t("contact.label")}
          heading={t("contact.heading")}
          intro={t("contact.intro")}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="font-display text-2xl font-semibold break-words text-ink hover:text-gold md:text-3xl"
                >
                  {t("contact.email")}
                </a>
                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href="https://wa.me/8801797953059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium text-ink"
                  >
                    <span className="icon-tile"><Icon name="whatsapp" size={24} /></span>
                    {t("contact.whatsapp")}
                  </a>
                  <a
                    href="https://facebook.com/mdsont.mia.777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium text-ink"
                  >
                    <span className="icon-tile"><Icon name="facebook" size={24} /></span>
                    {t("contact.facebook")}
                  </a>
                  <a
                    href="https://www.youtube.com/@SweetCGILab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium text-ink"
                  >
                    <span className="icon-tile"><Icon name="youtube" size={24} /></span>
                    {t("contact.youtube")}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />

      {/* Gallery lightbox */}
      {lightbox !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(`gallery.${gallery[lightbox].key}.alt`)}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label={t("gallery.close")}
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-surface text-ink"
          >
            <Icon name="close" size={22} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
            <Image
              src={gallery[lightbox].src}
              alt={t(`gallery.${gallery[lightbox].key}.alt`)}
              width={gallery[lightbox].width}
              height={gallery[lightbox].height}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-base font-medium text-white">
                {t(`gallery.${gallery[lightbox].key}.caption`)}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label={t("carousel.prev")}
                  onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-surface text-ink"
                >
                  <span aria-hidden="true" className="text-xl leading-none">‹</span>
                </button>
                <button
                  type="button"
                  aria-label={t("carousel.next")}
                  onClick={() => setLightbox((lightbox + 1) % gallery.length)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-surface text-ink"
                >
                  <span aria-hidden="true" className="text-xl leading-none">›</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
