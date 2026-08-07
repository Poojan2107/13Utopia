"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-void/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="relative block h-8 w-[7.5rem] shrink-0" aria-label={`${site.name} home`}>
          <Image
            src="/brand/13utopia-lockup-flat.png"
            alt={site.name}
            fill
            className="object-contain object-left"
            priority
            sizes="120px"
          />
        </Link>

        <nav className="hidden items-center gap-1 text-[0.8125rem] tracking-wide lg:flex" aria-label="Primary">
          {nav
            .filter((i) => i.href !== "/" && i.href !== "/connect")
            .map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1.5 transition-colors ${
                    active ? "bg-cream/8 text-cream" : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          <Link href="/connect" className="btn-primary ml-2 !px-4 !py-1.5">
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-cream/20 px-3.5 py-1.5 text-sm text-cream transition hover:border-amber-light hover:text-amber-light lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t hairline bg-void/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1 text-sm">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-3 py-2.5 ${
                      active ? "bg-cream/8 text-cream" : "text-cream/70 hover:text-cream"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
