import type { Metadata } from "next";
import Link from "next/link";
import { perspectiveHub, perspectivePages } from "@/data/perspective";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Perspective",
  description: perspectiveHub.deck,
};

export default function PerspectiveHubPage() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 amber-glow opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <PageIntro eyebrow="Perspective" title={perspectiveHub.title} deck={perspectiveHub.deck} />
        <ul className="divide-y divide-cream/10 border-y border-cream/10">
          {perspectivePages.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 45}>
                <Link
                  href={`/perspective/${p.slug}`}
                  className="group grid gap-3 py-8 transition sm:grid-cols-[1fr_1.2fr] sm:items-baseline sm:gap-12"
                >
                  <h2 className="font-display text-2xl text-cream transition group-hover:text-amber-light sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-cream/50 sm:text-right">{p.deck}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <CtaBand title="Meet the people behind the work" />
      </div>
    </div>
  );
}
