import type { Metadata } from "next";
import { content } from "@/lib/content";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { canonical: "https://sonet-website.vercel.app/" },
};

export default function Home() {
  return <HomePage />;
}
