// i18n strings for the SONET personal website (mdsonetmia.vercel.app).
//
// Usage: import { strings, type Lang } from "@/i18n/strings";
//   strings["nav.about"][lang]  — or use the t() helper below.
// Every string hard-coded in app/page.tsx, components/Nav.tsx,
// components/Footer.tsx, components/BookingForm.tsx, components/Tagline.tsx
// and app/layout.tsx (metadata) has a key here. The English value is the
// TIGHTENED copy (see i18n/COPY_NOTES.md); the Bangla value is the full
// translation. Proper names, URLs, emails, phone numbers and brand names
// (Sweet Smart Calendar, PromptEx, Sweet CGI Lab, SiteIncome Lab,
// Think & Spark) stay in English in both languages. Numbers/stats keep
// Western digits in both languages.
//
// KEY MAP (key prefix -> where it appears on the page)
//   meta.*        app/layout.tsx — <title>, meta/OG/Twitter description, keywords, OG image alt
//   nav.*         components/Nav.tsx — skip link, wordmark, nav links, theme
//                  segmented control, language toggle, mobile menu,
//                  menu toggle aria-labels
//   hero.*        app/page.tsx — hero eyebrow, headline, subhead, CTAs, proof line,
//                  hero image alt + caption
//   tagline.*     components/Tagline.tsx — word-by-word reveal lines + section aria-label
//   about.*       app/page.tsx #about — label, heading, 3 paragraphs, 3 quick facts
//   projects.*    app/page.tsx #projects — label, heading, intro, 4 project cards
//                  (name/outcome/fact/tags/visit link), visit-link template
//   education.*   app/page.tsx #education — label, heading, intro, degree, university,
//                  CGPA line (cgpa is the gold-styled span inside body)
//   teaching.*    app/page.tsx #teaching — label, heading, intro, 4 service rows,
//                  "Teaching roles" + 2 employment entries
//   bookMid.*     app/page.tsx #book-mid — compact booking section heading/intro
//   acting.*      app/page.tsx #acting — label, heading, intro, body, production list,
//                  image alts + captions
//   writing.*     app/page.tsx #writing — label, heading, intro, body, 3 services
//   achievements.* app/page.tsx #achievements — label, heading, intro, 6 stat cards
//   volunteering.* app/page.tsx #volunteering — label, heading, intro, body, CTA
//   apps.*        app/page.tsx #applications — label, heading, intro, 10 app names + purposes
//   podcast.*     app/page.tsx #think-spark — label, heading, intro, body, image alts
//   ai.*          app/page.tsx #ai-creator — label, heading, intro, 3 courses,
//                  side panel, capability chips
//   stock.*       app/page.tsx #adobe-stock — label, heading, intro, body,
//                  3 guidance rows, status card
//   skills.*      app/page.tsx #digital-skills — label, heading, 4 skill groups + chips
//   languages.*   app/page.tsx #languages — label, heading, 6 languages (name/level/note)
//   reflections.* app/page.tsx — personal reflections aria-label, quote, closing line
//   hobbies.*     app/page.tsx #hobbies — label, heading, intro, 2 photo captions/alts,
//                  4 hobby rows, 4 chips
//   gallery.*     app/page.tsx #gallery — label, heading, intro, 7 image alts + captions
//   booking.*     app/page.tsx #book + components/BookingForm.tsx — full booking section,
//                  benefits, form labels/placeholders/errors/success state,
//                  WhatsApp message template, session-type options
//   contact.*     app/page.tsx #contact — label, heading, intro, link labels
//   footer.*      components/Footer.tsx — bio, footer nav, social labels, copyright,
//                  Privacy/Terms links, footer nav aria-label
//   privacy.*     app/privacy/page.tsx — privacy policy page
//   terms.*       app/terms/page.tsx — terms of use page
//   misc.*        app/not-found.tsx (bonus, outside the scoped file list) — 404 strings

export type Lang = "en" | "bn";

