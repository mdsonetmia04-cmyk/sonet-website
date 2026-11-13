# Copy Notes — SONET website i18n (v2)

Companion to `i18n/strings.ts` (349 keys, all with `en` + `bn`, `tsc --noEmit` clean).
No file outside `~/workspace/sonet-website/i18n/` was edited. No facts were invented;
everything was carried from `app/page.tsx` / `Nav` / `Footer` / `BookingForm` /
`Tagline` / `layout.tsx`, cross-checked against `CONTENT_SOURCE.md`.

## (a) Main English tightenings (before → after)

Only sentences that actually got shorter are listed; already-tight lines were left alone.

1. **Hero proof** — "Teaching for 2+ years, with 50 to 70 students a day."
   → "Teaching 2+ years, 50 to 70 students a day."
2. **Teaching heading** — "Empowering students through quality English education"
   → "Quality English teaching that empowers students"
3. **Teaching intro** — "Teaching for 2+ years, with 50 to 70 students a day, and 15+ lecture
   materials prepared every month." → "2+ years teaching, 50 to 70 students a day,
   15+ lecture materials a month."
4. **About ¶1** — "From a young age, I have been captivated by the beauty of language and the
   power of stories." → "From a young age, I loved the beauty of language and the power
   of stories."
5. **About ¶3** — "My faith in Islam (Sunni) and my dedication to community service shape
   everything I do, from volunteering to building applications that serve others."
   → "…my commitment to community service shape everything I do — from volunteering to
   building apps that serve others."
6. **Acting intro** — "Bringing classic literature to life through the art of performance
   and dramatic expression." → "Bringing classic literature to life through performance."
7. **AI intro** — "Harnessing artificial intelligence to build, create, and innovate."
   → "Using AI to build, create, and innovate:" (also drops "harness", a banned filler
   word in DESIGN_BRIEF §12.)
8. **Achievements intro** — "Dedicated to continuous learning, service, and excellence."
   → "Continuous learning, service, and excellence."
9. **Volunteering body** — "Community service is part of how I work, not something added on
   top of it." → "…not an add-on."
10. **Writing body** — "…spark change in the minds of readers across the globe."
    → "…spark change in readers around the world."
11. **Booking heading** — "Let us work together" → "Let's work together"
12. **Stock body** — "I create images and video that buyers around the world can use in their
    own work." → "I create images and video for buyers around the world."
13. **Podcast intro** — "A faceless YouTube podcast channel educating and inspiring global
    audiences." → "A faceless YouTube podcast that educates and inspires listeners
    around the world."
14. **Hero caption** — "Speaking on stage, sharing ideas with a live audience."
    → "Speaking on stage to a live audience."
15. **Hobbies intro** — "From creative pursuits to competitive sports, moments of passion and
    growth." → "Creative pursuits and competitive sports — moments of passion and growth."
16. **Volunteering intro** — "Dedicated to making a meaningful impact through social service,
    education, and youth empowerment." → "Making a real impact through social service,
    education, and youth empowerment."
17. Small hyphen fixes only (meaning unchanged): "AI powered" → "AI-powered",
    "image to prompt" → "image-to-prompt", "stock ready" → "stock-ready",
    "Multi purpose" → "Multi-purpose", "One to one" → "One-to-one", "note taking" →
    "note-taking". DESIGN_BRIEF bans hyphens *inside* headings/body copy, so the
    implementation agent should confirm these compound adjectives are acceptable, or
    revert to the unhyphenated forms — the Bangla strings are unaffected either way.

## (b) Translation choices I was unsure about

- **"Empowering students…"** — "empower" has no clean Bangla equivalent; "ক্ষমতায়িত
  করে" sounds bureaucratic. Chose "…যা শিক্ষার্থীদের আত্মবিশ্বাসী করে তোলে" (makes
  students confident). Flag for the user if he wants the literal "ক্ষমতায়ন" sense.
- **"Book a session"** → "সেশন বুক করুন". "বুক" is the everyday Bangla usage;
  "সংরক্ষণ করুন" would be stilted. Same for "Book a consultation" → "পরামর্শ বুক করুন".
- **"Faceless"** (podcast) → kept "ফেসলেস". "মুখ ছাড়া" / "মুখবিহীন" reads oddly in
  Bangla; "ফেসলেস" is the word Bangladeshi YouTube audiences actually use.
- **"Native" (Bangla level)** → "মাতৃভাষা", not "স্থানীয়". **"Advanced"** → "উন্নত"
  (alternative: "উচ্চমানের"). **"Fluent"** → "সাবলীল". **"Reading"** → chip "পড়া",
  note "পড়তে পারি।" (I can read it) — reads more natural than "পড়ার স্তর" as a note.
