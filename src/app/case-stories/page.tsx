import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStories } from "@/data/case-stories";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Case Stories",
  description: "Selected client work from 13UTOPiA — brand, web, and growth engagements.",
};

export default function CaseStoriesHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <PageIntro
        eyebrow="Case Stories"
        title="Proof over promises."
        deck="Selected engagements. Full media and metrics fill in as we publish richer cases — the structure is ready now."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {caseStories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/case-stories/${c.slug}`}
              className="flex h-full gap-5 rounded-2xl border hairline bg-void-soft/50 p-5 transition hover:border-amber/40 sm:p-6"
            >
              {c.logo && (
                <div className="relative h-14 w-14 shrink-0 opacity-80">
                  <Image src={c.logo} alt="" fill className="object-contain" sizes="56px" />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.16em] text-cream/40">{c.sector}</p>
                <h2 className="mt-1 font-display text-xl text-cream">{c.client}</h2>
                <p className="mt-2 text-sm text-cream/55">{c.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand title="Want work like this?" />
    </div>
  );
}
