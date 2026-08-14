"use client";

import { useRef } from "react";
import { registerGsap, useGSAP } from "@/lib/gsap";
import { unreasonablePairs } from "@/data/home";
import { Capsule } from "@/components/home/Capsule";
import { pinSwap } from "@/components/home/usePinSwap";

registerGsap();

export function UnreasonableDevice() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      pinSwap(root.current, "[data-pair]", 1.8);
    },
    { scope: root },
  );

  return (
    <section ref={root} id="unreasonable" className="relative bg-void text-cream">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between">
          <Capsule>Normal</Capsule>
          <Capsule>Unreasonable</Capsule>
        </div>
        <div data-swap-stage className="relative mt-6 min-h-0 flex-1">
          {unreasonablePairs.map((pair) => (
            <article key={pair.normal} data-pair className="flex flex-col justify-center">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-cream/32">{pair.normal}</p>
              <p className="type-hero mt-5 max-w-[12ch] text-[clamp(2.2rem,6.4vw,6.4rem)] text-cream">
                {pair.unreasonable}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
