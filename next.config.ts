import type { NextConfig } from "next";
import { isGitHubPages } from "./lib/site";

// Static export so the site can be hosted on GitHub Pages (and
// anywhere else that serves static files). Notes:
// - GitHub Pages serves this repo under /sonet-website, so the Pages
//   build (GITHUB_PAGES=true, set by the deploy workflow) uses that
//   basePath. The Vercel deployment has no basePath and is unaffected.
// - next/image optimisation needs a server, so the static build uses a
//   custom loader (lib/image-loader.ts) that prefixes the basePath onto
//   local image URLs. Do NOT set `unoptimized: true` — it skips the
//   loader entirely, which is what broke every picture on Pages
//   (src stayed /images/... instead of /sonet-website/images/...).
// - Server redirects are not supported in a static export: the two
//   old project slugs redirect via static pages instead
//   (app/projects/prompt-ex and app/projects/skillverse).
// - When a custom domain is bought, build without GITHUB_PAGES and
//   point NEXT_PUBLIC_SITE_URL at the domain.
const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPages ? { basePath: "/sonet-website" } : {}),
  images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
};

export default nextConfig;
