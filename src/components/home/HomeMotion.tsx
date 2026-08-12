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
          y: 36,
          autoAlpha: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((wrap) => {
        const items = wrap.querySelectorAll("[data-stagger-item]");
        if (!items.length) return;
        gsap.from(items, {
          y: 28,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: wrap, start: "top 82%" },
        });
      });

      const scaleEl = root.current?.querySelector("[data-pin-scale]");
      if (scaleEl) {
        gsap.fromTo(
          scaleEl,
          { y: 40, scale: 0.97 },
          {
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: scaleEl,
              start: "top 92%",
              end: "top 58%",
              scrub: 0.7,
            },
          },
        );
      }
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
