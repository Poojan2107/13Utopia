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
            <li key={c.slug} className="w-[80vw] shrink-0 snap-center">
              <Link href={`/case-stories/${c.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cream/10">
                  <Image
                    src={c.cover}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="80vw"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/55">
                      {String(i + 1).padStart(2, "0")} · {c.sector}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-cream">{c.client}</h3>
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
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-amber-light/75">
              {String(active + 1).padStart(2, "0")} · {current.sector}
              {current.year ? ` · ${current.year}` : ""}
            </p>
            <h3 className="mt-4 font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.05] tracking-tight text-cream">
              {current.client}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/50">{current.summary}</p>
            <Link
              href={`/case-stories/${current.slug}`}
              className="btn-primary mt-8"
            >
              Open story
            </Link>

            <ul className="mt-12 max-w-md">
              {stories.map((c, i) => (
                <li key={c.slug} className="border-b border-cream/10 last:border-b-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-baseline justify-between gap-4 py-3.5 text-left transition ${
                      i === active ? "text-cream" : "text-cream/35 hover:text-cream/70"
                    }`}
                  >
                    <span className="font-serif text-lg tracking-tight">{c.client}</span>
                    <span className="text-[0.62rem] uppercase tracking-[0.16em] text-cream/30">{c.sector}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/case-stories/${current.slug}`}
            className="relative block min-h-[min(72vh,760px)] overflow-hidden rounded-[2rem]"
          >
            {stories.map((c, i) => (
              <Image
                key={c.slug}
                src={c.cover}
                alt={c.client}
                fill
                className={`object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                sizes="50vw"
                priority={i === 0}
              />
            ))}
          </Link>
        </div>
      </div>
    </section>
  );
}
