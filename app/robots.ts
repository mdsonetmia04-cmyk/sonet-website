import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

// Static export needs this route to be explicitly static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
