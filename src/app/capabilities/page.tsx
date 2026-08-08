import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { CtaBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Six capability pillars — growth, branding, digital products, AI, cloud, and strategy — from 13UTOPiA in Ahmedabad.",
};

export default function CapabilitiesHubPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Capabilities</p>
            <h1 className="mt-5 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
              What we
              <br />
              build & run.
            </h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-cream/50 lg:justify-self-end lg:text-right">
            Six pillars. Every service has its own page — start at a pillar or jump straight to a leaf.
          </p>
        </div>
      </div>

      <ul>
        {capabilities.map((p, i) => (
          <li key={p.slug} className="border-t border-cream/10">
            <Reveal delay={i * 40}>
              <Link
                href={`/capabilities/${p.slug}`}
                className="group relative mx-auto grid max-w-[1400px] overflow-hidden px-5 py-10 sm:px-8 lg:grid-cols-[10rem_1fr_8rem] lg:items-center lg:gap-8 lg:px-10 lg:py-14"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 font-display text-[9rem] leading-none text-cream/[0.03] transition group-hover:text-amber-light/[0.07] lg:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-5xl tabular-nums text-cream/15 transition group-hover:text-amber-light/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-3xl tracking-tight text-cream transition group-hover:text-amber-light sm:text-4xl lg:text-5xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/45">{p.blurb}</p>
                  <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-cream/30">
                    {p.services.length} services
                  </p>
                </div>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/30 transition group-hover:text-amber-light lg:text-right">
                  Open →
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mx-auto max-w-[1400px]">
        <CtaBand />
      </div>
    </div>
  );
}
