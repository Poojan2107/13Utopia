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
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div data-fade className="mx-auto max-w-[1400px]">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">06 — Proof</p>

        <figure className="mt-10">
          <span aria-hidden className="block font-serif text-[4.5rem] leading-none text-amber-light/35">
            “
          </span>
          <blockquote
            key={current.id}
            className="quote-swap -mt-6 max-w-4xl font-serif text-[clamp(1.5rem,3.1vw,2.65rem)] leading-[1.22] tracking-tight text-cream"
          >
            {current.quote}
          </blockquote>
          <figcaption className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-serif text-xl text-cream">{current.name}</p>
              <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-cream/40">
                {current.role}, {current.company}
              </p>
            </div>
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Quote from ${t.name}`}
                  onClick={() => setActive(i)}
                  className={`h-1 w-9 rounded-[1px] transition ${
                    i === active ? "bg-amber-light" : "bg-cream/18 hover:bg-cream/40"
                  }`}
                />
              ))}
            </div>
          </figcaption>
        </figure>

        <dl className="mt-20 grid gap-8 border-t border-cream/10 pt-12 sm:grid-cols-3 sm:gap-0">
          {site.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`sm:px-8 ${i === 0 ? "sm:pl-0" : "sm:border-l sm:border-cream/10"} ${
                i === site.metrics.length - 1 ? "sm:pr-0" : ""
              }`}
            >
              <dd className="font-serif text-[clamp(3rem,6.5vw,5rem)] leading-none tracking-tight text-cream">
                {m.value}
              </dd>
              <dt className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-amber-light">{m.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[0.65rem] text-cream/32">{site.metricsNote}</p>
      </div>
    </section>
  );
}
