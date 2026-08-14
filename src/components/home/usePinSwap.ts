"use client";

import { gsap } from "@/lib/gsap";

export function pinSwap(root: HTMLElement | null, selector: string, screens = 1.6) {
  if (!root) return;
  const items = gsap.utils.toArray<HTMLElement>(selector, root);
  if (items.length < 2) {
    items[0]?.classList.add("is-on");
    return;
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    root.querySelector("[data-swap-stage]")?.classList.add("is-static");
    items.forEach((item) => item.classList.add("is-on"));
    return;
  }

  const show = (index: number) => {
    items.forEach((item, i) => item.classList.toggle("is-on", i === index));
  };
  show(0);

  gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top top",
      end: `+=${screens * 100}%`,
      pin: true,
      scrub: 0.4,
      anticipatePin: 1,
      onUpdate: (self) => {
        const i = Math.min(items.length - 1, Math.floor(self.progress * items.length + 0.001));
        show(i);
      },
    },
  });
}
