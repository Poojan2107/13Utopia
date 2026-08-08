import type { Metadata } from "next";
import Link from "next/link";
import { perspectiveHub, perspectivePages } from "@/data/perspective";
import { CtaBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Perspective",
  description: perspectiveHub.deck,
};

export default function PerspectiveHubPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-14 sm:px-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Perspective</p>
          <h1 className="mt-5 font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] tracking-tight text-cream">
            How we
            <br />
            think.
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/50">{perspectiveHub.deck}</p>
        </div>

        <ul className="mt-14 space-y-0 border-t border-cream/10 lg:mt-0">
          {perspectivePages.map((p, i) => (
            <li key={p.slug} className="border-b border-cream/10">
              <Reveal delay={i * 40}>
                <Link href={`/perspective/${p.slug}`} className="group block py-8 transition sm:py-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-xs tabular-nums text-cream/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/25 transition group-hover:text-amber-light">
                      Read →
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl tracking-tight text-cream transition group-hover:text-amber-light sm:text-4xl lg:text-5xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/45">{p.deck}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <CtaBand title="Meet the people behind the work" />
    </div>
  );
}
