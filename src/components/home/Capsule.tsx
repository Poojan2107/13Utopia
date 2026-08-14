import type { ReactNode } from "react";

export function Capsule({
  children,
  invert = false,
  className = "",
}: {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-[0.85rem] py-[0.38rem] text-[0.58rem] font-medium uppercase leading-none tracking-[0.16em] ${
        invert ? "border-void/30 text-void" : "border-cream/38 text-cream"
      } ${className}`}
    >
      {children}
    </span>
  );
}
