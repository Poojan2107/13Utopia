import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Outcome-led paths — Growth, Launch, Scale, Modernize, Automate, Transform — from 13UTOPiA.",
};

export default function SolutionsHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <PageIntro
        eyebrow="Solutions"
        title="Start with the outcome."
        deck="Not a service menu dump — six buyer paths that pull the right capabilities together. Pick the job you’re hiring us for."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <li key={s.slug}>
            <Link href={`/solutions/${s.slug}`} className="surface surface-lift flex h-full flex-col p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-light/70">{s.intent}</p>
              <h2 className="mt-3 font-display text-2xl text-cream">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm text-cream/55">{s.deck}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-cream/35">Explore →</p>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand title="Not sure which path?" />
    </div>
  );
}
