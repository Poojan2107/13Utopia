"use client";

import { useEffect, type ReactNode } from "react";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";

registerGsap();

export function HomeMotion({ children }: { children: ReactNode }) {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const id = window.setTimeout(refresh, 80);
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return <div>{children}</div>;
}
