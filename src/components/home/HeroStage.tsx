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
        .from("[data-hero-mark]", { scale: 1.06, autoAlpha: 0, duration: 1.8 }, 0)
        .from("[data-hero-a]", { yPercent: 110, duration: 1 }, 0.35)
        .from("[data-hero-b]", { yPercent: 110, duration: 1 }, 0.48)
        .from("[data-hero-foot]", { y: 12, autoAlpha: 0, duration: 0.6 }, 0.7)
        .from("[data-hero-cue]", { autoAlpha: 0, duration: 0.4 }, 1);

      gsap.to("[data-hero-mark]", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative -mt-20 h-[calc(100dvh+5rem)] overflow-hidden lg:-mt-24 lg:h-[calc(100dvh+6rem)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh-premium opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(196,165,116,0.22),transparent_58%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />

      <div data-hero-mark className="pointer-events-none absolute -inset-[10%] sm:-inset-[8%]">
        <Image
          src="/brand/13utopia-wordmark-3d.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%] drop-shadow-[0_40px_90px_rgba(196,165,116,0.28)] sm:object-[center_36%] lg:object-[center_42%]"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-void via-void/75 to-transparent px-5 pb-12 pt-28 sm:px-8 lg:bottom-auto lg:top-[24%] lg:bg-none lg:px-12 lg:pb-0 lg:pt-0">
        <h1 className="sr-only">{site.tagline}</h1>
        <div className="overflow-hidden">
          <p
            data-hero-a
            aria-hidden
            className="font-serif text-[clamp(2.6rem,12vw,9.5rem)] leading-[0.78] tracking-[-0.06em] text-cream [text-shadow:0_12px_50px_rgba(11,11,11,0.8)] lg:whitespace-nowrap"
          >
            Be Unreal
          </p>
        </div>
        <div className="mt-1 overflow-hidden">
          <p
            data-hero-b
            aria-hidden
            className="font-serif text-[clamp(1.45rem,5.5vw,3.8rem)] italic leading-[0.88] tracking-[-0.03em] text-gold text-gold-shift [text-shadow:0_8px_36px_rgba(11,11,11,0.7)] lg:whitespace-nowrap"
          >
            Be Unreasonable
          </p>
        </div>
        <p data-hero-foot className="mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-cream/50">
          Ahmedabad studio
        </p>
      </div>

      <div
        data-hero-cue
        className="pointer-events-none absolute bottom-8 right-5 z-10 hidden items-center gap-3 sm:flex lg:right-12"
        aria-hidden
      >
        <span className="text-[0.58rem] uppercase tracking-[0.28em] text-cream/35">Scroll</span>
        <span className="scroll-cue block h-9 w-px bg-cream/45" />
      </div>
    </section>
  );
}
