"use client";

import Link from "next/link";
import { useRef } from "react";
import { registerGsap, useGSAP } from "@/lib/gsap";
import { worlds } from "@/data/home";
import { Capsule } from "@/components/home/Capsule";
import { pinSwap } from "@/components/home/usePinSwap";

registerGsap();

export function WorldsMorph() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      pinSwap(root.current, "[data-world-panel]", 2.8);
    },
    { scope: root },
  );

  return (
    <section ref={root} id="worlds" className="relative bg-void text-cream">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between gap-4">
          <Capsule>13 / 03</Capsule>
          <p className="max-w-[28ch] text-right text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-cream/38">
            Different disciplines. One unreasonable ambition.
          </p>
        </div>
        <h2 className="sr-only">We create. We build. We grow.</h2>
        <div data-swap-stage className="relative mt-6 min-h-0 flex-1">
          {worlds.map((world) => (
            <article
              key={world.id}
              id={world.id}
              data-world-panel
              className={`grid items-end gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12${world.id === "create" ? " is-on" : ""}`}
            >
              <div className="world-panel-art" data-world-art={world.id} aria-hidden="true" />
              <p className="type-hero self-end text-[clamp(3rem,10vw,8.5rem)] text-cream">
                <span className="block whitespace-nowrap">We</span>
                <span className="block whitespace-nowrap">{world.word}</span>
              </p>
              <div className="self-end pb-2">
                <p className="max-w-[36ch] text-sm leading-6 text-cream/48">{world.line}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {world.crafts.slice(0, 6).map((craft) => (
                    <li key={craft}>
                      <Capsule>{craft}</Capsule>
                    </li>
                  ))}
                </ul>
                <Link
                  href={world.href}
                  className="mt-6 inline-block text-[0.68rem] uppercase tracking-[0.18em] text-cream/70 no-underline hover:text-cream"
                >
                  Explore {world.word.toLowerCase()} â†’
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


