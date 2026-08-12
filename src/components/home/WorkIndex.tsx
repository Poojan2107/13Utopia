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
          start: "top 6rem",
          end: `+=${Math.max(stories.length, 3) * 70}vh`,
          pin: true,
          scrub: 0.65,
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
            <li key={c.slug} className="w-[85vw] max-w-[380px] shrink-0 snap-center">
              <Link href={`/case-stories/${c.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cream/10 bg-void-soft">
                  <Image
                    src={c.cover}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="85vw"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.62rem] uppercase tracking-[0.2em] text-amber-light">
                        {String(i + 1).padStart(2, "0")} · {c.sector}
                      </p>
                      {c.year && (
                        <span className="text-[0.6rem] text-cream/40 font-mono">{c.year}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl text-cream group-hover:text-amber-light transition-colors">{c.client}</h3>
                    {c.services && c.services.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {c.services.slice(0, 2).map((s) => (
                          <span key={s.label} className="rounded-full bg-void/70 border border-cream/15 px-2.5 py-0.5 text-[0.58rem] text-cream/70">
                            {s.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div
          ref={pin}
          className="mt-14 hidden gap-16 lg:grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-light/30 bg-amber/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-amber-light">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-light" />
                  Case {String(active + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.24em] text-cream/40">
                  {current.sector} {current.year ? `· ${current.year}` : ""}
                </span>
              </div>
              {current.logo && (
                <div className="relative h-7 w-28 shrink-0 grayscale opacity-85 hover:grayscale-0 transition-all">
                  <Image
                    src={current.logo}
                    alt={current.client}
                    fill
                    className="object-contain object-right"
                  />
                </div>
              )}
            </div>

            <h3 className="mt-4 font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.05] tracking-tight text-cream">
              {current.client}
            </h3>
            
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/60">{current.summary}</p>

            {current.outcomes && current.outcomes.length > 0 && (
              <div className="mt-6 space-y-2">
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-amber-light/75">Verified Outcomes</p>
                <div className="flex flex-wrap gap-2">
                  {current.outcomes.map((o) => (
                    <span key={o} className="inline-flex items-center gap-1.5 rounded-full border border-cream/12 bg-cream/5 px-3 py-1 text-[0.65rem] text-cream/80">
                      <span className="text-amber-light">✓</span> {o}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center gap-4">
              <Link
                href={`/case-stories/${current.slug}`}
                className="btn-primary group"
              >
                <span>Open story</span>
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <ul className="mt-10 max-w-md">
              {stories.map((c, i) => (
                <li key={c.slug} className="border-b border-cream/10 last:border-b-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center justify-between gap-4 py-3.5 text-left transition ${
                      i === active ? "text-cream pl-2" : "text-cream/35 hover:text-cream/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs ${i === active ? "text-amber-light font-bold" : "text-cream/20"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-lg tracking-tight">{c.client}</span>
                    </div>
                    <span className="text-[0.62rem] uppercase tracking-[0.16em] text-cream/30">{c.sector}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/case-stories/${current.slug}`}
            className="group relative block min-h-[min(72vh,760px)] overflow-hidden rounded-[2rem] border border-cream/15 gold-rim shadow-2xl"
          >
            {stories.map((c, i) => (
              <Image
                key={c.slug}
                src={c.cover}
                alt={c.client}
                fill
                className={`object-cover transition-all duration-700 group-hover:scale-[1.03] ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                sizes="50vw"
                priority={i === 0}
              />
            ))}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-cream/15 bg-void/70 p-4 backdrop-blur-md">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-amber-light">Featured Work</p>
                <p className="font-serif text-lg text-cream">{current.client}</p>
              </div>
              <span className="btn-ghost py-2 px-4 text-[0.6rem]">
                Explore Case →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
