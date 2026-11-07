# Content Report — SONET personal site rebuild (content layer)

Date: 2026-11-07. Scope: content files only. No page/component code was edited.
Sources: `i18n/strings.ts` (v3, 520 keys), `app/page.tsx`, `CONTENT_SOURCE.md`,
`DESIGN_BRIEF.md`, `components/Nav.tsx`, `components/Footer.tsx`, plus the
master-prompt facts supplied in the task brief.

## Files delivered

1. `lib/content.ts` — typed English content (`SiteContent` + `content`).
   Every page string lives here; interfaces are exported for the implementation agent.
2. `i18n/bn.ts` — full Bangla dictionary. `bn` is typed as `SiteContent`, i.e.
   the **same shape as `content`, field for field, in the same order**. The
   implementation agent picks `content` (en) or `bn` (bn) and reads the same
   paths — no key lookups. Proper names, brands, URLs, emails, phones, file
   paths and numbers are identical in both files; only human copy differs.
3. `CONTENT_REPORT.md` — this file.

Validation: `npx tsc --noEmit` passes clean after both files were written.
No `%` character appears in either file (all percentages removed, see below).

## Counts

- Nav: 10 items (Home, About, Experience, Education, Leadership, Projects,
  Achievements, Certifications, Publications, Contact) + `/skills` page
  (in `footerNav`, linked from footer + About).
- Projects: **7** — 4 Live, 3 Concept (Sonet English Academy, JobMatch
  Bangladesh, SkillVerse By Sonet).
- Books: **5** (3 with real covers, 2 text-only).
- Certifications: **1 real** (IELTS Academic, Overall Band 6.0) + **2 aggregate**
  entries (17+ online courses; 6+ trainings — counts from the original site,
  not named certificates) + **6 empty placeholder slots** (`placeholder: true`).
- Achievements: 6 items, all with `date: null` (no verified dates exist).
- Gallery: 20 photos with v3 captions + Facebook album URL.
- Languages: 6 (levels as words only — see drops).
- Skill categories: 6, all tags. Digital tools: 7 names. Apps carried over: 10.
- Leadership: 3 entries, all flagged `placeholder: true` (see below).
- `placeholder: true` flags: 14 in each file (3 leadership + 3 concept
  projects + 6 cert slots + LinkedIn + 1 Rotaract role-link note counts
  within the leadership items; see file for the exact per-item notes).
- Bangla coverage: every EN string field has a Bangla counterpart — the
  `SiteContent` type enforces this at compile time, so a missing translation
  is a type error, not a silent gap.

## What was carried over from v3 (verified facts)

- Personal details: born 12 January 2000, Bangladeshi, Tangail; faith
  Islam (Sunni); reflection quote; hero portrait + formal photo paths.
- Education: BA (Honours) in English, Sheikh Fazilatunnesa Mujib University,
  Completed 2024, 40+ courses; education stats 4+ / 40+ / 3 / 5+.
- Teaching: 2+ years, 50–70 students/day, 15+ materials/month; 2 roles
  (Sobuz Kuri 2022–2023, Prativa 2023–2024), 4 services, 3 session cards
  (Grammar 60 min, Spoken 45 min, Exam Prep 90 min, "Contact for pricing"),
  teaching stats 2 / 200+ / 500+ / 2+.
- Acting: The Merchant of Venice, 3 cards, 2 photos.
- Writing: 5 books with kinds, 3 writing services, stats 5 / 3 / 4.
- Achievements: all 6 award cards + stats 5+ / 17+ / 6+ / 30+ + 5 carousel items.
- Volunteering: 6 activities, 4 photos, stats 117+ / 500+ / 12+ / 13+,
  scope International 4 / National 6 / Local 3.
- Adobe Stock: 1,143 downloads, $1,122.44 earnings, Active Contributor.
- Hobbies: 4 sports, 2 photos, 5 Activities I Love, 5 Plants in My Room.
- Gallery: all 20 photos, captions, stats 20+ / 15+ / ∞, album URL.
- Contact: email md.sonet.mia01@gmail.com, WhatsApp 01797953059,
  Facebook facebook.com/mdsont.mia.777, YouTube @SweetCGILab,
  GitHub mdsonetmia04-cmyk.
- Project facts: SSC 53 students / 216 topics; CGI 72 subs / 98,000+ views;
  SiteIncome 18 posts live.
- Booking: 7 session types incl. Creative Discussion; WhatsApp/no-payment helper.

## What was dropped or changed (with reasons)

1. **IELTS 6.5 → 6.0 (CHANGED, per master prompt).** v3 strings say 6.5
   ("Completed 2025", next target 7.5). The master prompt confirms Overall
   Band 6.0, so `resultValue` is now "Overall Band 6.0" and the body no
   longer states a band number. The "Completed 2025" date and "Next Target
   7.5" are kept as printed in v3. **Owner to confirm the 6.0 figure.**