export const strings: Record<string, { en: string; bn: string }> = {
  // ---------------------------------------------------------------- meta
  "meta.title": {
    en: "Md Sonet Mia — Writer, Educator, AI Creator",
    bn: "Md Sonet Mia — Writer, Educator, AI Creator",
  },
  "meta.description": {
    en: "English graduate, educator, writer and digital creator from Tangail, Bangladesh. He teaches, creates with AI tools, and builds educational content and digital ideas.",
    bn: "টাঙ্গাইলের ইংরেজি স্নাতক, শিক্ষক, লেখক ও ডিজিটাল স্রষ্টা। তিনি শেখান, এআই টুল দিয়ে তৈরি করেন, আর শিক্ষামূলক কনটেন্ট ও ডিজিটাল আইডিয়া গড়ে তোলেন।",
  },
  "meta.ogDescription": {
    en: "An English graduate, educator, writer and digital creator from Tangail, Bangladesh.",
    bn: "টাঙ্গাইলের ইংরেজি স্নাতক, শিক্ষক, লেখক ও ডিজিটাল স্রষ্টা।",
  },
  "meta.keywords": {
    en: "Md Sonet Mia, English teacher Tangail, AI creator Bangladesh, Sweet Smart Calendar, PromptEx, Sweet CGI Lab, SiteIncome Lab",
    bn: "Md Sonet Mia, English teacher Tangail, AI creator Bangladesh, Sweet Smart Calendar, PromptEx, Sweet CGI Lab, SiteIncome Lab",
  },
  "meta.ogImageAlt": {
    en: "Md Sonet Mia speaking on stage",
    bn: "মঞ্চে বক্তৃতা দিচ্ছেন Md Sonet Mia",
  },

  // ---------------------------------------------------------------- nav
  "nav.skipToContent": { en: "Skip to content", bn: "মূল কনটেন্টে যান" },
  "nav.brand": { en: "Md Sonet Mia", bn: "Md Sonet Mia" },
  "nav.mainAriaLabel": { en: "Main navigation", bn: "প্রধান নেভিগেশন" },
  "nav.about": { en: "About", bn: "আমার সম্পর্কে" },
  "nav.teaching": { en: "Teaching", bn: "শিক্ষাদান" },
  "nav.writing": { en: "Writing", bn: "লেখালেখি" },
  "nav.projects": { en: "Projects", bn: "প্রজেক্ট" },
  "nav.aiCreator": { en: "AI creator", bn: "এআই ক্রিয়েটর" },
  "nav.gallery": { en: "Gallery", bn: "গ্যালারি" },
  "nav.contact": { en: "Contact", bn: "যোগাযোগ" },
  "nav.themeLabel": { en: "Colour theme", bn: "রঙের থিম" },
  "nav.themeSystem": { en: "System theme", bn: "সিস্টেম থিম" },
  "nav.themeLight": { en: "Light theme", bn: "হালকা থিম" },
  "nav.themeDark": { en: "Dark theme", bn: "গাঢ় থিম" },
  "nav.themeSystemShort": { en: "System", bn: "সিস্টেম" },
  "nav.themeLightShort": { en: "Light", bn: "হালকা" },
  "nav.themeDarkShort": { en: "Dark", bn: "গাঢ়" },
  "nav.languageLabel": { en: "Language", bn: "ভাষা" },
  "nav.langEnglish": { en: "EN", bn: "EN" },
  "nav.langBangla": { en: "বাংলা", bn: "বাংলা" },
  "nav.bookSession": { en: "Book a session", bn: "সেশন বুক করুন" },
  "nav.openMenu": { en: "Open menu", bn: "মেনু খুলুন" },
  "nav.closeMenu": { en: "Close menu", bn: "মেনু বন্ধ করুন" },
  "nav.menuAriaLabel": { en: "Menu", bn: "মেনু" },

  // ---------------------------------------------------------------- hero
  "hero.ariaLabel": { en: "Introduction", bn: "ভূমিকা" },
  "hero.eyebrow": {
    en: "Writer, educator, AI creator, digital thinker",
    bn: "লেখক, শিক্ষক, এআই ক্রিয়েটর, ডিজিটাল চিন্তক",
  },
  "hero.headline": {
    en: "Teacher, actor, writer, building with AI.",
    bn: "শিক্ষক, অভিনেতা, লেখক — এআই দিয়ে গড়ছি।",
  },
  "hero.subhead": {
    en: "English graduate from Tangail, teaching and creating with AI tools.",
    bn: "টাঙ্গাইলের ইংরেজি স্নাতক — এআই টুল দিয়ে শেখাই ও তৈরি করি।",
  },
  "hero.bookSession": { en: "Book a session", bn: "সেশন বুক করুন" },
  "hero.seeProjects": { en: "See my projects", bn: "আমার প্রজেক্টগুলো দেখুন" },
  "hero.proof": {
    en: "Teaching 2+ years, 50 to 70 students a day.",
    bn: "2+ বছর ধরে পড়াচ্ছি, প্রতিদিন 50–70 জন শিক্ষার্থী।",
  },
  "hero.imageAlt": {
    en: "Md Sonet Mia speaking on stage",
    bn: "মঞ্চে বক্তৃতা দিচ্ছেন Md Sonet Mia",
  },
  "hero.imageCaption": {
    en: "Speaking on stage to a live audience.",
    bn: "মঞ্চে সরাসরি দর্শকদের সামনে বক্তৃতা দিচ্ছেন।",
  },

  // ---------------------------------------------------------------- tagline
  "tagline.ariaLabel": {
    en: "A note on teaching and creating",
    bn: "শিক্ষাদান ও সৃষ্টি নিয়ে একটি কথা",
  },
  "tagline.line1": { en: "Teach with patience.", bn: "ধৈর্য ধরে শেখাই।" },
  "tagline.line2": { en: "Create with curiosity.", bn: "কৌতূহল নিয়ে তৈরি করি।" },
  "tagline.line3": { en: "Earn with honest work.", bn: "সৎ পরিশ্রমে উপার্জন করি।" },
  "tagline.line4": {
    en: "In English and Bangla, for learners everywhere.",
    bn: "ইংরেজি ও বাংলায়, সব শিক্ষার্থীর জন্য।",
  },

  // ---------------------------------------------------------------- about
  "about.label": { en: "About me", bn: "আমার সম্পর্কে" },
  "about.heading": { en: "The story behind the vision", bn: "এই স্বপ্নের পেছনের গল্প" },
  "about.para1": {
    en: "From a young age, I loved the beauty of language and the power of stories. Growing up in Tangail, Bangladesh, curiosity led me through literature, teaching, and technology.",
    bn: "ছোটবেলা থেকেই ভাষার সৌন্দর্য আর গল্পের শক্তি আমাকে মুগ্ধ করে। টাঙ্গাইলে বড় হতে হতে কৌতূহল আমাকে সাহিত্য, শিক্ষাদান আর প্রযুক্তির জগতে নিয়ে গেছে।",
  },
  "about.para2": {
    en: "As an English graduate, I pair my love of language with modern digital tools: educational content, AI driven creativity, and mentoring the next generation of learners and thinkers.",
    bn: "ইংরেজি স্নাতক হিসেবে ভাষার প্রতি ভালোবাসাকে আধুনিক ডিজিটাল টুলের সঙ্গে মিলিয়ে শিক্ষামূলক কনটেন্ট তৈরি করি, এআই দিয়ে সৃজনশীল কাজ করি, আর নতুন প্রজন্মের শিক্ষার্থী ও চিন্তকদের গাইড করি।",
  },
  "about.para3": {
    en: "My faith in Islam (Sunni) and my commitment to community service shape everything I do — from volunteering to building apps that serve others.",
    bn: "ইসলামে (সুন্নি) আমার বিশ্বাস আর সমাজসেবার প্রতি আমার অঙ্গীকার আমার প্রতিটি কাজকে গড়ে তোলে — স্বেচ্ছাসেবা থেকে শুরু করে মানুষের উপকারে আসে এমন অ্যাপ তৈরি পর্যন্ত।",
  },
  "about.factRoleValue": { en: "Educator", bn: "শিক্ষক" },
  "about.factRoleLabel": { en: "Role", bn: "ভূমিকা" },
  "about.factBaseValue": { en: "Tangail", bn: "টাঙ্গাইল" },
  "about.factBaseLabel": { en: "Base", bn: "ঠিকানা" },
  "about.factFocusValue": { en: "Teaching and AI", bn: "শিক্ষাদান ও এআই" },
  "about.factFocusLabel": { en: "Focus", bn: "মনোযোগ" },
  "about.imageAlt": {
    en: "Md Sonet Mia speaking at a podium",
    bn: "পোডিয়ামে বক্তৃতা দিচ্ছেন Md Sonet Mia",
  },

  // ---------------------------------------------------------------- projects
  "projects.label": { en: "My projects", bn: "আমার প্রজেক্ট" },
  "projects.heading": { en: "Work that is already live", bn: "যেসব কাজ ইতিমধ্যে লাইভ" },
  "projects.intro": {
    en: "Four projects, built for real people: learners, creators, and readers. Every link opens the live project.",
    bn: "চারটি প্রজেক্ট, আসল মানুষের জন্য তৈরি: শিক্ষার্থী, স্রষ্টা ও পাঠক। নিচের প্রতিটি লিংক সরাসরি লাইভ প্রজেক্টে নিয়ে যাবে।",
  },
  // "{name}" is replaced with the project name at render time.
  "projects.visit": { en: "Visit {name}", bn: "{name} দেখুন" },
  "projects.ssc.name": { en: "Sweet Smart Calendar", bn: "Sweet Smart Calendar" },
  "projects.ssc.outcome": {
    en: "A microstock training platform that helps learners find the right season to create and upload stock content.",
    bn: "একটি মাইক্রোস্টক ট্রেনিং প্ল্যাটফর্ম — শিক্ষার্থীদের স্টক কনটেন্ট তৈরি ও আপলোডের সঠিক মৌসুম খুঁজে পেতে সাহায্য করে।",
  },
  "projects.ssc.fact": {
    en: "53 approved students, 216 bilingual topics",
    bn: "53 জন অনুমোদিত শিক্ষার্থী, 216টি দ্বিভাষিক টপিক",
  },
  "projects.ssc.tag1": { en: "Microstock", bn: "মাইক্রোস্টক" },
  "projects.ssc.tag2": { en: "Teaching", bn: "শিক্ষাদান" },
  "projects.ssc.tag3": { en: "Web app", bn: "ওয়েব অ্যাপ" },
  "projects.promptex.name": { en: "PromptEx", bn: "PromptEx" },
  "projects.promptex.outcome": {
    en: "A free microstock metadata and image to prompt tool that works with your own API keys.",
    bn: "বিনামূল্যের মাইক্রোস্টক মেটাডেটা ও ইমেজ-টু-প্রম্পট টুল — আপনার নিজের API কি দিয়ে চলে।",
  },
  "projects.promptex.fact": {
    en: "Free to use, your API keys",
    bn: "ব্যবহার সম্পূর্ণ ফ্রি, আপনার নিজের API কি",
  },
  "projects.promptex.tag1": { en: "AI tools", bn: "এআই টুল" },
  "projects.promptex.tag2": { en: "Metadata", bn: "মেটাডেটা" },
  "projects.promptex.tag3": { en: "Free", bn: "ফ্রি" },
  "projects.cgi.name": { en: "Sweet CGI Lab", bn: "Sweet CGI Lab" },
  "projects.cgi.outcome": {
    en: "A YouTube Shorts channel where impossible ideas become realistic CGI in short, satisfying clips.",
    bn: "একটি YouTube Shorts চ্যানেল — অসম্ভব আইডিয়াগুলো এখানে বাস্তবসম্মত CGI-তে রূপ নেয়, ছোট ছোট তৃপ্তিদায়ক ক্লিপে।",
  },
  "projects.cgi.fact": {
    en: "72 subscribers, 98,000+ views",
    bn: "72 জন সাবস্ক্রাইবার, 98,000+ ভিউ",
  },
  "projects.cgi.tag1": { en: "YouTube Shorts", bn: "YouTube Shorts" },
  "projects.cgi.tag2": { en: "CGI", bn: "CGI" },
  "projects.cgi.tag3": { en: "Video", bn: "ভিডিও" },
  "projects.siteincome.name": { en: "SiteIncome Lab", bn: "SiteIncome Lab" },
  "projects.siteincome.outcome": {
    en: "A blog about website monetization, written for beginners who want to earn from a site they own.",
    bn: "ওয়েবসাইট মনিটাইজেশন নিয়ে একটি ব্লগ — নিজের সাইট থেকে আয় করতে চান এমন নতুনদের জন্য লেখা।",
  },
  "projects.siteincome.fact": { en: "18 posts live", bn: "18টি পোস্ট লাইভ" },
  "projects.siteincome.tag1": { en: "Blog", bn: "ব্লগ" },
  "projects.siteincome.tag2": { en: "Monetization", bn: "মনিটাইজেশন" },
  "projects.siteincome.tag3": { en: "Writing", bn: "লেখালেখি" },

  // ---------------------------------------------------------------- education
  "education.label": { en: "Education", bn: "শিক্ষা" },
  "education.heading": { en: "Academic journey", bn: "একাডেমিক যাত্রা" },
  "education.intro": {
    en: "A passion for language, communication, and lifelong learning.",
    bn: "ভাষা, যোগাযোগ ও আজীবন শেখার প্রতি ভালোবাসা।",
  },
  "education.degree": { en: "BA (Honours) in English", bn: "BA (Honours) in English" },
  "education.university": {
    en: "Sheikh Fazilatunnesa Mujib University",
    bn: "Sheikh Fazilatunnesa Mujib University",
  },
  // Full body line; "education.cgpa" is the gold-styled span inside it.
  "education.body": {
    en: "Graduated with a CGPA of 3.38 out of 4.00. It shaped how I teach, write, and think about language.",
    bn: "CGPA 3.38 out of 4.00 নিয়ে স্নাতক। এই ডিগ্রি আমার শেখানো, লেখা আর ভাষা নিয়ে ভাবনাকে গড়ে দিয়েছে।",
  },
  "education.cgpa": { en: "3.38 out of 4.00", bn: "3.38 out of 4.00" },

  // ---------------------------------------------------------------- teaching
  "teaching.label": { en: "Teaching services", bn: "শিক্ষাদান সেবা" },
  "teaching.heading": {
    en: "Quality English teaching that empowers students",
    bn: "মানসম্মত ইংরেজি শিক্ষা, যা শিক্ষার্থীদের আত্মবিশ্বাসী করে তোলে",
  },
  "teaching.intro": {
    en: "2+ years teaching, 50 to 70 students a day, 15+ lecture materials a month.",
    bn: "2+ বছর ধরে পড়াচ্ছি, প্রতিদিন 50–70 জন শিক্ষার্থী, প্রতি মাসে 15+ লেকচার ম্যাটেরিয়াল।",
  },
  "teaching.service1.title": { en: "English grammar coaching", bn: "ইংরেজি গ্রামার কোচিং" },
  "teaching.service1.outcome": {
    en: "Clear grammar in plain words, so students write and speak with confidence.",
    bn: "সহজ ভাষায় পরিষ্কার গ্রামার — যাতে শিক্ষার্থীরা আত্মবিশ্বাসের সঙ্গে লিখতে ও বলতে পারে।",
  },
  "teaching.service2.title": { en: "Spoken English improvement", bn: "স্পোকেন ইংরেজি উন্নয়ন" },
  "teaching.service2.outcome": {
    en: "Guided speaking practice that turns hesitant learners into fluent speakers.",
    bn: "গাইডেড স্পিকিং প্র্যাকটিস — দ্বিধাগ্রস্ত শিক্ষার্থীদের সাবলীল বক্তায় পরিণত করে।",
  },
  "teaching.service3.title": { en: "Writing improvement", bn: "লেখার দক্ষতা উন্নয়ন" },
  "teaching.service3.outcome": {
    en: "Honest feedback on real writing, so every draft comes back stronger.",
    bn: "আসল লেখার ওপর সৎ ফিডব্যাক — প্রতিটি ড্রাফট আগের চেয়ে শক্তিশালী হয়ে ফিরে আসে।",
  },
  "teaching.service4.title": { en: "Student mentoring", bn: "শিক্ষার্থী মেন্টরিং" },
  "teaching.service4.outcome": {
    en: "One to one guidance on study habits, goals, and what to learn next.",
    bn: "পড়াশোনার অভ্যাস, লক্ষ্য ও পরবর্তী ধাপ নিয়ে ব্যক্তিগত গাইডলাইন।",
  },
  "teaching.bookSession": { en: "Book a session", bn: "সেশন বুক করুন" },
  "teaching.rolesHeading": { en: "Teaching roles", bn: "শিক্ষকতার ভূমিকা" },
  "teaching.role1.title": { en: "Assistant Teacher, English", bn: "সহকারী শিক্ষক, ইংরেজি" },
  "teaching.role1.org": {
    en: "Prativa School and College Coaching, Jamalpur, Jan 2023 to Mar 2024",
    bn: "Prativa School and College Coaching, Jamalpur, Jan 2023 to Mar 2024",
  },
  "teaching.role2.title": { en: "Assistant Teacher", bn: "সহকারী শিক্ষক" },
  "teaching.role2.org": {
    en: "Sobuz Kuri Lab. School and College, Jamalpur, Jan 2022 to Jan 2023",
    bn: "Sobuz Kuri Lab. School and College, Jamalpur, Jan 2022 to Jan 2023",
  },

  // ---------------------------------------------------------------- book-mid
  "bookMid.label": { en: "Book a session", bn: "সেশন বুক করুন" },
  "bookMid.heading": { en: "Work with Sonet directly", bn: "সনেটের সঙ্গে সরাসরি কাজ করুন" },
  "bookMid.intro": {
    en: "Book an English guidance session, a writing consultation, or an AI workshop. Your request goes straight to WhatsApp.",
    bn: "ইংরেজি গাইডলাইন সেশন, লেখার পরামর্শ, বা এআই ওয়ার্কশপ বুক করুন। আপনার অনুরোধ সরাসরি WhatsApp-এ যাবে।",
  },

  // ---------------------------------------------------------------- acting
  "acting.label": { en: "Acting and theatre", bn: "অভিনয় ও থিয়েটার" },
  "acting.heading": { en: "On the stage", bn: "মঞ্চে" },
  "acting.intro": {
    en: "Bringing classic literature to life through performance.",
    bn: "অভিনয়ের মধ্য দিয়ে ক্লাসিক সাহিত্যকে প্রাণবন্ত করে তোলা।",
  },
  "acting.body": {
    en: "Theatre taught me how a story lands in a room: timing, voice, the pause before a line. That timing shapes how I teach and speak on camera today.",
    bn: "থিয়েটার আমাকে শিখিয়েছে একটি গল্প ঘরে কীভাবে পৌঁছায়: সময়, কণ্ঠস্বর, আর লাইনের আগের নীরবতা। সেই সময়জ্ঞানই আজ আমার শেখানো আর ক্যামেরার সামনে বলাকে গড়ে তোলে।",
  },
  "acting.playTitle": { en: "The Merchant of Venice", bn: "The Merchant of Venice" },
  "acting.playNote": {
    en: "Stage performance, classic literature brought to life",
    bn: "মঞ্চ অভিনয় — ক্লাসিক সাহিত্য প্রাণ পেয়েছে",
  },
  "acting.image1Alt": {
    en: "Md Sonet Mia performing in The Merchant of Venice",
    bn: "The Merchant of Venice-এ অভিনয় করছেন Md Sonet Mia",
  },
  "acting.image1Caption": {
    en: "The Merchant of Venice, on stage.",
    bn: "The Merchant of Venice, মঞ্চে।",
  },
  "acting.image2Alt": {
    en: "A scene from The Merchant of Venice performance",
    bn: "The Merchant of Venice অভিনয়ের একটি দৃশ্য",
  },

  // ---------------------------------------------------------------- writing
  "writing.label": { en: "Writing and author", bn: "লেখালেখি ও লেখক" },
  "writing.heading": { en: "Words that inspire", bn: "অনুপ্রেরণার শব্দ" },
  "writing.intro": {
    en: "Exploring human emotion and motivation through writing.",
    bn: "লেখার মধ্য দিয়ে মানুষের আবেগ ও অনুপ্রেরণা খোঁজা।",
  },
  "writing.body": {
    en: "Writing has been my lifelong companion. From poetry to motivational books, I use words to connect, inspire, and spark change in readers around the world.",
    bn: "লেখা আমার আজীবনের সঙ্গী। কবিতা থেকে অনুপ্রেরণামূলক বই — শব্দ দিয়ে আমি মানুষের সঙ্গে যুক্ত হই, অনুপ্রাণিত করি, আর সারা বিশ্বের পাঠকদের মনে পরিবর্তনের সূচনা করি।",
  },
  "writing.servicesHeading": { en: "Writing services", bn: "লেখার সেবা" },
  "writing.service1.title": { en: "Creative writing mentoring", bn: "সৃজনশীল লেখা মেন্টরিং" },
  "writing.service1.desc": {
    en: "Guidance for writers finding their voice and finishing their work.",
    bn: "নিজের কণ্ঠ খুঁজে পাওয়া আর কাজ শেষ করা — লেখকদের জন্য গাইডলাইন।",
  },
  "writing.service2.title": { en: "Poetry writing workshop", bn: "কবিতা লেখার ওয়ার্কশপ" },
  "writing.service2.desc": {
    en: "A practical workshop on writing poems that say something real.",
    bn: "সত্যিকারের কিছু বলা কবিতা লেখার বাস্তবসম্মত ওয়ার্কশপ।",
  },
  "writing.service3.title": { en: "Story writing guidance", bn: "গল্প লেখার গাইডলাইন" },
  "writing.service3.desc": {
    en: "Help shaping an idea into a story with a beginning, a middle, and an end.",
    bn: "একটি আইডিয়াকে শুরু, মধ্য ও শেষসহ পূর্ণ গল্পে রূপ দিতে সাহায্য।",
  },
  "writing.bookConsultation": { en: "Book a consultation", bn: "পরামর্শ বুক করুন" },

  // ---------------------------------------------------------------- achievements
  "achievements.label": { en: "Achievements", bn: "অর্জন" },
  "achievements.heading": { en: "Recognition and growth", bn: "স্বীকৃতি ও অগ্রগতি" },
  "achievements.intro": {
    en: "Continuous learning, service, and excellence.",
    bn: "নিরবচ্ছিন্ন শেখা, সেবা ও উৎকর্ষ।",
  },
  "achievements.cgpa.figure": { en: "3.38 / 4.00", bn: "3.38 / 4.00" },
  "achievements.cgpa.label": { en: "CGPA, BA (Honours) in English", bn: "CGPA, BA (Honours) in English" },
  "achievements.cgpa.source": {
    en: "Sheikh Fazilatunnesa Mujib University",
    bn: "Sheikh Fazilatunnesa Mujib University",
  },
  "achievements.students.figure": { en: "53", bn: "53" },
  "achievements.students.label": { en: "Approved students", bn: "অনুমোদিত শিক্ষার্থী" },
  "achievements.students.source": {
    en: "Sweet Smart Calendar training platform",
    bn: "Sweet Smart Calendar ট্রেনিং প্ল্যাটফর্ম",
  },
  "achievements.views.figure": { en: "98,000+", bn: "98,000+" },
  "achievements.views.label": { en: "Views", bn: "ভিউ" },
  "achievements.views.source": {
    en: "Sweet CGI Lab YouTube Shorts channel",
    bn: "Sweet CGI Lab YouTube Shorts চ্যানেল",
  },
  "achievements.posts.figure": { en: "18", bn: "18" },
  "achievements.posts.label": { en: "Posts live", bn: "লাইভ পোস্ট" },
  "achievements.posts.source": { en: "SiteIncome Lab blog", bn: "SiteIncome Lab ব্লগ" },
  "achievements.chess.figure": { en: "Chess champion", bn: "দাবা চ্যাম্পিয়ন" },
  "achievements.chess.label": { en: "Championship certificates", bn: "চ্যাম্পিয়নশিপ সার্টিফিকেট" },
  "achievements.chess.source": { en: "Strategic chess tournaments", bn: "কৌশলগত দাবা টুর্নামেন্ট" },
  "achievements.debate.figure": { en: "Debate champion", bn: "বিতর্ক চ্যাম্পিয়ন" },
  "achievements.debate.label": { en: "Multiple recognitions", bn: "একাধিক স্বীকৃতি" },
  "achievements.debate.source": { en: "Competitive debate events", bn: "প্রতিযোগিতামূলক বিতর্ক অনুষ্ঠান" },

  // ---------------------------------------------------------------- volunteering
  "volunteering.label": { en: "Volunteering", bn: "স্বেচ্ছাসেবা" },
  "volunteering.heading": { en: "Serving communities", bn: "সমাজের সেবায়" },
  "volunteering.intro": {
    en: "Making a real impact through social service, education, and youth empowerment.",
    bn: "সমাজসেবা, শিক্ষা ও যুব ক্ষমতায়নের মধ্য দিয়ে বাস্তব পরিবর্তন আনা।",
  },
  "volunteering.body": {
    en: "Community service is part of how I work, not an extra. From teaching to youth programs, the goal is the same: leave people better equipped than I found them.",
    bn: "সমাজসেবা আমার কাজেরই অংশ, আলাদা কিছু নয়। শিক্ষাদান থেকে যুব কর্মসূচি — লক্ষ্য একটাই: মানুষকে আগের চেয়ে ভালোভাবে প্রস্তুত রেখে যাওয়া।",
  },
  "volunteering.joinCta": {
    en: "Join my volunteer network",
    bn: "আমার স্বেচ্ছাসেবক নেটওয়ার্কে যোগ দিন",
  },

  // ---------------------------------------------------------------- apps
  "apps.label": { en: "Applications", bn: "অ্যাপ্লিকেশন" },
  "apps.heading": { en: "My applications", bn: "আমার অ্যাপ্লিকেশন" },
  "apps.intro": {
    en: "Educational and productivity apps that make learning easier and smarter.",
    bn: "শিক্ষামূলক ও প্রোডাক্টিভিটি অ্যাপ — শেখা সহজ ও স্মার্ট করে।",
  },
  // App names are brand names and stay in English in both languages.
  "apps.calculator.name": { en: "Sweet Calculator", bn: "Sweet Calculator" },
  "apps.calculator.purpose": {
    en: "A clean, intuitive calculator for everyday math.",
    bn: "দৈনন্দিন হিসাবের জন্য পরিষ্কার, সহজ ক্যালকুলেটর।",
  },
  "apps.sweetAi.name": { en: "Sweet AI", bn: "Sweet AI" },
  "apps.sweetAi.purpose": {
    en: "AI powered assistant for learning and productivity.",
    bn: "শেখা ও প্রোডাক্টিভিটির জন্য এআই-চালিত সহকারী।",
  },
  "apps.note.name": { en: "Sweet Note", bn: "Sweet Note" },
  "apps.note.purpose": {
    en: "Minimal note taking app for quick ideas.",
    bn: "দ্রুত আইডিয়া লিখে রাখার জন্য মিনিমাল নোট অ্যাপ।",
  },
  "apps.traffic.name": { en: "Sweet Traffic Hero", bn: "Sweet Traffic Hero" },
  "apps.traffic.purpose": {
    en: "Traffic safety awareness educational tool.",
    bn: "ট্রাফিক নিরাপত্তা সচেতনতার শিক্ষামূলক টুল।",
  },
  "apps.learningEnglish.name": { en: "Sweet Learning English", bn: "Sweet Learning English" },
  "apps.learningEnglish.purpose": {
    en: "Interactive English learning companion.",
    bn: "ইন্টার‌্যাক্টিভ ইংরেজি শেখার সঙ্গী।",
  },
  "apps.spokenEnglish.name": { en: "Sweet Spoken English", bn: "Sweet Spoken English" },
  "apps.spokenEnglish.purpose": {
    en: "Practice spoken English with guided exercises.",
    bn: "গাইডেড এক্সারসাইজের সঙ্গে স্পোকেন ইংরেজি প্র্যাকটিস করুন।",
  },
  "apps.volunteering.name": { en: "Sweet Volunteering", bn: "Sweet Volunteering" },
  "apps.volunteering.purpose": {
    en: "Track and manage volunteer activities.",
    bn: "স্বেচ্ছাসেবী কার্যক্রম ট্র্যাক ও পরিচালনা করুন।",
  },
  "apps.sdg.name": { en: "SDG Tracker", bn: "SDG Tracker" },
  "apps.sdg.purpose": {
    en: "Monitor Sustainable Development Goals progress.",
    bn: "টেকসই উন্নয়ন লক্ষ্য (SDG)-এর অগ্রগতি পর্যবেক্ষণ করুন।",
  },
  "apps.allInOne.name": { en: "All in One", bn: "All in One" },
  "apps.allInOne.purpose": {
    en: "Multi purpose productivity suite.",
    bn: "বহুমুখী প্রোডাক্টিভিটি স্যুট।",
  },
  "apps.problemSolver.name": { en: "Sweet Problem Solver", bn: "Sweet Problem Solver" },
  "apps.problemSolver.purpose": {
    en: "Smart problem solving assistant.",
    bn: "স্মার্ট সমস্যা সমাধানকারী সহকারী।",
  },

  // ---------------------------------------------------------------- podcast (Think & Spark)
  "podcast.label": { en: "Projects", bn: "প্রজেক্ট" },
  "podcast.heading": { en: "Think and Spark", bn: "Think and Spark" },
  "podcast.intro": {
    en: "A faceless YouTube podcast that educates and inspires listeners around the world.",
    bn: "একটি ফেসলেস YouTube পডকাস্ট — বিশ্বজুড়ে শ্রোতাদের শিক্ষিত ও অনুপ্রাণিত করে।",
  },
  "podcast.body": {
    en: "Think and Spark is built for listeners: clear ideas, honest conversation, lessons you can use the same day. No face on screen — just the thinking.",
    bn: "Think and Spark শ্রোতাদের জন্য তৈরি: পরিষ্কার আইডিয়া, সৎ আলোচনা, আর একই দিনে ব্যবহার করা যায় এমন শিক্ষা। পর্দায় কোনো মুখ নেই — শুধু চিন্তাভাবনা।",
  },
  "podcast.imageAlt": {
    en: "Md Sonet Mia speaking on stage for the Think and Spark podcast",
    bn: "Think and Spark পডকাস্টের জন্য মঞ্চে বক্তৃতা দিচ্ছেন Md Sonet Mia",
  },
  "podcast.capacityAlt": {
    en: "Capacity building training session",
    bn: "ক্যাপাসিটি বিল্ডিং ট্রেনিং সেশন",
  },
  "podcast.teamworkAlt": { en: "Teamwork and collaboration", bn: "টিমওয়ার্ক ও সহযোগিতা" },

  // ---------------------------------------------------------------- ai creator
  "ai.label": { en: "AI creator", bn: "এআই ক্রিয়েটর" },
  "ai.heading": { en: "AI powered creativity", bn: "এআই-চালিত সৃজনশীলতা" },
  "ai.intro": {
    en: "Using AI to build, create, and innovate: prompt writing, content creation, video generation, and creative strategy.",
    bn: "এআই দিয়ে তৈরি, সৃষ্টি ও উদ্ভাবন: প্রম্পট লেখা, কনটেন্ট তৈরি, ভিডিও জেনারেশন ও সৃজনশীল কৌশল।",
  },
  "ai.course1.title": { en: "AI Prompt Masterclass", bn: "AI Prompt Masterclass" },
  "ai.course1.desc": {
    en: "Learn to write effective prompts for ChatGPT, Gemini, and other AI tools.",
    bn: "ChatGPT, Gemini ও অন্যান্য এআই টুলের জন্য কার্যকর প্রম্পট লেখা শিখুন।",
  },
  "ai.course2.title": { en: "AI Content Strategy", bn: "AI Content Strategy" },
  "ai.course2.desc": {
    en: "Build an AI powered content strategy for wider reach and deeper engagement.",
    bn: "ব্যাপক রিচ ও গভীর এনগেজমেন্টের জন্য এআই-চালিত কনটেন্ট কৌশল তৈরি করুন।",
  },
  "ai.course3.title": { en: "AI Video Workshop", bn: "AI Video Workshop" },
  "ai.course3.desc": {
    en: "Create video concepts with AI driven brainstorming.",
    bn: "এআই-চালিত ব্রেইনস্টর্মিং দিয়ে সৃজনশীল ভিডিও আইডিয়া তৈরি করুন।",
  },
  "ai.bookSession": { en: "Book a session", bn: "সেশন বুক করুন" },
  "ai.panelTitle": { en: "AI Creator", bn: "এআই ক্রিয়েটর" },
  "ai.panelBody": {
    en: "Faster drafts, sharper ideas, and more time for the teaching that only a person can do.",
    bn: "দ্রুত ড্রাফট, তীক্ষ্ণ আইডিয়া, আর শুধু মানুষই পারে এমন শেখানোর জন্য আরও সময়।",
  },
  "ai.chip1": { en: "Prompt writing", bn: "প্রম্পট লেখা" },
  "ai.chip2": { en: "Content creation", bn: "কনটেন্ট তৈরি" },
  "ai.chip3": { en: "Video generation", bn: "ভিডিও জেনারেশন" },
  "ai.chip4": { en: "Creative strategy", bn: "সৃজনশীল কৌশল" },

  // ---------------------------------------------------------------- adobe stock
  "stock.label": { en: "Adobe Stock", bn: "Adobe Stock" },
  "stock.heading": { en: "Stock content creator", bn: "স্টক কনটেন্ট ক্রিয়েটর" },
  "stock.intro": {
    en: "Creating visual content for the global marketplace.",
    bn: "বিশ্ববাজারের জন্য ভিজ্যুয়াল কনটেন্ট তৈরি করছি।",
  },
  "stock.body": {
    en: "As an Adobe Stock contributor, I create images and video for buyers around the world. The craft is in the details: a clean concept, honest metadata, and content that solves a real need.",
    bn: "Adobe Stock কন্ট্রিবিউটর হিসেবে আমি বিশ্বজুড়ে ক্রেতাদের জন্য ছবি ও ভিডিও তৈরি করি। কারিগরি দক্ষতা লুকিয়ে আছে খুঁটিনাটিতে: পরিষ্কার ধারণা, সৎ মেটাডেটা, আর আসল প্রয়োজন মেটায় এমন কনটেন্ট।",
  },
  "stock.guide1.title": { en: "AI image creation guidance", bn: "এআই ছবি তৈরির গাইডলাইন" },
  "stock.guide1.desc": {
    en: "How to create stock ready images with AI tools, and what to check before upload.",
    bn: "এআই টুল দিয়ে স্টক-উপযোগী ছবি তৈরি করা, আর আপলোডের আগে কী যাচাই করবেন।",
  },
  "stock.guide2.title": { en: "AI video generation guidance", bn: "এআই ভিডিও জেনারেশনের গাইডলাইন" },
  "stock.guide2.desc": {
    en: "How to plan short stock clips that buyers actually search for.",
    bn: "ক্রেতারা আসলে যা খোঁজেন, তেমন ছোট স্টক ক্লিপ পরিকল্পনা করা।",
  },
  "stock.guide3.title": { en: "Stock content strategy", bn: "স্টক কনটেন্ট কৌশল" },
  "stock.guide3.desc": {
    en: "Choosing topics by season and demand, not by guesswork.",
    bn: "অনুমানের বদলে মৌসুম ও চাহিদা দেখে টপিক বেছে নেওয়া।",
  },
  "stock.cardTitle": { en: "Active contributor", bn: "সক্রিয় কন্ট্রিবিউটর" },
  "stock.cardBody": {
    en: "Creating and uploading stock content on Adobe Stock.",
    bn: "Adobe Stock-এ স্টক কনটেন্ট তৈরি ও আপলোড করছি।",
  },
  "stock.askLink": { en: "Ask about stock strategy", bn: "স্টক কৌশল নিয়ে জিজ্ঞাসা করুন" },

  // ---------------------------------------------------------------- digital skills
  "skills.label": { en: "Digital skills", bn: "ডিজিটাল দক্ষতা" },
  "skills.heading": { en: "Tools and technologies", bn: "টুল ও প্রযুক্তি" },
  "skills.groupAi": { en: "AI tools", bn: "এআই টুল" },
  "skills.groupAi.item1": { en: "ChatGPT", bn: "ChatGPT" },
  "skills.groupAi.item2": { en: "Gemini", bn: "Gemini" },
  "skills.groupContent": { en: "Content creation", bn: "কনটেন্ট তৈরি" },
  "skills.groupContent.item1": { en: "Prompt writing", bn: "প্রম্পট লেখা" },
  "skills.groupContent.item2": { en: "Content creation", bn: "কনটেন্ট তৈরি" },
  "skills.groupContent.item3": { en: "Video generation", bn: "ভিডিও জেনারেশন" },
  "skills.groupContent.item4": { en: "Creative strategy", bn: "সৃজনশীল কৌশল" },
  "skills.groupTeaching": { en: "Teaching", bn: "শিক্ষাদান" },
  "skills.groupTeaching.item1": { en: "English grammar", bn: "ইংরেজি গ্রামার" },
  "skills.groupTeaching.item2": { en: "Spoken English", bn: "স্পোকেন ইংরেজি" },
  "skills.groupTeaching.item3": { en: "Writing improvement", bn: "লেখার দক্ষতা উন্নয়ন" },
  "skills.groupTeaching.item4": { en: "Student mentoring", bn: "শিক্ষার্থী মেন্টরিং" },
  "skills.groupStock": { en: "Stock content", bn: "স্টক কনটেন্ট" },
  "skills.groupStock.item1": { en: "AI image creation", bn: "এআই ছবি তৈরি" },
  "skills.groupStock.item2": { en: "AI video generation", bn: "এআই ভিডিও জেনারেশন" },
  "skills.groupStock.item3": { en: "Stock content strategy", bn: "স্টক কনটেন্ট কৌশল" },

  // ---------------------------------------------------------------- languages
  "languages.label": { en: "Language proficiency", bn: "ভাষার দক্ষতা" },
  "languages.heading": { en: "Languages I work in", bn: "যেসব ভাষায় কাজ করি" },
  "languages.bangla.name": { en: "Bangla", bn: "বাংলা" },
  "languages.bangla.level": { en: "Native", bn: "মাতৃভাষা" },
  "languages.bangla.note": {
    en: "First language, spoken and written every day.",
    bn: "প্রথম ভাষা — প্রতিদিন বলি ও লিখি।",
  },
  "languages.english.name": { en: "English", bn: "ইংরেজি" },
  "languages.english.level": { en: "Advanced", bn: "উন্নত" },
  "languages.english.note": {
    en: "BA Honours in English, teaching and writing in English.",
    bn: "ইংরেজিতে BA Honours, ইংরেজিতে পড়াই ও লিখি।",
  },
  "languages.hindi.name": { en: "Hindi", bn: "হিন্দি" },
  "languages.hindi.level": { en: "Fluent", bn: "সাবলীল" },
  "languages.hindi.note": {
    en: "Fluent in everyday conversation.",
    bn: "দৈনন্দিন কথোপকথনে সাবলীল।",
  },
  "languages.arabic.name": { en: "Arabic", bn: "আরবি" },
  "languages.arabic.level": { en: "Reading", bn: "পড়া" },
  "languages.arabic.note": { en: "Reading level.", bn: "পড়তে পারি।" },
  "languages.urdu.name": { en: "Urdu", bn: "উর্দু" },
  "languages.urdu.level": { en: "Reading", bn: "পড়া" },
  "languages.urdu.note": { en: "Reading level.", bn: "পড়তে পারি।" },
  "languages.korean.name": { en: "Korean", bn: "কোরিয়ান" },
  "languages.korean.level": { en: "Reading", bn: "পড়া" },
  "languages.korean.note": { en: "Reading level.", bn: "পড়তে পারি।" },

  // ---------------------------------------------------------------- reflections
  "reflections.ariaLabel": { en: "Personal reflections", bn: "ব্যক্তিগত ভাবনা" },
  "reflections.label": { en: "Personal reflections", bn: "ব্যক্তিগত ভাবনা" },
  "reflections.quote": {
    en: "Language opened the first door for me. Teaching opened the second. Now AI tools open a third, and I walk through it the same way: slowly, honestly, and with learners beside me.",
    bn: "ভাষা আমার জন্য প্রথম দরজাটা খুলে দিয়েছিল। শিক্ষাদান খুলেছিল দ্বিতীয়টা। এখন এআই টুল খুলছে তৃতীয়টি — আর আমি একইভাবে হাঁটি: ধীরে, সততার সঙ্গে, শিক্ষার্থীদের পাশে নিয়ে।",
  },
  "reflections.closing": {
    en: "Everything on this page comes back to one idea. Learn something well, then turn around and teach it to someone else.",
    bn: "এই পাতার সবকিছুই একটিই কথায় ফিরে আসে — কিছু ভালোভাবে শেখো, তারপর ঘুরে দাঁড়িয়ে অন্য কাউকে শেখাও।",
  },

  // ---------------------------------------------------------------- hobbies
  "hobbies.label": { en: "Hobbies and sports", bn: "শখ ও খেলাধুলা" },
  "hobbies.heading": { en: "Beyond the classroom", bn: "ক্লাসরুমের বাইরে" },
  "hobbies.intro": {
    en: "Creative pursuits and competitive sports — moments of passion and growth.",
    bn: "সৃজনশীল কাজ থেকে প্রতিযোগিতামূলক খেলা — আবেগ ও অগ্রগতির মুহূর্ত।",
  },
  "hobbies.footballImageAlt": {
    en: "Md Sonet Mia with his football team",
    bn: "ফুটবল দলের সঙ্গে Md Sonet Mia",
  },
  "hobbies.footballCaption": {
    en: "Football with the university team.",
    bn: "বিশ্ববিদ্যালয় দলের সঙ্গে ফুটবল।",
  },
  "hobbies.debateImageAlt": {
    en: "Md Sonet Mia speaking at a podium during a debate event",
    bn: "বিতর্ক অনুষ্ঠানে পোডিয়ামে বক্তৃতা দিচ্ছেন Md Sonet Mia",
  },
  "hobbies.debateCaption": {
    en: "Debate and public speaking.",
    bn: "বিতর্ক ও পাবলিক স্পিকিং।",
  },
  "hobbies.football.title": { en: "Football player", bn: "ফুটবল খেলোয়াড়" },
  "hobbies.football.desc": {
    en: "Active team player in university and local football matches.",
    bn: "বিশ্ববিদ্যালয় ও স্থানীয় ফুটবল ম্যাচে সক্রিয় দলীয় খেলোয়াড়।",
  },
  "hobbies.badminton.title": { en: "Badminton player", bn: "ব্যাডমিন্টন খেলোয়াড়" },
  "hobbies.badminton.desc": {
    en: "Enjoys competitive and recreational badminton.",
    bn: "প্রতিযোগিতামূলক ও বিনোদনমূলক ব্যাডমিন্টন উপভোগ করেন।",
  },
  "hobbies.chess.title": { en: "Chess champion", bn: "দাবা চ্যাম্পিয়ন" },
  "hobbies.chess.desc": {
    en: "Championship certificates in strategic chess tournaments.",
    bn: "কৌশলগত দাবা টুর্নামেন্টে চ্যাম্পিয়নশিপ সার্টিফিকেট।",
  },
  "hobbies.debate.title": { en: "Debate champion", bn: "বিতর্ক চ্যাম্পিয়ন" },
  "hobbies.debate.desc": {
    en: "Multiple recognitions in competitive debate events.",
    bn: "প্রতিযোগিতামূলক বিতর্ক অনুষ্ঠানে একাধিক স্বীকৃতি।",
  },
  "hobbies.chipFootball": { en: "Football", bn: "ফুটবল" },
  "hobbies.chipBadminton": { en: "Badminton", bn: "ব্যাডমিন্টন" },
  "hobbies.chipChess": { en: "Chess", bn: "দাবা" },
  "hobbies.chipDebate": { en: "Debate", bn: "বিতর্ক" },

  // ---------------------------------------------------------------- gallery
  "gallery.label": { en: "Gallery", bn: "গ্যালারি" },
  "gallery.heading": { en: "Captured moments", bn: "ধারণ করা মুহূর্ত" },
  "gallery.intro": {
    en: "A visual journey through my experiences, events, and memories.",
    bn: "আমার অভিজ্ঞতা, অনুষ্ঠান ও স্মৃতির ভিজ্যুয়াল যাত্রা।",
  },
  "gallery.venice1.alt": {
    en: "Md Sonet Mia performing in The Merchant of Venice",
    bn: "The Merchant of Venice-এ অভিনয় করছেন Md Sonet Mia",
  },
  "gallery.venice1.caption": {
    en: "The Merchant of Venice, on stage",
    bn: "The Merchant of Venice, মঞ্চে",
  },
  "gallery.speaking.alt": {
    en: "Md Sonet Mia speaking on a stage",
    bn: "মঞ্চে বক্তৃতা দিচ্ছেন Md Sonet Mia",
  },
  "gallery.speaking.caption": { en: "Speaking on stage", bn: "মঞ্চে বক্তৃতা" },
  "gallery.football.alt": {
    en: "Md Sonet Mia with his football team",
    bn: "ফুটবল দলের সঙ্গে Md Sonet Mia",
  },
  "gallery.football.caption": {
    en: "Football with the university team",
    bn: "বিশ্ববিদ্যালয় দলের সঙ্গে ফুটবল",
  },
  "gallery.capacity.alt": {
    en: "Md Sonet Mia at a capacity building training session",
    bn: "ক্যাপাসিটি বিল্ডিং ট্রেনিং সেশনে Md Sonet Mia",
  },
  "gallery.capacity.caption": {
    en: "Capacity building training",
    bn: "ক্যাপাসিটি বিল্ডিং ট্রেনিং",
  },
  "gallery.venice2.alt": {
    en: "A scene from The Merchant of Venice performance",
    bn: "The Merchant of Venice অভিনয়ের একটি দৃশ্য",
  },
  "gallery.venice2.caption": {
    en: "The Merchant of Venice, a scene",
    bn: "The Merchant of Venice-এর একটি দৃশ্য",
  },
  "gallery.podium.alt": {
    en: "Md Sonet Mia speaking at a podium during a debate event",
    bn: "বিতর্ক অনুষ্ঠানে পোডিয়ামে বক্তৃতা দিচ্ছেন Md Sonet Mia",
  },
  "gallery.podium.caption": {
    en: "Debate and public speaking",
    bn: "বিতর্ক ও পাবলিক স্পিকিং",
  },
  "gallery.teamwork.alt": {
    en: "Md Sonet Mia working with a team",
    bn: "একটি দলের সঙ্গে কাজ করছেন Md Sonet Mia",
  },
  "gallery.teamwork.caption": { en: "Teamwork and collaboration", bn: "টিমওয়ার্ক ও সহযোগিতা" },

  // ---------------------------------------------------------------- booking
  "booking.label": { en: "Book a session", bn: "সেশন বুক করুন" },
  "booking.heading": { en: "Let's work together", bn: "চলুন একসঙ্গে কাজ করি" },
  "booking.intro": {
    en: "Tell Sonet what you need help with. Your request opens in WhatsApp, ready to send.",
    bn: "কীসে সাহায্য দরকার, সনেটকে জানান। আপনার অনুরোধ WhatsApp-এ খুলবে, পাঠানোর জন্য প্রস্তুত।",
  },
  "booking.benefitsHeading": { en: "What a session gives you", bn: "একটি সেশন আপনাকে যা দেয়" },
  "booking.benefit1.title": { en: "Clear next steps.", bn: "পরিষ্কার পরবর্তী ধাপ।" },
  "booking.benefit1.body": {
    en: "You leave knowing exactly what to practise.",
    bn: "কী অনুশীলন করবেন, তা জেনেই বিদায় নেবেন।",
  },
  "booking.benefit2.title": { en: "Honest feedback.", bn: "সৎ ফিডব্যাক।" },
  "booking.benefit2.body": {
    en: "Real notes on your work, not generic praise.",
    bn: "আপনার কাজের ওপর আসল মন্তব্য, গতানুগতিক প্রশংসা নয়।",
  },
  "booking.benefit3.title": { en: "A plan you can follow.", bn: "অনুসরণযোগ্য পরিকল্পনা।" },
  "booking.benefit3.body": {
    en: "Materials and guidance matched to your level.",
    bn: "আপনার স্তরের সঙ্গে মানানসই ম্যাটেরিয়াল ও গাইডলাইন।",
  },
  "booking.noPaymentNote": {
    en: "No payment is taken on this site. Sessions are confirmed on WhatsApp.",
    bn: "এই সাইটে কোনো পেমেন্ট নেওয়া হয় না। সেশন WhatsApp-এ নিশ্চিত করা হয়।",
  },
  // --- BookingForm fields, validation, success state
  "booking.form.nameLabel": { en: "Your name", bn: "আপনার নাম" },
  "booking.form.namePlaceholder": { en: "Your full name", bn: "আপনার পুরো নাম" },
  "booking.form.contactLabel": { en: "WhatsApp or email", bn: "WhatsApp বা ইমেইল" },
  "booking.form.contactPlaceholder": {
    en: "WhatsApp number or email address",
    bn: "WhatsApp নম্বর বা ইমেইল ঠিকানা",
  },
  "booking.form.typeLabel": { en: "Session type", bn: "সেশনের ধরন" },
  "booking.form.messageLabel": { en: "Message", bn: "বার্তা" },
  "booking.form.optional": { en: "(optional)", bn: "(ঐচ্ছিক)" },
  "booking.form.messagePlaceholder": {
    en: "What would you like help with?",
    bn: "কীসে সাহায্য চান?",
  },
  "booking.form.submit": { en: "Book a session", bn: "সেশন বুক করুন" },
  "booking.form.helper": {
    en: "Sending opens WhatsApp with your request ready to send. No payment is taken on this site.",
    bn: "পাঠালে WhatsApp খুলবে, আপনার অনুরোধ পাঠানোর জন্য প্রস্তুত থাকবে। এই সাইটে কোনো পেমেন্ট নেওয়া হয় না।",
  },
  "booking.form.errorName": {
    en: "Please add your name so Sonet knows who is writing.",
    bn: "আপনার নাম দিন, যাতে সনেট জানেন কে লিখছেন।",
  },
  "booking.form.errorContact": {
    en: "That contact does not look right. Add a valid email address or WhatsApp number and try again.",
    bn: "এই যোগাযোগের তথ্যটি ঠিক মনে হচ্ছে না। একটি বৈধ ইমেইল ঠিকানা বা WhatsApp নম্বর দিয়ে আবার চেষ্টা করুন।",
  },
  "booking.form.successTitle": {
    en: "Session request ready on WhatsApp",
    bn: "WhatsApp-এ সেশন অনুরোধ প্রস্তুত",
  },
  "booking.form.successBody": {
    en: "Your message opened in WhatsApp. Send it there and Sonet will reply to confirm a time.",
    bn: "আপনার বার্তাটি WhatsApp-এ খুলেছে। সেখানে পাঠিয়ে দিন, সনেট সময় নিশ্চিত করতে উত্তর দেবেন।",
  },
  "booking.form.sendAnother": { en: "Send another request", bn: "আরেকটি অনুরোধ পাঠান" },
  // --- Session-type options (also the <select> values in BookingForm)
  "booking.type.englishGuidance": { en: "English guidance session", bn: "ইংরেজি গাইডলাইন সেশন" },
  "booking.type.writingConsultation": { en: "Writing consultation", bn: "লেখার পরামর্শ" },
  "booking.type.aiPrompt": { en: "AI prompt masterclass", bn: "এআই প্রম্পট মাস্টারক্লাস" },
  "booking.type.aiContent": { en: "AI content strategy", bn: "এআই কনটেন্ট কৌশল" },
  "booking.type.aiVideo": { en: "AI video workshop", bn: "এআই ভিডিও ওয়ার্কশপ" },
  "booking.type.other": { en: "Something else", bn: "অন্য কিছু" },
  // --- WhatsApp message template. "{name}", "{contact}", "{type}", "{message}"
  // are replaced at submit time; the "{message}" line is omitted when empty.
  "booking.whatsapp.greeting": {
    en: "Hello Sonet, I would like to book a session.",
    bn: "হ্যালো সনেট, আমি একটি সেশন বুক করতে চাই।",
  },
  "booking.whatsapp.nameLabel": { en: "Name:", bn: "নাম:" },
  "booking.whatsapp.contactLabel": { en: "Contact:", bn: "যোগাযোগ:" },
  "booking.whatsapp.sessionLabel": { en: "Session:", bn: "সেশন:" },
  "booking.whatsapp.messageLabel": { en: "Message:", bn: "বার্তা:" },

  // ---------------------------------------------------------------- contact
  "contact.label": { en: "Contact", bn: "যোগাযোগ" },
  "contact.heading": { en: "Get in touch", bn: "যোগাযোগ করুন" },
  "contact.intro": {
    en: "The fastest way to reach Sonet is WhatsApp. Email works too.",
    bn: "সনেটের কাছে পৌঁছানোর দ্রুততম উপায় WhatsApp। ইমেইলও চলবে।",
  },
  "contact.email": { en: "md.Sonet.mia2@gmail.com", bn: "md.Sonet.mia2@gmail.com" },
  "contact.whatsapp": { en: "WhatsApp 01797953059", bn: "WhatsApp 01797953059" },
  "contact.facebook": { en: "Facebook", bn: "Facebook" },
  "contact.youtube": { en: "YouTube, Sweet CGI Lab", bn: "YouTube, Sweet CGI Lab" },

  // ---------------------------------------------------------------- footer
  "footer.name": { en: "Md Sonet Mia", bn: "Md Sonet Mia" },
  "footer.bio": {
    en: "English graduate, educator, writer and digital creator from Tangail, Bangladesh.",
    bn: "টাঙ্গাইলের ইংরেজি স্নাতক, শিক্ষক, লেখক ও ডিজিটাল স্রষ্টা।",
  },
  "footer.navAriaLabel": { en: "Footer", bn: "ফুটার" },
  "footer.about": { en: "About", bn: "আমার সম্পর্কে" },
  "footer.projects": { en: "Projects", bn: "প্রজেক্ট" },
  "footer.bookSession": { en: "Book a session", bn: "সেশন বুক করুন" },
  "footer.contact": { en: "Contact", bn: "যোগাযোগ" },
  "footer.youtube": { en: "YouTube", bn: "YouTube" },
  "footer.facebook": { en: "Facebook", bn: "Facebook" },
  "footer.whatsapp": { en: "WhatsApp", bn: "WhatsApp" },
  "footer.copyright": {
    en: "Copyright 2026 Md Sonet Mia. All rights reserved.",
    bn: "কপিরাইট 2026 Md Sonet Mia। সর্বস্বত্ব সংরক্ষিত।",
  },
  "footer.privacy": { en: "Privacy policy", bn: "গোপনীয়তা নীতি" },
  "footer.terms": { en: "Terms", bn: "শর্তাবলি" },

  // ---------------------------------------------------------------- privacy
  "privacy.metaTitle": {
    en: "Privacy policy — Md Sonet Mia",
    bn: "গোপনীয়তা নীতি — Md Sonet Mia",
  },
  "privacy.metaDescription": {
    en: "Privacy policy for mdsonetmia.vercel.app.",
    bn: "mdsonetmia.vercel.app-এর গোপনীয়তা নীতি।",
  },
  "privacy.title": { en: "Privacy policy", bn: "গোপনীয়তা নীতি" },
  "privacy.para1": {
    en: "This website does not run analytics, advertising trackers, or accounts. No personal data is collected or stored by this site itself.",
    bn: "এই ওয়েবসাইটে কোনো অ্যানালিটিক্স, বিজ্ঞাপন ট্র্যাকার বা অ্যাকাউন্ট চলে না। এই সাইট নিজে কোনো ব্যক্তিগত তথ্য সংগ্রহ বা সংরক্ষণ করে না।",
  },
  "privacy.para2": {
    en: "If you use the booking form, your message opens in WhatsApp with the details you typed, so you can send it to Sonet directly. Nothing is sent anywhere until you press send in WhatsApp, and this site keeps no copy of your message.",
    bn: "আপনি বুকিং ফর্ম ব্যবহার করলে আপনার বার্তাটি আপনার লেখা তথ্যসহ WhatsApp-এ খুলবে, যাতে আপনি সরাসরি সনেটকে পাঠাতে পারেন। WhatsApp-এ পাঠানোর বোতাম না চাপা পর্যন্ত কোথাও কিছুই যায় না, আর এই সাইট আপনার বার্তার কোনো কপি রাখে না।",
  },
  "privacy.para3": {
    en: "Links to other sites, including YouTube, Facebook, Sweet Smart Calendar, PromptEx, Sweet CGI Lab, and SiteIncome Lab, take you to those services, and their own privacy policies apply there.",
    bn: "YouTube, Facebook, Sweet Smart Calendar, PromptEx, Sweet CGI Lab ও SiteIncome Lab সহ অন্যান্য সাইটের লিংক আপনাকে সেইসব সেবায় নিয়ে যায়, আর সেখানে তাদের নিজস্ব গোপনীয়তা নীতি প্রযোজ্য হয়।",
  },
  "privacy.para4": {
    en: "Your theme choice (light, dark, or system) and language choice (English or Bangla) are stored only in your own browser.",
    bn: "আপনার থিম পছন্দ (হালকা, গাঢ় বা সিস্টেম) ও ভাষা পছন্দ (ইংরেজি বা বাংলা) শুধু আপনার নিজের ব্রাউজারেই সংরক্ষিত থাকে।",
  },
  "privacy.para5": {
    en: "Questions about this policy can be sent to md.Sonet.mia2@gmail.com.",
    bn: "এই নীতি সম্পর্কে প্রশ্ন md.Sonet.mia2@gmail.com-এ পাঠানো যাবে।",
  },

  // ---------------------------------------------------------------- terms
  "terms.metaTitle": { en: "Terms — Md Sonet Mia", bn: "শর্তাবলি — Md Sonet Mia" },
  "terms.metaDescription": {
    en: "Terms of use for mdsonetmia.vercel.app.",
    bn: "mdsonetmia.vercel.app-এর ব্যবহারের শর্তাবলি।",
  },
  "terms.title": { en: "Terms", bn: "শর্তাবলি" },
  "terms.para1": {
    en: "The content on this site, including text, photos, and project descriptions, belongs to Md Sonet Mia unless stated otherwise. You may share links to this site freely. Please do not copy photos or text and present them as your own work.",
    bn: "এই সাইটের কনটেন্ট — লেখা, ছবি ও প্রজেক্টের বিবরণসহ — অন্যভাবে বলা না থাকলে Md Sonet Mia-এর। আপনি এই সাইটের লিংক স্বাধীনভাবে শেয়ার করতে পারেন। অনুগ্রহ করে ছবি বা লেখা কপি করে নিজের কাজ হিসেবে উপস্থাপন করবেন না।",
  },
  "terms.para2": {
    en: "Booking a session through this site sends your request to Sonet on WhatsApp. Session times, fees if any, and availability are confirmed with Sonet directly. No payment is taken on this site.",
    bn: "এই সাইট দিয়ে সেশন বুক করলে আপনার অনুরোধ WhatsApp-এ সনেটের কাছে যায়। সেশনের সময়, কোনো ফি থাকলে তা, ও উপলভ্যতা সরাসরি সনেটের সঙ্গে নিশ্চিত করা হয়। এই সাইটে কোনো পেমেন্ট নেওয়া হয় না।",
  },
  "terms.para3": {
    en: "Links to other sites and services are provided for convenience. Sonet is not responsible for the content or availability of those external sites.",
    bn: "অন্যান্য সাইট ও সেবার লিংক সুবিধার জন্য দেওয়া হয়েছে। সেই বাইরের সাইটগুলোর কনটেন্ট বা উপলভ্যতার জন্য সনেট দায়ী নন।",
  },
  "terms.para4": {
    en: "Questions about these terms can be sent to md.Sonet.mia2@gmail.com.",
    bn: "এই শর্তাবলি সম্পর্কে প্রশ্ন md.Sonet.mia2@gmail.com-এ পাঠানো যাবে।",
  },

  // ---------------------------------------------------------------- misc (404)
  "misc.notFoundHeading": { en: "Page not found", bn: "পাতাটি পাওয়া যায়নি" },
  "misc.notFoundBody": {
    en: "This page does not exist, or it moved. The home page has everything else.",
    bn: "এই পাতাটি নেই, বা সরিয়ে নেওয়া হয়েছে। হোম পাতায় বাকি সবকিছু আছে।",
  },
  "misc.notFoundBack": { en: "Back to the home page", bn: "হোম পাতায় ফিরুন" },
};

/** Look up one string. Falls back to English if the key or language is missing. */
export function t(key: string, lang: Lang): string {
  const entry = strings[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}
