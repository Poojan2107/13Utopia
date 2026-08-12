"use client";

import Image from "next/image";
import { useRef } from "react";
import { BlobField } from "@/components/home/BlobField";
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
        .from("[data-hero-plane]", { scale: 1.16, duration: 2.5 }, 0)
        .from("[data-hero-blob]", { autoAlpha: 0, duration: 1.5 }, 0.12)
        .from("[data-hero-kicker]", { y: 16, autoAlpha: 0, duration: 0.55 }, 0.36)
        .from("[data-hero-a]", { yPercent: 118, duration: 1.2 }, 0.42)
        .from("[data-hero-b]", { yPercent: 118, duration: 1.2 }, 0.56)
        .from("[data-hero-foot]", { y: 22, autoAlpha: 0, duration: 0.8 }, 0.82)
        .from("[data-hero-cue]", { autoAlpha: 0, duration: 0.55 }, 1.15);

      gsap.to("[data-hero-plane]", {
        scale: 1.1,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative -mt-20 min-h-dvh overflow-hidden lg:-mt-24">
      <div data-hero-blob className="pointer-events-none absolute inset-0 hidden opacity-80 lg:block" aria-hidden>
        <BlobField />
      </div>

      <div data-hero-plane className="absolute inset-0 origin-center will-change-transform">
        <Image
          src="/brand/13utopia-wordmark-3d.png"
          alt=""
          fill
          priority
          className="object-contain object-[center_28%] lg:object-[78%_48%] lg:scale-[1.42]"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,transparent_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.78)_100%)]"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/45 to-void/20"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16">
        <p
          data-hero-kicker
          className="text-[0.65rem] uppercase tracking-[0.34em] text-amber-light/80"
        >
          Growth & Technology Studio
        </p>

        <h1 className="sr-only">{site.tagline}</h1>
        <div className="mt-5 overflow-hidden">
          <p
            data-hero-a
            aria-hidden
            className="max-w-[14ch] font-serif text-[clamp(3.4rem,12vw,9.6rem)] leading-[0.82] tracking-[-0.05em] text-cream"
          >
            Be Unreal
          </p>
        </div>
        <div className="mt-1 overflow-hidden">
          <p
            data-hero-b
            aria-hidden
            className="text-right font-serif text-[clamp(2.2rem,8vw,6.6rem)] italic leading-[0.88] tracking-[-0.035em]"
          >
            <span className="text-gold text-gold-shift">Be Unreasonable</span>
          </p>
        </div>

        <div
          data-hero-foot
          className="mt-10 flex flex-col gap-6 border-t border-cream/12 pt-7 sm:mt-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-xl space-y-3">
            <p className="text-sm leading-relaxed text-cream/58 sm:text-base">
              Marketing, brand, products, AI, and engineering under one roof — sequenced so strategy survives the
              handoff.
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-cream/32">
              HQ · Shyamal 1123, Ahmedabad
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <MagneticLink href="/connect" className="btn-primary group">
              <span>Let&apos;s talk</span>
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </MagneticLink>
            <MagneticLink href="#work" className="btn-ghost group">
              <span>See the work</span>
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </MagneticLink>
          </div>
        </div>
      </div>

      <div
        data-hero-cue
        className="pointer-events-none absolute bottom-6 right-5 hidden items-center gap-3 sm:flex lg:right-10"
        aria-hidden
      >
        <span className="text-[0.58rem] uppercase tracking-[0.28em] text-cream/35">Scroll</span>
        <span className="scroll-cue block h-9 w-px bg-cream/45" />
      </div>
    </section>
  );
}
