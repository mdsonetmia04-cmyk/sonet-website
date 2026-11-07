import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://mdsonetmia.vercel.app"),
  title: "Md Sonet Mia — Writer, Educator, AI Creator",
  description:
    "Md Sonet Mia is an English graduate, educator, writer and digital creator from Tangail, Bangladesh, blending teaching, creativity and AI tools to build educational content and digital ideas.",
  keywords: [
    "Md Sonet Mia",
    "English teacher Tangail",
    "AI creator Bangladesh",
    "Sweet Smart Calendar",
    "PromptEx",
    "Sweet CGI Lab",
    "SiteIncome Lab",
  ],
  authors: [{ name: "Md Sonet Mia" }],
  openGraph: {
    title: "Md Sonet Mia — Writer, Educator, AI Creator",
    description:
      "An English graduate, educator, writer and digital creator from Tangail, Bangladesh.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/speaking-stage.jpg", width: 1920, height: 1279, alt: "Md Sonet Mia speaking on stage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sonet Mia — Writer, Educator, AI Creator",
    description:
      "An English graduate, educator, writer and digital creator from Tangail, Bangladesh.",
    images: ["/images/speaking-stage.jpg"],
  },
  icons: { icon: "/favicon.svg" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('sonet-theme');if(!t||t==='system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

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
        {children}
      </body>
    </html>
  );
}
