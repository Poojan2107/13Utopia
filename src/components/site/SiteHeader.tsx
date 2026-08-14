"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cta, nav, site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [introLock, setIntroLock] = useState(false);
  const [onArt, setOnArt] = useState(false);
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

  useEffect(() => {
    if (pathname !== "/") {
      setIntroLock(false);
      setOnArt(false);
      return;
    }
    const sync = () => setIntroLock(document.documentElement.getAttribute("data-intro") === "locked");
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-intro"] });

    const arts = document.querySelectorAll("[data-field='art']");
    const io = new IntersectionObserver(
      (entries) => {
        setOnArt(entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.4));
      },
      { threshold: [0.4, 0.7] },
    );
    arts.forEach((node) => io.observe(node));

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        introLock ? "pointer-events-none invisible" : ""
      }`}
      aria-hidden={introLock}
    >
      <div
        className={`mx-auto grid h-16 max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 transition-[opacity,colors,background-color] duration-500 sm:h-[4.5rem] sm:px-8 lg:px-10 ${
          onArt
            ? "border-b border-void/10 bg-cream/86 backdrop-blur-xl text-void"
            : scrolled
              ? "border-b border-cream/10 bg-void/88 backdrop-blur-xl"
              : pathname === "/"
                ? "bg-transparent opacity-80"
                : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative block h-7 w-[6.75rem] shrink-0 sm:h-8 sm:w-[7.5rem]" aria-label={`${site.name} home`}>
          <Image
            src="/brand/13utopia-lockup-flat.png"
            alt={site.name}
            fill
            className={`object-contain object-left transition duration-500 ${onArt ? "invert" : ""}`}
            priority
            sizes="120px"
          />
        </Link>

        <nav className={`hidden items-center justify-center gap-1 text-[0.72rem] tracking-[0.04em] lg:flex xl:gap-2 ${onArt ? "text-void/50" : "text-cream/55"}`} aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative block overflow-hidden px-4 py-3 leading-none ${active ? (onArt ? "text-void" : "text-cream") : onArt ? "hover:text-void" : "hover:text-cream"}`}
              >
                <span className="flex h-[1em] flex-col overflow-hidden">
                  <span className="transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                    {item.label}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            href={cta.persistentHref}
            className={`btn-pill hidden sm:inline-flex ${onArt ? "border-void/35 text-void hover:border-void hover:bg-void/5" : ""}`}
          >
            {cta.persistent}
            <span aria-hidden>â†—</span>
          </Link>
          <button
            type="button"
            className={`text-[0.7rem] uppercase tracking-[0.22em] lg:hidden ${onArt ? "text-void" : "text-cream"}`}
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
          <ul className="flex flex-col gap-5 text-2xl tracking-tight text-cream">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={cta.persistentHref} className="btn-pill mt-8 inline-flex" onClick={() => setOpen(false)}>
            {cta.persistent}
            <span aria-hidden>â†—</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

