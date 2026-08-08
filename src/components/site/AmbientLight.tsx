"use client";

import { useEffect, useState } from "react";

/** Soft amber follow-light — signature atmosphere, reduced-motion safe */
export function AmbientLight() {
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    setOn(true);
    const move = (e: PointerEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  if (!on) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{
        background: `radial-gradient(520px circle at ${pos.x}% ${pos.y}%, rgba(196,165,116,0.11), transparent 55%)`,
        transition: "background 0.12s linear",
      }}
    />
  );
}
