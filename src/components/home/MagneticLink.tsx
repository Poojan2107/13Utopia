"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";

export function MagneticLink({
  href,
  className = "",
  children,
  external = false,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [delta, setDelta] = useState({ x: 0, y: 0 });

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    setDelta({
      x: (e.clientX - (r.left + r.width / 2)) * 0.32,
      y: (e.clientY - (r.top + r.height / 2)) * 0.32,
    });
  };

  const reset = () => setDelta({ x: 0, y: 0 });

  const style = {
    transform: `translate3d(${delta.x}px, ${delta.y}px, 0)`,
    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        style={style}
        onPointerMove={onMove}
        onPointerLeave={reset}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      style={style}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </Link>
  );
}
