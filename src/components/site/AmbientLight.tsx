"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function AmbientLight() {
  const pathname = usePathname();
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse || pathname === "/") return;

    setOn(true);
    const move = (e: PointerEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [pathname]);

  if (!on) return null;

  return (
    <div
      aria-hidden
      className="ambient-light pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{
        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(196,165,116,0.14), transparent 42%)`,
        transition: "background 0.12s linear",
      }}
    />
  );
}
