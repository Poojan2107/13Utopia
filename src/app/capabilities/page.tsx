import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Six capability pillars — growth, branding, digital products, AI, cloud, and strategy — from 13UTOPiA in Ahmedabad.",
};

export default function CapabilitiesHubPage() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 amber-glow opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <PageIntro
          eyebrow="Capabilities"
          title="What we build and run."
          deck="Six pillars covering growth, brand, products, AI, engineering, and advisory. Every service has its own page — start at a pillar or jump straight to a leaf."
        />
        <ul className="divide-y divide-cream/10 border-y border-cream/10">
          {capabilities.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 50}>
                <Link
                  href={`/capabilities/${p.slug}`}
                  className="group grid gap-3 py-8 transition sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-10"
                >
                  <span className="font-display text-sm tabular-nums text-amber-light/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl text-cream transition group-hover:text-amber-light sm:text-3xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/50">{p.blurb}</p>
                    <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream/35">
                      {p.services.length} services
                    </p>
                  </div>
                  <span className="text-sm text-cream/30 transition group-hover:text-amber-light">→</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <CtaBand />
      </div>
    </div>
  );
}
