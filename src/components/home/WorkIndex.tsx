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
  const hovering = useRef(false);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: pin.current,
          start: "top top",
          end: `+=${Math.max(stories.length, 3) * 70}vh`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (hovering.current) return;
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
    <section ref={root} id="work" className="relative bg-void scroll-mt-20">
      <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-16 sm:px-8 lg:hidden">
        {stories.map((c, i) => (
          <li key={c.slug} className="w-[86vw] max-w-[400px] shrink-0 snap-center">
            <Link href={`/case-stories/${c.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <WorkStageMedia story={c} active index={String(i + 1).padStart(2, "0")} />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-void via-void/70 to-transparent p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-amber-light">
                    {String(i + 1).padStart(2, "0")} · {c.sector}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-cream">{c.client}</h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div ref={pin} className="relative hidden h-dvh w-full overflow-hidden lg:block">
        {stories.map((c, i) => (
          <WorkStageMedia
            key={c.slug}
            story={c}
            active={i === active}
            index={c.client.split(/\s+/)[0] ?? c.client}
          />
        ))}

        <div className="absolute inset-y-0 left-0 z-20 flex w-[15rem] flex-col justify-center px-10">
          <p className="mb-8 text-[0.62rem] uppercase tracking-[0.28em] text-cream/40">Work</p>
          <ul>
            {stories.map((c, i) => (
              <li key={c.slug} className="border-t border-cream/10 last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => {
                    hovering.current = true;
                    setActive(i);
                  }}
                  onMouseLeave={() => {
                    hovering.current = false;
                  }}
                  onFocus={() => {
                    hovering.current = true;
                    setActive(i);
                  }}
                  onBlur={() => {
                    hovering.current = false;
                  }}
                  className={`flex w-full items-baseline gap-3 py-3.5 text-left transition-colors duration-300 ${
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
                    className={`truncate font-serif tracking-tight ${
                      i === active ? "text-lg text-amber-light" : "text-base"
                    }`}
                  >
                    {c.client}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-8 bg-gradient-to-t from-void via-void/60 to-transparent px-10 pb-28 pt-36 lg:pl-[17rem]">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-amber-light">
              {current.sector}
              {current.year ? ` · ${current.year}` : ""}
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.6rem,5vw,5.4rem)] leading-[0.9] tracking-tight text-cream">
              {current.client}
            </h2>
          </div>
          <Link href={`/case-stories/${current.slug}`} className="btn-primary pointer-events-auto shrink-0">
            Open story →
          </Link>
        </div>
      </div>
    </section>
  );
}
