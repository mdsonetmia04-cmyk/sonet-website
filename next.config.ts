import type { NextConfig } from "next";
import { isGitHubPages } from "./lib/site";

// Static export so the site can be hosted on GitHub Pages (and
// anywhere else that serves static files). Notes:
// - GitHub Pages serves this repo under /sonet-website, so the Pages
//   build (GITHUB_PAGES=true, set by the deploy workflow) uses that
//   basePath. The Vercel deployment has no basePath and is unaffected.
// - next/image optimisation needs a server, so images are served
//   unoptimised in the static build.
// - Server redirects are not supported in a static export: the two
//   old project slugs redirect via static pages instead
//   (app/projects/prompt-ex and app/projects/skillverse).
// - When a custom domain is bought, build without GITHUB_PAGES and
//   point NEXT_PUBLIC_SITE_URL at the domain.
const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPages ? { basePath: "/sonet-website" } : {}),
  images: { unoptimized: true },
};

export default nextConfig;
