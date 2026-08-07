import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Six capability pillars — growth, branding, digital products, AI, cloud, and strategy — from 13UTOPiA in Ahmedabad.",
};

export default function CapabilitiesHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <PageIntro
        eyebrow="Capabilities"
        title="What we build and run."
        deck="Six pillars covering growth, brand, products, AI, engineering, and advisory. Every service has its own page — start at a pillar or jump straight to a leaf."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {capabilities.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/capabilities/${p.slug}`}
              className="block h-full rounded-2xl border hairline bg-void-soft/50 p-6 transition hover:border-amber/40"
            >
              <p className="text-xs text-cream/35">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-2xl text-cream">{p.title}</h2>
              <p className="mt-2 text-sm text-cream/55">{p.blurb}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-amber-light/70">
                {p.services.length} services →
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand />
    </div>
  );
}
