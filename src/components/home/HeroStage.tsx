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
        .from("[data-hero-mark]", { scale: 0.94, autoAlpha: 0, duration: 1.6 }, 0)
        .from("[data-hero-a]", { yPercent: 110, duration: 1 }, 0.32)
        .from("[data-hero-b]", { yPercent: 110, duration: 1 }, 0.44)
        .from("[data-hero-foot]", { y: 18, autoAlpha: 0, duration: 0.7 }, 0.62)
        .from("[data-hero-cue]", { autoAlpha: 0, duration: 0.4 }, 0.9);

      gsap.to("[data-hero-mark]", {
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
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh-premium opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_46%,rgba(196,165,116,0.16),transparent_50%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void" />
      <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />

      <div
        data-hero-mark
        className="pointer-events-none relative mx-auto mt-24 aspect-[16/10] w-[min(88vw,420px)] will-change-transform sm:mt-28 lg:absolute lg:right-[-10%] lg:top-1/2 lg:mt-0 lg:h-[min(78vh,820px)] lg:w-[min(62vw,980px)] lg:-translate-y-1/2 lg:aspect-auto"
      >
        <Image
          src="/brand/13utopia-wordmark-3d.png"
          alt=""
          fill
          priority
          className="object-contain object-center drop-shadow-[0_40px_80px_rgba(196,165,116,0.2)] lg:object-right"
          sizes="(max-width: 1024px) 88vw, 62vw"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[58dvh] w-full max-w-[1400px] flex-col justify-end px-5 pb-16 sm:px-8 lg:min-h-dvh lg:justify-center lg:px-10 lg:pb-20 lg:pt-24">
        <div className="max-w-[20ch] lg:max-w-[11ch]">
          <h1 className="sr-only">{site.tagline}</h1>
          <div className="overflow-hidden">
            <p
              data-hero-a
              aria-hidden
              className="font-serif text-[clamp(3.4rem,10vw,7.2rem)] leading-[0.82] tracking-[-0.055em] text-cream"
            >
              Be Unreal
            </p>
          </div>
          <div className="mt-1 overflow-hidden">
            <p
              data-hero-b
              aria-hidden
              className="font-serif text-[clamp(2rem,5.6vw,4.4rem)] italic leading-[0.88] tracking-[-0.03em] text-gold text-gold-shift"
            >
              Be Unreasonable
            </p>
          </div>

          <div data-hero-foot className="mt-10">
            <MagneticLink href="/connect" className="btn-primary group">
              <span>Let&apos;s talk</span>
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
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
