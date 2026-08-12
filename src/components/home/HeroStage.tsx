"use client";

import Image from "next/image";
import { useRef } from "react";
import { MagneticLink } from "@/components/home/MagneticLink";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function HeroStage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from("[data-hero-plane]", { scale: 1.1, duration: 2.1 }, 0)
        .from("[data-hero-kicker]", { y: 14, autoAlpha: 0, duration: 0.55 }, 0.35)
        .from("[data-hero-a]", { y: 56, autoAlpha: 0, duration: 1.05 }, 0.4)
        .from("[data-hero-b]", { y: 56, autoAlpha: 0, duration: 1.05 }, 0.52)
        .from("[data-hero-foot]", { y: 20, autoAlpha: 0, duration: 0.7 }, 0.75);

      gsap.to("[data-hero-plane]", {
        scale: 1.12,
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
    <section ref={root} className="relative -mt-20 min-h-dvh overflow-hidden lg:-mt-24">
      <div data-hero-plane className="absolute inset-0 origin-center will-change-transform">
        <Image
          src="/brand/13utopia-wordmark-3d.png"
          alt=""
          fill
          priority
          className="object-contain object-[center_32%] lg:object-[72%_46%] lg:scale-[1.45]"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,transparent_0%,rgba(0,0,0,0.15)_42%,rgba(0,0,0,0.72)_100%)]"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/25"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col justify-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12">
        <p
          data-hero-kicker
          className="text-[0.65rem] uppercase tracking-[0.34em] text-amber-light/85"
        >
          Ahmedabad studio
        </p>

        <h1 className="sr-only">Be Unreal Be Unreasonable</h1>
        <p
          data-hero-a
          aria-hidden
          className="mt-5 max-w-[18ch] font-serif text-[clamp(4rem,12.5vw,10.5rem)] leading-[0.8] tracking-[-0.05em] text-cream"
        >
          Be Unreal
        </p>
        <p
          data-hero-b
          aria-hidden
          className="mt-1 text-right font-serif text-[clamp(2.5rem,8.5vw,7.2rem)] italic leading-[0.86] tracking-[-0.035em]"
        >
          <span className="text-gold text-gold-shift">Be Unreasonable</span>
        </p>

        <div
          data-hero-foot
          className="mt-10 flex flex-col gap-6 border-t border-cream/15 pt-7 sm:mt-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-md text-sm leading-relaxed text-cream/50 sm:text-base">
            Marketing, brand, products, AI, and engineering under one roof — sequenced so strategy survives the
            handoff.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <MagneticLink href="/connect" className="btn-primary">
              Let&apos;s talk
            </MagneticLink>
            <MagneticLink href="#work" className="btn-ghost">
              See the work
            </MagneticLink>
          </div>
        </div>
      </div>
    </section>
  );
}
