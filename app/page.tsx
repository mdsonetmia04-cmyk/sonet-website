import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Tagline } from "@/components/Tagline";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";
import { Icon, type IconName } from "@/components/icons";

const projects = [
  {
    name: "Sweet Smart Calendar",
    outcome:
      "A microstock training platform that helps learners find the right season to create and upload stock content.",
    tags: ["Microstock", "Teaching", "Web app"],
    url: "https://sweet-smart-calendar.vercel.app",
    fact: "53 approved students, 216 bilingual topics",
    large: true,
  },
  {
    name: "PromptEx",
    outcome:
      "A free microstock metadata and image to prompt tool that works with your own API keys.",
    tags: ["AI tools", "Metadata", "Free"],
    url: "https://promptex-nine.vercel.app",
    fact: "Free to use, your API keys",
    large: false,
  },
  {
    name: "Sweet CGI Lab",
    outcome:
      "A YouTube Shorts channel where impossible ideas become realistic CGI in short, satisfying clips.",
    tags: ["YouTube Shorts", "CGI", "Video"],
    url: "https://www.youtube.com/@SweetCGILab",
    fact: "72 subscribers, 98,000+ views",
    large: false,
  },
  {
    name: "SiteIncome Lab",
    outcome:
      "A blog about website monetization, written for beginners who want to earn from a site they own.",
    tags: ["Blog", "Monetization", "Writing"],
    url: "https://siteincomelab.blogspot.com",
    fact: "18 posts live",
    large: false,
  },
];

const apps: { name: string; purpose: string; icon: IconName }[] = [
  { name: "Sweet Calculator", purpose: "A clean, intuitive calculator for everyday math.", icon: "calculator" },
  { name: "Sweet AI", purpose: "AI powered assistant for learning and productivity.", icon: "spark" },
  { name: "Sweet Note", purpose: "Minimal note taking app for quick ideas.", icon: "note" },
  { name: "Sweet Traffic Hero", purpose: "Traffic safety awareness educational tool.", icon: "traffic" },
  { name: "Sweet Learning English", purpose: "Interactive English learning companion.", icon: "book" },
  { name: "Sweet Spoken English", purpose: "Practice spoken English with guided exercises.", icon: "chat" },
  { name: "Sweet Volunteering", purpose: "Track and manage volunteer activities.", icon: "hands" },
  { name: "SDG Tracker", purpose: "Monitor Sustainable Development Goals progress.", icon: "leaf" },
  { name: "All in One", purpose: "Multi purpose productivity suite.", icon: "brain" },
  { name: "Sweet Problem Solver", purpose: "Smart problem solving assistant.", icon: "bulb" },
];

const gallery: { src: string; width: number; height: number; alt: string; caption: string }[] = [
  { src: "/images/merchant-venice-1.jpg", width: 1920, height: 1279, alt: "Md Sonet Mia performing in The Merchant of Venice", caption: "The Merchant of Venice, on stage" },
  { src: "/images/speaking-stage.jpg", width: 1920, height: 1279, alt: "Md Sonet Mia speaking on a stage", caption: "Speaking on stage" },
  { src: "/images/football-team.jpg", width: 1024, height: 576, alt: "Md Sonet Mia with his football team", caption: "Football with the university team" },
  { src: "/images/capacity-building.jpg", width: 1655, height: 1228, alt: "Md Sonet Mia at a capacity building training session", caption: "Capacity building training" },
  { src: "/images/merchant-venice-2.jpg", width: 1158, height: 651, alt: "A scene from The Merchant of Venice performance", caption: "The Merchant of Venice, a scene" },
  { src: "/images/speaking-podium.jpg", width: 1229, height: 864, alt: "Md Sonet Mia speaking at a podium during a debate event", caption: "Debate and public speaking" },
  { src: "/images/teamwork.jpg", width: 1920, height: 1279, alt: "Md Sonet Mia working with a team", caption: "Teamwork and collaboration" },
];

