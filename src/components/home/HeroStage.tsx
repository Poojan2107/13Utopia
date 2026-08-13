"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

registerGsap();

export function HeroStage() {
  const root = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setLoading(false);
      return;
    }

    const timer = window.setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.timeline({ defaults: { ease: "power4.inOut" }, onComplete: () => setLoading(false) })
          .to("[data-loader-mark]", { scale: 0.94, autoAlpha: 0, duration: 0.55 })
          .to("[data-loader]", { clipPath: "inset(0 0 100% 0)", duration: 1.05 }, "-=0.08")
          .from("[data-hero-light]", { scale: 0.75, autoAlpha: 0, duration: 1.2 }, "-=0.7")
          .from("[data-hero-ring]", { rotate: -18, scale: 0.86, autoAlpha: 0, duration: 1.1 }, "-=0.88")
          .from("[data-hero-line]", { scaleX: 0, transformOrigin: "left center", duration: 0.72 }, "-=0.8")
          .from("[data-hero-word]", { yPercent: 110, rotate: 3, duration: 1.05, stagger: 0.08 }, "-=0.56")
          .from("[data-hero-mark]", { autoAlpha: 0, duration: 0.5 }, "-=0.4");
      }, element);
      window.setTimeout(() => ctx.revert(), 3500);
    }, 650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section ref={root} className="relative -mt-20 min-h-[100svh] overflow-hidden bg-[#0b0907] text-[#f2e6cc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_42%,rgba(213,166,94,0.42),transparent_24%),radial-gradient(circle_at_55%_68%,rgba(133,72,35,0.36),transparent_30%),radial-gradient(circle_at_96%_8%,rgba(104,46,22,0.48),transparent_28%),linear-gradient(120deg,#080706_0%,#17100c_36%,#2a1b13_68%,#0b0907_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_19%,rgba(6,5,4,0.24)_70%,#050403_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(242,230,204,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(242,230,204,0.15)_1px,transparent_1px)] [background-size:clamp(4rem,9vw,9rem)_clamp(4rem,9vw,9rem)] [mask-image:linear-gradient(110deg,black,transparent_78%)]" aria-hidden="true" />

      <div data-hero-light className="pointer-events-none absolute left-[54%] top-[24%] h-[min(60vw,47rem)] w-[min(60vw,47rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_37%_30%,rgba(255,248,225,0.85),rgba(242,201,125,0.48)_12%,rgba(166,101,42,0.23)_38%,rgba(92,47,19,0.12)_58%,transparent_70%)] mix-blend-screen" aria-hidden="true" />
      <div data-hero-ring className="pointer-events-none absolute right-[-15vw] top-[10%] h-[30rem] w-[30rem] rounded-full border border-[#d5a65e]/35 [transform:rotate(23deg)_scaleX(1.75)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[10%] left-[12%] h-24 w-[clamp(14rem,25vw,25rem)] rounded-full border border-[#f2e6cc]/20 [transform:rotate(-28deg)_skewX(-24deg)]" aria-hidden="true" />

      <div data-loader className={`fixed inset-0 z-[80] flex items-center justify-center bg-[#0b0907] ${loading ? "" : "pointer-events-none"}`} aria-hidden={!loading}>
        <div data-loader-mark className="relative flex items-center gap-4 text-[#f2e6cc]">
          <span className="font-serif text-[clamp(4rem,11vw,9rem)] leading-none tracking-[-0.1em]">13</span>
          <span className="h-px w-16 bg-[#d5a65e]/75 sm:w-28" />
          <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#f2e6cc]/75">UTOPiA</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col px-5 pb-7 pt-28 sm:px-8 sm:pb-10 lg:px-12">
        <div className="flex flex-1 items-center">
          <div className="relative w-full">
            <div data-hero-line className="absolute left-0 top-[16%] h-px w-[clamp(7rem,25vw,25rem)] bg-[#d5a65e]/75" aria-hidden="true" />
            <div data-hero-mark className="pointer-events-none absolute right-[7%] top-[9%] text-[0.55rem] uppercase tracking-[0.36em] text-[#d5a65e]/70" aria-hidden="true">13 / 01</div>
            <div className="ml-[7vw] max-w-[93vw] sm:ml-[9vw] lg:ml-[11vw]">
              <h1 className="max-w-[13ch] overflow-visible font-serif text-[clamp(4.2rem,12.5vw,13.5rem)] font-medium leading-[0.76] tracking-[-0.08em] sm:max-w-[11ch]">
                <span data-hero-word className="block">Be Unreal.</span>
                <span data-hero-word className="ml-[12vw] block italic text-[#f1c987] sm:ml-[16vw]">Be</span>
                <span data-hero-word className="ml-[3vw] block text-[#f2e6cc] sm:ml-[6vw]">Unreasonable.</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-[#f2e6cc]/20 pt-4" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f1c987] shadow-[0_0_22px_rgba(241,201,135,0.9)]" />
          <span className="h-px w-24 bg-[#d5a65e]/60 sm:w-40" />
        </div>
      </div>
    </section>
  );
}
