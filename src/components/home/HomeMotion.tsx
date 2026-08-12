"use client";

import { useRef, type ReactNode } from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          autoAlpha: 0,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((wrap) => {
        const items = wrap.querySelectorAll("[data-stagger-item]");
        if (!items.length) return;
        gsap.from(items, {
          y: 32,
          autoAlpha: 0,
          duration: 0.95,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: wrap, start: "top 78%" },
        });
      });

      const scaleEl = root.current?.querySelector("[data-pin-scale]");
      if (scaleEl) {
        gsap.fromTo(
          scaleEl,
          { y: 24 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: scaleEl,
              start: "top 90%",
              end: "top 55%",
              scrub: 0.6,
            },
          },
        );
      }
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
