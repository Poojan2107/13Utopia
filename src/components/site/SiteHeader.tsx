"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
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

        <nav className="hidden items-center gap-5 text-sm tracking-wide text-cream/75 lg:flex" aria-label="Primary">
          {nav
            .filter((i) => i.href !== "/")
            .map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-cream">
                {item.label}
              </Link>
            ))}
          <Link
            href="/connect"
            className="rounded-full border border-cream/25 px-4 py-1.5 text-cream transition-colors hover:border-amber-light hover:text-amber-light"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-cream/20 px-3 py-1.5 text-sm text-cream lg:hidden"
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
          className="border-t hairline bg-void px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3 text-sm text-cream/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-1 hover:text-cream" onClick={() => setOpen(false)}>
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
