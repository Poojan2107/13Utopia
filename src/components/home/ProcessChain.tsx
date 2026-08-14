"use client";

import { useRef } from "react";
import { registerGsap, useGSAP } from "@/lib/gsap";
import { homeProcess } from "@/data/home";
import { Capsule } from "@/components/home/Capsule";
import { pinSwap } from "@/components/home/usePinSwap";

registerGsap();

export function ProcessChain() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      pinSwap(root.current, "[data-process-step]", 2.8);
    },
    { scope: root },
  );

  return (
    <section ref={root} id="process" className="relative bg-void text-cream">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between">
          <Capsule>13 / 08</Capsule>
          <Capsule>How we work</Capsule>
        </div>
        <h2 className="sr-only">How we work</h2>
        <ol data-swap-stage className="relative mt-6 min-h-0 flex-1 list-none">
          {homeProcess.map((step) => (
            <li key={step.n} data-process-step className="flex flex-col justify-center">
              <Capsule>{step.n}</Capsule>
              <h3 className="type-hero mt-5 text-[clamp(3.2rem,11vw,9rem)] text-cream">
                <span className="block whitespace-nowrap">{step.title}</span>
              </h3>
              <p className="mt-5 max-w-[36ch] text-sm leading-6 text-cream/48">{step.blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
