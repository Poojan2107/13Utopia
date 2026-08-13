"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-5 transition-colors duration-500 sm:h-[4.25rem] sm:px-8 lg:px-10 ${
          scrolled ? "border-b border-cream/10 bg-void/90 backdrop-blur-xl" : "bg-void/55 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="relative block h-7 w-[6.75rem] shrink-0 sm:h-8 sm:w-[7.5rem]" aria-label={`${site.name} home`}>
          <Image
            src="/brand/13utopia-lockup-flat.png"
            alt={site.name}
            fill
            className="object-contain object-left"
            priority
            sizes="120px"
          />
        </Link>

        <nav className="hidden items-center gap-5 text-[0.62rem] uppercase tracking-[0.18em] lg:flex xl:gap-7" aria-label="Primary">
          {nav
            .filter((i) => i.href !== "/" && i.href !== "/connect")
            .map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors ${
                    active ? "text-cream" : "text-cream/40 hover:text-cream"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span aria-hidden className="absolute inset-x-0 -bottom-0.5 h-px bg-amber-light" />
                  )}
                </Link>
              );
            })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/connect"
            className="hidden rounded-[var(--radius-square)] bg-cream px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.18em] text-void transition hover:bg-cream-dim sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <button
            type="button"
            className="text-[0.7rem] uppercase tracking-[0.22em] text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-b border-cream/10 bg-void px-5 py-8 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-5 text-2xl font-serif tracking-tight">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/80 hover:text-cream" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
