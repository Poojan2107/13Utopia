import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Outcome-led paths — Growth, Launch, Scale, Modernize, Automate, Transform — from 13UTOPiA.",
};

export default function SolutionsHubPage() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 amber-glow opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <PageIntro
          eyebrow="Solutions"
          title="Start with the outcome."
          deck="Not a service menu dump — six buyer paths that pull the right capabilities together. Pick the job you're hiring us for."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 60}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[1.35rem] border hairline p-7 transition hover:border-amber/40 sm:p-8"
                >
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-amber-light/75">{s.intent}</p>
                    <h2 className="mt-4 font-display text-3xl text-cream transition group-hover:text-amber-light">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-cream/50">{s.deck}</p>
                  </div>
                  <p className="mt-8 text-sm text-cream/35 transition group-hover:text-amber-light">Explore path →</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <CtaBand title="Not sure which path?" />
      </div>
    </div>
  );
}
