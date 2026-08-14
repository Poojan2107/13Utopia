"use client";

import Link from "next/link";
import { useRef } from "react";
import { registerGsap, useGSAP } from "@/lib/gsap";
import { solutions } from "@/data/solutions";
import { outcomeMeaning, outcomeOrder } from "@/data/home";
import { Capsule } from "@/components/home/Capsule";
import { pinSwap } from "@/components/home/usePinSwap";

registerGsap();

export function OutcomesSolve() {
  const root = useRef<HTMLElement>(null);
  const ordered = outcomeOrder
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  useGSAP(
    () => {
      pinSwap(root.current, "[data-outcome]", 2.6);
    },
    { scope: root },
  );

  return (
    <section ref={root} id="solutions" className="relative bg-void text-cream">
      <div className="flex h-[100svh] flex-col overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between gap-4">
          <Capsule>13 / 05</Capsule>
          <Link href="/solutions" className="no-underline">
            <Capsule>All solutions</Capsule>
          </Link>
        </div>
        <p className="mt-6 text-[0.68rem] uppercase tracking-[0.18em] text-cream/38">What are you trying to do?</p>
        <h2 className="sr-only">Launch. Grow. Scale. Modernize. Automate. Transform.</h2>
        <ol data-swap-stage className="relative mt-4 min-h-0 flex-1 list-none">
          {ordered.map((item) => (
            <li key={item.slug} data-outcome className="flex flex-col justify-center">
              <Link href={`/solutions/${item.slug}`} className="block no-underline">
                <p className="type-hero text-right text-[clamp(3rem,10vw,8.8rem)] text-cream">
                  <span className="block whitespace-nowrap">{item.title}</span>
                </p>
                <p className="mt-4 text-right text-sm leading-6 text-cream/48">
                  {outcomeMeaning[item.slug as keyof typeof outcomeMeaning] ?? item.deck}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
