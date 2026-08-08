import type { Metadata } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "@/data/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { OrganizationJsonLd } from "@/components/site/JsonLd";
import { AmbientLight } from "@/components/site/AmbientLight";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Growth & Technology Agency · Ahmedabad`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "digital marketing agency Ahmedabad",
    "web development Ahmedabad",
    "SEO agency India",
    "AI automation agency",
    "branding studio",
    "13UTOPiA",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: `${site.name} — Growth, craft, and systems`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/brand/13utopia-wordmark-3d.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/brand/13utopia-wordmark-3d.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${instrument.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <OrganizationJsonLd />
        <AmbientLight />
        <SiteHeader />
        <main className="relative z-[2] flex-1 pt-16 lg:pt-20">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
