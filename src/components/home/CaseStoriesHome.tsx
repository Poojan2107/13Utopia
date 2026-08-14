"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { registerGsap, useGSAP } from "@/lib/gsap";
import { caseStories } from "@/data/case-stories";
import { featuredCaseSlugs } from "@/data/home";
import { Capsule } from "@/components/home/Capsule";
import { pinSwap } from "@/components/home/usePinSwap";

registerGsap();

export function CaseStoriesHome() {
  const root = useRef<HTMLElement>(null);
  const featured = featuredCaseSlugs
    .map((slug) => caseStories.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  useGSAP(
    () => {
      pinSwap(root.current, "[data-case-panel]", 2.6);
    },
    { scope: root },
  );

  return (
    <section ref={root} id="work" className="relative bg-void text-cream">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="relative z-20 flex items-start justify-between gap-3">
          <Capsule>13 / 06</Capsule>
          <Link href="/case-stories" className="no-underline">
            <Capsule>All work</Capsule>
          </Link>
        </div>
        <h2 className="sr-only">What we changed.</h2>
        <div data-swap-stage className="relative mt-6 min-h-0 flex-1">
          {featured.map((story) => (
            <article key={story.slug} data-case-panel className="flex flex-col justify-between gap-8 py-2 lg:flex-row lg:items-end">
              <Link href={`/case-stories/${story.slug}`} className="block w-full max-w-[36rem] no-underline">
                <span className="relative block aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-cream/5">
                  {story.cover ? (
                    <Image
                      src={story.cover}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 36rem, 100vw"
                    />
                  ) : null}
                </span>
              </Link>
              <div className="max-w-[18ch] lg:text-right">
                <p className="type-hero text-[clamp(2.4rem,6.4vw,6.4rem)] text-cream">{story.client}</p>
                <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
                  <Capsule>{story.year}</Capsule>
                  <Capsule>{story.sector}</Capsule>
                </div>
                <p className="mt-5 max-w-[36ch] text-sm leading-6 text-cream/55 lg:ml-auto">{story.summary}</p>
                <Link
                  href={`/case-stories/${story.slug}`}
                  className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.18em] text-cream/70 no-underline hover:text-cream"
                >
                  Read the story â†’
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

