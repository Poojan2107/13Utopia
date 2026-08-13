"use client";

import Image from "next/image";
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

    const releaseLock = () => document.documentElement.removeAttribute("data-intro");

    if (reduced) {
      setLoading(false);
      releaseLock();
      return;
    }

    const loaderTimer = window.setTimeout(() => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            setLoading(false);
            releaseLock();
          },
        });

        timeline
          // RAW: the outline ring draws itself on the void.
          .fromTo(
            "[data-loader-ring]",
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 1.05, ease: "power2.inOut" },
          )
          // The brand mark resolves: amber light first, then the cream wordmark.
          .from("[data-loader-glow]", { autoAlpha: 0, scale: 0.7, duration: 0.9, ease: "power3.out" }, "-=0.55")
          .from("[data-loader-mark]", { autoAlpha: 0, yPercent: 10, scale: 0.93, duration: 0.9, ease: "power3.out" }, "-=0.85")
          .from("[data-loader-line]", { autoAlpha: 0, y: 10, duration: 0.55, ease: "power2.out" }, "-=0.5")
          // Everything disappears; the hero snaps to FUTURE underneath.
          .to("[data-loader-mark]", { autoAlpha: 0, yPercent: -5, scale: 0.97, duration: 0.4, ease: "power2.in" }, "+=0.4")
          .to("[data-loader-line]", { autoAlpha: 0, duration: 0.28 }, "<")
          .to("[data-loader-glow]", { autoAlpha: 0, scale: 1.08, duration: 0.4 }, "<")
          .to("[data-loader-ring]", { autoAlpha: 0, scale: 1.05, duration: 0.4 }, "<")
          .to("[data-loader]", { clipPath: "inset(0 0 100% 0)", duration: 0.95, ease: "power4.inOut" }, "-=0.08")
          .from("[data-hero-orb]", { scale: 0.8, rotate: -14, autoAlpha: 0, duration: 1.35, ease: "power3.out" }, "-=0.55")
          .from("[data-hero-ring]", { rotate: -18, scale: 0.88, autoAlpha: 0, duration: 1.05 }, "-=0.9")
          .from("[data-hero-line]", { scaleX: 0, transformOrigin: "left center", duration: 0.8 }, "-=0.85")
          .from("[data-hero-word]", { yPercent: 112, rotate: 4, duration: 1.1, stagger: 0.08 }, "-=0.6")
          .from("[data-hero-meta]", { autoAlpha: 0, y: 12, duration: 0.55 }, "-=0.5");
      }, element);

      return () => ctx.revert();
    }, 500);

    return () => {
      window.clearTimeout(loaderTimer);
      releaseLock();
    };
  }, []);

  return (
    <section ref={root} className="relative -mt-20 min-h-[100svh] overflow-hidden bg-void-soft text-cream">
      {/* Atmosphere — void field, amber light only */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_73%_42%,rgba(196,165,116,0.34),transparent_26%),radial-gradient(circle_at_55%_68%,rgba(124,101,61,0.3),transparent_32%),radial-gradient(circle_at_96%_8%,rgba(196,165,116,0.22),transparent_28%),linear-gradient(120deg,#050505_0%,#0a0a0a_38%,#151008_70%,#050505_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.42)_74%,#000_100%)]" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(245,235,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,235,210,0.08)_1px,transparent_1px)] [background-size:clamp(4rem,9vw,9rem)_clamp(4rem,9vw,9rem)] [mask-image:linear-gradient(110deg,black,transparent_78%)]"
        aria-hidden="true"
      />
      <div className="stage-grain absolute inset-0" aria-hidden="true" />

      {/* Amber light orb — the 3D wordmark's cast light, not a colour explosion */}
      <div
        data-hero-orb
        className="pointer-events-none absolute left-[54%] top-[24%] h-[min(60vw,47rem)] w-[min(60vw,47rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_37%_30%,rgba(255,250,235,0.5),rgba(196,165,116,0.3)_14%,rgba(124,101,61,0.18)_38%,rgba(124,101,61,0.08)_58%,transparent_72%)] mix-blend-screen"
        aria-hidden="true"
      />
      <div
        data-hero-ring
        className="pointer-events-none absolute right-[-15vw] top-[10%] h-[30rem] w-[30rem] rounded-full border border-amber-light/25 [transform:rotate(23deg)_scaleX(1.75)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[12%] h-24 w-[clamp(14rem,25vw,25rem)] rounded-full border border-cream/15 [transform:rotate(-28deg)_skewX(-24deg)]"
        aria-hidden="true"
      />

      {/* Intro loader — void → outline ring draws → 13UTOPiA wordmark → gone */}
      {loading && (
        <div
          data-loader
          className="hero-loader fixed inset-0 z-[80] flex items-center justify-center bg-[#050505]"
          aria-hidden="true"
        >
          <span className="absolute left-5 top-5 font-body text-[0.58rem] font-medium uppercase tracking-[0.4em] text-cream/30">
            13 / 00
          </span>
          <span className="absolute right-5 top-5 h-px w-14 bg-cream/20" aria-hidden="true" />

          <div className="relative flex flex-col items-center">
            <div className="relative flex h-[min(72vw,26rem)] w-[min(72vw,26rem)] items-center justify-center">
              <svg
                data-loader-ring
                className="absolute inset-0 h-full w-full -rotate-90 text-cream/30"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="47.5"
                  pathLength="1"
                  stroke="currentColor"
                  strokeWidth="0.18"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  strokeLinecap="round"
                />
              </svg>
              <div
                data-loader-glow
                className="absolute h-[min(56vw,19rem)] w-[min(56vw,19rem)] rounded-full bg-amber-light/25 blur-[70px]"
                aria-hidden="true"
              />
              <div data-loader-mark className="relative w-[min(68vw,24rem)]">
                <Image
                  src="/brand/13utopia-wordmark-3d-wide.png"
                  alt=""
                  width={1536}
                  height={1024}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
            <p data-loader-line className="mt-7 text-[0.6rem] font-medium uppercase tracking-[0.44em] text-cream/55">
              Be Unreal. Be Unreasonable.
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col px-5 pb-7 pt-28 sm:px-8 sm:pb-10 lg:px-12">
        <div className="flex flex-1 items-center">
          <div className="relative w-full">
            <div data-hero-line className="absolute left-0 top-[17%] h-px w-[clamp(7rem,25vw,25rem)] bg-amber-light/70" aria-hidden="true" />
            <div
              data-hero-mark
              className="pointer-events-none absolute right-[7%] top-[9%] text-[0.55rem] uppercase tracking-[0.36em] text-amber-light/60"
              aria-hidden="true"
            >
              13 / 01
            </div>
            <div className="ml-[7vw] max-w-[93vw] sm:ml-[9vw] lg:ml-[11vw]">
              <h1 className="max-w-[13ch] overflow-visible font-serif text-[clamp(4.2rem,12.5vw,13.5rem)] font-medium leading-[0.76] tracking-[-0.08em] sm:max-w-[11ch]">
                <span data-hero-word className="block text-cream">
                  Be Unreal.
                </span>
                <span data-hero-word className="ml-[12vw] block italic text-amber-light sm:ml-[16vw]">
                  Be
                </span>
                <span data-hero-word className="ml-[3vw] block text-cream sm:ml-[6vw]">
                  Unreasonable.
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div data-hero-meta className="flex items-end justify-between border-t border-cream/20 pt-4" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-light shadow-[0_0_22px_rgba(196,165,116,0.9)]" />
          <span className="h-px w-24 bg-cream/35 sm:w-40" />
        </div>
      </div>
    </section>
  );
}