2. **CGPA confirmed 3.38/4.00 (NOT 3.8).** Per master prompt + CV; matches v3.
3. **All percentages → tags / word levels (DROPPED).** v3 tool levels
   (Word 90%, Excel 80%, PowerPoint 85%, Photoshop 70%, Internet Research
   95%, Email Management 90%, AI Tools 92%) — tool NAMES kept as tags,
   percentages deleted. Language percentages (Bangla 100%, English 90%,
   Hindi 80%, Arabic/Urdu 40%, Korean 30%) — deleted; levels kept as words
   (Native / Advanced / Fluent / Reading). Skills "92% Proficiency" stat
   deleted (only 15+ tools / 8+ AI platforms kept).
4. **No cover images for projects.** No image in `public/images/` is a
   project screenshot, so all 7 projects have `coverImage: null` — the
   implementation agent should use a clean typographic cover, never a fake
   screenshot.
5. **Employment month-level dates NOT carried.** v3 strings give year ranges
   only (2022–2023 / 2023–2024). `COPY_NOTES.md` §(c) records fuller dates
   from an earlier page version (Sobuz Kuri Jan 2022–Jan 2023; Prativa
   Jan 2023–Mar 2024, Jamalpur) — not used, per the brief's "v3 strings"
   rule. Owner can confirm and re-add them.
6. **Privacy/terms email left alone.** Those pages still say
   md.Sonet.mia2@gmail.com; content layer uses md.sonet.mia01@gmail.com
   (primary, per brief). Open question from v3, still open.
7. **"What I Do" descriptions assembled, not verbatim.** The master prompt's
   exact What I Do wording was **not included in this task's brief**, so the
   4 descriptions were assembled from the verbatim hero quotes and bio
   supplied in the brief + v3 facts. Owner should confirm or replace them.
   Same for the 4 project objectives of the live projects (derived from the
   verified descriptions) and the "values"/"vision" lines (derived from the
   verbatim mission statement).

## Placeholders (owner must fill / confirm before going live)

- Leadership: all 3 items. Rotaract "Chief Sergeant at Arms" — the role is
  real (v3 carousel caption) but its link to Rotaract Club is inferred from
  gallery context, not stated; no dates. Volunteers for Bangladesh and
  Medhabikash Library — names only from the master prompt; no position,
  dates or description verified.
- Concepts: Sonet English Academy, JobMatch Bangladesh — name + "Concept"
  status only; objectives/tools empty. SkillVerse By Sonet — name only, **no
  URL** (never invent one).
- Certifications: 6 empty slots (`title: ""`, `kind: "placeholder"`).
- LinkedIn: `url: null`, `placeholder: true` — no URL on record.
- Achievements: all dates `null` — render without dates.
- Earlier schooling: `education.timelineNote` records that no school names
  or years are verified.
- IELTS issuer: left `null` — the original site does not name one.

## Deviations / conflicts flagged for the implementation agent

1. **Solaiman Lipi, NOT Noto Sans Bengali.** Bangla renders in Solaiman Lipi
   (bundled at `public/fonts/SolaimanLipi.woff`). The new build must keep
   that font for Bangla. (The brief's font line — Manrope headings + Inter
   body — conflicts with v3/DESIGN_BRIEF's Playfair Display headings +
   Manrope body; the content layer takes no position, but the font decision
   must be settled before build, and Solaiman Lipi stays for Bangla either way.)
2. **Conflicting counts on the original site (kept as printed, flagged).**
   Snapshot says "13+ Certifications" and "10+ Community Events", but the
   education stats say "5+ Certifications", achievements say "17+
   Certifications" and "30+ Events", volunteering says "117+ Social
   Activities". All are carried verbatim in their own sections; the owner
   should reconcile which numbers are canonical.
3. **"3 Languages" stat vs 6 languages listed.** v3's education stat is 3
   (Bangla/English/Hindi as working languages); the languages section lists
   6 including reading-level Arabic/Urdu/Korean. Both kept as printed.
4. **Name spelling:** "Md. Sonet Mia" (with period) used throughout the
   content layer, matching the original site's headline spelling.
5. **No emoji anywhere** in either content file (the v3 footer copyright
   "Made with ♥" keeps the ♥ character from the original site — it is a
   text symbol, not an emoji; the implementation agent may drop it).

## Open questions for the owner

1. Confirm IELTS Overall Band 6.0 (was 6.5 in v3) and the "Next Target 7.5".
2. Confirm/complete the 3 leadership entries (positions, dates, orgs).
3. Supply SkillVerse By Sonet's real YouTube URL (or confirm it stays unlinked).
4. Fill the 6 certification placeholder slots, or confirm the gallery shows
   only IELTS + the two aggregate counts.
5. Supply LinkedIn URL, or confirm it stays hidden.
6. Confirm the What I Do descriptions (assembled, see § "dropped/changed" 7).
7. Reconcile the conflicting certification/event counts (item 2 above).
8. Confirm the canonical email: mia01 (used here) vs mia2 (privacy/terms).
9. Confirm/complete the 3 concept projects (descriptions, objectives, tools).
10. Earlier schooling: add school names + years, or leave the timeline
    starting at the BA.
