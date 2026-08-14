"use client";

import { useRef, type ReactNode } from "react";
import { registerGsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

registerGsap();

export function ChapterStage({
  id,
  screens = 2,
  className = "",
  pinClassName = "",
  pinOnMobile = false,
  children,
}: {
  id?: string;
  screens?: number;
  className?: string;
  pinClassName?: string;
  pinOnMobile?: boolean;
  children: ReactNode;
}) {
  const root = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      if (reduced || (mobile && !pinOnMobile) || screens <= 1) return;
      if (!pin.current) return;

      ScrollTrigger.create({
        trigger: pin.current,
        start: "top top",
        end: () => `+=${Math.max(screens - 1, 1) * window.innerHeight}`,
        pin: true,
        scrub: 0.65,
        anticipatePin: 1,
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id={id} className={`relative ${className}`}>
      <div ref={pin} className={`relative flex min-h-[100svh] flex-col overflow-hidden ${pinClassName}`}>
        {children}
      </div>
    </section>
  );
}
