"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { CaseStory } from "@/data/case-stories";
import { SectionIntro } from "@/components/home/SectionIntro";
import { gsap, ScrollTrigger, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function WorkIndex({ stories }: { stories: CaseStory[] }) {
  const root = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: pin.current,
          start: "top 5.5rem",
          end: `+=${Math.max(stories.length, 3) * 62}vh`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const i = Math.min(
              stories.length - 1,
              Math.floor(self.progress * stories.length + 0.001),
            );
            setActive((prev) => (prev === i ? prev : i));
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [stories.length] },
  );

  const current = stories[active] ?? stories[0];
  if (!current) return null;

  return (
    <section ref={root} id="work" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div data-fade>
          <SectionIntro
            index="01 — Work"
            title="Proof over"
            italic="promises."
            action={{ href: "/case-stories", label: "All stories →" }}
          />
        </div>

        <ul className="work-rail mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:hidden">
          {stories.map((c, i) => (
            <li key={c.slug} className="w-[82vw] max-w-[360px] shrink-0 snap-center">
              <Link href={`/case-stories/${c.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-soft)] border border-cream/10 bg-void-soft">
                  <Image
                    src={c.cover}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="82vw"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-6">
                    <p className="text-[0.62rem] uppercase tracking-[0.2em] text-amber-light">
                      {String(i + 1).padStart(2, "0")} · {c.sector}
                    </p>
                    <h3 className="font-serif text-2xl text-cream transition-colors group-hover:text-amber-light">
                      {c.client}
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div
          ref={pin}
          className="relative mt-16 hidden min-h-[calc(100vh-7.5rem)] lg:grid lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1.62fr)] lg:items-stretch lg:gap-10"
        >
          <div className="relative flex flex-col justify-between py-1">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-4 top-0 font-serif text-[clamp(7rem,14vw,12rem)] leading-none tracking-[-0.08em] text-cream/[0.06] tabular-nums"
            >
              {String(active + 1).padStart(2, "0")}
            </span>

            <p className="relative text-[0.62rem] uppercase tracking-[0.28em] text-amber-light">
              {String(active + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
            </p>

            <ul className="relative mt-auto">
              {stories.map((c, i) => (
                <li key={c.slug} className="border-t border-cream/10 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-baseline justify-between gap-3 py-3.5 text-left transition-colors duration-300 ${
                      i === active ? "text-cream" : "text-cream/28 hover:text-cream/60"
                    }`}
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span
                        className={`font-mono text-[0.65rem] tabular-nums ${
                          i === active ? "text-amber-light" : "text-cream/20"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`truncate font-serif tracking-tight transition-all duration-300 ${
                          i === active ? "text-[1.35rem] text-amber-light" : "text-lg"
                        }`}
                      >
                        {c.client}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/case-stories/${current.slug}`}
            className="group relative block min-h-[calc(100vh-8.5rem)] overflow-hidden rounded-[var(--radius-soft)]"
          >
            {stories.map((c, i) => (
              <Image
                key={c.slug}
                src={c.cover}
                alt={c.client}
                fill
                className={`object-cover transition-[opacity,transform] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.05]"
                }`}
                sizes="60vw"
                priority={i === 0}
              />
            ))}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-55"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8 xl:p-10">
              <div className="max-w-lg">
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-amber-light">
                  {current.sector}
                  {current.year ? ` · ${current.year}` : ""}
                </p>
                <p className="mt-2 font-serif text-[clamp(1.8rem,2.6vw,2.6rem)] leading-[1.05] tracking-tight text-cream">
                  {current.client}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{current.summary}</p>
              </div>
              <span className="btn-primary shrink-0 py-3 px-5 text-[0.62rem]">
                Open story
                <span className="ml-2">→</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
