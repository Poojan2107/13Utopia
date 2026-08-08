"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStories } from "@/data/case-stories";

/** Horizontal scroll work strip — signature motion without GSAP weight */
export function WorkRail() {
  const items = caseStories.slice(0, 6);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-void to-transparent sm:w-16"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-void to-transparent sm:w-16"
      />
      <ul className="work-rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:gap-5 sm:px-8">
        {items.map((c) => (
          <li key={c.slug} className="w-[min(78vw,420px)] shrink-0 snap-center sm:w-[380px]">
            <Link
              href={`/case-stories/${c.slug}`}
              className="group relative block overflow-hidden border border-cream/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.cover}
                  alt=""
                  fill
                  className="case-media object-cover"
                  sizes="420px"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/45">{c.sector}</p>
                <p className="mt-1 font-display text-xl text-cream">{c.client}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
