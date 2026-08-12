"use client";

import { useId } from "react";

export function OrbitText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 200 200"
      className={`spin-orbit pointer-events-none h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <path
          id={id}
          d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          fill="none"
        />
      </defs>
      <text fill="currentColor" fontSize="10.5" letterSpacing="3.2">
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  );
}