- **Hero headline** — "Teacher, actor, writer, building with AI." → "শিক্ষক, অভিনেতা,
  লেখক — এআই দিয়ে গড়ছি।" First person, matching the About section's voice ("আমি…").
  Captions elsewhere stay third person ("বক্তৃতা দিচ্ছেন"), matching their English.
- **"BA (Honours) in English"** — kept in English in the Bangla strings too (credential
  name, same treatment as a proper name). The note/level lines around it are translated.
- **"Prompt", "metadata", "engagement", "reach"** — transliterated (প্রম্পট, মেটাডেটা,
  এনগেজমেন্ট, রিচ) because those are the words Bangladeshi creators actually say;
  purist Bangla equivalents would confuse the audience.
- **"SDG Tracker"** — name stays English; purpose translates the expansion:
  "টেকসই উন্নয়ন লক্ষ্য (SDG)-এর অগ্রগতি পর্যবেক্ষণ করুন।"
- **WhatsApp message template** (`booking.whatsapp.*`) — translated to Bangla on the
  assumption the outgoing message follows the site language. If Sonet prefers the
  message to always go out in English (it lands in his own WhatsApp), the
  implementation agent should just use the `en` values for both languages.
- **"Colour theme"** — kept British spelling in English, as in the source file.
- **"One-to-one guidance"** → "ব্যক্তিগত গাইডলাইন" (dropped the literal "এক থেকে এক").
- **Tagline** — split into 4 line keys (`tagline.line1–4`); the component splits them
  into words for the reveal animation. Bangla: "ধৈর্য ধরে শেখাই। কৌতূহল নিয়ে তৈরি
  করি। সৎ পরিশ্রমে উপার্জন করি। ইংরেজি ও বাংলায়, সব শিক্ষার্থীর জন্য।"
- **"Visit {name}"** → "{name} দেখুন" — `{name}` placeholder is replaced at render time.
- **"3.38 out of 4.00"** — kept identical in Bangla (numbers stay as-is per the brief);
  the full sentence lives in `education.body`, the styled span in `education.cgpa`.

## (c) Facts I could not verify from CONTENT_SOURCE.md (carried, NOT invented)

These appear in `page.tsx` but are absent from `CONTENT_SOURCE.md` (whose counters
crawled as 0 / 0% and which lists no contact details). I carried them verbatim from
`page.tsx`; the implementation agent should treat them as page.tsx-sourced, not
source-verified:

- Project stats: "53 approved students, 216 bilingual topics" (Sweet Smart Calendar),
  "72 subscribers, 98,000+ views" (Sweet CGI Lab), "18 posts live" (SiteIncome Lab).
- Teaching load: "50 to 70 students a day", "15+ lecture materials a month", "2+ years".
- Employment: Prativa School and College Coaching, Jamalpur, Jan 2023–Mar 2024;
  Sobuz Kuri Lab. School and College, Jamalpur, Jan 2022–Jan 2023.
- "Chess champion" / "Debate champion" achievements and their certificates/recognitions.
- Language levels: Hindi "Fluent"; Arabic / Urdu / Korean "Reading" (CONTENT_SOURCE.md
  lists the six languages but no levels — the live crawl showed 0% for all).
- Contact details: email md.Sonet.mia2@gmail.com, WhatsApp 01797953059, Facebook
  facebook.com/mdsonet.mia.777 (present in page.tsx only).
- "Think and Spark" described as a faceless YouTube podcast (CONTENT_SOURCE.md names the
  channel but not the "faceless podcast" framing).
- Adobe Stock "Active contributor" status (CONTENT_SOURCE.md shows the section but the
  status/download/earnings counters crawled as 0 / $0.00 — no verified numbers exist,
  so none were added).

## Scope notes for the implementation agent

- `app/privacy/page.tsx` and `app/terms/page.tsx` were **not** in the assigned file
  list, so their strings are **not** in the dictionary. They are short legal pages;
  decide separately whether they stay English-only or get translated.
- `app/not-found.tsx` was also outside the list, but it is only 3 strings, so they are
  included as a bonus under `misc.*`.
- Section numbers ("01"–"19") are not copy — no keys needed.
- `meta.keywords` is identical in `en` and `bn` (SEO keywords stay English).
- The `t(key, lang)` helper at the bottom of `strings.ts` falls back to English for a
  missing key or language.

---

