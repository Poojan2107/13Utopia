import type { Metadata } from "next";
import { caseStories } from "@/data/case-stories";
import { CtaBand } from "@/components/site/PageIntro";
import { CaseStoriesIndex } from "@/components/site/CaseStoriesIndex";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Case Stories",
  description:
    "Selected client work from 13UTOPiA — brand, web, growth, and product engagements across healthcare, FMCG, fitness, logistics, and more.",
};

export default function CaseStoriesHubPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pb-16 lg:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Case Stories</p>
        <p className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-cream/30">{site.tagline}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h1 className="font-serif text-[clamp(3rem,8vw,6.4rem)] leading-[0.9] tracking-[-0.04em] text-cream">
            Proof over <span className="italic text-amber-light">promises.</span>
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-cream/50 lg:text-right">
            Selected engagements. Studio frames hold the stage until locked media lands.
          </p>
        </div>
      </div>

      <CaseStoriesIndex stories={caseStories} />

      <CtaBand title="Want work like this?" />
    </div>
  );
}
