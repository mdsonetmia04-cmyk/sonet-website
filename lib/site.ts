// Single source of truth for the site's public URL.
//
// - On GitHub Pages the workflow sets NEXT_PUBLIC_SITE_URL to
//   https://mdsonetmia04-cmyk.github.io/sonet-website
// - On Vercel nothing is set, so the Vercel URL stays the default.
// - When a custom domain is bought, set NEXT_PUBLIC_SITE_URL to it
//   (and remove the Pages basePath in next.config.ts) — no other
//   file needs the URL changed.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sonet-website.vercel.app";

// True only for the GitHub Pages build (set by the deploy workflow).
// The Pages site lives under /sonet-website, so the build needs a
// basePath there; the Vercel deployment stays at the domain root.
export const isGitHubPages = process.env.GITHUB_PAGES === "true";
