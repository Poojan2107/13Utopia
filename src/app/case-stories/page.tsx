import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStories } from "@/data/case-stories";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Case Stories",
  description:
    "Selected client work from 13UTOPiA — brand, web, growth, and product engagements across healthcare, FMCG, fitness, logistics, and more.",
};

export default function CaseStoriesHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <PageIntro
        eyebrow="Case Stories"
        title="Proof over promises."
        deck="Selected engagements across sectors. Frames are studio work samples until client-approved project media ships."
      />
      <ul className="grid gap-6 md:grid-cols-2">
        {caseStories.map((c, i) => (
          <li key={c.slug} className={i === 0 ? "md:col-span-2" : undefined}>
            <Reveal delay={i * 60}>
              <Link
                href={`/case-stories/${c.slug}`}
                className="group relative block overflow-hidden rounded-[1.35rem] border hairline"
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[21/9] sm:aspect-[2.35/1]" : "aspect-[16/10]"}`}>
                  <Image
                    src={c.cover}
                    alt=""
                    fill
                    className="case-media object-cover"
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    priority={i === 0}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent"
                  />
                  {c.logo && (
                    <div className="absolute left-4 top-4 h-11 w-11 rounded-xl border hairline bg-void/70 p-1.5 backdrop-blur-sm sm:left-5 sm:top-5">
                      <div className="relative h-full w-full">
                        <Image src={c.logo} alt="" fill className="object-contain" sizes="44px" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/45">
                    {c.sector}
                    {c.year ? ` · ${c.year}` : ""}
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-cream sm:text-3xl">{c.client}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/55 line-clamp-2">{c.summary}</p>
                  <p className="mt-4 text-xs text-amber-light/70 transition group-hover:text-amber-light">Read story →</p>
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
