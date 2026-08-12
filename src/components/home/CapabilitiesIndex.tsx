import Link from "next/link";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesIndex() {
  return (
    <section id="capabilities" className="scroll-mt-28 border-t border-cream/10 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div data-fade className="max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">03 — Capabilities</p>
          <h2 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-tight text-cream">
            Six pillars. <span className="italic text-amber-light">One studio.</span>
          </h2>
        </div>

        <ul className="mt-14" data-stagger>
          {capabilities.map((p, i) => (
            <li key={p.slug} data-stagger-item>
              <Link
                href={`/capabilities/${p.slug}`}
                className="group grid gap-4 border-t border-cream/10 py-9 transition-colors duration-500 hover:bg-cream/[0.015] lg:grid-cols-[7rem_1fr_auto] lg:items-center lg:gap-10 lg:py-11"
              >
                <span className="font-serif text-[clamp(2.8rem,5vw,4.2rem)] leading-none tracking-[-0.05em] text-cream/15 tabular-nums transition duration-500 group-hover:text-amber-light/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(1.75rem,3.2vw,2.85rem)] tracking-tight text-cream transition duration-500 group-hover:text-amber-light">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/42">{p.blurb}</p>
                </div>
                <span className="hidden text-xl text-cream/20 transition group-hover:text-amber-light lg:block">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
