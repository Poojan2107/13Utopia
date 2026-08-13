"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

registerGsap();

export function HeroStage() {
  const root = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const element = root.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!element) return;

    if (reduced) {
      setLoading(false);
      return;
    }

    const loaderTimer = window.setTimeout(() => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          onComplete: () => setLoading(false),
          defaults: { ease: "power4.inOut" },
        });

        timeline
          .to("[data-loader-mark]", { scale: 0.92, autoAlpha: 0, duration: 0.6 })
          .to("[data-loader]", { clipPath: "inset(0 0 100% 0)", duration: 1.15 }, "-=0.12")
          .from("[data-hero-orb]", { scale: 0.82, rotate: -16, autoAlpha: 0, duration: 1.45 }, "-=0.55")
          .from("[data-hero-line]", { scaleX: 0, transformOrigin: "left center", duration: 0.85 }, "-=0.9")
          .from("[data-hero-word]", { yPercent: 110, rotate: 4, duration: 1.15, stagger: 0.08 }, "-=0.62")
          .from("[data-hero-meta]", { autoAlpha: 0, y: 12, duration: 0.6 }, "-=0.55");
      }, element);

      return () => ctx.revert();
    }, 700);

    return () => window.clearTimeout(loaderTimer);
  }, []);

  return (
    <section ref={root} className="relative -mt-20 min-h-[100svh] overflow-hidden bg-[#090b13] text-[#f6f0e5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_43%,rgba(209,114,255,0.58),transparent_22%),radial-gradient(circle_at_58%_64%,rgba(63,190,255,0.38),transparent_30%),radial-gradient(circle_at_95%_8%,rgba(255,128,104,0.48),transparent_26%),linear-gradient(120deg,#0a0b15_0%,#10182d_35%,#2a1a50_67%,#12101d_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,7,14,0.36)_76%,#05060c_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:clamp(4rem,9vw,9rem)_clamp(4rem,9vw,9rem)] [mask-image:linear-gradient(110deg,black,transparent_78%)]" aria-hidden="true" />

      <div data-hero-orb className="pointer-events-none absolute left-[47%] top-[28%] h-[min(60vw,48rem)] w-[min(60vw,48rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_38%_32%,rgba(255,255,255,0.82),rgba(255,181,240,0.45)_12%,rgba(178,92,255,0.25)_36%,rgba(40,70,180,0.12)_58%,transparent_70%)] blur-[0.4px] mix-blend-screen" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-12vw] top-[11%] h-[28rem] w-[28rem] rounded-full border border-white/20 opacity-50 [transform:rotate(24deg)_scaleX(1.7)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[9%] left-[14%] h-28 w-[clamp(12rem,24vw,25rem)] rounded-full border border-cyan-200/25 opacity-70 [transform:rotate(-27deg)_skewX(-24deg)]" aria-hidden="true" />

      <div data-loader className={`fixed inset-0 z-[80] flex items-center justify-center bg-[#080910] ${loading ? "" : "pointer-events-none"}`} aria-hidden={!loading}>
        <div data-loader-mark className="relative flex items-center gap-4 text-[#f6f0e5]">
          <span className="font-serif text-[clamp(4rem,11vw,9rem)] leading-none tracking-[-0.1em]">13</span>
          <span className="h-px w-16 bg-[#f6f0e5]/60 sm:w-28" />
          <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#f6f0e5]/75">UTOPiA</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col px-5 pb-7 pt-28 sm:px-8 sm:pb-10 lg:px-12">
        <div className="flex flex-1 items-center">
          <div className="relative w-full">
            <div data-hero-line className="absolute left-0 top-[17%] h-px w-[clamp(7rem,25vw,25rem)] bg-[#f6f0e5]/65" aria-hidden="true" />
            <div className="ml-[7vw] max-w-[93vw] sm:ml-[9vw] lg:ml-[11vw]">
              <h1 className="max-w-[13ch] overflow-visible font-serif text-[clamp(4.2rem,12.5vw,13.5rem)] font-medium leading-[0.76] tracking-[-0.08em] sm:max-w-[11ch]">
                <span data-hero-word className="block">Be Unreal.</span>
                <span data-hero-word className="ml-[12vw] block italic text-[#ffc4ed] sm:ml-[16vw]">Be</span>
                <span data-hero-word className="ml-[3vw] block text-[#e8d6ff] sm:ml-[6vw]">Unreasonable.</span>
              </h1>
            </div>
          </div>
        </div>

        <div data-hero-meta className="flex items-end justify-between border-t border-white/20 pt-4" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-200 shadow-[0_0_22px_rgba(255,190,244,0.95)]" />
          <span className="h-px w-24 bg-white/35 sm:w-40" />
        </div>
      </div>
    </section>
  );
}
