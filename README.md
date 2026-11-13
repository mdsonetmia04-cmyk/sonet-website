# Sonet — Personal Portfolio

Personal portfolio website of **Md Sonet Mia** — educator, community
leader and digital innovator from Tangail, Bangladesh. Built with
Next.js 15, TypeScript and Tailwind CSS v4.

## Live sites

- **GitHub Pages:** https://mdsonetmia04-cmyk.github.io/sonet-website/
- **Vercel:** https://sonet-website.vercel.app/

## What's inside

- 13 pages: Home, About, Experience, Education, Leadership, Skills,
  Projects (with detail pages), Achievements, Certifications,
  Publications (Books & Drafts), Contact, Privacy, Terms
- Full Bangla / English switch (SolaimanLipi, self-hosted) and
  Warm Editorial / Original themes with light / dark / system modes
- Contact and session-booking forms — no email service; the forms
  build a WhatsApp deep link in the browser
- SEO: sitemap, robots, Open Graph, Twitter cards and Person JSON-LD
- Downloadable CV (`public/cv/Md-Sonet-Mia-CV.pdf`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export into out/
```

The build is a static export (`output: "export"` in
`next.config.ts`), so it runs anywhere that serves static files.

## Deploy

Pushing to `main` deploys automatically to GitHub Pages via
`.github/workflows/deploy-pages.yml` (builds with
`GITHUB_PAGES=true`, so the site lives under `/sonet-website`).
The same code also deploys to Vercel, where it runs at the domain
root with no base path.

## Custom domain (for later)

1. Buy the domain and add it in the repo's **Settings → Pages →
   Custom domain** (GitHub creates the `CNAME` file for you), then
   point the domain's DNS at GitHub Pages.
2. In `.github/workflows/deploy-pages.yml`, set
   `NEXT_PUBLIC_SITE_URL` to the new domain (e.g.
   `https://mdsonetmia.com`) and remove `GITHUB_PAGES: "true"` so
   the next build drops the `/sonet-website` base path.
3. Push — the site moves to the new domain with the same content.
