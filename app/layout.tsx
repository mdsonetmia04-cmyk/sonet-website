import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";
import { LanguageProvider } from "@/i18n/LanguageContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Metadata stays English: it is SEO/social metadata, not on-page UI copy.
// On-page strings live in lib/content.ts / i18n/bn.ts.
const siteUrl = "https://sonet-website.vercel.app";
const ogImage = "/images/hero-portrait.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords.split(", "),
  authors: [{ name: "Md. Sonet Mia" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SONET.",
    images: [{ url: ogImage, width: 1885, height: 1890, alt: content.seo.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
    images: [ogImage],
  },
  icons: { icon: "/favicon.svg" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Sonet Mia",
  url: siteUrl,
  jobTitle: "Educator",
  description: content.seo.description,
  address: { "@type": "PostalAddress", addressLocality: "Tangail", addressCountry: "BD" },
  sameAs: [
    "https://facebook.com/mdsont.mia.777",
    "https://www.youtube.com/@SweetCGILab",
    "https://github.com/mdsonetmia04-cmyk",
  ],
};

// Runs before first paint: resolves the stored theme (or the OS preference)
// and the stored language, so neither flashes on load.
const themeScript = `(function(){try{var t=localStorage.getItem('sonet-theme');if(!t||t==='system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}try{var l=localStorage.getItem('sonet-lang');if(l==='en'||l==='bn'){document.documentElement.setAttribute('lang',l);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
