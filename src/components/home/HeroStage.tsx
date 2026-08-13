"use client";

import Image from "next/image";
import { useRef } from "react";
import { MagneticLink } from "@/components/home/MagneticLink";
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
        .from("[data-hero-mark]", { scale: 1.06, autoAlpha: 0, duration: 1.7 }, 0)
        .from("[data-hero-a]", { yPercent: 110, duration: 0.95 }, 0.28)
        .from("[data-hero-b]", { yPercent: 110, duration: 0.95 }, 0.4)
        .from("[data-hero-foot]", { y: 16, autoAlpha: 0, duration: 0.65 }, 0.58)
        .from("[data-hero-cue]", { autoAlpha: 0, duration: 0.35 }, 0.9);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative -mt-20 min-h-dvh overflow-hidden lg:-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh-premium opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_58%,rgba(196,165,116,0.28),transparent_52%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />

      <div data-hero-mark className="pointer-events-none absolute inset-0 lg:left-[22%]">
        <Image
          src="/brand/13utopia-wordmark-3d.png"
          alt=""
          fill
          priority
          className="object-contain object-[center_38%] drop-shadow-[0_50px_120px_rgba(196,165,116,0.32)] lg:object-right"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-24 pt-28 sm:px-8 lg:justify-center lg:px-12 lg:pb-8">
        <h1 className="sr-only">{site.tagline}</h1>
        <div className="overflow-hidden">
          <p
            data-hero-a
            aria-hidden
            className="whitespace-nowrap font-serif text-[clamp(3rem,7.6vw,7.8rem)] leading-[0.82] tracking-[-0.055em] text-cream"
          >
            Be Unreal
          </p>
        </div>
        <div className="mt-1 overflow-hidden">
          <p
            data-hero-b
            aria-hidden
            className="whitespace-nowrap font-serif text-[clamp(1.7rem,3.6vw,3.8rem)] italic leading-[0.9] tracking-[-0.03em] text-gold text-gold-shift"
          >
            Be Unreasonable
          </p>
        </div>
        <div data-hero-foot className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <MagneticLink
            href="/connect"
            className="group inline-flex w-fit items-center text-[0.72rem] uppercase tracking-[0.22em] text-cream transition hover:text-amber-light"
          >
            Let&apos;s talk
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </MagneticLink>
          <p className="text-sm leading-relaxed text-cream/40">Growth, craft, and systems — Ahmedabad studio.</p>
        </div>
      </div>

      <div
        data-hero-cue
        className="pointer-events-none absolute bottom-6 right-5 hidden items-center gap-3 sm:flex lg:right-12"
        aria-hidden
      >
        <span className="text-[0.58rem] uppercase tracking-[0.28em] text-cream/35">Scroll</span>
        <span className="scroll-cue block h-9 w-px bg-cream/45" />
      </div>
    </section>
  );
}
