# DESIGN BRIEF — Md Sonet Mia Personal Portfolio (mdsonetmia.vercel.app)

**Project:** Rebuild of the personal portfolio website `mdsonetmia.vercel.app` as a new Next.js site.
**Audience for this brief:** the build agent. Follow this brief exactly. Where this brief and a cited skill disagree, this brief wins (it encodes the user's non-negotiable brand anchor).
**Sources:** `landing-page-design` (primary) · `hallmark` v2.0.0 (anti-slop) · `ui-ux-pro-max` v2.15.0 (portfolio UX) · `redesign-existing-projects` (content carry-over).
**Site copy:** ENGLISH throughout. **Tone:** elegant, editorial, personal — a teacher, actor, writer and AI creator, not a SaaS product.
**Layout type (landing-page-design A3):** Type B — Long-form story. A 20-section personal portfolio must educate and build trust over a long scroll; it is not a one-offer conversion page. One primary action only: **Book a Session** (hero CTA + final CTA, identical).

---

## 1. Brand anchor (non-negotiable)

The user's own palette, same as his Sweet Smart Calendar site. Elegant personal-portfolio feel. Cream & Champagne Gold light theme by default; Charcoal & Gold dark theme via toggle.

### 1.1 Colour tokens — declare ALL of these in `:root` (light) and `[data-theme="dark"]` (dark). No literal colour or `font-family` may appear past the token block (hallmark Floor rule 1).

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#FBF7F0` | `#151311` | Page background |
| `--surface` | `#FFFDF9` | `#1D1A17` | Cards, panels |
| `--surface-2` | `#F3EBDC` | `#26211C` | Raised / inset surfaces, alt section band |
| `--ink` | `#211A12` | `#F2EAD9` | Headings, primary text |
| `--body` | `#4A4237` | `#CFC3AF` | Body copy |
| `--muted` | `#7A6E5D` | `#9C8F7C` | Captions, metadata, helper text |
| `--gold` | `#A66A19` | `#D9A044` | THE one accent — buttons, links, rules, active states |
| `--gold-hover` | `#8F5A14` | `#E5B45C` | Primary button hover |
| `--gold-soft` | `#F0E2C8` | `#33291A` | Gold tinted fills, chips, icon tiles |
| `--border` | `#E3D6BE` | `#3A322A` | Card borders, dividers (full border only, never one-sided) |
| `--ring` | `#A66A19` | `#D9A044` | Focus ring colour |
| `--shadow` | `rgba(66, 48, 20, 0.12)` | `rgba(0, 0, 0, 0.45)` | Shadow tint — tinted toward the background hue, never pure black at low opacity on light |

**Rules**
- ONE accent colour: gold. No second accent, no purple/blue gradient anywhere (hallmark Floor rule 11; redesign audit: the purple-blue "AI gradient" is the single most common AI fingerprint).
- Backgrounds are FLAT. No linear, radial or mesh background gradients on any surface. The ONLY permitted gradient is on hero heading text (see §4).
- Warm greys only, consistently tinted. Never mix warm and cool greys. Never substitute `#0a0a0a` / `#121212` / tinted navy for dark surfaces.
- Light/dark toggle: a dropdown or settings entry with system-preference detection — NOT a sun/moon switch (redesign audit).
- Contrast: body text on background must be ≥ 4.5:1 in both themes (ui-ux-pro-max pre-delivery checklist). Gold `#A66A19` on `#FBF7F0` passes for large text and buttons; never set small body copy in gold.

### 1.2 Signature device (hallmark "Signature")

A thin gold rule (2px, `--gold`, 64px wide) sits above every section heading, left-aligned, and a large gold serif initial or oversized section number (e.g. "01") in the section gutter. This is the one repeated visual signature a visitor remembers. No other decorative device is repeated page-wide.

---

## 2. Typography

### 2.1 Fonts (explicit deviation from the skills, ordered by the user)

The skills say "one typeface, never Inter/Roboto, Geist/Manrope/Poppins". The brand anchor explicitly requires **serif headlines**, which overrides that rule (the skills themselves say the user's prompt wins). Approved pairing — exactly two families, no more:

- **Display / headings:** `Playfair Display` via `next/font/google` (weights 500, 600, 700). Fallback stack: `Georgia, 'Times New Roman', serif`.
- **Body / UI / labels:** `Manrope` via `next/font/google` (weights 400, 500, 600, 700). Fallback stack: `system-ui, -apple-system, 'Segoe UI', sans-serif`.
- Never load fonts from a CDN `<link>`; use `next/font/google` only, so the build cannot fail on a font download.
- **Never italic** anywhere in the interface, including headings (landing-page-design B1; hallmark Floor rule 3: never one italic word inside a roman heading).
- **Never ultra-bold (800/900).** Cap at 700 (bold). Use 500 (medium) and 600 (semibold) for hierarchy — do not use only 400 and 700.
- Negative tracking on large headings, slight positive tracking only on small labels — and only within the line height the matched scale step already provides.
- Headings: `text-wrap: balance`. Body copy: `text-wrap: pretty`. No orphaned words. No hyphens (`-`) inside headings, body copy or labels — rewrite the phrase instead.
- **Sentence case** for all headings and buttons. No Title Case, no ALL-CAPS subheaders.
- Numbers in data-heavy places (stats, skill bars): `font-variant-numeric: tabular-nums`.

### 2.2 Type scale — Tailwind default scale ONLY. Snap any off-scale size to the closest step BELOW, taking its paired line height. Never use arbitrary values (`text-[19px]`, `font-size: 22px`).

| Class | Size / line height |
|---|---|
| `text-xs` | 12 / 16 |
| `text-sm` | 14 / 20 |
| `text-base` | 16 / 24 |
| `text-lg` | 18 / 28 |
| `text-xl` | 20 / 28 |
| `text-2xl` | 24 / 32 |
| `text-3xl` | 30 / 36 |
| `text-4xl` | 36 / 40 |
| `text-5xl` | 48 / 1 |
| `text-6xl` | 60 / 1 |

### 2.3 Named text styles — define each ONCE as a reusable class/token in kebab-case and apply that; never repeat size + weight utilities per element.

| Style | Scale | Weight | Use |
|---|---|---|---|
| `heading-1` | `text-6xl` (mobile: `text-5xl`) | 600 | Hero headline only |
| `heading-2` | `text-4xl` (mobile: `text-3xl`) | 600 | Section headings |
| `heading-3` | `text-2xl` | 600 | Sub-section headings, project card titles |
| `heading-4` | `text-xl` | 600 | Small group headings |
| `title-1` | `text-lg` | 500 | Card titles, list item titles |
| `title-2` | `text-base` | 500 | Labels that lead a block, nav items |
| `body-1` | `text-base` | 600 | Lead paragraph, emphasized body |
| `body-2` | `text-base` | 500 | Standard body |
| `body-3` | `text-base` | 400 | Long-form body |
| `body-4` | `text-sm` | 500 | Secondary text |
| `button-md` | `text-base` | 600 | Main buttons |
| `button-sm` | `text-sm` | 600 | Header buttons, small CTAs |
| `caption-1` | `text-sm` | 500 | Metadata, helper text |
| `caption-2` | `text-xs` | 500 | Badges, tags, timestamps, fine print |

Body copy is 16px minimum. Paragraph measure capped at ~65 characters (about 680px max width for hero heading + subheading, per B5).

---

## 3. Spacing, radius, borders, shadows

### 3.1 Spacing — ONLY these values (px): `0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96`.

- Section vertical padding: `96px` desktop / `64px` mobile. Section gap rhythm: `48px` between heading block and content, `24px` between cards in a grid, `16px` between stacked list items.
- Container: max-width `1200px`, centred, `24px` side padding on mobile, `32px` on desktop. At 1920px the gutters grow; the measure and grids do not (hallmark Floor rule 14).
- Main buttons: `8px` vertical, `12px` horizontal padding — then add height via the type scale, do not invent padding.
- Bottom padding of a section is usually slightly MORE than top padding (optical adjustment).

### 3.2 Corner radius — Tailwind values only.

- Cards: `rounded-2xl` (16px). Inner elements inside a card: `rounded-lg` (8px) when the gap is 8px — nested formula: `inner radius = outer radius − gap`, applied only when the result is greater than 2, and only when the gap is under 32px.
- Buttons: `rounded-full` (pill) for primary CTAs; `rounded-lg` for small/secondary controls. One radius per nesting level, consistently.
- Portrait/photo frames: `rounded-2xl`. Small chips/tags: `rounded-md` (6px) — NOT pill-shaped "New/Beta" badges; use square-ish tags or plain text labels (redesign audit).

### 3.3 Borders and shadows

- Borders go ALL the way around a card or not at all. Never a border on one side only.
- Card shadow: one soft shadow using the `--shadow` token, implying a single light source (top-left). Do not stack multiple competing shadows.
- Cards should exist only where elevation communicates hierarchy. Where a section reads better flat, use background colour alone (`--surface-2` band) or spacing alone — no border + shadow + white-background "generic card" on everything (redesign audit).
- Flat surfaces with zero texture: add a subtle grain/noise overlay at very low opacity. Never solve flatness with a gradient.

---

## 4. Hero

- **Layout:** left-aligned editorial hero, NOT centred-symmetric. Headline left, portrait on the right (asymmetric 7/5 grid on desktop; stacked on mobile, portrait AFTER the headline + CTA, never before).
- **Headline:** `heading-1`, serif, max 7 words / ~50 characters, one idea. Example shape (carry the real headline from the existing site; do not invent a new claim): "Teacher, actor, writer — building with AI." Line breaks only where the thought breaks, never mid-phrase.
- **Hero heading colour:** the ONE permitted gradient, text only, left to right — light theme `#211A12 → #A66A19` (ink into gold); dark theme `#F2EAD9 → #D9A044`. Never a background gradient.
- **Subheadline:** one sentence, ≤ 12 words, `body-1`, max width 680px. States who he is and who the site is for.
- **Primary CTA:** gold button "Book a session" (verb + what they get). ONE primary CTA above the fold — no competing buttons. Secondary: ghost/steel text link "See my projects ↓" (scrolls to My Projects).
- **Proof signal directly under the CTA:** one short line of real, sourced proof (e.g. years teaching, student count, or channel subscribers — ONLY numbers already on the existing site; if unverified, use `{{proof-stat}}` placeholder, never invent).
- **Hero must fit:** headline + one sentence + primary action visible at 1280×800 without scrolling (hallmark Floor rule 12).
- **Portrait:** real photo of Sonet only. If no photo is supplied, use a clearly marked empty slot (`{{portrait-photo}}`), never a stock "diverse team" photo and never an illustration.
- **Word budget:** the hero's text is the headline, one sentence and its actions — about 80 words max per screen (hallmark Floor rule 13).

---

## 5. Navigation and footer

- **Nav:** floating pill bar, centred, sized to its content, offset from the top edge (not welded flush), translucent surface + backdrop blur so page content shows faintly behind it. Wordmark "Md Sonet Mia" (serif) left, links centre, "Book a session" small gold button right.
- **Nav links (sentence case, body face, one step smaller, untracked — never tracked capitals, never an eyebrow label):** About · Teaching · Writing · Projects · AI Creator · Gallery · Contact. Current section indicated distinctly (gold text + gold underline).
- **Mobile menu:** full-height panel, theme base surface at high opacity + strong blur. Links arrive one after another in reading order, each rising 24px while fading in, 60ms stagger, total sequence capped at 400ms. The menu toggle icon morphs between open/close states (animated, never an instant swap).
- **Footer:** simple, not a four-column link farm. Wordmark, one line of bio, main paths (About, Projects, Contact), legal links (Privacy policy, Terms — required), social links (YouTube, Facebook, WhatsApp), copyright line. Credit any library photos here if used.

---

## 6. Motion

- **Base curve (every transition):** `cubic-bezier(0.22, 1, 0.36, 1)`. `duration-500` for layout/position, `duration-300` for colour/opacity, never shorter than 200ms. **Never `transition: all`. Never browser defaults (`ease`, `linear`, `ease-in-out`).**
- Animate ONLY `transform` and `opacity`. Never animate `width`, `height`, `top`, `left`.
- **Scroll reveals:** sections rise 32px and fade 0 → 100% opacity over 600–800ms on the base curve, once only (do not replay on scroll back up). Trigger with `IntersectionObserver` (or Framer Motion `whileInView`). Never an unthrottled `window.addEventListener('scroll')`.
- **Tagline reveal (mandatory, landing-page-design B11):** one large-type section placed after the hero (before About Me) stating the core idea in two or more lines, e.g. a line about teaching, creating and earning in English/Bangla. `heading-2` to `heading-1` size, max width 680px. Words start at ~30% opacity of base text colour and transition individually to full colour in reading order as they cross the scroll trigger line, on the base curve. Under `prefers-reduced-motion`, show final text at full colour immediately.
- **Reduced motion:** every animation has a `prefers-reduced-motion: reduce` fallback — movement becomes a plain opacity change. Content must be visible with scripting off.
- **Hover:** background shift, slight scale or translate. **Active/pressed:** `scale(0.98)` or `translateY(1px)`. **Focus:** visible `:focus-visible` ring in `--ring` colour, appearing instantly, on EVERY interactive element. **Loading:** skeleton loaders shaped like the real layout, never circular spinners. **Empty:** a composed "getting started" view, never a blank panel. **Error:** inline and specific, never `window.alert()`.

---

## 7. Components

- **Buttons — exactly two styles, used consistently:**
  - **Primary (gold):** `bg --gold`, ink-on-gold text `#FFFDF9` (light) / `#211A12` (dark), `button-md`, `rounded-full`, padding 8px/12px. Hover: `--gold-hover`. Active: `scale(0.98)`.
  - **Secondary (ghost/steel):** transparent background, `1px` solid `--border`, `--ink` text, `button-md`, `rounded-full`. Hover: background `--surface-2`. A plain text link (gold, underline on hover) is the tertiary style — use it instead of adding a third button.
  - Never "Learn more" or "Submit". CTA copy is verb + what they get: "Book a session", "Watch the podcast", "Visit Sweet Smart Calendar".
- **Cards:** `--surface` background, full `1px` `--border`, `rounded-2xl`, `24px` padding. Card titles `title-1`, body `body-4`. In a card group, CTAs are pinned to the bottom so they form one clean horizontal line. Variable heights allowed; do not force equal height with flexbox.
- **Chips/tags (skills, languages, topics):** `--gold-soft` background, `--ink` text, `caption-2`, `rounded-md`, `8px` horizontal / `4px` vertical padding. Collections wrap; if truncated, use an operable "+n" disclosure with the full value reachable by keyboard, pointer and touch. Badge meaning must never rely on colour alone.
- **Icons:** Phosphor ONLY (one set, one stroke weight, 1.5px). Never Lucide, Feather, Material Icons/Symbols, and never emoji as icons. Replace cliché metaphors (rocketship for "launch", shield for "security") with specific ones (bolt, spark, book-open, microphone, clapperboard).
- **Images:** every meaningful image gets descriptive alt text (never `alt="image"`). Image-bearing grid tracks use `minmax(0, 1fr)`; display headings get `overflow-wrap: break-word; min-width: 0`.
- **Forms (Book a Session / Contact):** client-side validation for email format and required fields; calm, specific confirmations ("Session request sent to Sonet") and errors that name what failed and what to do next ("That email doesn't look right. Check it and try again."). No exclamation marks, no cute interjections. No dead links — a button pointing at `#` is either linked or visually disabled.
- **FAQ pattern:** the site has no FAQ section in the brief; if one is added later, use a side-by-side list or inline progressive disclosure, NOT an accordion stack of chevrons (redesign audit).

---

## 8. Section-by-section layout

**Global section pattern (applies to every section below):** gold rule (64px × 2px) + small section label in `caption-1` sentence case (e.g. "About me" — NOT tracked capitals, NOT an eyebrow) + `heading-2` serif heading, all left-aligned. Content below. Alternate flat `--bg` and `--surface-2` bands for rhythm; never drop a random dark section into the light page (and vice versa). Break symmetry deliberately: left-aligned headers over offset content, mixed aspect ratios, zig-zag two-column rows — never three equal centred card columns as the default row (the most generic AI layout).

**Content carry-over (redesign skill):** this is a REBUILD, not a new site. Every fact, date, name and number must be carried from the existing site `mdsonetmia.vercel.app` (or from the user's supplied content). Diagnose first: read the live site, list what exists, and keep it. Do NOT rewrite from scratch, do NOT drop sections, do NOT change facts. Where a fact is missing, use a clearly marked `{{placeholder}}` — never invent a stat, testimonial, logo, price or quote. Fix priority: (1) font swap, (2) colour/surface cleanup, (3) hover/active/focus states, (4) layout/spacing, (5) motion pass, (6) replace generic components, (7) loading/empty/error states, (8) copy pass (cut clichés, add specificity), (9) type-scale polish.

### 8.1 Hero
Per §4. Left-aligned, 7/5 grid, portrait right, one gold CTA + one text link, one proof line.

### 8.2 Tagline reveal
Per §6. Mandatory large-type moment after the hero, before About Me. Two or more lines, word-by-word colour reveal on scroll.

### 8.3 About Me
Two-column editorial: portrait left (4/12, `rounded-2xl`), narrative right (7/12, offset by one column). `body-2` paragraphs, max ~65 characters measure. End with three quick facts in a row (role, base, focus) as plain text with gold numerals — only real facts from the existing site. No card-inside-a-card.

### 8.4 Education
Vertical timeline, left-aligned, gold spine line with gold dots at each entry (no decorative status dots elsewhere — the timeline spine is the one permitted use). Each entry: degree/institution in `title-1`, dates in `caption-1`, one line of detail in `body-4`. Latest first. BA (Honours) in English and earlier schooling exactly as on the existing site.

### 8.5 Teaching Services
Asymmetric two-column zig-zag (NOT three equal cards): each service row alternates text/image or text/icon-tile sides. Each service: icon tile (`--gold-soft`, Phosphor icon, 48px), `title-1`, one outcome-driven line in `body-4` (benefit first — what the student gets, not just what it is), and a text link "Book a session →" (arrow is part of the link label here, not glued decoration). Services carried from the existing site (English teaching, coaching, etc.).

### 8.6 Acting & Theatre
Photo-led section: one large production still (real photo, credited) left, text right. Roles/productions as a simple list with year + role + production in `body-4`, separated by hairline dividers — not cards. If no photos exist, the section is type-led with a large serif pull-quote from a real review or the actor's own line (sourced, never invented).

### 8.7 Writing & Author
Editorial "index-first" layout: a clean list of books/writings, each row with title (serif `title-1`), year, one-line description, and a text link. No cover-image grid unless real covers are supplied. One featured work gets a larger treatment (cover left, description right) only if a real cover image exists.

### 8.8 Achievements
Number-led but honest: real numbers only, each with its source context in `caption-1` beside it (proof sits next to the claim). Numbers drawn as plain serif figures in gold — a number drawn as marks is a device, not a signature. Vary the figures; never suspiciously round invented numbers. If a number is unverified, omit it or use `{{stat}}`.

### 8.9 Volunteering
Simple chronological list with organisation, role, dates and one outcome line each. Same timeline treatment as Education but without the spine — hairline dividers only, so the two timelines do not look identical.

### 8.10 Applications
A row of app/tool entries the user has built or uses — each a compact horizontal card: small icon tile, name (`title-1`), one-line purpose (`body-4`), text link. Keep to the existing site's list; do not add apps he has not named.

### 8.11 Hobbies & Sports
Light, personal section: chip/tag cloud (per §7 chips) plus two or three short `body-2` lines. No photos required; if photos exist, a masonry strip of 3 images with varied aspect ratios (not a uniform grid). Keep it short — this section breathes.

### 8.12 Projects — Think & Spark podcast
Feature treatment: cover art left (real art only, else a typographic tile in `--surface-2` with the show name in serif — no drawn illustration), description right, episode list below as clean rows (episode number, title, duration, text link). One primary action: "Listen to the latest episode".

### 8.13 AI Creator
Two-column: statement + capability list left; a small gallery of 2–3 real AI-created stills right (real work only, captioned). Capabilities as outcome-driven bullets: bold benefit, then detail (e.g. "**Faster iteration** — three layout variants in one click"). No purple/blue gradients, no "AI" cliché visuals.

### 8.14 Adobe Stock
Proof-first section: real contributor stats (only sourced numbers), a strip of 3–4 real portfolio thumbnails (his own work, linked to his Adobe Stock portfolio), and a text link "View my Adobe Stock portfolio". No invented download counts.

### 8.15 Digital Skills
Skill groups (not one long list): group by area (e.g. content, AI tools, design, teaching tech), each group a `heading-4` + chip row. No percentage bars with invented precision — if proficiency is shown, use plain words (Fluent / Working / Learning) as chips, never fake 87% bars.

### 8.16 Language Proficiency
Compact table-like list: language, level chip, one-line context (e.g. "Bengali — native", "English — fluent, BA Honours"). Level words only from the existing site or the user; do not upgrade a level.

### 8.17 Personal Reflections
Editorial long-form moment: one or two short reflections in large serif `body-1` with generous leading, set as a centred narrow column (max 680px) — the ONE centred text block on the page (every other heading group is left-aligned, per hallmark's rule that centred heading groups must never outnumber left-aligned ones). A gold rule above and below. No stock imagery.

### 8.18 Book a Session
The conversion section (primary action, repeated from hero, identical copy). Two-column: left, what a session is + what they get (3 outcome bullets) + reassurance line (no payment taken on the site / reply time — only if true, else `{{reassurance}}`); right, the booking form (name, WhatsApp/email, session type, message) with full validation states per §7. On mobile the form comes first, benefits below it.

### 8.19 Contact
Simple and direct: large serif email address, WhatsApp number, social links (YouTube, Facebook) as text links with Phosphor icons. No form here (the form lives in Book a Session). One line: preferred contact method and expected reply time, only if sourced.

### 8.20 Gallery
Masonry grid (variable heights, mixed aspect ratios — never uniform equal cards): real photos only, each with a `caption-1` caption and alt text. Maximum 9 images on first view; further images behind a "Show more" disclosure. No stock photos, no drawn illustrations, no empty washes.

### 8.21 My Projects (NEW section)
Four project cards — **Sweet Smart Calendar, PromptEx, Sweet CGI Lab, SiteIncome Lab** — in an asymmetric layout: first card large (spans 2 columns), remaining three in a row below (NOT four equal columns, NOT three equal columns). Each card: project name (serif `heading-3`), one-line outcome (what it does for its users, benefit first), 2–3 tags, and TWO links: "Visit site" (gold text link) and "Case study" only if a case-study page exists (else omit the link entirely — no dead links). Card content facts (URLs, descriptions) must match the real projects; if a URL is unverified, use `{{url}}`. Pin each card's CTA to the bottom so all four CTAs form one clean line.

---

## 9. Page order

Hero → Tagline reveal → About Me → My Projects → Education → Teaching Services → Book a Session (first appearance, compact) → Acting & Theatre → Writing & Author → Achievements → Volunteering → Applications → Projects: Think & Spark podcast → AI Creator → Adobe Stock → Digital Skills → Language Proficiency → Personal Reflections → Hobbies & Sports → Gallery → Book a Session (full form) → Contact → Footer.

Rationale: My Projects moves up (it is the strongest proof and the visitor's likely goal); Book a Session appears twice (compact mid-page, full at the end) with identical copy; Contact closes the page. Section order in the nav mirrors this order.

---

## 10. Mobile-first (the user checks on his real phone)

- Design mobile FIRST, then scale up. Check at **390px**: no horizontal overflow (`overflow-x: clip` on `html` and `body` — never `hidden`, never `100vw`), buttons keep their text inside, primary action visible in the first screen.
- Also verify at 375px, 768px, 1024px, 1440px (ui-ux-pro-max checklist).
- All grids collapse to a single column below 768px. The hero portrait goes BELOW the CTA. Timeline spine stays left with 16px gutter. Card CTAs stay bottom-pinned.
- Touch targets ≥ 44px. Tap targets never closer than 8px apart.
- Text must reflow without clipping at narrow widths, browser zoom, text scaling and user spacing overrides. Long URLs and identifiers may wrap safely.
- Use `min-height: 100dvh`, never `height: 100vh` (iOS Safari jump).
- `scroll-behavior: smooth` for anchor navigation. A skip-to-content link for keyboard users.
- Test the real phone flow: nav opens full-height, form validates inline, theme toggle works, no horizontal scroll anywhere.

---

## 11. Ship requirements (non-negotiable checklist)

- `<title>`, meta description, `og:image`, social sharing tags. Branded favicon (gold "S" mark).
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`. Alt text on every meaningful image. Skip-to-content link.
- Privacy policy and Terms links in footer. Custom branded 404 page. Cookie consent only if the jurisdiction requires it.
- `noindex` is NOT needed — this is an evergreen personal site: index it, with FAQ-style plain Q&A only if a real FAQ is added later (with FAQ schema).
- `prefers-reduced-motion` respected everywhere. `:focus-visible` on every interactive element.
- No dead links. Current nav item indicated. A way back from every page.
- Build must pass with no font download at build time (`next/font/google` bundles fonts locally).

---

## 12. DO NOT — generic AI-slop patterns (hallmark + redesign audit)

1. **No purple-to-blue (or any) background gradients.** Flat backgrounds only; gradient on hero heading text only.
2. **No three equal centred card columns** as the default feature row. Use zig-zag, asymmetric grids, masonry, or offset layouts.
3. **No Inter / Roboto / Arial / Open Sans / Helvetica.** No browser-default fonts. No italic type. No weights above 700.
4. **No tracked-capital eyebrow labels** ("ABOUT ME" in letterspaced caps). Labels are body face, one step smaller, sentence case, untracked.
5. **No middle-dot-joined meta strings** ("2024 · Dhaka · 5 min"), no arrows glued to link text as decoration, no decorative status dots.
6. **No emoji as icons.** Phosphor SVG only, one stroke weight.
7. **No card-inside-a-card, no hand-drawn browser/OS window mockups, no drawn illustrations** in place of real photos.
8. **No invented metrics, testimonials, logo walls, case-study counts, prices or quotes.** Missing facts use `{{placeholder}}` and are flagged, never filled in.
9. **No banned filler words:** "revolutionize", "supercharge", "cutting edge", "effortless", "transform your workflow", "take it to the next level", "harness the power", "world class". No vague verbs ("streamline", "optimize") — write specific outcomes instead.
10. **No hyphens inside copy, no orphaned words, no Title Case headings, no all-caps subheaders.**
11. **No `transition: all`, no `ease`/`linear`/`ease-in-out`, no animating `width`/`height`/`top`/`left`.** Base curve only, `transform` + `opacity` only.
12. **No single-sided card borders, no generic border+shadow+white card on everything, no Lucide/Feather/Material icons, no rocketship/shield clichés.**
13. **No `height: 100vh`, no `100vw`, no `overflow-x: hidden`, no arbitrary `z-index: 9999`, no unthrottled scroll listeners, no circular loading spinners, no `window.alert()`.**
14. **No centred-everything symmetry.** Left-aligned editorial layout; at most one centred text block (Personal Reflections) on the whole page.
15. **No placeholder Latin, no "Your headline here", no stock "diverse team" photos, no repeated face for two people, no suspiciously round numbers.**

---

## 13. Sources and conflicts, recorded

- **Landing-page-design** is primary for structure, copy rules, type scale, spacing, radius, motion and the tagline reveal. Its "one typeface" and font list are overridden by §2.1 (user's serif-headline brand anchor wins, per the skill's own conflict rule).
- **Hallmark** supplies the Floor (tokens, no italics, no eyebrow, hero fits 1280×800, ~80 words/screen, one idea per screen). Its "6–9 sections" guidance is waived for this long-form portfolio: sections are grouped into chapters with the sticky nav as the wayfinding device; the waiver is recorded here, not hidden.
- **UI/UX Pro Max** supplies the portfolio-category reasoning (elegant serif pairing, hero-centric + proof pattern, pre-delivery checklist: contrast 4.5:1, focus states, responsive at 375/768/1024/1440, resilient text reflow, chip disclosure, cancellable interactions).
- **Redesign-existing-projects** supplies the carry-over discipline: diagnose the existing site first, keep its content and facts, fix in priority order, never invent a design value outside this brief — ask instead.
