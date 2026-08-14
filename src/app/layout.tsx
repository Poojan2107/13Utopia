import type { Metadata } from "next";
import Script from "next/script";
import { Bodoni_Moda, Great_Vibes, Instrument_Sans, Instrument_Serif, Inter, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "@/data/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { OrganizationJsonLd } from "@/components/site/JsonLd";
import { AmbientLight } from "@/components/site/AmbientLight";
import { StudioCursor } from "@/components/site/StudioCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Be Unreal. Be Unreasonable.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "13UTOPiA",
    "creative technology company",
    "branding Ahmedabad",
    "web and product engineering",
    "growth and SEO",
    "AI automation",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: `${site.name} — ${site.headline}`,
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable} ${instrument.variable} ${instrumentSerif.variable} ${editorial.variable} ${script.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <Script id="intro-lock" strategy="beforeInteractive">
          {`(function(){try{if(location.pathname==="/"&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-intro","locked");}}catch(e){}})();`}
        </Script>
        <OrganizationJsonLd />
        <AmbientLight />
        <StudioCursor />
        <SiteHeader />
        <main className="relative z-[2] flex-1 pt-20 lg:pt-24">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
