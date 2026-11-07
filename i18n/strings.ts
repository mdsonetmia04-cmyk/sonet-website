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
//   hero.*        app/page.tsx — hero eyebrow (tagline), headline (name), subhead, CTAs,
//                  hero image alt + caption
//   tagline.*     DELETED in v3 (Tagline component removed, T1).
//   about.*       app/page.tsx #about — label, heading, 3 paragraphs, personal details
//   projects.*    app/page.tsx #projects — label, heading, intro, 4 project cards
//                  (name/outcome/fact/tags/visit link), visit-link template
//   education.*   app/page.tsx #education — label, heading, intro, degree, university,
//                  CGPA line (cgpa is the gold-styled span inside body), IELTS card,
//                  BA card details, education stats
//   teaching.*    app/page.tsx #teaching — label, heading, intro, 4 service titles,
//                  3 session cards, teaching stats, "Teaching roles" + 2 employment entries
//   bookMid.*     app/page.tsx #book-mid — compact booking section heading/intro
//   acting.*      app/page.tsx #acting — label, heading, intro, 3 acting cards,
//                  production list, image alts + captions
//   writing.*     app/page.tsx #writing — label, heading, intro, body, 3 service names,
//                  5 books, writing stats
//   achievements.* app/page.tsx #achievements — label, heading, intro, 6 award cards,
//                  4 stats, 5 carousel captions
//   volunteering.* app/page.tsx #volunteering — label, heading, intro, 4 photo alts,
//                  6 activity cards, stats, scope, CTA
//   apps.*        app/page.tsx #applications — label, heading, intro, 10 app names + purposes,
//                  use button (links to #contact)
//   podcast.*     app/page.tsx #think-spark — label, heading, intro, body, image alts,
//                  4 topics
//   ai.*          app/page.tsx #ai-creator — label, heading, intro, 3 courses,
//                  capability chips
//   stock.*       app/page.tsx #adobe-stock — label, heading, intro, body,
//                  3 guidance rows, 3-stat row
//   skills.*      app/page.tsx #digital-skills — label, heading, 7 tools + proficiency,
//                  stats
//   languages.*   app/page.tsx #languages — label, heading, 6 languages (name/level/percent)
//   reflections.* app/page.tsx — personal reflections aria-label, quote
//   hobbies.*     app/page.tsx #hobbies — label, heading, intro, 2 photo captions/alts,
//                  4 hobby rows, activities I love, plants in my room
//   gallery.*     app/page.tsx #gallery — label, heading, intro, 20 photos, stats,
//                  Facebook album link
//   booking.*     app/page.tsx #book + components/BookingForm.tsx — full booking section,
//                  form labels/placeholders/errors/success state, date field,
//                  WhatsApp message template, session-type options
//   contact.*     app/page.tsx #contact — label, heading, intro, link labels, form
//   footer.*      components/Footer.tsx — bio, quick links, contact column, social labels,
//                  bottom line, Privacy/Terms links, footer nav aria-label
//   privacy.*     app/privacy/page.tsx — privacy policy page
//   terms.*       app/terms/page.tsx — terms of use page
//   misc.*        app/not-found.tsx (bonus, outside the scoped file list) — 404 strings

export type Lang = "en" | "bn";

