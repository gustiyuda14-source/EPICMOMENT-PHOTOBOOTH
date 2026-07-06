import Link from "next/link";
import { Logo } from "./Logo";
import { SITE, waLink } from "@/data/site";

const NAV_ITEMS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/harga", label: "Harga" },
  { href: "/booking", label: "Booking" },
  { href: "/tentang-kami", label: "Tentang Kami" },
];

export function Footer() {
  return (
    <footer className="relative bg-maroon-deep/80">
      <div className="divider-gold" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-cream/70">
              Premium photobooth rental di {SITE.city}. Bikin momen acaramu jadi kenangan
              yang epic.
            </p>
            <p className="mt-4 font-script text-2xl text-gold/80">{SITE.tagline}</p>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-sm font-bold uppercase tracking-[0.2em] text-gold/90">
              Navigasi
            </h3>
            <ul className="space-y-3 text-sm font-light text-cream/70">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-gold"
                  >
                    <span className="text-[0.6rem] text-gold/60" aria-hidden="true">
                      ✦
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-sm font-bold uppercase tracking-[0.2em] text-gold/90">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm font-light text-cream/70">
              <li>
                <a
                  href={waLink("Halo Epic Moment PhotoBooth, saya ingin bertanya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-gold"
                >
                  <WhatsAppIcon />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-gold"
                >
                  <InstagramIcon />
                  @{SITE.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PinIcon />
                {SITE.city}, Sulawesi Tenggara
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-cream/10 pt-6 text-center text-xs font-light text-cream/50">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name} {SITE.city}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gold/70" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.24-1.38a9.9 9.9 0 0 0 4.8 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm5.8 14.11c-.24.68-1.38 1.3-1.91 1.38-.49.08-1.1.11-1.78-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.12-4.84-4.31-.14-.19-1.16-1.54-1.16-2.94s.72-2.09.98-2.37c.24-.27.53-.34.71-.34h.51c.16 0 .38-.06.6.46.24.57.81 1.97.88 2.11.07.14.11.3.02.49-.08.19-.13.3-.26.46-.14.16-.29.35-.41.47-.14.13-.28.28-.13.55.16.27.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.19 1.36.27.14.43.11.59-.07.16-.19.68-.79.86-1.06.19-.27.37-.22.62-.13.27.09 1.66.78 1.94.92.27.14.46.2.53.32.06.13.06.71-.18 1.39z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current text-gold/70"
      fill="none"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current text-gold/70"
      fill="none"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