# Copy Notes — v3 rebuild (2026-11-07)

Audit-driven pass against the ORIGINAL site (mdsonetmia.vercel.app).
Only `i18n/strings.ts` was edited (plus this file). No app code, no deploy.
**Counts: 370 keys → 520 keys** (247 added, 97 deleted, 17 changed; every key
has `en` + `bn`; `tsc --noEmit` clean). Note: the brief said "371 keys" — the
real v2 count was 370; the 371st `en:`/`bn:` hit was the `Record<string,
{ en: string; bn: string }>` type declaration line itself.

## (d) What changed, by task code

**Added (247 keys)** — exact key paths for the implementation agent:
- `about.detailFullName/Born/Nationality/Location.{label,value}` (G3)
- `education.ielts.{title,subtitle,date,body,resultLabel,resultValue,nextLabel,nextValue}`,
  `education.ba.{desc,date,coursesLabel,coursesValue}`,
  `education.stats.{study,courses,languages,certifications}.{figure,label}` (G4–G6)
- `teaching.session1–3.{title,duration,price,desc}`,
  `teaching.stats.{schools,students,sessions,years}.{figure,label}`,
  `teaching.role1.dates`, `teaching.role2.dates` (G7/G8/G10)
- `acting.card1–3.{title,desc}` (G11)
- `writing.booksHeading`, `writing.book1–5.{title,kind}`,
  `writing.stats.{books,published,genres}.{figure,label}` (G12)
- `achievements.award1–6.{title,desc}`,
  `achievements.stats.{awards,certifications,trainings,events}.{figure,label}`,
  `achievements.carousel1–5.{caption,sub}` (G13–G15)
- `volunteering.photo1–4Alt`, `volunteering.activity1–6.{title,desc}`,
  `volunteering.stats.{activities,lives,trainings,organizations}.{figure,label}`,
  `volunteering.scope.{international,national,local}.{label,value}` (G16–G18)
- `apps.useButton` — links to #contact (G19)
- `podcast.topicsHeading`, `podcast.topic1–4` (G20)
- `stock.stats.{downloads,earnings,status}.{figure,label}` (G21)
- `skills.groupTools`, `skills.tool1–7.{name,level}`,
  `skills.stats.{tools,platforms,proficiency}.{figure,label}` (G22/G23)
- `languages.{bangla,english,hindi,arabic,urdu,korean}.percent` (G24)
- `hobbies.activitiesHeading`, `hobbies.activity1–5`,
  `hobbies.plantsHeading`, `hobbies.plant1–5` (G26/G27)
- `gallery.photo1–20.{alt,caption}`,
  `gallery.stats.{photos,events,memories}.{figure,label}`,
  `gallery.albumLink`, `gallery.albumUrl` (G28)
- `booking.form.dateLabel`, `booking.type.creativeDiscussion` (G29/G30)
- `contact.form.emailLabel`, `contact.form.submit`, `contact.form.success` (G31)
- `footer.quickLinksHeading`, `footer.teaching`, `footer.writing`, `footer.aiServices`,
  `footer.contactHeading`, `footer.whatsappNumber`, `footer.email` (G33)
- `nav.education`, `nav.skills` (G34); `hero.exploreSkills` — links to #skills (G35)

**Changed (17 keys):**
- `hero.headline` → "Md. Sonet Mia" (name as H1, T16); `hero.eyebrow` → the
  tagline with · separators. **Decision (T16): the old headline line
  "Teacher, actor, writer, building with AI." was DROPPED, not kept as a
  sub-line** — the tagline already lists the roles and the subhead already
  covers teaching/creating with AI; keeping it would triple-state the same thing.
  `hero.subhead` unchanged.
- `teaching.role1/role2.{title,org}` — original wording, reordered
  chronologically (Sobuz Kuri 2022–2023 first, Prativa 2023–2024 second); dates
  split out into new `teaching.role1/2.dates` keys; the v2 org strings carried
  location + dates inline ("…Jamalpur, Jan 2023 to Mar 2024"), the original
  gives school name + year range only, so location/dates no longer sit in `.org`.
- `bookMid.label` → "Book a quick session" (D9, distinct from `booking.label`).
- `bookMid.intro` + `booking.intro` trimmed — the WhatsApp/no-payment
  explanation now lives ONLY in `booking.form.helper` (D7).
- `ai.intro` → "Using AI to build, create, and innovate." (D1); `ai.course2.desc`
  + `ai.course3.desc` restored to the ORIGINAL wording (T15).
- `stock.body` — first half only (T7); `podcast.body` — faceless claim cut, it
  appears once in `podcast.intro` (D11).
