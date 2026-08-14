"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

registerGsap();

export function StudioCursor() {
  const wrap = useRef<HTMLDivElement>(null);
  const ringMove = useRef<HTMLDivElement>(null);
  const core = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const root = wrap.current;
    const ringEl = ringMove.current;
    const coreEl = core.current;
    if (!root || !ringEl || !coreEl) return;

    let armed = false;
    document.documentElement.classList.add("cursor-studio");

    const xRing = gsap.quickTo(ringEl, "x", { duration: 0.45, ease: "power3.out" });
    const yRing = gsap.quickTo(ringEl, "y", { duration: 0.45, ease: "power3.out" });
    const xCore = gsap.quickTo(coreEl, "x", { duration: 0.12, ease: "power3.out" });
    const yCore = gsap.quickTo(coreEl, "y", { duration: 0.12, ease: "power3.out" });

    const move = (e: PointerEvent) => {
      if (!armed) {
        armed = true;
        root.style.display = "block";
      }
      xRing(e.clientX);
      yRing(e.clientY);
      xCore(e.clientX);
      yCore(e.clientY);
      const hot =
        e.target instanceof Element &&
        Boolean(e.target.closest("a, button, [role='button'], input, textarea, select"));
      root.classList.toggle("is-hot", hot);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      document.documentElement.classList.remove("cursor-studio");
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div ref={wrap} className="studio-cursor hidden" aria-hidden>
      <div ref={ringMove} className="absolute">
        <div className="studio-cursor-ring" />
      </div>
      <div ref={core} className="studio-cursor-core absolute" />
    </div>
  );
}
