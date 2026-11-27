"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { Monogram } from "./Monogram";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-[73rem] rounded-2xl border border-line bg-[#0b0b0b]/80 backdrop-blur-xl">
        <div className="grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-4 px-3 sm:h-16 sm:px-4">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`nav-link rounded-lg px-3 py-2 transition-colors hover:text-ink ${
                      isActive(item.href) ? "text-ink" : "text-ink-2"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="justify-self-start rounded-lg p-2 text-ink-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 9h16M4 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-2 text-[13px] font-medium sm:gap-2.5 sm:text-[15px]">
            <Monogram />
            <span className="whitespace-nowrap">{site.name}</span>
          </Link>

          <div className="flex justify-end">
            <Link href="/contact" className="btn btn-light !rounded-xl !px-4 !py-2.5 text-sm">
              Let&apos;s chat
            </Link>
          </div>
        </div>

        <nav id="mobile-nav" aria-label="Main" hidden={!open} className="border-t border-line md:hidden">
          <ul className="flex flex-col p-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
