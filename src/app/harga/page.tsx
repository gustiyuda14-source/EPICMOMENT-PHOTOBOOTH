import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PriceTable } from "@/components/PriceTable";
import { PrintComparisonTable } from "@/components/PrintComparisonTable";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PRICING, SERVICE_INCLUDES } from "@/data/packages";

const [FORMAT_2R, ...OTHER_FORMATS] = PRICING;

function FormatSection({ format }: { format: (typeof PRICING)[number] }) {
  return (
    <div>
      <Reveal className="text-center">
        <h2 className="text-gold-gradient font-serif text-2xl font-bold uppercase tracking-wide">
          {format.name}
        </h2>
        <p className="mt-1 text-sm font-light italic text-cream/70">{format.subtitle}</p>
        <div className="divider-gold mx-auto mt-4 w-24" />
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {format.tables.map((table, i) => (
          <Reveal key={table.tier} delay={i * 120}>
            <PriceTable table={table} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Harga",
  description: "Daftar harga sewa photobooth Epic Moment — format Photo Strip 2R dan Polaroid 4R, unlimited maupun limited print.",
};

export default function HargaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Price List" title="Our Packages" script="choose your moment" />
      </Reveal>

      <div className="mt-14 space-y-20">
        <FormatSection format={FORMAT_2R} />

        <Reveal>
          <PrintComparisonTable />
        </Reveal>

        {OTHER_FORMATS.map((format) => (
          <FormatSection key={format.format} format={format} />
        ))}
      </div>

      <Reveal className="mt-20">
        <div className="card p-8 sm:p-10">
          <h3 className="text-gold-gradient font-serif text-xl font-bold uppercase tracking-wide">
            Sudah Termasuk
          </h3>
          <div className="divider-gold mt-4 w-24" />
          <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {SERVICE_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-light text-cream/80">
                <span className="mt-0.5 text-gold">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-16 text-center">
        <p className="text-sm font-light text-cream/70">
          Punya pertanyaan soal paket yang cocok untuk acara Anda?
        </p>
        <div className="mt-6">
          <WhatsAppButton message="Halo Epic Moment PhotoBooth, saya ingin konsultasi paket harga photobooth.">
            Konsultasi via WhatsApp
          </WhatsAppButton>
        </div>
      </Reveal>
    </div>
  );
}
