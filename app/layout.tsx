import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { site } from "@/content/site";
import "./globals.css";

/**
 * BBB Baskervvol (Bye Bye Binary, CUTE licence): headings, titles and the name in text form.
 * Variable files, unmodified and not subset, so the post-binary glyphs are kept (see app/fonts/baskervvol/README.md).
 */
const baskervvol = localFont({
  src: [
    { path: "./fonts/baskervvol/BBBBaskervvolVF.woff2", weight: "400 800", style: "normal" },
    { path: "./fonts/baskervvol/BBBBaskervvolItalicVF.woff2", weight: "400 800", style: "italic" },
  ],
  variable: "--font-baskervvol",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const TITLE = `${site.name} · Transdisciplinary Artist`;
const DESCRIPTION =
  "Chilean transdisciplinary artist, actress, director and researcher working across opera, theatre and artistic research.";

/**
 * The Open Graph image is app/opengraph-image.jpg (1200×630, centre crop of the hero photo)
 * with its alt text in opengraph-image.alt.txt; Next.js adds the og:image tags from those files.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baskervvol.variable} ${workSans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="pt-(--header-height) lg:pl-70">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}