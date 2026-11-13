import type { MetadataRoute } from "next";
import { content } from "@/lib/content";
import { siteUrl } from "@/lib/site";

// Static export needs this route to be explicitly static.
export const dynamic = "force-static";

const base = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/experience",
    "/education",
    "/leadership",
    "/skills",
    "/projects",
    "/achievements",
    "/certifications",
    "/publications",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const entries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
  for (const p of content.projects.items) {
    entries.push({
      url: `${base}/projects/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  return entries;
}
