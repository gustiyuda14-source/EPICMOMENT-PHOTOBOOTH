 import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { PriceTable } from "@/components/PriceTable";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PRICING, SERVICE_INCLUDES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Harga",
  description: "Daftar harga sewa photobooth Epic Moment — format Photo Strip 2R dan Polaroid 4R, unlimited maupun limited print.",
};

export default function HargaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Price List" title="Our Packages" script="choose your moment" />

      <div className="mt-14 space-y-20">
        {PRICING.map((format) => (
          <div key={format.format}>
            <div className="text-center">
              <h2 className="font-serif text-2xl font-bold uppercase tracking-wide">
                {format.name}
              </h2>
              <p className="mt-1 text-sm font-light italic text-cream/70">{format.subtitle}</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {format.tables.map((table) => (
                <PriceTable key={table.tier} table={table} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-cream/15 bg-cream/5 p-8">
        <h3 className="font-serif text-xl font-bold uppercase tracking-wide">Sudah Termasuk</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {SERVICE_INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm font-light text-cream/80">
              <span className="mt-1 text-gold">✦</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm font-light text-cream/70">
          Punya pertanyaan soal paket yang cocok untuk acara Anda?
        </p>
        <div className="mt-6">
          <WhatsAppButton message="Halo Epic Moment Photo Booth, saya ingin konsultasi paket harga photobooth.">
            Konsultasi via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
