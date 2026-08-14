"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { Capsule } from "@/components/home/Capsule";
import { supportingLine } from "@/data/home";

registerGsap();

function fitWidth(block: HTMLElement, longest: HTMLElement, target: number, maxHeight: number) {
  longest.style.fontSize = "80px";
  const measured = longest.scrollWidth;
  if (!measured) return;
  const size = (target / measured) * 80;
  block.style.fontSize = `${size}px`;
  const used = block.getBoundingClientRect().height;
  if (used > maxHeight && used > 0) {
    block.style.fontSize = `${size * (maxHeight / used)}px`;
  }
}

export function HeroStage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const field = root.current;
    if (!field) return;

    const releaseLock = () => document.documentElement.removeAttribute("data-intro");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intro = field.querySelector<HTMLElement>("[data-intro]");
    const stage = field.querySelector<HTMLElement>(".hero-plus");
    const topBlock = field.querySelector<HTMLElement>("[data-hero-tl]");
    const botBlock = field.querySelector<HTMLElement>("[data-hero-br]");
    const topFit = field.querySelector<HTMLElement>("[data-fit='top']");
    const botFit = field.querySelector<HTMLElement>("[data-fit='bot']");

    const layout = () => {
      if (!stage || !topBlock || !botBlock || !topFit || !botFit) return;
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      fitWidth(topBlock, topFit, w * 0.7, h * 0.4);
      fitWidth(botBlock, botFit, w * 0.86, h * 0.4);
    };

    const finish = () => {
      if (intro) gsap.set(intro, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set("[data-hero-meta]", { autoAlpha: 1 });
      releaseLock();
      layout();
    };

    void document.fonts.ready.then(layout);
    window.addEventListener("resize", layout);

    if (reduced) {
      finish();
      return () => window.removeEventListener("resize", layout);
    }

    let failsafe = 0;
    const ctx = gsap.context(() => {
      failsafe = window.setTimeout(finish, 2200);
      gsap.set("[data-hero-meta]", { autoAlpha: 0 });

      gsap
        .timeline({
          onComplete: () => {
            window.clearTimeout(failsafe);
            finish();
          },
        })
        .fromTo(
          "[data-intro-item]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.4, stagger: 0.04, ease: "power2.out" },
        )
        .to({}, { duration: 0.25 })
        .add("flip")
        .to(intro, { backgroundColor: "#000000", duration: 0.38, ease: "power2.inOut" }, "flip")
        .to("[data-intro-copy]", { color: "#f5ebd2", duration: 0.32 }, "flip")
        .to("[data-intro-mark]", { autoAlpha: 0, duration: 0.16 }, "flip+=0.08")
        .to(intro, { autoAlpha: 0, duration: 0.22, ease: "power2.inOut" }, "flip+=0.38")
        .fromTo(
          "[data-hero-meta]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.28, stagger: 0.05, ease: "power2.out", immediateRender: false },
          "-=0.04",
        );
    }, field);

    return () => {
      window.clearTimeout(failsafe);
      window.removeEventListener("resize", layout);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative -mt-20 h-[100svh] overflow-hidden bg-void text-cream lg:-mt-24">
      <div
        data-intro
        className="hero-intro fixed inset-0 z-[80] flex items-center justify-center bg-cream"
        aria-hidden="true"
      >
        <p className="flex items-baseline gap-[0.28em] px-5 text-[clamp(1.05rem,2.1vw,1.5rem)]">
          <span data-intro-item data-intro-copy className="type-hero whitespace-nowrap text-void">
            Be Unreal
          </span>
          <span data-intro-item data-intro-mark className="type-hero whitespace-nowrap text-void">
            13
          </span>
          <span data-intro-item data-intro-copy className="type-hero whitespace-nowrap text-void">
            Be Unreasonable
          </span>
        </p>
      </div>

      <div className="hero-plus">
        <h1 className="sr-only">Be Unreal. Be Unreasonable.</h1>
        <p className="sr-only">{supportingLine}</p>

        <div className="hero-plus-top">
          <p data-hero-tl className="type-hero text-cream">
            <span className="block whitespace-nowrap">Be</span>
            <span data-fit="top" className="block whitespace-nowrap">
              Unreal
            </span>
          </p>
          <span data-hero-meta className="mt-4 inline-block">
            <Capsule>Imagine beyond the obvious</Capsule>
          </span>
        </div>

        <span data-hero-meta className="hero-plus-chevron text-cream" aria-hidden="true">
          <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
            <path d="M5.5 1v10.5M1.25 8.25 5.5 13l4.25-4.75" stroke="currentColor" strokeWidth="1.1" />
          </svg>
        </span>

        <span data-hero-meta className="hero-plus-tr hidden sm:flex">
          <Capsule>13 / 01</Capsule>
        </span>

        <div className="hero-plus-bot">
          <p data-hero-br className="type-hero text-cream">
            <span className="block whitespace-nowrap">Be</span>
            <span data-fit="bot" className="block whitespace-nowrap">
              Unreasonable
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}



