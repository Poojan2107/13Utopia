"use client";

import Image from "next/image";
import { useRef } from "react";
import { site } from "@/data/site";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function HeroStage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from("[data-hero-media]", { scale: 1.08, autoAlpha: 0, duration: 1.5 }, 0)
        .from("[data-hero-wash]", { autoAlpha: 0, duration: 1.2 }, 0.15)
        .from("[data-hero-kicker]", { y: 18, autoAlpha: 0, duration: 0.7 }, 0.3)
        .from("[data-hero-line]", { yPercent: 110, duration: 0.95, stagger: 0.08 }, 0.35)
        .from("[data-hero-meta]", { y: 14, autoAlpha: 0, duration: 0.6 }, 0.75)
        .from("[data-hero-marker]", { scaleX: 0, transformOrigin: "left center", duration: 0.7 }, 0.8);

      gsap.to("[data-hero-media]", {
        yPercent: 5,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative -mt-20 min-h-[100svh] overflow-hidden bg-void text-cream">
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

      <div className="absolute inset-y-0 left-[26%] right-0 overflow-hidden sm:left-[30%] lg:left-[34%]" aria-hidden="true">
        <Image
          src="/brand/13utopia-wordmark-3d.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 100vw, 70vw"
          data-hero-media
          className="object-cover object-[56%_46%] opacity-95 sm:object-[58%_46%] lg:object-[58%_48%]"
        />
        <div data-hero-wash className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.86)_8%,rgba(0,0,0,0.16)_44%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_46%,transparent_15%,rgba(0,0,0,0.22)_72%,#000_100%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,transparent_18%,transparent_72%,rgba(0,0,0,0.72)_100%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p data-hero-kicker className="mb-7 flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-cream/58">
              <span className="h-px w-10 bg-amber-light" />
              Ahmedabad studio · growth + technology
            </p>
            <h1 className="max-w-[8ch] overflow-hidden font-serif text-[clamp(4.5rem,10vw,10.5rem)] leading-[0.77] tracking-[-0.065em] text-cream">
              <span data-hero-line className="block">Be Unreal</span>
              <span data-hero-line className="block italic text-amber-light">Be Unreasonable</span>
            </h1>
            <div data-hero-meta className="mt-8 flex items-center gap-5 text-[0.62rem] uppercase tracking-[0.25em] text-cream/48">
              <span>01 / 04</span>
              <span data-hero-marker className="h-px w-16 bg-cream/35" />
              <span className="hidden sm:inline">Creative instinct · professional discipline</span>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 lg:col-span-3 lg:col-start-10 lg:justify-end">
            <p className="max-w-[17ch] text-xs leading-6 text-cream/56 sm:text-sm">
              We make ambitious ideas useful, memorable, and ready to move.
            </p>
            <div className="hidden items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-cream/45 sm:flex lg:flex-col lg:gap-4">
              <span>Scroll</span>
              <span className="block h-12 w-px bg-cream/35" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-5 z-10 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-cream/25 sm:left-8 lg:left-12" aria-hidden="true">
        {site.name} / 2026
      </div>
    </section>
  );
}
