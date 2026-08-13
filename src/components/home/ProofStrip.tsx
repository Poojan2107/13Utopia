"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import testimonials from "@/data/testimonials.json";

export function ProofStrip() {
  const [active, setActive] = useState(0);
  const current = testimonials[active] ?? testimonials[0];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (testimonials.length < 2) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(id);
  }, []);

  if (!current) return null;

  return (
    <section className="px-5 py-28 sm:px-8 sm:py-36 lg:px-10">
      <div data-fade className="mx-auto max-w-[1400px]">
        <figure className="lg:grid lg:grid-cols-12 lg:gap-12">
          <blockquote
            key={current.id}
            className="quote-swap font-serif text-[clamp(1.7rem,3.4vw,3.1rem)] leading-[1.18] tracking-tight text-cream lg:col-span-8"
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col justify-end lg:col-span-4 lg:mt-0">
            <p className="font-serif text-xl text-cream">{current.name}</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-cream/40">
              {current.role}, {current.company}
            </p>
            <div className="mt-6 flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Quote from ${t.name}`}
                  onClick={() => setActive(i)}
                  className={`h-1 w-8 rounded-[1px] transition ${
                    i === active ? "bg-amber-light" : "bg-cream/18 hover:bg-cream/40"
                  }`}
                />
              ))}
            </div>
          </figcaption>
        </figure>

        <dl className="mt-16 grid gap-10 border-t border-cream/10 pt-12 sm:grid-cols-3">
          {site.metrics.map((m) => (
            <div key={m.label}>
              <dd className="font-serif text-[clamp(2.8rem,6vw,4.8rem)] leading-none tracking-tight text-cream">
                {m.value}
              </dd>
              <dt className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-amber-light">{m.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[0.65rem] text-cream/30">{site.metricsNote}</p>
      </div>
    </section>
  );
}
