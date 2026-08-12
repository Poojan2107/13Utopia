"use client";

import { useRef, useState } from "react";
import { processSteps } from "@/data/site";
import { SectionIntro } from "@/components/home/SectionIntro";
import { gsap, ScrollTrigger, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

const durations = ["W1", "W2–3", "W4–6", "Launch", "Ongoing"];

export function ProcessRail() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const current = processSteps[active] ?? processSteps[0];

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: root.current,
          start: "top 50%",
          end: "bottom 55%",
          scrub: true,
          onUpdate: (self) => {
            const i = Math.min(
              processSteps.length - 1,
              Math.floor(self.progress * processSteps.length + 0.001),
            );
            setActive((prev) => (prev === i ? prev : i));
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div data-fade>
          <SectionIntro index="05 — Process" title="How we" italic="work" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-20">
          <div data-fade className="lg:sticky lg:top-32">
            <p className="font-mono text-xs tracking-[0.22em] text-amber-light">
              {current.n} · {durations[active]}
            </p>
            <h3 className="mt-5 font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.94] tracking-tight text-cream">
              {current.title}
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/52">{current.blurb}</p>
            <div className="mt-10 h-px w-full max-w-xs bg-cream/10" aria-hidden>
              <div
                className="h-px bg-amber-light transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
              />
            </div>
          </div>

          <ol className="border-t border-cream/10">
            {processSteps.map((s, i) => (
              <li key={s.n} className="border-b border-cream/10">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-300 ${
                    i === active ? "text-cream" : "text-cream/32 hover:text-cream/65"
                  }`}
                  aria-current={i === active ? "step" : undefined}
                >
                  <div className="flex items-baseline gap-5">
                    <span
                      className={`font-mono text-xs tabular-nums ${
                        i === active ? "text-amber-light" : "text-cream/22"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`font-serif tracking-tight transition-all duration-300 ${
                        i === active ? "text-[1.85rem] text-amber-light sm:text-[2.15rem]" : "text-xl sm:text-2xl"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-cream/28">
                    {durations[i]}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