export const strings: Record<string, { en: string; bn: string }> = {
  // ---------------------------------------------------------------- meta
  "meta.title": {
    en: "Md. Sonet Mia — Writer, Educator, AI Creator",
    bn: "Md. Sonet Mia — Writer, Educator, AI Creator",
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
    en: "Portrait of Md. Sonet Mia",
    bn: "Md. Sonet Mia-র প্রতিকৃতি",
  },

  // ---------------------------------------------------------------- nav
  "nav.skipToContent": { en: "Skip to content", bn: "মূল কনটেন্টে যান" },
  "nav.brand": { en: "Md. Sonet Mia", bn: "Md. Sonet Mia" },
  "nav.mainAriaLabel": { en: "Main navigation", bn: "প্রধান নেভিগেশন" },
  "nav.about": { en: "About", bn: "আমার সম্পর্কে" },
  "nav.teaching": { en: "Teaching", bn: "শিক্ষাদান" },
  "nav.writing": { en: "Writing", bn: "লেখালেখি" },
  "nav.projects": { en: "Projects", bn: "প্রজেক্ট" },
  "nav.aiCreator": { en: "AI creator", bn: "এআই ক্রিয়েটর" },
  "nav.gallery": { en: "Gallery", bn: "গ্যালারি" },
  "nav.contact": { en: "Contact", bn: "যোগাযোগ" },
  "nav.education": { en: "Education", bn: "শিক্ষা" },
  "nav.skills": { en: "Skills", bn: "দক্ষতা" },
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
  "hero.eyebrow": { en: "Writer · Educator · AI Creator · Digital Thinker", bn: "লেখক · শিক্ষক · এআই ক্রিয়েটর · ডিজিটাল চিন্তক" },
  "hero.headline": { en: "Md. Sonet Mia", bn: "Md. Sonet Mia" },
  "hero.subhead": {
    en: "English graduate from Tangail, teaching and creating with AI tools.",
    bn: "টাঙ্গাইলের ইংরেজি স্নাতক — এআই টুল দিয়ে শেখাই ও তৈরি করি।",
  },
  "hero.bookSession": { en: "Book a session", bn: "সেশন বুক করুন" },
  "hero.seeProjects": { en: "See my projects", bn: "আমার প্রজেক্টগুলো দেখুন" },
  "hero.exploreSkills": { en: "Explore Skills", bn: "দক্ষতা দেখুন" },
  "hero.imageAlt": {
    en: "Portrait of Md. Sonet Mia",
    bn: "Md. Sonet Mia-র প্রতিকৃতি",
  },
  "hero.imageCaption": {
    en: "Writer, educator, AI creator.",
    bn: "লেখক, শিক্ষক, এআই ক্রিয়েটর।",
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
  "about.imageAlt": {
    en: "Md. Sonet Mia in a suit",
    bn: "স্যুট পরা Md. Sonet Mia",
  },

  // Personal details (original site) — replaces the fact trio (T3).
  "about.detailFullName.label": { en: "Full Name", bn: "পুরো নাম" },
  "about.detailFullName.value": { en: "Md. Sonet Mia", bn: "Md. Sonet Mia" },
  "about.detailBorn.label": { en: "Born", bn: "জন্ম" },
  "about.detailBorn.value": { en: "12 January 2000", bn: "12 জানুয়ারি 2000" },
  "about.detailNationality.label": { en: "Nationality", bn: "জাতীয়তা" },
  "about.detailNationality.value": { en: "Bangladeshi", bn: "বাংলাদেশি" },
  "about.detailLocation.label": { en: "Location", bn: "ঠিকানা" },
  "about.detailLocation.value": { en: "Tangail, Bangladesh", bn: "টাঙ্গাইল, বাংলাদেশ" },
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

  // IELTS card (original site).
  "education.ielts.title": { en: "IELTS Completed", bn: "IELTS সম্পন্ন" },
  "education.ielts.subtitle": {
    en: "International English Proficiency",
    bn: "আন্তর্জাতিক ইংরেজি দক্ষতা",
  },
  "education.ielts.date": { en: "Completed 2025", bn: "2025 সালে সম্পন্ন" },
  "education.ielts.body": {
    en: "Successfully completed the IELTS examination with a band score of 6.5, demonstrating strong English proficiency across all four modules.",
    bn: "IELTS পরীক্ষায় 6.5 ব্যান্ড স্কোর নিয়ে সফলভাবে উত্তীর্ণ হয়েছি — চারটি মডিউলেই আমার শক্তিশালী ইংরেজি দক্ষতার প্রমাণ।",
  },
  "education.ielts.resultLabel": { en: "Result", bn: "ফলাফল" },
  "education.ielts.resultValue": { en: "6.5", bn: "6.5" },
  "education.ielts.nextLabel": { en: "Next Target", bn: "পরবর্তী লক্ষ্য" },
  "education.ielts.nextValue": { en: "7.5", bn: "7.5" },
  // BA card details (original site).
  "education.ba.desc": {
    en: "Deep study of English literature, linguistics, and communication — building a strong foundation for teaching, writing, and creative work.",
    bn: "ইংরেজি সাহিত্য, ভাষাবিজ্ঞান ও যোগাযোগের গভীর অধ্যয়ন — শিক্ষাদান, লেখালেখি ও সৃজনশীল কাজের শক্ত ভিত্তি গড়ে দিয়েছে।",
  },
  "education.ba.date": { en: "Completed 2024", bn: "2024 সালে সম্পন্ন" },
  "education.ba.coursesLabel": { en: "Courses", bn: "কোর্স" },
  "education.ba.coursesValue": { en: "40+", bn: "40+" },
  // Education stats (original site).
  "education.stats.study.figure": { en: "4+", bn: "4+" },
  "education.stats.study.label": { en: "Years of Study", bn: "বছরের পড়াশোনা" },
  "education.stats.courses.figure": { en: "40+", bn: "40+" },
  "education.stats.courses.label": { en: "Courses Completed", bn: "কোর্স সম্পন্ন" },
  "education.stats.languages.figure": { en: "3", bn: "3" },
  "education.stats.languages.label": { en: "Languages", bn: "ভাষা" },
  "education.stats.certifications.figure": { en: "5+", bn: "5+" },
  "education.stats.certifications.label": { en: "Certifications", bn: "সার্টিফিকেশন" },
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
  "teaching.service2.title": { en: "Spoken English improvement", bn: "স্পোকেন ইংরেজি উন্নয়ন" },
  "teaching.service3.title": { en: "Writing improvement", bn: "লেখার দক্ষতা উন্নয়ন" },
  "teaching.service4.title": { en: "Student mentoring", bn: "শিক্ষার্থী মেন্টরিং" },
  "teaching.rolesHeading": { en: "Teaching roles", bn: "শিক্ষকতার ভূমিকা" },
  "teaching.role1.title": { en: "Assistant Teacher (English Language & Grammar)", bn: "সহকারী শিক্ষক (ইংরেজি ভাষা ও গ্রামার)" },
  "teaching.role1.org": { en: "Sobuz Kuri Laboratory School & College", bn: "Sobuz Kuri Laboratory School & College" },
  "teaching.role2.title": { en: "Assistant Teacher (English Language & Grammar)", bn: "সহকারী শিক্ষক (ইংরেজি ভাষা ও গ্রামার)" },
  "teaching.role2.org": { en: "Prativa Preparatory School & College", bn: "Prativa Preparatory School & College" },

  // Session cards (original site) — replace the service outcome lines (T9).
  "teaching.session1.title": { en: "Grammar Mastery Session", bn: "গ্রামার মাস্টারি সেশন" },
  "teaching.session1.duration": { en: "60 min", bn: "60 মিনিট" },
  "teaching.session1.price": { en: "Contact for pricing", bn: "মূল্যের জন্য যোগাযোগ করুন" },
  "teaching.session1.desc": {
    en: "Deep dive into English grammar rules, common mistakes, and advanced usage.",
    bn: "ইংরেজি গ্রামারের নিয়ম, সাধারণ ভুল ও উন্নত ব্যবহার নিয়ে গভীর আলোচনা।",
  },
  "teaching.session2.title": { en: "Spoken English Coaching", bn: "স্পোকেন ইংরেজি কোচিং" },
  "teaching.session2.duration": { en: "45 min", bn: "45 মিনিট" },
  "teaching.session2.price": { en: "Contact for pricing", bn: "মূল্যের জন্য যোগাযোগ করুন" },
  "teaching.session2.desc": {
    en: "Build confidence in spoken English with guided practice and feedback.",
    bn: "গাইডেড প্র্যাকটিস ও ফিডব্যাকের মধ্য দিয়ে স্পোকেন ইংরেজিতে আত্মবিশ্বাস গড়ে তুলুন।",
  },
  "teaching.session3.title": { en: "Exam Preparation Guidance", bn: "পরীক্ষার প্রস্তুতি গাইডলাইন" },
  "teaching.session3.duration": { en: "90 min", bn: "90 মিনিট" },
  "teaching.session3.price": { en: "Contact for pricing", bn: "মূল্যের জন্য যোগাযোগ করুন" },
  "teaching.session3.desc": {
    en: "Strategic preparation for English exams with tips, practice, and review.",
    bn: "টিপস, প্র্যাকটিস ও রিভিউসহ ইংরেজি পরীক্ষার কৌশলগত প্রস্তুতি।",
  },
  // Teaching stats (original site).
  "teaching.stats.schools.figure": { en: "2", bn: "2" },
  "teaching.stats.schools.label": { en: "Schools", bn: "স্কুল" },
  "teaching.stats.students.figure": { en: "200+", bn: "200+" },
  "teaching.stats.students.label": { en: "Students", bn: "শিক্ষার্থী" },
  "teaching.stats.sessions.figure": { en: "500+", bn: "500+" },
  "teaching.stats.sessions.label": { en: "Sessions", bn: "সেশন" },
  "teaching.stats.years.figure": { en: "2+", bn: "2+" },
  "teaching.stats.years.label": { en: "Years", bn: "বছর" },
  // Teaching-role dates (original wording; roles reordered chronologically, G10).
  "teaching.role1.dates": { en: "2022–2023", bn: "2022–2023" },
  "teaching.role2.dates": { en: "2023–2024", bn: "2023–2024" },
  // Teaching carousel image alts (v3 wiring — photos seen, alts describe them).
  "teaching.carousel1Alt": {
    en: "Md. Sonet Mia teaching a group with a microphone",
    bn: "মাইক্রোফোন হাতে দলকে পড়াচ্ছেন Md. Sonet Mia",
  },
  "teaching.carousel2Alt": {
    en: "Md. Sonet Mia presenting on stage with a microphone",
    bn: "মঞ্চে মাইক্রোফোন হাতে উপস্থাপনা করছেন Md. Sonet Mia",
  },
  "teaching.carousel3Alt": {
    en: "Md. Sonet Mia speaking into a microphone while seated",
    bn: "বসে মাইক্রোফোনে কথা বলছেন Md. Sonet Mia",
  },
  // ---------------------------------------------------------------- book-mid
  "bookMid.label": { en: "Book a quick session", bn: "দ্রুত সেশন বুক করুন" },
  "bookMid.heading": { en: "Work with Sonet directly", bn: "সনেটের সঙ্গে সরাসরি কাজ করুন" },
  "bookMid.intro": {
    en: "Book an English guidance session, a writing consultation, or an AI workshop.",
    bn: "ইংরেজি গাইডলাইন সেশন, লেখার পরামর্শ, বা এআই ওয়ার্কশপ বুক করুন।",
  },

  // ---------------------------------------------------------------- acting
  "acting.label": { en: "Acting and theatre", bn: "অভিনয় ও থিয়েটার" },
  "acting.heading": { en: "On the stage", bn: "মঞ্চে" },
  "acting.intro": {
    en: "Bringing classic literature to life through performance.",
    bn: "অভিনয়ের মধ্য দিয়ে ক্লাসিক সাহিত্যকে প্রাণবন্ত করে তোলা।",
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

  // Acting cards (original site) — replace the body paragraph (T4).
  "acting.card1.title": { en: "The Merchant of Venice", bn: "The Merchant of Venice" },
  "acting.card1.desc": {
    en: "Performed in William Shakespeare's iconic tragedy, showcasing dramatic range and stage presence at a university-level production.",
    bn: "উইলিয়াম শেকসপিয়রের আইকনিক ট্র্যাজেডিতে অভিনয় — বিশ্ববিদ্যালয় পর্যায়ের প্রযোজনায় নাটকীয় ব্যাপ্তি ও মঞ্চ উপস্থিতি তুলে ধরা।",
  },
  "acting.card2.title": { en: "Stage Performance", bn: "মঞ্চ পরিবেশনা" },
  "acting.card2.desc": {
    en: "Delivered a compelling portrayal that combined classical English literature with expressive theatrical storytelling.",
    bn: "ক্লাসিক ইংরেজি সাহিত্যকে অভিব্যক্তিপূর্ণ নাটকীয় গল্প বলার সঙ্গে মিলিয়ে এক মনোমুগ্ধকর চরিত্র উপস্থাপন।",
  },
  "acting.card3.title": { en: "Drama & Expression", bn: "নাটক ও অভিব্যক্তি" },
  "acting.card3.desc": {
    en: "Passionate about using theatre as a medium to bring classic literature to life and connect with audiences.",
    bn: "থিয়েটারকে ক্লাসিক সাহিত্যকে প্রাণবন্ত করে দর্শকের সঙ্গে যুক্ত হওয়ার মাধ্যম হিসেবে ব্যবহারের প্রতি আগ্রহী।",
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
  "writing.service2.title": { en: "Poetry writing workshop", bn: "কবিতা লেখার ওয়ার্কশপ" },
  "writing.service3.title": { en: "Story writing guidance", bn: "গল্প লেখার গাইডলাইন" },

  // Books (original site) — services keep names only (T10).
  "writing.booksHeading": { en: "My books", bn: "আমার বই" },
  "writing.book1.title": { en: "A Story of Two Hearts", bn: "A Story of Two Hearts" },
  "writing.book1.kind": { en: "Story Book", bn: "গল্পের বই" },
  "writing.book2.title": { en: "Smritimoy Kabya", bn: "Smritimoy Kabya" },
  "writing.book2.kind": { en: "Joint Poetry Book (Published)", bn: "যৌথ কবিতার বই (প্রকাশিত)" },
  "writing.book3.title": { en: "বিসর্জন", bn: "বিসর্জন" },
  "writing.book3.kind": { en: "Published on Bortoi.com", bn: "Bortoi.com-এ প্রকাশিত" },
  "writing.book4.title": { en: "One More Step", bn: "One More Step" },
  "writing.book4.kind": { en: "Motivational eBook", bn: "অনুপ্রেরণামূলক ইবুক" },
  "writing.book5.title": { en: "Why?", bn: "Why?" },
  "writing.book5.kind": { en: "Motivational English Book", bn: "অনুপ্রেরণামূলক ইংরেজি বই" },
  // Writing stats (original site).
  "writing.stats.books.figure": { en: "5", bn: "5" },
  "writing.stats.books.label": { en: "Books", bn: "বই" },
  "writing.stats.published.figure": { en: "3", bn: "3" },
  "writing.stats.published.label": { en: "Published", bn: "প্রকাশিত" },
  "writing.stats.genres.figure": { en: "4", bn: "4" },
  "writing.stats.genres.label": { en: "Genres", bn: "ধরন" },
  // ---------------------------------------------------------------- achievements
  "achievements.label": { en: "Achievements", bn: "অর্জন" },
  "achievements.heading": { en: "Recognition and growth", bn: "স্বীকৃতি ও অগ্রগতি" },
  "achievements.intro": {
    en: "Continuous learning, service, and excellence.",
    bn: "নিরবচ্ছিন্ন শেখা, সেবা ও উৎকর্ষ।",
  },

  // Award cards (original site) — replace the recycled stats (D5) and the
  // chess/debate stat cards (D4; they stay in Hobbies).
  "achievements.award1.title": { en: "Rising Star Award", bn: "রাইজিং স্টার অ্যাওয়ার্ড" },
  "achievements.award1.desc": {
    en: "Recognized for outstanding growth and contribution.",
    bn: "অসাধারণ অগ্রগতি ও অবদানের স্বীকৃতি।",
  },
  "achievements.award2.title": { en: "Best Volunteer Award", bn: "সেরা স্বেচ্ছাসেবক পুরস্কার" },
  "achievements.award2.desc": {
    en: "Honored for exceptional community service and dedication.",
    bn: "অসাধারণ সমাজসেবা ও নিষ্ঠার জন্য সম্মানিত।",
  },
  "achievements.award3.title": { en: "Debate Competition Certificates", bn: "বিতর্ক প্রতিযোগিতার সার্টিফিকেট" },
  "achievements.award3.desc": {
    en: "Multiple recognitions in competitive debate events.",
    bn: "প্রতিযোগিতামূলক বিতর্ক অনুষ্ঠানে একাধিক স্বীকৃতি।",
  },
  "achievements.award4.title": { en: "Chess Championship Certificates", bn: "দাবা চ্যাম্পিয়নশিপ সার্টিফিকেট" },
  "achievements.award4.desc": {
    en: "Achievements in strategic chess tournaments.",
    bn: "কৌশলগত দাবা টুর্নামেন্টে অর্জন।",
  },
  "achievements.award5.title": { en: "17+ Online Course Certifications", bn: "17+ অনলাইন কোর্স সার্টিফিকেশন" },
  "achievements.award5.desc": {
    en: "Continuous learning across diverse digital disciplines.",
    bn: "বিভিন্ন ডিজিটাল বিষয়ে নিরবচ্ছিন্ন শেখা।",
  },
  "achievements.award6.title": { en: "6+ Training Completed", bn: "6+ ট্রেনিং সম্পন্ন" },
  "achievements.award6.desc": {
    en: "Professional development training in leadership, capacity building, and youth empowerment.",
    bn: "নেতৃত্ব, সক্ষমতা বৃদ্ধি ও যুব ক্ষমতায়নে পেশাদার উন্নয়ন প্রশিক্ষণ।",
  },
  // Achievements stats (original site).
  "achievements.stats.awards.figure": { en: "5+", bn: "5+" },
  "achievements.stats.awards.label": { en: "Awards", bn: "পুরস্কার" },
  "achievements.stats.certifications.figure": { en: "17+", bn: "17+" },
  "achievements.stats.certifications.label": { en: "Certifications", bn: "সার্টিফিকেশন" },
  "achievements.stats.trainings.figure": { en: "6+", bn: "6+" },
  "achievements.stats.trainings.label": { en: "Trainings", bn: "প্রশিক্ষণ" },
  "achievements.stats.events.figure": { en: "30+", bn: "30+" },
  "achievements.stats.events.label": { en: "Events", bn: "অনুষ্ঠান" },
  // Achievements carousel captions (original site).
  "achievements.carousel1.caption": { en: "Chief Sergeant at Arms", bn: "চিফ সার্জেন্ট অ্যাট আর্মস" },
  "achievements.carousel1.sub": { en: "Leadership Role", bn: "নেতৃত্বের ভূমিকা" },
  "achievements.carousel2.caption": { en: "Youth event", bn: "যুব অনুষ্ঠান" },
  "achievements.carousel2.sub": { en: "Youth Events", bn: "যুব অনুষ্ঠান" },
  "achievements.carousel3.caption": { en: "Volunteer event", bn: "স্বেচ্ছাসেবী অনুষ্ঠান" },
  "achievements.carousel3.sub": { en: "Community Service", bn: "সমাজসেবা" },
  "achievements.carousel4.caption": { en: "Capacity building training", bn: "ক্যাপাসিটি বিল্ডিং ট্রেনিং" },
  "achievements.carousel4.sub": { en: "Professional Training", bn: "পেশাদার প্রশিক্ষণ" },
  "achievements.carousel5.caption": { en: "Public speaking", bn: "পাবলিক স্পিকিং" },
  "achievements.carousel5.sub": { en: "Public Speaking", bn: "পাবলিক স্পিকিং" },
  // ---------------------------------------------------------------- volunteering
  "volunteering.label": { en: "Volunteering", bn: "স্বেচ্ছাসেবা" },
  "volunteering.heading": { en: "Serving communities", bn: "সমাজের সেবায়" },
  "volunteering.intro": {
    en: "Making a real impact through social service, education, and youth empowerment.",
    bn: "সমাজসেবা, শিক্ষা ও যুব ক্ষমতায়নের মধ্য দিয়ে বাস্তব পরিবর্তন আনা।",
  },
  "volunteering.joinCta": {
    en: "Join my volunteer network",
    bn: "আমার স্বেচ্ছাসেবক নেটওয়ার্কে যোগ দিন",
  },

  // Volunteering photo alts (original site).
  "volunteering.photo1Alt": { en: "Volunteering with children", bn: "শিশুদের সঙ্গে স্বেচ্ছাসেবা" },
  "volunteering.photo2Alt": { en: "Community outreach with kids", bn: "শিশুদের সঙ্গে কমিউনিটি আউটরিচ" },
  "volunteering.photo3Alt": { en: "Group presentation", bn: "দলগত উপস্থাপনা" },
  "volunteering.photo4Alt": { en: "Cultural engagement", bn: "সাংস্কৃতিক সম্পৃক্ততা" },
  // Volunteering activity cards (original site) — replace the body paragraph (T5).
  "volunteering.activity1.title": { en: "Community Education", bn: "কমিউনিটি শিক্ষা" },
  "volunteering.activity1.desc": {
    en: "Teaching underprivileged children and spreading educational awareness in rural areas.",
    bn: "সুবিধাবঞ্চিত শিশুদের পড়ানো ও গ্রামীণ এলাকায় শিক্ষা সচেতনতা ছড়িয়ে দেওয়া।",
  },
  "volunteering.activity2.title": { en: "Youth Leadership", bn: "যুব নেতৃত্ব" },
  "volunteering.activity2.desc": {
    en: "Mentoring young people and organizing community-building events and workshops.",
    bn: "তরুণদের মেন্টরিং আর কমিউনিটি গড়ে তোলার অনুষ্ঠান ও ওয়ার্কশপ আয়োজন।",
  },
  "volunteering.activity3.title": { en: "Social Campaigns", bn: "সামাজিক প্রচারণা" },
  "volunteering.activity3.desc": {
    en: "Leading awareness campaigns on education, health, and environmental issues.",
    bn: "শিক্ষা, স্বাস্থ্য ও পরিবেশ বিষয়ে সচেতনতা প্রচারণার নেতৃত্ব।",
  },
  "volunteering.activity4.title": { en: "Disaster Relief", bn: "দুর্যোগ ত্রাণ" },
  "volunteering.activity4.desc": {
    en: "Volunteering in relief efforts and distributing aid during natural disasters.",
    bn: "প্রাকৃতিক দুর্যোগের সময় ত্রাণ কাজে স্বেচ্ছাসেবা ও সহায়তা বিতরণ।",
  },
  "volunteering.activity5.title": { en: "Book Distribution", bn: "বই বিতরণ" },
  "volunteering.activity5.desc": {
    en: "Providing educational materials and books to underserved communities.",
    bn: "সুবিধাবঞ্চিত কমিউনিটিতে শিক্ষা উপকরণ ও বই পৌঁছে দেওয়া।",
  },
  "volunteering.activity6.title": { en: "Cultural Preservation", bn: "সাংস্কৃতিক সংরক্ষণ" },
  "volunteering.activity6.desc": {
    en: "Promoting Bangladeshi culture, language, and heritage through community events.",
    bn: "কমিউনিটি অনুষ্ঠানের মধ্য দিয়ে বাংলাদেশি সংস্কৃতি, ভাষা ও ঐতিহ্যের প্রচার।",
  },
  // Volunteering stats + scope (original site).
  "volunteering.stats.activities.figure": { en: "117+", bn: "117+" },
  "volunteering.stats.activities.label": { en: "Social Activities", bn: "সামাজিক কার্যক্রম" },
  "volunteering.stats.lives.figure": { en: "500+", bn: "500+" },
  "volunteering.stats.lives.label": { en: "Lives Impacted", bn: "জীবনে প্রভাব" },
  "volunteering.stats.trainings.figure": { en: "12+", bn: "12+" },
  "volunteering.stats.trainings.label": { en: "Certified Training Completed", bn: "সার্টিফায়েড ট্রেনিং সম্পন্ন" },
  "volunteering.stats.organizations.figure": { en: "13+", bn: "13+" },
  "volunteering.stats.organizations.label": { en: "Organizations", bn: "সংস্থা" },
  "volunteering.scope.international.label": { en: "International", bn: "আন্তর্জাতিক" },
  "volunteering.scope.international.value": { en: "4", bn: "4" },
  "volunteering.scope.national.label": { en: "National", bn: "জাতীয়" },
  "volunteering.scope.national.value": { en: "6", bn: "6" },
  "volunteering.scope.local.label": { en: "Local", bn: "স্থানীয়" },
  "volunteering.scope.local.value": { en: "3", bn: "3" },
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

  // Links to #contact (G19).
  "apps.useButton": { en: "Use My Applications", bn: "আমার অ্যাপ্লিকেশন ব্যবহার করুন" },
  // ---------------------------------------------------------------- podcast (Think & Spark)
  "podcast.label": { en: "Projects", bn: "প্রজেক্ট" },
  "podcast.heading": { en: "Think and Spark", bn: "Think and Spark" },
  "podcast.intro": {
    en: "A faceless YouTube podcast that educates and inspires listeners around the world.",
    bn: "একটি ফেসলেস YouTube পডকাস্ট — বিশ্বজুড়ে শ্রোতাদের শিক্ষিত ও অনুপ্রাণিত করে।",
  },
  "podcast.body": {
    en: "Think and Spark is built for listeners: clear ideas, honest conversation, lessons you can use the same day.",
    bn: "Think and Spark শ্রোতাদের জন্য তৈরি: পরিষ্কার আইডিয়া, সৎ আলোচনা, আর একই দিনে ব্যবহার করা যায় এমন শিক্ষা।",
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

  // Think & Spark topics (original site).
  "podcast.topicsHeading": { en: "Topics", bn: "টপিক" },
  "podcast.topic1": { en: "English Grammar", bn: "ইংরেজি গ্রামার" },
  "podcast.topic2": { en: "Motivation", bn: "অনুপ্রেরণা" },
  "podcast.topic3": { en: "Life Hacks", bn: "লাইফ হ্যাক" },
  "podcast.topic4": { en: "Book Reviews", bn: "বই পর্যালোচনা" },
  // ---------------------------------------------------------------- ai creator
  "ai.label": { en: "AI creator", bn: "এআই ক্রিয়েটর" },
  "ai.heading": { en: "AI powered creativity", bn: "এআই-চালিত সৃজনশীলতা" },
  "ai.intro": { en: "Using AI to build, create, and innovate.", bn: "এআই দিয়ে তৈরি, সৃষ্টি ও উদ্ভাবন।" },
  "ai.course1.title": { en: "AI Prompt Masterclass", bn: "AI Prompt Masterclass" },
  "ai.course1.desc": {
    en: "Learn to write effective prompts for ChatGPT, Gemini, and other AI tools.",
    bn: "ChatGPT, Gemini ও অন্যান্য এআই টুলের জন্য কার্যকর প্রম্পট লেখা শিখুন।",
  },
  "ai.course2.title": { en: "AI Content Strategy", bn: "AI Content Strategy" },
  "ai.course2.desc": {
    en: "Develop a content strategy powered by AI for maximum reach and engagement.",
    bn: "সর্বোচ্চ রিচ ও এনগেজমেন্টের জন্য এআই-চালিত কনটেন্ট কৌশল তৈরি করুন।",
  },
  "ai.course3.title": { en: "AI Video Workshop", bn: "AI Video Workshop" },
  "ai.course3.desc": {
    en: "Generate creative video concepts using AI-driven brainstorming techniques.",
    bn: "এআই-চালিত ব্রেইনস্টর্মিং কৌশলের সাহায্যে সৃজনশীল ভিডিও ধারণা তৈরি করুন।",
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
    en: "As an Adobe Stock contributor, I create images and video for buyers around the world.",
    bn: "Adobe Stock কন্ট্রিবিউটর হিসেবে আমি বিশ্বজুড়ে ক্রেতাদের জন্য ছবি ও ভিডিও তৈরি করি।",
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

  // Adobe Stock stats (original site) — replace the status card (T8).
  "stock.stats.downloads.figure": { en: "1,143", bn: "1,143" },
  "stock.stats.downloads.label": { en: "Total Downloads", bn: "মোট ডাউনলোড" },
  "stock.stats.earnings.figure": { en: "$1,122.44", bn: "$1,122.44" },
  "stock.stats.earnings.label": { en: "Total Earnings", bn: "মোট আয়" },
  "stock.stats.status.figure": { en: "Active Contributor", bn: "সক্রিয় কন্ট্রিবিউটর" },
  "stock.stats.status.label": { en: "Status", bn: "অবস্থা" },
  // ---------------------------------------------------------------- digital skills
  "skills.label": { en: "Digital skills", bn: "ডিজিটাল দক্ষতা" },
  "skills.heading": { en: "Tools and technologies", bn: "টুল ও প্রযুক্তি" },

  // Real tool list (original site) — replaces the duplicated AI/teaching/stock
  // groups (D1–D3). Tool names stay in English where they are brand names.
  "skills.groupTools": { en: "Digital Tools", bn: "ডিজিটাল টুল" },
  "skills.tool1.name": { en: "Microsoft Word", bn: "Microsoft Word" },
  "skills.tool1.level": { en: "90%", bn: "90%" },
  "skills.tool2.name": { en: "Excel", bn: "Excel" },
  "skills.tool2.level": { en: "80%", bn: "80%" },
  "skills.tool3.name": { en: "PowerPoint", bn: "PowerPoint" },
  "skills.tool3.level": { en: "85%", bn: "85%" },
  "skills.tool4.name": { en: "Photoshop", bn: "Photoshop" },
  "skills.tool4.level": { en: "70%", bn: "70%" },
  "skills.tool5.name": { en: "Internet Research", bn: "ইন্টারনেট রিসার্চ" },
  "skills.tool5.level": { en: "95%", bn: "95%" },
  "skills.tool6.name": { en: "Email Management", bn: "ইমেইল ব্যবস্থাপনা" },
  "skills.tool6.level": { en: "90%", bn: "90%" },
  "skills.tool7.name": { en: "AI Tools (ChatGPT, Gemini, DeepSeek +)", bn: "এআই টুল (ChatGPT, Gemini, DeepSeek +)" },
  "skills.tool7.level": { en: "92%", bn: "92%" },
  // Digital Skills stats (original site).
  "skills.stats.tools.figure": { en: "15+", bn: "15+" },
  "skills.stats.tools.label": { en: "Tools Mastered", bn: "টুলে দক্ষতা" },
  "skills.stats.platforms.figure": { en: "8+", bn: "8+" },
  "skills.stats.platforms.label": { en: "AI Platforms", bn: "এআই প্ল্যাটফর্ম" },
  "skills.stats.proficiency.figure": { en: "92%", bn: "92%" },
  "skills.stats.proficiency.label": { en: "Proficiency", bn: "দক্ষতা" },
  // ---------------------------------------------------------------- languages
  "languages.label": { en: "Language proficiency", bn: "ভাষার দক্ষতা" },
  "languages.heading": { en: "Languages I work in", bn: "যেসব ভাষায় কাজ করি" },
  "languages.bangla.name": { en: "Bangla", bn: "বাংলা" },
  "languages.bangla.level": { en: "Native", bn: "মাতৃভাষা" },
  "languages.english.name": { en: "English", bn: "ইংরেজি" },
  "languages.english.level": { en: "Advanced", bn: "উন্নত" },
  "languages.hindi.name": { en: "Hindi", bn: "হিন্দি" },
  "languages.hindi.level": { en: "Fluent", bn: "সাবলীল" },
  "languages.arabic.name": { en: "Arabic", bn: "আরবি" },
  "languages.arabic.level": { en: "Reading", bn: "পড়া" },
  "languages.urdu.name": { en: "Urdu", bn: "উর্দু" },
  "languages.urdu.level": { en: "Reading", bn: "পড়া" },
  "languages.korean.name": { en: "Korean", bn: "কোরিয়ান" },
  "languages.korean.level": { en: "Reading", bn: "পড়া" },

  // Proficiency percentages (original site) — notes removed (T13).
  "languages.bangla.percent": { en: "100%", bn: "100%" },
  "languages.english.percent": { en: "90%", bn: "90%" },
  "languages.hindi.percent": { en: "80%", bn: "80%" },
  "languages.arabic.percent": { en: "40%", bn: "40%" },
  "languages.urdu.percent": { en: "40%", bn: "40%" },
  "languages.korean.percent": { en: "30%", bn: "30%" },
  // ---------------------------------------------------------------- reflections
  "reflections.ariaLabel": { en: "Personal reflections", bn: "ব্যক্তিগত ভাবনা" },
  "reflections.label": { en: "Personal reflections", bn: "ব্যক্তিগত ভাবনা" },
  "reflections.quote": {
    en: "Every achievement is by the mercy of Allah and the support of my parents and sister.",
    bn: "প্রতিটি অর্জন আল্লাহর রহমত আর আমার বাবা-মা ও বোনের সহযোগিতার ফল।",
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

  // Activities I Love + Plants in My Room (original site).
  "hobbies.activitiesHeading": { en: "Activities I Love", bn: "যেসব কাজ ভালোবাসি" },
  "hobbies.activity1": { en: "Reading Books", bn: "বই পড়া" },
  "hobbies.activity2": { en: "Gardening", bn: "বাগান করা" },
  "hobbies.activity3": { en: "Calligraphy", bn: "ক্যালিগ্রাফি" },
  "hobbies.activity4": { en: "Handmade Flower Art", bn: "হাতে তৈরি ফুলের শিল্প" },
  "hobbies.activity5": { en: "Technology Exploration", bn: "প্রযুক্তি অন্বেষণ" },
  "hobbies.plantsHeading": { en: "Plants in My Room", bn: "আমার ঘরের গাছপালা" },
  "hobbies.plant1": { en: "Beli", bn: "বেলি" },
  "hobbies.plant2": { en: "Hasnahena", bn: "হাসনাহেনা" },
  "hobbies.plant3": { en: "Nagchampa", bn: "নাগচম্পা" },
  "hobbies.plant4": { en: "Rose", bn: "গোলাপ" },
  "hobbies.plant5": { en: "Allamanda", bn: "অলকানন্দা" },
  // ---------------------------------------------------------------- gallery
  "gallery.label": { en: "Gallery", bn: "গ্যালারি" },
  "gallery.heading": { en: "Captured moments", bn: "ধারণ করা মুহূর্ত" },
  "gallery.intro": {
    en: "A visual journey through my experiences, events, and memories.",
    bn: "আমার অভিজ্ঞতা, অনুষ্ঠান ও স্মৃতির ভিজ্যুয়াল যাত্রা।",
  },

  // 20 original photos (G28) — replace the 7 recycled images (D12).
  "gallery.photo1.alt": { en: "Teaching at school", bn: "স্কুলে পড়াচ্ছেন" },
  "gallery.photo1.caption": { en: "Teaching at school", bn: "স্কুলে পড়াচ্ছেন" },
  "gallery.photo2.alt": { en: "Rotaract Club meeting", bn: "রোটার্যাক্ট ক্লাবের মিটিং" },
  "gallery.photo2.caption": { en: "Rotaract Club meeting", bn: "রোটার্যাক্ট ক্লাবের মিটিং" },
  "gallery.photo3.alt": { en: "Heritage site visit", bn: "ঐতিহ্যবাহী স্থান পরিদর্শন" },
  "gallery.photo3.caption": { en: "Heritage site visit", bn: "ঐতিহ্যবাহী স্থান পরিদর্শন" },
  "gallery.photo4.alt": { en: "Award ceremony", bn: "পুরস্কার বিতরণী অনুষ্ঠান" },
  "gallery.photo4.caption": { en: "Award ceremony", bn: "পুরস্কার বিতরণী অনুষ্ঠান" },
  "gallery.photo5.alt": { en: "Group photo with trophy", bn: "ট্রফি হাতে দলগত ছবি" },
  "gallery.photo5.caption": { en: "Group photo with trophy", bn: "ট্রফি হাতে দলগত ছবি" },
  "gallery.photo6.alt": { en: "Holding a book", bn: "বই হাতে" },
  "gallery.photo6.caption": { en: "Holding a book", bn: "বই হাতে" },
  "gallery.photo7.alt": { en: "Event group photo", bn: "অনুষ্ঠানের দলগত ছবি" },
  "gallery.photo7.caption": { en: "Event group photo", bn: "অনুষ্ঠানের দলগত ছবি" },
  "gallery.photo8.alt": { en: "Boat ride with friends", bn: "বন্ধুদের সঙ্গে নৌকা ভ্রমণ" },
  "gallery.photo8.caption": { en: "Boat ride with friends", bn: "বন্ধুদের সঙ্গে নৌকা ভ্রমণ" },
  "gallery.photo9.alt": { en: "Community event with children", bn: "শিশুদের সঙ্গে কমিউনিটি অনুষ্ঠান" },
  "gallery.photo9.caption": { en: "Community event with children", bn: "শিশুদের সঙ্গে কমিউনিটি অনুষ্ঠান" },
  "gallery.photo10.alt": { en: "A Story of Two Hearts book", bn: "A Story of Two Hearts বই" },
  "gallery.photo10.caption": { en: "A Story of Two Hearts book", bn: "A Story of Two Hearts বই" },
  "gallery.photo11.alt": { en: "Speaking at event", bn: "অনুষ্ঠানে বক্তৃতা" },
  "gallery.photo11.caption": { en: "Speaking at event", bn: "অনুষ্ঠানে বক্তৃতা" },
  "gallery.photo12.alt": { en: "Workshop session", bn: "ওয়ার্কশপ সেশন" },
  "gallery.photo12.caption": { en: "Workshop session", bn: "ওয়ার্কশপ সেশন" },
  "gallery.photo13.alt": { en: "Rotaract certificate ceremony", bn: "রোটার্যাক্ট সার্টিফিকেট অনুষ্ঠান" },
  "gallery.photo13.caption": { en: "Rotaract certificate ceremony", bn: "রোটার্যাক্ট সার্টিফিকেট অনুষ্ঠান" },
  "gallery.photo14.alt": { en: "Community fair market", bn: "কমিউনিটি মেলা" },
  "gallery.photo14.caption": { en: "Community fair market", bn: "কমিউনিটি মেলা" },
  "gallery.photo15.alt": { en: "Group photo at workshop", bn: "ওয়ার্কশপে দলগত ছবি" },
  "gallery.photo15.caption": { en: "Group photo at workshop", bn: "ওয়ার্কশপে দলগত ছবি" },
  "gallery.photo16.alt": { en: "Food distribution event", bn: "খাদ্য বিতরণ অনুষ্ঠান" },
  "gallery.photo16.caption": { en: "Food distribution event", bn: "খাদ্য বিতরণ অনুষ্ঠান" },
  "gallery.photo17.alt": { en: "Distribution of fans with children", bn: "শিশুদের সঙ্গে ফ্যান বিতরণ" },
  "gallery.photo17.caption": { en: "Distribution of fans with children", bn: "শিশুদের সঙ্গে ফ্যান বিতরণ" },
  "gallery.photo18.alt": { en: "Formal gathering with friends", bn: "বন্ধুদের সঙ্গে আনুষ্ঠানিক আড্ডা" },
  "gallery.photo18.caption": { en: "Formal gathering with friends", bn: "বন্ধুদের সঙ্গে আনুষ্ঠানিক আড্ডা" },
  "gallery.photo19.alt": { en: "Meeting at library", bn: "লাইব্রেরিতে মিটিং" },
  "gallery.photo19.caption": { en: "Meeting at library", bn: "লাইব্রেরিতে মিটিং" },
  "gallery.photo20.alt": { en: "Tree planting campaign", bn: "বৃক্ষরোপণ কর্মসূচি" },
  "gallery.photo20.caption": { en: "Tree planting campaign", bn: "বৃক্ষরোপণ কর্মসূচি" },
  // Gallery stats (original site).
  "gallery.stats.photos.figure": { en: "20+", bn: "20+" },
  "gallery.stats.photos.label": { en: "Photos", bn: "ছবি" },
  "gallery.stats.events.figure": { en: "15+", bn: "15+" },
  "gallery.stats.events.label": { en: "Events", bn: "অনুষ্ঠান" },
  "gallery.stats.memories.figure": { en: "∞", bn: "∞" },
  "gallery.stats.memories.label": { en: "Memories", bn: "স্মৃতি" },
  // Facebook album link (URL stays as-is, never translated).
  "gallery.albumLink": { en: "View the full album on Facebook", bn: "পুরো অ্যালবামটি Facebook-এ দেখুন" },
  "gallery.albumUrl": { en: "https://www.facebook.com/media/set/?set=a.694677762083396&type=3", bn: "https://www.facebook.com/media/set/?set=a.694677762083396&type=3" },
  // ---------------------------------------------------------------- booking
  "booking.label": { en: "Book a session", bn: "সেশন বুক করুন" },
  "booking.heading": { en: "Let's work together", bn: "চলুন একসঙ্গে কাজ করি" },
  "booking.intro": { en: "Tell Sonet what you need help with.", bn: "কীসে সাহায্য দরকার, সনেটকে জানান।" },
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

  // Preferred date field (G29) + Creative Discussion session type (G30).
  "booking.form.dateLabel": { en: "Preferred date", bn: "পছন্দের তারিখ" },
  "booking.type.creativeDiscussion": { en: "Creative Discussion", bn: "সৃজনশীল আলোচনা" },
  // ---------------------------------------------------------------- contact
  "contact.label": { en: "Contact", bn: "যোগাযোগ" },
  "contact.heading": { en: "Get in touch", bn: "যোগাযোগ করুন" },
  "contact.intro": {
    en: "The fastest way to reach Sonet is WhatsApp. Email works too.",
    bn: "সনেটের কাছে পৌঁছানোর দ্রুততম উপায় WhatsApp। ইমেইলও চলবে।",
  },
  "contact.email": { en: "md.sonet.mia01@gmail.com", bn: "md.sonet.mia01@gmail.com" },
  "contact.whatsapp": { en: "WhatsApp 01797953059", bn: "WhatsApp 01797953059" },
  "contact.facebook": { en: "Facebook", bn: "Facebook" },
  "contact.youtube": { en: "YouTube, Sweet CGI Lab", bn: "YouTube, Sweet CGI Lab" },

  // Contact form (G31). Name + Message reuse booking.form.nameLabel /
  // booking.form.messageLabel (identical strings).
  "contact.form.emailLabel": { en: "Email", bn: "ইমেইল" },
  "contact.form.submit": { en: "Send Message", bn: "বার্তা পাঠান" },
  "contact.form.success": { en: "Message sent! I'll reply soon.", bn: "বার্তা পাঠানো হয়েছে! শীঘ্রই উত্তর দেব।" },
  // ---------------------------------------------------------------- footer
  "footer.name": { en: "Md. Sonet Mia", bn: "Md. Sonet Mia" },
  "footer.bio": {
    en: "Writer, Educator, AI Creator & Digital Thinker from Tangail, Bangladesh.",
    bn: "টাঙ্গাইল, বাংলাদেশের লেখক, শিক্ষক, এআই ক্রিয়েটর ও ডিজিটাল চিন্তক।",
  },
  "footer.navAriaLabel": { en: "Footer", bn: "ফুটার" },
  "footer.about": { en: "About", bn: "আমার সম্পর্কে" },
  "footer.projects": { en: "Projects", bn: "প্রজেক্ট" },
  "footer.bookSession": { en: "Book a session", bn: "সেশন বুক করুন" },
  "footer.contact": { en: "Contact", bn: "যোগাযোগ" },
  "footer.youtube": { en: "YouTube", bn: "YouTube" },
  "footer.facebook": { en: "Facebook", bn: "Facebook" },
  "footer.whatsapp": { en: "WhatsApp", bn: "WhatsApp" },
  "footer.copyright": { en: "Made with ♥ by Md. Sonet Mia © 2026", bn: "♥ দিয়ে তৈরি — Md. Sonet Mia © 2026" },
  "footer.privacy": { en: "Privacy policy", bn: "গোপনীয়তা নীতি" },
  "footer.terms": { en: "Terms", bn: "শর্তাবলি" },

  // Quick Links (original site) — footer.about / .projects / .bookSession /
  // .contact already exist.
  "footer.quickLinksHeading": { en: "Quick Links", bn: "দ্রুত লিংক" },
  "footer.teaching": { en: "Teaching", bn: "শিক্ষাদান" },
  "footer.writing": { en: "Writing", bn: "লেখালেখি" },
  "footer.aiServices": { en: "AI Services", bn: "এআই সেবা" },
  // Contact column (original site). Footer email is the original's published
  // address — see COPY_NOTES.md v3 open question.
  "footer.contactHeading": { en: "Contact", bn: "যোগাযোগ" },
  "footer.whatsappNumber": { en: "WhatsApp: +880 1797953059", bn: "WhatsApp: +880 1797953059" },
  "footer.email": { en: "md.sonet.mia01@gmail.com", bn: "md.sonet.mia01@gmail.com" },
  // Carousel / lightbox controls (v3 wiring — UI chrome, not page copy).
  // "{n}" in carousel.slide is replaced with the slide number at render time.
  "carousel.prev": { en: "Previous slide", bn: "আগের স্লাইড" },
  "carousel.next": { en: "Next slide", bn: "পরের স্লাইড" },
  "carousel.slide": { en: "Go to slide {n}", bn: "{n} নম্বর স্লাইডে যান" },
  "gallery.close": { en: "Close image viewer", bn: "ছবি দেখা বন্ধ করুন" },
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
