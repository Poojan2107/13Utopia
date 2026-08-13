import Link from "next/link";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesIndex() {
  return (
    <section id="capabilities" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div data-fade className="flex items-end justify-between gap-6">
          <h2 className="font-serif text-[clamp(1.2rem,2vw,1.5rem)] tracking-tight text-cream/55">
            What we build
          </h2>
          <Link
            href="/capabilities"
            className="text-[0.68rem] uppercase tracking-[0.2em] text-cream/40 transition hover:text-amber-light"
          >
            All →
          </Link>
        </div>

        <ul className="mt-10 grid border-t border-cream/10 sm:grid-cols-2" data-stagger>
          {capabilities.map((p) => (
            <li
              key={p.slug}
              data-stagger-item
              className="border-b border-cream/10 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
            >
              <Link href={`/capabilities/${p.slug}`} className="group block py-10 transition">
                <h3 className="font-serif text-[clamp(2rem,3.6vw,3.4rem)] leading-[0.95] tracking-tight text-cream transition group-hover:text-amber-light">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/40">{p.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
