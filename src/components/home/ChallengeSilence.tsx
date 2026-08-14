"use client";

import { useRef } from "react";
import { registerGsap, useGSAP } from "@/lib/gsap";
import { Capsule } from "@/components/home/Capsule";
import { pinSwap } from "@/components/home/usePinSwap";

registerGsap();

const lines = [
  ["The world", "doesn’t need", "another agency."],
  ["It needs people", "who see what", "others don’t."],
  ["That’s why", "we exist."],
] as const;

export function ChallengeSilence() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      pinSwap(root.current, "[data-challenge-line]", 2.4);
    },
    { scope: root },
  );

  return (
    <section ref={root} id="challenge" data-field="art" className="relative bg-cream text-void">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between">
          <Capsule invert>13 / 02</Capsule>
          <Capsule invert>The challenge</Capsule>
        </div>
        <div data-swap-stage className="relative mt-6 min-h-0 flex-1">
          {lines.map((line, i) => {
            const className =
              "flex flex-col items-end justify-center type-hero text-right text-[clamp(1.9rem,6.2vw,6.4rem)] text-void";
            const rows = line.map((row) => (
              <span key={row} className="block whitespace-nowrap">
                {row}
              </span>
            ));
              return i === 0 ? (
              <h2 key={line[0]} data-challenge-line className={`${className} is-on`}>
                {rows}
              </h2>
            ) : (
              <p key={line[0]} data-challenge-line className={className}>
                {rows}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
