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
  facebook.com/mdsont.mia.777 (present in page.tsx only).
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
