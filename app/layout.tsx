import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Enby Gertrude (Valentin Chauveau and Léna Salabert-Triby, CUTE licence): headings, work titles
 * and the name in text form. A single style, used unmodified and not subset so the post-binary
 * ligatures are kept (see app/fonts/enby-gertrude/README.md).
 */
const enbyGertrude = localFont({
  src: "./fonts/enby-gertrude/Enby_Gertrude_roman.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-enby-gertrude",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  // Real italics for the work titles set in _underscores_ inside body text (RichText).
  style: ["normal", "italic"],
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
    <html lang="en" className={`${enbyGertrude.variable} ${workSans.variable}`}>
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