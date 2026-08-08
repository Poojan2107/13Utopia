import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { CtaBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Outcome-led paths — Growth, Launch, Scale, Modernize, Automate, Transform — from 13UTOPiA.",
};

export default function SolutionsHubPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Solutions</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
            Start with
            <br />
            the outcome.
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-cream/50 lg:text-right">
            Six buyer paths that pull the right capabilities together. Pick the job you&apos;re hiring us for.
          </p>
        </div>
      </div>

      <ul>
        {solutions.map((s, i) => (
          <li key={s.slug} className="border-t border-cream/10">
            <Reveal delay={i * 35}>
              <Link
                href={`/solutions/${s.slug}`}
                className={`group block px-5 py-12 transition sm:px-8 lg:px-10 lg:py-16 ${
                  i % 2 === 1 ? "bg-cream/[0.02]" : ""
                }`}
              >
                <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[8rem_1fr_1fr]">
                  <span className="font-display text-4xl tabular-nums text-cream/15 transition group-hover:text-amber-light/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.24em] text-amber-light/70">{s.intent}</p>
                    <h2 className="mt-3 font-display text-4xl tracking-tight text-cream transition group-hover:text-amber-light sm:text-5xl">
                      {s.title}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between gap-6 lg:items-end lg:text-right">
                    <p className="max-w-md text-sm leading-relaxed text-cream/45">{s.deck}</p>
                    <span className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/30 transition group-hover:text-amber-light">
                      Explore path →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <CtaBand title="Not sure which path?" />
    </div>
  );
}
