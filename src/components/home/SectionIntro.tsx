import Link from "next/link";
import type { ReactNode } from "react";

export function SectionIntro({
  index,
  title,
  italic,
  action,
  align = "left",
}: {
  index: string;
  title: ReactNode;
  italic?: string;
  action?: { href: string; label: string };
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center" ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">{index}</p>
        <h2 className="mt-4 font-serif text-[clamp(2.5rem,5.8vw,4.85rem)] leading-[0.96] tracking-tight text-cream">
          {title}
          {italic ? <span className="font-serif italic text-amber-light"> {italic}</span> : null}
        </h2>
      </div>
      {action ? (
        <Link
          href={action.href}
          className="inline-flex w-fit rounded-[var(--radius-square)] border border-cream/20 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-cream/50 transition hover:border-amber-light hover:text-amber-light"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
