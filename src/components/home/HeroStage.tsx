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
        .from("[data-hero-kicker]", { y: 14, autoAlpha: 0, duration: 0.5 }, 0.28)
        .from("[data-hero-a]", { yPercent: 110, duration: 1 }, 0.36)
        .from("[data-hero-b]", { yPercent: 110, duration: 1 }, 0.48)
        .from("[data-hero-foot]", { y: 18, autoAlpha: 0, duration: 0.7 }, 0.68)
        .from("[data-hero-cue]", { autoAlpha: 0, duration: 0.4 }, 0.95);

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,rgba(196,165,116,0.14),transparent_52%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void" />
      <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:justify-center lg:px-10 lg:pb-16 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
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
                className="font-serif text-[clamp(3rem,8vw,6.4rem)] leading-[0.84] tracking-[-0.05em] text-cream"
              >
                Be Unreal
              </p>
            </div>
            <div className="mt-1 overflow-hidden">
              <p
                data-hero-b
                aria-hidden
                className="font-serif text-[clamp(1.9rem,5.2vw,4.2rem)] italic leading-[0.9] tracking-[-0.03em] text-gold text-gold-shift"
              >
                Be Unreasonable
              </p>
            </div>

            <div data-hero-foot className="mt-8 space-y-6">
              <p className="max-w-md text-sm leading-relaxed text-cream/55 sm:text-base">
                Marketing, brand, products, AI, and engineering under one roof — sequenced so strategy survives the
                handoff.
              </p>
              <div className="flex flex-wrap items-center gap-3">
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
            data-hero-mark
            className="order-1 relative mx-auto aspect-[16/10] w-full max-w-[520px] will-change-transform lg:order-2 lg:max-w-none lg:aspect-[5/4]"
          >
            <Image
              src="/brand/13utopia-wordmark-3d.png"
              alt=""
              fill
              priority
              className="object-contain object-center drop-shadow-[0_40px_80px_rgba(196,165,116,0.18)] lg:object-right"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
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
