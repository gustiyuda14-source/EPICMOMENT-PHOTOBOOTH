"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/harga", label: "Harga" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cream/10 bg-maroon-deep/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-cream/90 transition hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              className="rounded-full border border-cream px-5 py-2 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-cream hover:text-maroon-deep"
            >
              Booking
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-current" fill="none" strokeWidth={2}>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-cream/10 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium uppercase tracking-wide text-cream/90"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full border border-cream px-5 py-3 text-center text-base font-semibold uppercase tracking-wide text-cream"
            >
              Booking
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
