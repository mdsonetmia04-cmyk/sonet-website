import type { Metadata } from "next";
import { strings } from "@/i18n/strings";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: strings["terms.metaTitle"].en,
  description: strings["terms.metaDescription"].en,
};

export default function Terms() {
  return (
    <>
      <Nav />
      <TermsContent />
      <Footer />
    </>
  );
}
