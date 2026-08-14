"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";
import { cta } from "@/data/site";
import { Capsule } from "@/components/home/Capsule";

registerGsap();

export function FinalChallenge() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      gsap.fromTo(
        "[data-final-mark]",
        { autoAlpha: 0, scale: 0.86 },
        {
          autoAlpha: 0.22,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 0.7,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} id="connect" className="relative overflow-hidden bg-void text-cream">
      <p
        data-final-mark
        aria-hidden
        className="pointer-events-none absolute -right-[6vw] bottom-[-18%] type-hero text-[clamp(10rem,32vw,24rem)] leading-none text-cream/[0.08]"
      >
        13
      </p>
      <div className="relative flex h-[100svh] flex-col px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between">
          <Capsule>13 / 11</Capsule>
          <Capsule>Next</Capsule>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="type-hero text-[clamp(2.6rem,8vw,7.6rem)] text-cream">
            <span className="block whitespace-nowrap">Have an</span>
            <span className="block whitespace-nowrap">unreasonable</span>
            <span className="block whitespace-nowrap">idea?</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/connect" className="no-underline">
              <Capsule>{cta.final} ↗</Capsule>
            </Link>
            <Link href="/connect" className="no-underline">
              <Capsule>{cta.discovery}</Capsule>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
