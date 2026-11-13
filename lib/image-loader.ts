import { basePath } from "./site";

// Custom image loader for the static export.
//
// With `images.unoptimized` Next.js returns every <Image> src unchanged,
// so on GitHub Pages the pictures pointed at /images/... instead of
// /sonet-website/images/... and all 404'd. This loader prefixes the
// basePath ("/sonet-website" on Pages, "" on Vercel) onto every local
// image URL, including the srcSet variants Next.js generates. External
// and data URLs pass through untouched.
export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }
  return `${basePath}${src}`;
}
