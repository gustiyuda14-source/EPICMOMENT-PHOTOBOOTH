import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-maroon-deep">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm font-light text-cream/70">
              Premium photobooth rental di {SITE.city}. Bikin momen acaramu jadi kenangan
              yang epic.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-sm font-bold uppercase tracking-[0.2em]">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm font-light text-cream/70">
              <li><Link href="/portfolio" className="hover:text-gold">Portfolio</Link></li>
              <li><Link href="/harga" className="hover:text-gold">Harga</Link></li>
              <li><Link href="/booking" className="hover:text-gold">Booking</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-gold">Tentang Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-sm font-bold uppercase tracking-[0.2em]">
              Kontak
            </h3>
            <ul className="space-y-2 text-sm font-light text-cream/70">
              <li>WhatsApp: {SITE.phoneDisplay}</li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  @{SITE.instagramHandle}
                </a>
              </li>
              <li>{SITE.city}, Sulawesi Tenggara</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs font-light text-cream/50">
          &copy; {new Date().getFullYear()} {SITE.name} {SITE.city}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