export default function Home() {
  return (
    <div id="top" className="bg-bg text-body">
      <Nav />
      <main id="main">
        {/* Hero */}
        <section aria-label="Introduction" className="bg-bg pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-8">
            <div className="md:col-span-7">
              <p className="caption-1">Writer, educator, AI creator, digital thinker</p>
              <h1 className="heading-1 hero-gradient mt-4 max-w-[680px]">
                Teacher, actor, writer, building with AI.
              </h1>
              <p className="body-1 mt-6 max-w-[680px] text-body">
                English graduate from Tangail, teaching and creating with AI tools.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#book" className="btn-primary button-md">
                  Book a session
                </a>
                <a href="#projects" className="text-link button-md">
                  See my projects
                </a>
              </div>
              <p className="caption-1 mt-8">
                Teaching for 2+ years, with 50 to 70 students a day.
              </p>
            </div>
            <div className="md:col-span-5">
              <Image
                src="/images/speaking-stage.jpg"
                alt="Md Sonet Mia speaking on stage"
                width={1920}
                height={1279}
                priority
                className="w-full rounded-2xl border border-border object-cover"
              />
              <p className="caption-1 mt-4">Speaking on stage, sharing ideas with a live audience.</p>
            </div>
          </div>
        </section>

        <Tagline />

        {/* About Me */}
        <Section
          id="about"
          num="01"
          label="About me"
          heading="The story behind the vision"
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <Image
                  src="/images/speaking-podium.jpg"
                  alt="Md Sonet Mia speaking at a podium"
                  width={1229}
                  height={864}
                  className="w-full rounded-2xl border border-border object-cover"
                />
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <p className="body-2 max-w-[680px]">
                  From a young age, I have been captivated by the beauty of language and the power
                  of stories. Growing up in Tangail, Bangladesh, my curiosity led me through the
                  worlds of literature, teaching, and technology.
                </p>
                <p className="body-2 mt-4 max-w-[680px]">
                  As an English graduate, I combine my love for language with modern digital
                  tools, creating educational content, exploring AI driven creativity, and mentoring
                  the next generation of learners and thinkers.
                </p>
                <p className="body-2 mt-4 max-w-[680px]">
                  My faith in Islam (Sunni) and my dedication to community service shape everything
                  I do, from volunteering to building applications that serve others.
                </p>
                <div className="mt-8 flex flex-wrap gap-8">
                  <div>
                    <p className="font-display text-2xl font-semibold text-gold">Educator</p>
                    <p className="caption-1 mt-1">Role</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-gold">Tangail</p>
                    <p className="caption-1 mt-1">Base</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-gold">Teaching and AI</p>
                    <p className="caption-1 mt-1">Focus</p>
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
          label="My projects"
          heading="Work that is already live"
          intro="Four projects, each built for real people: learners, creators, and readers. Every link below opens the live project."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className={`card card-hover flex flex-col ${p.large ? "md:col-span-2" : ""}`}
              >
                <h3 className="heading-3">{p.name}</h3>
                <p className="body-4 mt-4 flex-1">{p.outcome}</p>
                <p className="caption-1 mt-4 tabular">{p.fact}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
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
                    Visit {p.name} <Icon name="arrow" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section
          id="education"
          num="03"
          label="Education"
          heading="Academic journey"
          intro="A passion for language, communication, and lifelong learning."
          band
        >
          <div className="max-w-[680px]">
            <Reveal>
              <div className="relative border-l-2 border-gold pl-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-gold"
                />
                <p className="title-1">BA (Honours) in English</p>
                <p className="caption-1 mt-1">Sheikh Fazilatunnesa Mujib University</p>
                <p className="body-4 mt-2">
                  Graduated with a CGPA of <span className="tabular font-semibold text-ink">3.38 out of 4.00</span>.
                  The degree shaped how I teach, write, and think about language.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Teaching Services */}
        <Section
          id="teaching"
          num="04"
          label="Teaching services"
          heading="Empowering students through quality English education"
          intro="Teaching for 2+ years, with 50 to 70 students a day, and 15+ lecture materials prepared every month."
        >
          <div className="flex flex-col gap-6">
            {[
              { icon: "book" as IconName, title: "English grammar coaching", outcome: "Clear grammar, explained in plain words, so students write and speak with confidence." },
              { icon: "chat" as IconName, title: "Spoken English improvement", outcome: "Guided speaking practice that turns hesitant learners into fluent speakers." },
              { icon: "pen" as IconName, title: "Writing improvement", outcome: "Honest feedback on real writing, so every draft comes back stronger." },
              { icon: "users" as IconName, title: "Student mentoring", outcome: "One to one guidance on study habits, goals, and what to learn next." },
            ].map((s, i) => (
              <Reveal key={s.title}>
                <div
                  className={`flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center ${
                    i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <span className="icon-tile">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <div className="flex-1">
                    <p className="title-1">{s.title}</p>
                    <p className="body-4 mt-2">{s.outcome}</p>
                  </div>
                  <a href="#book" className="text-link button-sm shrink-0">
                    Book a session
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12">
              <h3 className="heading-4">Teaching roles</h3>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                <li className="py-4">
                  <p className="title-2">Assistant Teacher, English</p>
                  <p className="caption-1 mt-1">Prativa School and College Coaching, Jamalpur, Jan 2023 to Mar 2024</p>
                </li>
                <li className="py-4">
                  <p className="title-2">Assistant Teacher</p>
                  <p className="caption-1 mt-1">Sobuz Kuri Lab. School and College, Jamalpur, Jan 2022 to Jan 2023</p>
                </li>
              </ul>
            </div>
          </Reveal>
        </Section>

        {/* Book a Session, compact mid page */}
        <Section
          id="book-mid"
          num="05"
          label="Book a session"
          heading="Work with Sonet directly"
          intro="Book an English guidance session, a writing consultation, or an AI workshop. Your request goes straight to WhatsApp."
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
          label="Acting and theatre"
          heading="On the stage"
          intro="Bringing classic literature to life through the art of performance and dramatic expression."
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <Image
                  src="/images/merchant-venice-1.jpg"
                  alt="Md Sonet Mia performing in The Merchant of Venice"
                  width={1920}
                  height={1279}
                  className="w-full rounded-2xl border border-border object-cover"
                />
                <p className="caption-1 mt-4">The Merchant of Venice, on stage.</p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <p className="body-2">
                  Theatre taught me how a story lands in a room: timing, voice, and the pause
                  before a line. That same sense of timing shapes how I teach and how I speak on
                  camera today.
                </p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  <li className="py-4">
                    <p className="title-2">The Merchant of Venice</p>
                    <p className="caption-1 mt-1">Stage performance, classic literature brought to life</p>
                  </li>
                </ul>
                <Image
                  src="/images/merchant-venice-2.jpg"
                  alt="A scene from The Merchant of Venice performance"
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
          label="Writing and author"
          heading="Words that inspire"
          intro="Exploring human emotion and motivation through writing."
          band
        >
          <div className="max-w-[800px]">
            <Reveal>
              <p className="body-2">
                Writing has been my lifelong companion. From poetry to motivational books, I use
                words to connect, inspire, and spark change in the minds of readers across the
                globe.
              </p>
            </Reveal>
            <h3 className="heading-4 mt-12">Writing services</h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {[
                { title: "Creative writing mentoring", desc: "Guidance for writers finding their voice and finishing their work." },
                { title: "Poetry writing workshop", desc: "A practical workshop on writing poems that say something real." },
                { title: "Story writing guidance", desc: "Help shaping an idea into a story with a beginning, a middle, and an end." },
              ].map((w) => (
                <li key={w.title} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="title-1 font-display">{w.title}</p>
                    <p className="body-4 mt-1">{w.desc}</p>
                  </div>
                  <a href="#book" className="text-link button-sm shrink-0">
                    Book a consultation
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
          label="Achievements"
          heading="Recognition and growth"
          intro="Dedicated to continuous learning, service, and excellence."
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { figure: "3.38 / 4.00", label: "CGPA, BA (Honours) in English", source: "Sheikh Fazilatunnesa Mujib University" },
              { figure: "53", label: "Approved students", source: "Sweet Smart Calendar training platform" },
              { figure: "98,000+", label: "Views", source: "Sweet CGI Lab YouTube Shorts channel" },
              { figure: "18", label: "Posts live", source: "SiteIncome Lab blog" },
              { figure: "Chess champion", label: "Championship certificates", source: "Strategic chess tournaments" },
              { figure: "Debate champion", label: "Multiple recognitions", source: "Competitive debate events" },
            ].map((a) => (
              <Reveal key={a.label}>
                <div className="flex h-full flex-col border border-border bg-surface p-6 rounded-2xl">
                  <p className="font-display text-3xl font-semibold tabular text-gold">{a.figure}</p>
                  <p className="title-2 mt-4">{a.label}</p>
                  <p className="caption-1 mt-1">{a.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Volunteering */}
        <Section
          id="volunteering"
          num="09"
          label="Volunteering"
          heading="Serving communities"
          intro="Dedicated to making a meaningful impact through social service, education, and youth empowerment."
          band
        >
          <div className="max-w-[680px]">
            <Reveal>
              <p className="body-2">
                Community service is part of how I work, not something added on top of it. From
                teaching to youth programs, the goal is the same: leave people better equipped
                than I found them.
              </p>
              <a href="#contact" className="btn-secondary button-md mt-8">
                Join my volunteer network
              </a>
            </Reveal>
          </div>
        </Section>

        {/* Applications */}
        <Section
          id="applications"
          num="10"
          label="Applications"
          heading="My applications"
          intro="Useful educational and productivity applications that make learning easier and smarter."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {apps.map((a) => (
              <Reveal key={a.name}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                  <span className="icon-tile">
                    <Icon name={a.icon} size={24} />
                  </span>
                  <div>
                    <p className="title-1">{a.name}</p>
                    <p className="body-4 mt-1">{a.purpose}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Think and Spark */}
        <Section
          id="think-spark"
          num="11"
          label="Projects"
          heading="Think and Spark"
          intro="A faceless YouTube podcast channel educating and inspiring global audiences."
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <Image
                  src="/images/speaking-stage.jpg"
                  alt="Md Sonet Mia speaking on stage for the Think and Spark podcast"
                  width={1920}
                  height={1279}
                  className="w-full rounded-2xl border border-border object-cover"
                />
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <p className="body-2">
                  Think and Spark is built for listeners: clear ideas, honest conversation, and
                  lessons you can use the same day. No face on screen, just the thinking.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Image
                    src="/images/capacity-building.jpg"
                    alt="Capacity building training session"
                    width={1655}
                    height={1228}
                    className="w-full rounded-2xl border border-border object-cover"
                  />
                  <Image
                    src="/images/teamwork.jpg"
                    alt="Teamwork and collaboration"
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
          label="AI creator"
          heading="AI powered creativity"
          intro="Harnessing artificial intelligence to build, create, and innovate. Prompt writing, content creation, video generation, and creative strategy."
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="flex flex-col gap-6">
                {[
                  { title: "AI Prompt Masterclass", desc: "Learn the art of writing effective prompts for ChatGPT, Gemini, and other AI tools." },
                  { title: "AI Content Strategy", desc: "Develop a content strategy powered by AI for maximum reach and engagement." },
                  { title: "AI Video Workshop", desc: "Generate creative video concepts using AI driven brainstorming techniques." },
                ].map((c) => (
                  <Reveal key={c.title}>
                    <div className="rounded-2xl border border-border bg-surface p-6">
                      <p className="title-1 font-display text-xl">{c.title}</p>
                      <p className="body-4 mt-2">{c.desc}</p>
                      <a href="#book" className="text-link button-sm mt-4 inline-block">
                        Book a session
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="flex h-full flex-col justify-center rounded-2xl bg-surface-2 p-8">
                  <p className="font-display text-3xl font-semibold text-ink">AI Creator</p>
                  <p className="body-2 mt-4">
                    Faster drafts, sharper ideas, and more time for the teaching that only a
                    person can do.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="chip">Prompt writing</span>
                    <span className="chip">Content creation</span>
                    <span className="chip">Video generation</span>
                    <span className="chip">Creative strategy</span>
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
          label="Adobe Stock"
          heading="Stock content creator"
          intro="Creating visual content for the global marketplace."
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="body-2">
                  As an Adobe Stock contributor, I create images and video that buyers around the
                  world can use in their own work. The craft is in the details: a clean concept,
                  honest metadata, and content that solves a real need.
                </p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  <li className="py-4">
                    <p className="title-2">AI image creation guidance</p>
                    <p className="body-4 mt-1">How to create stock ready images with AI tools, and what to check before upload.</p>
                  </li>
                  <li className="py-4">
                    <p className="title-2">AI video generation guidance</p>
                    <p className="body-4 mt-1">How to plan short stock clips that buyers actually search for.</p>
                  </li>
                  <li className="py-4">
                    <p className="title-2">Stock content strategy</p>
                    <p className="body-4 mt-1">Choosing topics by season and demand, not by guesswork.</p>
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="heading-4">Active contributor</p>
                  <p className="body-4 mt-2">Status on Adobe Stock, creating and uploading stock content.</p>
                  <a href="#book" className="text-link button-sm mt-4 inline-block">
                    Ask about stock strategy
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
          label="Digital skills"
          heading="Tools and technologies"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { group: "AI tools", items: ["ChatGPT", "Gemini"] },
              { group: "Content creation", items: ["Prompt writing", "Content creation", "Video generation", "Creative strategy"] },
              { group: "Teaching", items: ["English grammar", "Spoken English", "Writing improvement", "Student mentoring"] },
              { group: "Stock content", items: ["AI image creation", "AI video generation", "Stock content strategy"] },
            ].map((g) => (
              <Reveal key={g.group}>
                <h3 className="heading-4">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
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
          label="Language proficiency"
          heading="Languages I work in"
          band
        >
          <ul className="max-w-[800px] divide-y divide-border border-y border-border">
            {[
              { lang: "Bangla", level: "Native", note: "First language, spoken and written every day." },
              { lang: "English", level: "Advanced", note: "BA Honours in English, teaching and writing in English." },
              { lang: "Hindi", level: "Fluent", note: "Fluent in everyday conversation." },
              { lang: "Arabic", level: "Reading", note: "Reading level." },
              { lang: "Urdu", level: "Reading", note: "Reading level." },
              { lang: "Korean", level: "Reading", note: "Reading level." },
            ].map((l) => (
              <li key={l.lang} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="title-1 font-display">{l.lang}</p>
                  <p className="body-4 mt-1">{l.note}</p>
                </div>
                <span className="chip shrink-0">{l.level}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Personal Reflections */}
        <section aria-label="Personal reflections" className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[680px] px-6 text-center md:px-8">
            <Reveal>
              <div className="gold-rule mx-auto" aria-hidden="true" />
              <p className="caption-1 mt-4">Personal reflections</p>
              <p className="body-1 mt-8 font-display text-2xl font-medium leading-relaxed text-ink md:text-3xl md:leading-relaxed">
                Language opened the first door for me. Teaching opened the second. Now AI tools
                open a third, and I walk through it the same way: slowly, honestly, and with
                learners beside me.
              </p>
              <p className="body-2 mt-6">
                Everything on this page comes back to one idea. Learn something well, then turn
                around and teach it to someone else.
              </p>
              <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        {/* Hobbies and Sports */}
        <Section
          id="hobbies"
          num="16"
          label="Hobbies and sports"
          heading="Beyond the classroom"
          intro="From creative pursuits to competitive sports, moments of passion and growth."
          band
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Image
                src="/images/football-team.jpg"
                alt="Md Sonet Mia with his football team"
                width={1024}
                height={576}
                className="w-full rounded-2xl border border-border object-cover"
              />
              <p className="caption-1 mt-4">Football with the university team.</p>
            </Reveal>
            <Reveal>
              <Image
                src="/images/speaking-podium.jpg"
                alt="Md Sonet Mia speaking at a podium during a debate event"
                width={1229}
                height={864}
                className="w-full rounded-2xl border border-border object-cover"
              />
              <p className="caption-1 mt-4">Debate and public speaking.</p>
            </Reveal>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "Football player", desc: "Active team player in university and local football matches." },
              { title: "Badminton player", desc: "Enjoys competitive and recreational badminton." },
              { title: "Chess champion", desc: "Championship certificates in strategic chess tournaments." },
              { title: "Debate champion", desc: "Multiple recognitions in competitive debate events." },
            ].map((h) => (
              <li key={h.title} className="rounded-2xl border border-border bg-surface p-6">
                <p className="title-1">{h.title}</p>
                <p className="body-4 mt-2">{h.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="chip">Football</span>
            <span className="chip">Badminton</span>
            <span className="chip">Chess</span>
            <span className="chip">Debate</span>
          </div>
        </Section>

        {/* Gallery */}
        <Section
          id="gallery"
          num="17"
          label="Gallery"
          heading="Captured moments"
          intro="A visual journey through my experiences, events, and memories."
        >
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {gallery.map((g) => (
              <figure key={g.src} className="break-inside-avoid">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  loading="lazy"
                  className="w-full rounded-2xl border border-border object-cover"
                />
                <figcaption className="caption-1 mt-2">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Book a Session, full form */}
        <Section
          id="book"
          num="18"
          label="Book a session"
          heading="Let us work together"
          intro="Tell Sonet what you need help with. Your request opens in WhatsApp, ready to send."
          band
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="order-2 md:order-1 md:col-span-5">
              <Reveal>
                <h3 className="heading-4">What a session gives you</h3>
                <ul className="mt-4 flex flex-col gap-4">
                  <li className="flex gap-4">
                    <span className="icon-tile"><Icon name="check" size={24} /></span>
                    <p className="body-2"><span className="font-semibold text-ink">Clear next steps.</span> You leave knowing exactly what to practise.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="icon-tile"><Icon name="check" size={24} /></span>
                    <p className="body-2"><span className="font-semibold text-ink">Honest feedback.</span> Real notes on your work, not generic praise.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="icon-tile"><Icon name="check" size={24} /></span>
                    <p className="body-2"><span className="font-semibold text-ink">A plan you can follow.</span> Materials and guidance matched to your level.</p>
                  </li>
                </ul>
                <p className="caption-1 mt-8">No payment is taken on this site. Sessions are confirmed on WhatsApp.</p>
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
          label="Contact"
          heading="Get in touch"
          intro="The fastest way to reach Sonet is WhatsApp. Email works too."
        >
          <div className="max-w-[800px]">
            <Reveal>
              <a
                href="mailto:md.Sonet.mia2@gmail.com"
                className="font-display text-2xl font-semibold break-words text-ink hover:text-gold md:text-4xl"
              >
                md.Sonet.mia2@gmail.com
              </a>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="https://wa.me/8801797953059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-ink"
                >
                  <span className="icon-tile"><Icon name="whatsapp" size={24} /></span>
                  WhatsApp 01797953059
                </a>
                <a
                  href="https://facebook.com/mdsont.mia.777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-ink"
                >
                  <span className="icon-tile"><Icon name="facebook" size={24} /></span>
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@SweetCGILab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-ink"
                >
                  <span className="icon-tile"><Icon name="youtube" size={24} /></span>
                  YouTube, Sweet CGI Lab
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
