import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nícola Vilander Gajardo",
  description:
    "Transdisciplinary artist, actress, director and researcher working across opera, theatre and artistic research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${workSans.variable}`}>
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
      </body>
    </html>
  );
}