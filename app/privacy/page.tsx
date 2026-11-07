import type { Metadata } from "next";
import { strings } from "@/i18n/strings";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: strings["privacy.metaTitle"].en,
  description: strings["privacy.metaDescription"].en,
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <PrivacyContent />
      <Footer />
    </>
  );
}
