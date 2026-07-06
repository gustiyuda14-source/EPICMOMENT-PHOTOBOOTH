"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ease-out-expo ${
        scrolled || open
          ? "border-cream/10 bg-maroon-deep/80 shadow-lg shadow-black/25 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-maroon-deep/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-1 text-sm font-medium uppercase tracking-wide transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 after:ease-out-expo hover:text-gold hover:after:w-full ${
                    active ? "text-gold after:w-full" : "text-cream/90 after:w-0"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/booking"
              className="rounded-full border border-gold/60 bg-gold/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-gold transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-gold hover:text-maroon-deep hover:shadow-gold-glow"
            >
              Booking
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-cream transition-colors hover:text-gold md:hidden"
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

      {/* grid-rows 0fr -> 1fr animates height smoothly without measuring */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 border-t border-cream/10 px-6 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`block py-3 text-base font-medium uppercase tracking-wide transition-colors ${
                    pathname === link.href ? "text-gold" : "text-cream/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="mt-2 block rounded-full bg-gold-gradient px-5 py-3 text-center text-base font-semibold uppercase tracking-wide text-maroon-deep"
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
