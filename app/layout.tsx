import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { content } from "@/lib/content";
import { AppearanceProvider } from "@/providers/AppearanceProvider";
import { LanguageProvider } from "@/i18n/LanguageContext";

// Self-hosted variable fonts (public/fonts/*.woff2, latin subset) —
// same families and weights as before, but the build no longer fetches
// from Google Fonts: the next/font/google loader crashed the Vercel
// build twice (v6.2 Turbopack + v6.2.1 webpack) while parsing the
// fetched CSS. CSS variables are unchanged, so no other file changes.
const manrope = localFont({
  src: "../public/fonts/manrope.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

// Serif branding face for the Warm Editorial theme (styling agent keys it
// off data-theme-variant="warm-editorial"). Bangla stays SolaimanLipi.
const playfair = localFont({
  src: "../public/fonts/playfair.woff2",
  variable: "--font-playfair",
  weight: "400 900",
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

// Runs before first paint: resolves all five appearance preferences
// (migrating the legacy `sonet-theme` / `sonet-lang` keys on first load),
// resolves "system" color mode against the OS, and sets every <html>
// attribute + lang — so there is no theme/language flash on load.
// The runtime provider (AppearanceProvider) takes over live updates
// afterwards, including following OS color-scheme changes.
const themeScript = `(function(){function v(x,l){return l.indexOf(x)!==-1?x:null}function r(k){try{return localStorage.getItem(k)}catch(e){return null}}function w(k,x){try{localStorage.setItem(k,x)}catch(e){}}try{var theme=v(r('selectedTheme'),['warm-editorial','original'])||'warm-editorial';var mode=v(r('colorMode'),['system','light','dark']);if(!mode){var lm=v(r('sonet-theme'),['system','light','dark']);mode=lm||'system';if(lm)w('colorMode',lm)}var lang=v(r('language'),['en','bn']);if(!lang){var ll=v(r('sonet-lang'),['en','bn']);lang=ll||'en';if(ll)w('language',ll)}var size=v(r('textSize'),['standard','comfortable'])||'standard';var motion=v(r('motionPreference'),['standard','reduced']);var reduced=motion==='reduced'?true:motion==='standard'?false:window.matchMedia('(prefers-reduced-motion: reduce)').matches;var resolved=mode==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):mode;var el=document.documentElement;el.setAttribute('data-theme-variant',theme);el.setAttribute('data-color-mode',resolved);el.setAttribute('data-theme',resolved);el.setAttribute('data-text-size',size);el.setAttribute('data-motion',reduced?'reduced':'standard');el.setAttribute('lang',lang)}catch(e){}})();`;

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
      <body className={`${manrope.variable} ${inter.variable} ${playfair.variable} antialiased`}>
        <AppearanceProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AppearanceProvider>
      </body>
    </html>
  );
}
