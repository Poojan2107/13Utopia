"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

registerGsap();

const worlds = ["CREATE", "BUILD", "GROW"];

export function HeroStage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-hero-image]", { scale: 1.12, autoAlpha: 0, duration: 1.4 }, 0)
        .from("[data-hero-grid]", { autoAlpha: 0, duration: 1.1 }, 0.15)
        .from("[data-hero-kicker]", { y: 16, autoAlpha: 0, duration: 0.7 }, 0.28)
        .from("[data-hero-line]", { yPercent: 110, duration: 0.9, stagger: 0.1 }, 0.32)
        .from("[data-hero-copy]", { y: 14, autoAlpha: 0, duration: 0.65 }, 0.7)
        .from("[data-hero-world]", { y: 12, autoAlpha: 0, duration: 0.55, stagger: 0.08 }, 0.75)
        .from("[data-hero-foot]", { autoAlpha: 0, duration: 0.6 }, 0.9);

      gsap.to("[data-hero-image]", {
        yPercent: 4,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative -mt-20 min-h-[100svh] overflow-hidden bg-void text-cream">
      <div className="absolute inset-0 bg-void" aria-hidden="true" />

      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/brand/13utopia-wordmark-3d.png"
          alt=""
          fill
          priority
          sizes="100vw"
          data-hero-image
          className="object-cover object-[68%_48%] opacity-[0.9] sm:object-[67%_48%] lg:object-[69%_48%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_17%,rgba(0,0,0,0.42)_48%,rgba(0,0,0,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,transparent_23%,transparent_68%,rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_47%,transparent_12%,rgba(0,0,0,0.3)_72%,#000_100%)]" />
      </div>

      <div data-hero-grid className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(245,235,210,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(245,235,210,0.12)_1px,transparent_1px)] [background-size:clamp(3rem,8vw,8rem)_clamp(3rem,8vw,8rem)] [mask-image:linear-gradient(90deg,black,transparent_85%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 pb-8 pt-28 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
        <div className="flex items-start justify-between gap-8 text-[0.57rem] font-semibold uppercase tracking-[0.3em] text-cream/48">
          <p data-hero-kicker className="flex items-center gap-3">
            <span className="h-px w-8 bg-amber-light" />
            Creative technology + growth
          </p>
          <p className="hidden sm:block">Ahmedabad · India</p>
        </div>

        <div className="flex flex-1 items-end pb-10 pt-16 sm:pb-16 lg:pb-20">
          <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <p className="mb-5 text-[0.6rem] uppercase tracking-[0.28em] text-cream/44">13 UTOPiA is not another agency.</p>
              <h1 className="max-w-[9ch] overflow-hidden font-serif text-[clamp(4.7rem,11vw,11rem)] leading-[0.74] tracking-[-0.07em]">
                <span data-hero-line className="block">Be Unreal.</span>
                <span data-hero-line className="block italic text-amber-light">Be Unreasonable.</span>
              </h1>
              <p data-hero-copy className="mt-8 max-w-[31rem] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.45] text-cream/72">
                Imagination, technology, and growth working as one system to build what conventional companies cannot.
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border-l border-cream/20 pl-5 sm:pl-7">
                <p className="mb-5 text-[0.58rem] uppercase tracking-[0.28em] text-cream/42">Choose your entry point</p>
                <div className="flex flex-wrap gap-2">
                  {worlds.map((world) => (
                    <Link key={world} href={`/capabilities#${world.toLowerCase()}`} data-hero-world className="rounded-full border border-cream/22 px-4 py-2.5 text-[0.62rem] font-semibold tracking-[0.22em] text-cream/76 transition-colors duration-300 hover:border-amber-light hover:bg-amber-light hover:text-void">
                      {world}
                    </Link>
                  ))}
                </div>
                <p className="mt-6 max-w-[25ch] text-sm leading-6 text-cream/48">Create the signal. Build the system. Grow the result.</p>
              </div>
            </div>
          </div>
        </div>

        <div data-hero-foot className="flex items-end justify-between gap-6 border-t border-cream/16 pt-4 text-[0.56rem] uppercase tracking-[0.25em] text-cream/38">
          <span>01 — The point of view</span>
          <Link href="/case-stories" className="transition-colors hover:text-cream">See what changed <span className="ml-2 text-amber-light">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
