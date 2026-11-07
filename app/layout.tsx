import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { strings } from "@/i18n/strings";
import { LanguageProvider } from "@/i18n/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Metadata stays English: it is SEO/social metadata, not on-page UI copy.
// The on-page strings (including meta.*) live in i18n/strings.ts.
export const metadata: Metadata = {
  metadataBase: new URL("https://mdsonetmia.vercel.app"),
  title: strings["meta.title"].en,
  description: strings["meta.description"].en,
  keywords: strings["meta.keywords"].en.split(", "),
  authors: [{ name: "Md Sonet Mia" }],
  openGraph: {
    title: strings["meta.title"].en,
    description: strings["meta.ogDescription"].en,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/speaking-stage.jpg", width: 1920, height: 1279, alt: strings["meta.ogImageAlt"].en }],
  },
  twitter: {
    card: "summary_large_image",
    title: strings["meta.title"].en,
    description: strings["meta.ogDescription"].en,
    images: ["/images/speaking-stage.jpg"],
  },
  icons: { icon: "/favicon.svg" },
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
      </head>
      <body className={`${playfair.variable} ${manrope.variable} antialiased grain`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
