import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStories } from "@/data/case-stories";
import { CtaBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Case Stories",
  description:
    "Selected client work from 13UTOPiA — brand, web, growth, and product engagements across healthcare, FMCG, fitness, logistics, and more.",
};

export default function CaseStoriesHubPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Case Stories</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
            Proof over
            <br />
            promises.
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-cream/50 lg:text-right">
            Selected engagements across sectors. Studio frames stand in until client-approved media ships.
          </p>
        </div>
      </div>

      <ul>
        {caseStories.map((c, i) => (
          <li key={c.slug} className="border-t border-cream/10">
            <Reveal delay={Math.min(i * 40, 200)}>
              <Link
                href={`/case-stories/${c.slug}`}
                className="group grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[min(52vh,520px)]">
                  <Image
                    src={c.cover}
                    alt=""
                    fill
                    className="case-media object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority={i === 0}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent lg:hidden" />
                </div>
                <div className="flex flex-col justify-end border-cream/10 px-5 py-10 sm:px-8 lg:border-l lg:px-12 lg:py-16">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-4xl tabular-nums text-cream/15 transition group-hover:text-amber-light/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/40">
                      {c.sector}
                      {c.year ? ` · ${c.year}` : ""}
                    </p>
                  </div>
                  <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-cream transition group-hover:text-amber-light">
                    {c.client}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/50 line-clamp-3">{c.summary}</p>
                  <p className="mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-cream/35 transition group-hover:text-amber-light">
                    Read story →
                  </p>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <CtaBand title="Want work like this?" />
    </div>
  );
}
