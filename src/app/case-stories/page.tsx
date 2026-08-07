import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStories } from "@/data/case-stories";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Case Stories",
  description:
    "Selected client work from 13UTOPiA — brand, web, growth, and product engagements across healthcare, FMCG, fitness, logistics, and more.",
};

export default function CaseStoriesHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <PageIntro
        eyebrow="Case Stories"
        title="Proof over promises."
        deck="Selected engagements across sectors. Frames are studio work samples until client-approved project media ships."
      />
      <ul className="grid gap-6 sm:grid-cols-2">
        {caseStories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/case-stories/${c.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-void-soft/40 transition hover:border-amber/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.cover}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 560px"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                {c.logo && (
                  <div className="absolute bottom-3 left-3 h-10 w-10 rounded-lg border hairline bg-void/80 p-1.5 backdrop-blur-sm">
                    <div className="relative h-full w-full">
                      <Image src={c.logo} alt="" fill className="object-contain" sizes="40px" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-cream/40">
                  {c.sector}
                  {c.year ? ` · ${c.year}` : ""}
                </p>
                <h2 className="mt-1 font-display text-xl text-cream">{c.client}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/55">{c.summary}</p>
                <p className="mt-4 text-xs text-amber-light/70 transition group-hover:text-amber-light">Read story →</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand title="Want work like this?" />
    </div>
  );
}
