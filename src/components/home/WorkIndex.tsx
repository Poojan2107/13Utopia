"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { CaseStory } from "@/data/case-stories";
import { WorkStageMedia } from "@/components/home/WorkStageMedia";
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
          start: "top top",
          end: `+=${Math.max(stories.length, 3) * 55}vh`,
          pin: true,
          scrub: 0.75,
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
    <section ref={root} id="work" className="relative scroll-mt-28">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-32 lg:px-10">
        <div data-fade className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">02 — Work</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-tight text-cream">
              Proof over <span className="italic text-amber-light">promises.</span>
            </h2>
            <p className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-cream/30">
              Be unreal · be unreasonable
            </p>
          </div>
          <Link
            href="/case-stories"
            className="inline-flex w-fit rounded-[var(--radius-square)] border border-cream/20 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-cream/50 transition hover:border-amber-light hover:text-amber-light"
          >
            All stories →
          </Link>
        </div>
      </div>

      <ul className="work-rail mx-auto flex max-w-[1400px] snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 sm:px-8 lg:hidden">
        {stories.map((c, i) => (
          <li key={c.slug} className="w-[88vw] max-w-[400px] shrink-0 snap-center">
            <Link href={`/case-stories/${c.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-soft)] bg-void-soft">
                <WorkStageMedia story={c} active priority={i === 0} />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-amber-light">
                    {String(i + 1).padStart(2, "0")} · {c.sector}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-cream group-hover:text-amber-light">{c.client}</h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div ref={pin} className="relative hidden h-dvh w-full lg:block">
        {stories.map((c, i) => (
          <WorkStageMedia key={c.slug} story={c} active={i === active} priority={i === 0} />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void via-void/40 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-10 pb-16 pt-28">
          <div className="grid h-full grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] items-end gap-12">
            <ul className="space-y-0 self-end pb-2">
              {stories.map((c, i) => (
                <li key={c.slug} className="border-t border-cream/10 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-baseline gap-3 py-3.5 text-left transition-colors duration-300 ${
                      i === active ? "text-cream" : "text-cream/30 hover:text-cream/65"
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
                        i === active ? "text-xl text-amber-light" : "text-base"
                      }`}
                    >
                      {c.client}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start justify-end pb-2">
              <p className="font-serif text-[clamp(5rem,11vw,9rem)] leading-none tracking-[-0.06em] text-cream/[0.07] tabular-nums">
                {String(active + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-amber-light">
                {current.sector}
                {current.year ? ` · ${current.year}` : ""}
              </p>
              <h3 className="mt-3 max-w-2xl font-serif text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[0.98] tracking-tight text-cream">
                {current.client}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/60">{current.summary}</p>
              <Link href={`/case-stories/${current.slug}`} className="btn-primary group mt-8">
                <span>Open story</span>
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
