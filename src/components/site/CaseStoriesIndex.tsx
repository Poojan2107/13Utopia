"use client";

import Link from "next/link";
import { useState } from "react";
import type { CaseStory } from "@/data/case-stories";
import { CasePlaceholder } from "@/components/site/CasePlaceholder";

export function CaseStoriesIndex({ stories }: { stories: CaseStory[] }) {
  const [active, setActive] = useState(0);
  const current = stories[active] ?? stories[0];
  if (!current) return null;

  return (
    <>
      <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-10 sm:px-8 lg:hidden">
        {stories.map((c, i) => (
          <li key={c.slug} className="w-[86vw] max-w-[400px] shrink-0 snap-center">
            <Link href={`/case-stories/${c.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-soft)]">
                <CasePlaceholder
                  label={c.client}
                  kicker={c.sector}
                  ghost={String(i + 1).padStart(2, "0")}
                  showLabel={false}
                  className="absolute inset-0"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-amber-light">
                    {String(i + 1).padStart(2, "0")} · {c.sector}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-cream group-hover:text-amber-light">{c.client}</h2>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative hidden min-h-[min(82vh,860px)] border-y border-cream/10 lg:block">
        <div className="mx-auto grid h-full min-h-[min(82vh,860px)] max-w-[1400px] grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:px-10">
          <ul className="flex flex-col justify-end border-r border-cream/10 py-16 pr-10">
            {stories.map((c, i) => (
              <li key={c.slug} className="border-t border-cream/10 last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex w-full items-baseline gap-4 py-4 text-left transition-colors duration-300 ${
                    i === active ? "text-cream" : "text-cream/32 hover:text-cream/65"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.65rem] tabular-nums ${
                      i === active ? "text-amber-light" : "text-cream/22"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`truncate font-serif tracking-tight transition-all duration-300 ${
                      i === active ? "text-2xl text-amber-light" : "text-lg"
                    }`}
                  >
                    {c.client}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative">
            {stories.map((c, i) => (
              <div
                key={c.slug}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== active}
              >
                <CasePlaceholder
                  label={c.client}
                  kicker={c.sector}
                  ghost={String(i + 1).padStart(2, "0")}
                  showLabel={false}
                  className="absolute inset-0"
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/40 via-transparent to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-12 pb-16">
              <p className="font-serif text-[clamp(5rem,12vw,9rem)] leading-none tracking-[-0.06em] text-cream/[0.08] tabular-nums">
                {String(active + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-amber-light">
                {current.sector}
                {current.year ? ` · ${current.year}` : ""}
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[0.96] tracking-tight text-cream">
                {current.client}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/55">{current.summary}</p>
              <Link href={`/case-stories/${current.slug}`} className="btn-primary group mt-8 pointer-events-auto w-fit">
                <span>Open story</span>
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
