import Link from "next/link";
import { worlds } from "@/data/home";

export function CraftsExplore() {
  return (
    <section id="crafts" className="border-t border-cream/10 bg-void-soft text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[0.62rem] uppercase tracking-[0.28em] text-amber-light">04 — What we do</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em]">
              Exploration, not a catalogue.
            </h2>
          </div>
          <Link href="/capabilities" className="text-[0.72rem] uppercase tracking-[0.18em] text-cream/45 transition hover:text-cream">
            All capabilities →
          </Link>
        </div>
        <div className="mt-16 grid gap-12 border-t border-cream/10 pt-12 lg:grid-cols-3">
          {worlds.map((world) => (
            <div key={world.id} data-stagger>
              <Link href={world.href} className="text-[0.72rem] uppercase tracking-[0.22em] text-amber-light">
                {world.word}
              </Link>
              <ul className="mt-6 space-y-0" data-stagger>
                {world.crafts.map((craft) => (
                  <li key={craft} data-stagger-item className="border-b border-cream/10 py-3 text-[1.05rem] text-cream/78">
                    {craft}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