- `reflections.quote` → the original quote (G25).
- `footer.bio` → the tagline (D8/G33); `footer.copyright` → "Made with ♥ by
  Md. Sonet Mia © 2026" (G33).

**Deleted (97 keys):**
- T1 `tagline.*` (all 5, incl. aria-label; whole Tagline component removed —
  the empty section divider was removed too).
- T17 `hero.proof`. T3 `about.fact*` (6). T4 `acting.body`. T5
  `volunteering.body`. T2 `reflections.closing`. T9
  `teaching.service1–4.outcome`. T10 `writing.service1–3.desc`. T11
  `booking.benefitsHeading` + `benefit1–3.{title,body}`. T13
  `languages.*.note` (6). T14 `hobbies.chip*` (4). T6/D10 `ai.panelTitle`,
  `ai.panelBody`. T8 `stock.cardTitle`, `stock.cardBody`, `stock.askLink`.
- D6 `teaching.bookSession`, `writing.bookConsultation`, `ai.bookSession`.
- D7 `booking.noPaymentNote`.
- D2/D3 `skills.groupAi/Content/Teaching/Stock` (17).
- D4/D5 `achievements.{cgpa,students,views,posts,chess,debate}.*` (18).
- D12 `gallery.{venice1,speaking,football,capacity,venice2,podium,teamwork}.*` (14).

**Reused, not duplicated:** contact form "Your name" / "Message" reuse
`booking.form.nameLabel` / `booking.form.messageLabel` (G31). The AI 4-pack
("Prompt writing / Content creation / Video generation / Creative strategy")
lives ONLY in `ai.chip1–4` now (D1).

## (e) Open questions / discrepancies for the user

1. **Footer email — OPEN QUESTION (flagged in the brief):** `footer.email` is
   now **md.sonet.mia01@gmail.com** (the original's published address). The v2
   site used **md.Sonet.mia2@gmail.com** everywhere else. `contact.email`,
   `privacy.para5` and `terms.para4` were deliberately LEFT as mia2 (task: do
   not touch the email in privacy/terms; contact section not named) — so the
   site now shows mia01 in the footer and mia2 in the contact section. Ask
   Sonet which address should be canonical; if mia01, the implementation agent
   should also update `contact.email` (+ privacy/terms if he agrees).
2. **CGPA — kept 3.38, NOT changed.** The original site says 3.8; the user's
   own CV says 3.38. `education.body` / `education.cgpa` stay 3.38 per the
   brief. If he confirms 3.8, change those two keys only.
3. **Name spelling:** the original writes "Md. Sonet Mia" (with period) — used
   for `hero.headline`, `about.detailFullName.value`, `footer.copyright`.
   `nav.brand`, `meta.title` and `footer.name` still say "Md Sonet Mia"
   (no period, as in v2). Worth aligning one way or the other.
4. **`acting.playTitle` / `acting.playNote` kept** — they now duplicate
   `acting.card1.title` ("The Merchant of Venice"). The implementation agent
   should drop one of them when wiring the acting cards.
5. **"বিসর্জন"** stays in Bengali script in BOTH `en` and `bn`
   (`writing.book3.title`) — it is the book's title as published.
6. **"∞"** stays as the symbol in both languages (`gallery.stats.memories.figure`).
7. **"Rotaract"** — spelled without a hyphen in both languages (proper name).
8. **Bangla dates:** "12 January 2000" → "12 জানুয়ারি 2000" (Bangla month,
   Western digits, per the file's digit convention); "Completed 2025/2024" →
   "2025/2024 সালে সম্পন্ন". Employment dates stay "2022–2023" /
   "2023–2024" in both languages.
9. **"Allamanda"** → "অলকানন্দা" (the standard Bangla name for the flower);
   "Beli" → "বেলি", "Hasnahena" → "হাসনাহেনা", "Nagchampa" → "নাগচম্পা".
10. **"Chief Sergeant at Arms"** → transliterated "চিফ সার্জেন্ট অ্যাট আর্মস"
    (a Rotaract role title; no natural Bangla equivalent).
11. **`gallery.photo*.alt` = the caption text** in both languages (alt and
    caption carry the same wording per photo, as the original gives one line
    per photo).
12. **No strings were invented.** Every added `en:` value is the original's
    exact wording from the brief; `bn:` values are new natural translations.
    `education.stats.languages` = "3" (Bangla/English/Hindi as working
    languages — the original's "3 Languages" stat; the languages section lists
    six including reading-level ones).
