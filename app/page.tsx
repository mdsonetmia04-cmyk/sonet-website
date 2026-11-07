"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Tagline } from "@/components/Tagline";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";
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

const gallery: {
  src: string;
  width: number;
  height: number;
  altKey: string;
  captionKey: string;
}[] = [
  { src: "/images/merchant-venice-1.jpg", width: 1920, height: 1279, altKey: "gallery.venice1.alt", captionKey: "gallery.venice1.caption" },
  { src: "/images/speaking-stage.jpg", width: 1920, height: 1279, altKey: "gallery.speaking.alt", captionKey: "gallery.speaking.caption" },
  { src: "/images/football-team.jpg", width: 1024, height: 576, altKey: "gallery.football.alt", captionKey: "gallery.football.caption" },
  { src: "/images/capacity-building.jpg", width: 1655, height: 1228, altKey: "gallery.capacity.alt", captionKey: "gallery.capacity.caption" },
  { src: "/images/merchant-venice-2.jpg", width: 1158, height: 651, altKey: "gallery.venice2.alt", captionKey: "gallery.venice2.caption" },
  { src: "/images/speaking-podium.jpg", width: 1229, height: 864, altKey: "gallery.podium.alt", captionKey: "gallery.podium.caption" },
  { src: "/images/teamwork.jpg", width: 1920, height: 1279, altKey: "gallery.teamwork.alt", captionKey: "gallery.teamwork.caption" },
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
const achievements = ["cgpa", "students", "views", "posts", "chess", "debate"];
const languages = ["bangla", "english", "hindi", "arabic", "urdu", "korean"];
const hobbies = ["football", "badminton", "chess", "debate"];
const hobbyChips = ["chipFootball", "chipBadminton", "chipChess", "chipDebate"];
const skillGroups: { key: string; items: string[] }[] = [
  { key: "groupAi", items: ["item1", "item2"] },
  { key: "groupContent", items: ["item1", "item2", "item3", "item4"] },
  { key: "groupTeaching", items: ["item1", "item2", "item3", "item4"] },
  { key: "groupStock", items: ["item1", "item2", "item3"] },
];

export default function Home() {
  const { t } = useLang();

  // Education body carries the CGPA inside the sentence; the cgpa key is
  // the gold-styled span. Split on it so the span renders in both languages.
  const eduBody = t("education.body");
  const eduCgpa = t("education.cgpa");
  const eduParts = eduBody.split(eduCgpa);

  return (
    <div id="top" className="bg-bg text-body">
      <Nav />
      <main id="main">
        {/* Hero */}
        <section aria-label={t("hero.ariaLabel")} className="bg-bg pb-16 pt-40 md:pb-24 md:pt-40">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-8">
            <div className="md:col-span-7">
              <p className="caption-1">{t("hero.eyebrow")}</p>
              <h1 className="heading-1 hero-gradient mt-4 max-w-[680px]">
                {t("hero.headline")}
              </h1>
              <p className="body-1 mt-6 max-w-[680px] text-body">
                {t("hero.subhead")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#book" className="btn-primary button-md">
                  {t("hero.bookSession")}
                </a>
                <a href="#projects" className="text-link button-md">
                  {t("hero.seeProjects")}
                </a>
              </div>
              <p className="caption-1 mt-8">{t("hero.proof")}</p>
            </div>
            <div className="md:col-span-5">
              <Image
                src="/images/speaking-stage.jpg"
                alt={t("hero.imageAlt")}
                width={1920}
                height={1279}
                priority
                className="w-full rounded-2xl border border-border object-cover"
              />
              <p className="caption-1 mt-4">{t("hero.imageCaption")}</p>
            </div>
          </div>
        </section>

        <Tagline />

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
                  src="/images/speaking-podium.jpg"
                  alt={t("about.imageAlt")}
                  width={1229}
                  height={864}
                  className="w-full rounded-2xl border border-border object-cover"
                />
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <p className="body-2 max-w-[680px]">{t("about.para1")}</p>
                <p className="body-2 mt-4 max-w-[680px]">{t("about.para2")}</p>
                <p className="body-2 mt-4 max-w-[680px]">{t("about.para3")}</p>
                <div className="mt-8 flex flex-wrap gap-8">
                  <div>
                    <p className="font-display text-2xl font-semibold text-gold">{t("about.factRoleValue")}</p>
                    <p className="caption-1 mt-1">{t("about.factRoleLabel")}</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-gold">{t("about.factBaseValue")}</p>
                    <p className="caption-1 mt-1">{t("about.factBaseLabel")}</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-gold">{t("about.factFocusValue")}</p>
                    <p className="caption-1 mt-1">{t("about.factFocusLabel")}</p>
                  </div>
                </div>
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
          <div className="max-w-[680px]">
            <Reveal>
              <div className="relative border-l-2 border-gold pl-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-gold"
                />
                <p className="title-1">{t("education.degree")}</p>
                <p className="caption-1 mt-1">{t("education.university")}</p>
                <p className="body-4 mt-2">
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
              </div>
            </Reveal>
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
          <div className="flex flex-col gap-6">
            {teachingServices.map((s, i) => (
              <Reveal key={s.key}>
                <div
                  className={`flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center ${
                    i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <span className="icon-tile">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <div className="flex-1">
                    <p className="title-1">{t(`teaching.${s.key}.title`)}</p>
                    <p className="body-4 mt-2">{t(`teaching.${s.key}.outcome`)}</p>
                  </div>
                  <a href="#book" className="text-link button-sm shrink-0">
                    {t("teaching.bookSession")}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12">
              <h3 className="heading-4">{t("teaching.rolesHeading")}</h3>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                <li className="py-4">
                  <p className="title-2">{t("teaching.role1.title")}</p>
                  <p className="caption-1 mt-1">{t("teaching.role1.org")}</p>
                </li>
                <li className="py-4">
                  <p className="title-2">{t("teaching.role2.title")}</p>
                  <p className="caption-1 mt-1">{t("teaching.role2.org")}</p>
                </li>
              </ul>
            </div>
          </Reveal>
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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <Image
                  src="/images/merchant-venice-1.jpg"
                  alt={t("acting.image1Alt")}
                  width={1920}
                  height={1279}
                  className="w-full rounded-2xl border border-border object-cover"
                />
                <p className="caption-1 mt-4">{t("acting.image1Caption")}</p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <p className="body-2">{t("acting.body")}</p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  <li className="py-4">
                    <p className="title-2">{t("acting.playTitle")}</p>
                    <p className="caption-1 mt-1">{t("acting.playNote")}</p>
                  </li>
                </ul>
                <Image
                  src="/images/merchant-venice-2.jpg"
                  alt={t("acting.image2Alt")}
                  width={1158}
                  height={651}
                  className="mt-8 w-full rounded-2xl border border-border object-cover"
                />
              </Reveal>
            </div>
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
          <div className="max-w-[800px]">
            <Reveal>
              <p className="body-2">{t("writing.body")}</p>
            </Reveal>
            <h3 className="heading-4 mt-12">{t("writing.servicesHeading")}</h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {writingServices.map((key) => (
                <li key={key} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="title-1 font-display">{t(`writing.${key}.title`)}</p>
                    <p className="body-4 mt-1">{t(`writing.${key}.desc`)}</p>
                  </div>
                  <a href="#book" className="text-link button-sm shrink-0">
                    {t("writing.bookConsultation")}
                  </a>
                </li>
              ))}
            </ul>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((key) => (
              <Reveal key={key}>
                <div className="flex h-full flex-col border border-border bg-surface p-6 rounded-2xl">
                  <p className="font-display text-3xl font-semibold tabular text-gold">{t(`achievements.${key}.figure`)}</p>
                  <p className="title-2 mt-4">{t(`achievements.${key}.label`)}</p>
                  <p className="caption-1 mt-1">{t(`achievements.${key}.source`)}</p>
                </div>
              </Reveal>
            ))}
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
          <div className="max-w-[680px]">
            <Reveal>
              <p className="body-2">{t("volunteering.body")}</p>
              <a href="#contact" className="btn-secondary button-md mt-8">
                {t("volunteering.joinCta")}
              </a>
            </Reveal>
          </div>
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
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
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
                  className="w-full rounded-2xl border border-border object-cover"
                />
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <p className="body-2">{t("podcast.body")}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Image
                    src="/images/capacity-building.jpg"
                    alt={t("podcast.capacityAlt")}
                    width={1655}
                    height={1228}
                    className="w-full rounded-2xl border border-border object-cover"
                  />
                  <Image
                    src="/images/teamwork.jpg"
                    alt={t("podcast.teamworkAlt")}
                    width={1920}
                    height={1279}
                    className="w-full rounded-2xl border border-border object-cover"
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
                    <div className="rounded-2xl border border-border bg-surface p-6">
                      <p className="title-1 font-display text-xl">{t(`ai.${key}.title`)}</p>
                      <p className="body-4 mt-2">{t(`ai.${key}.desc`)}</p>
                      <a href="#book" className="text-link button-sm mt-4 inline-block">
                        {t("ai.bookSession")}
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="flex h-full flex-col justify-center rounded-2xl bg-surface-2 p-8">
                  <p className="font-display text-3xl font-semibold text-ink">{t("ai.panelTitle")}</p>
                  <p className="body-2 mt-4">{t("ai.panelBody")}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {aiChips.map((chip) => (
                      <span key={chip} className="chip">
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
                <p className="body-2">{t("stock.body")}</p>
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
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="heading-4">{t("stock.cardTitle")}</p>
                  <p className="body-4 mt-2">{t("stock.cardBody")}</p>
                  <a href="#book" className="text-link button-sm mt-4 inline-block">
                    {t("stock.askLink")}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Digital Skills */}
        <Section
          id="digital-skills"
          num="14"
          label={t("skills.label")}
          heading={t("skills.heading")}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skillGroups.map((g) => (
              <Reveal key={g.key}>
                <h3 className="heading-4">{t(`skills.${g.key}`)}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span key={item} className="chip">
                      {t(`skills.${g.key}.${item}`)}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
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
          <ul className="max-w-[800px] divide-y divide-border border-y border-border">
            {languages.map((key) => (
              <li key={key} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="title-1 font-display">{t(`languages.${key}.name`)}</p>
                  <p className="body-4 mt-1">{t(`languages.${key}.note`)}</p>
                </div>
                <span className="chip shrink-0">{t(`languages.${key}.level`)}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Personal Reflections */}
        <section aria-label={t("reflections.ariaLabel")} className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[680px] px-6 text-center md:px-8">
            <Reveal>
              <div className="gold-rule mx-auto" aria-hidden="true" />
              <p className="caption-1 mt-4">{t("reflections.label")}</p>
              <p className="body-1 mt-8 font-display text-2xl font-medium leading-relaxed text-ink md:text-3xl md:leading-relaxed">
                {t("reflections.quote")}
              </p>
              <p className="body-2 mt-6">{t("reflections.closing")}</p>
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
                className="w-full rounded-2xl border border-border object-cover"
              />
              <p className="caption-1 mt-4">{t("hobbies.footballCaption")}</p>
            </Reveal>
            <Reveal>
              <Image
                src="/images/speaking-podium.jpg"
                alt={t("hobbies.debateImageAlt")}
                width={1229}
                height={864}
                className="w-full rounded-2xl border border-border object-cover"
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
          <div className="mt-8 flex flex-wrap gap-2">
            {hobbyChips.map((chip) => (
              <span key={chip} className="chip">
                {t(`hobbies.${chip}`)}
              </span>
            ))}
          </div>
        </Section>

        {/* Gallery */}
        <Section
          id="gallery"
          num="17"
          label={t("gallery.label")}
          heading={t("gallery.heading")}
          intro={t("gallery.intro")}
        >
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {gallery.map((g) => (
              <figure key={g.src} className="break-inside-avoid">
                <Image
                  src={g.src}
                  alt={t(g.altKey)}
                  width={g.width}
                  height={g.height}
                  loading="lazy"
                  className="w-full rounded-2xl border border-border object-cover"
                />
                <figcaption className="caption-1 mt-2">{t(g.captionKey)}</figcaption>
              </figure>
            ))}
          </div>
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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="order-2 md:order-1 md:col-span-5">
              <Reveal>
                <h3 className="heading-4">{t("booking.benefitsHeading")}</h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {(["benefit1", "benefit2", "benefit3"] as const).map((key) => (
                    <li key={key} className="flex gap-4">
                      <span className="icon-tile"><Icon name="check" size={24} /></span>
                      <p className="body-2">
                        <span className="font-semibold text-ink">{t(`booking.${key}.title`)}</span>{" "}
                        {t(`booking.${key}.body`)}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="caption-1 mt-8">{t("booking.noPaymentNote")}</p>
              </Reveal>
            </div>
            <div className="order-1 md:order-2 md:col-span-7">
              <BookingForm />
            </div>
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
          <div className="max-w-[800px]">
            <Reveal>
              <a
                href="mailto:md.Sonet.mia2@gmail.com"
                className="font-display text-2xl font-semibold break-words text-ink hover:text-gold md:text-4xl"
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
        </Section>
      </main>
      <Footer />
    </div>
  );
}
