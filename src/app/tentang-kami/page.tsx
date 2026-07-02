import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { EQUIPMENT_SPECS, ON_SITE_REQUIREMENTS } from "@/data/policies";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `${SITE.name} — crew profesional dan peralatan modern untuk photo booth rental di ${SITE.city}.`,
};

export default function TentangKamiPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Tentang Kami" title="Epic Moment Photo Booth" script="simple & modern look" />

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-light text-cream/70">
        Berbasis di {SITE.city}, kami menghadirkan photo booth modern dengan crew profesional
        untuk membuat setiap momen acara Anda jadi kenangan yang epic.
      </p>

      <div className="relative mt-14 aspect-video overflow-hidden rounded-2xl">
        <Image
          src="/images/equipment/hardware-01.png"
          alt="Unit photo booth Epic Moment dengan studio lighting"
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl font-bold uppercase tracking-wide">Peralatan Kami</h2>
          <ul className="mt-6 space-y-3">
            {EQUIPMENT_SPECS.map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-sm font-light text-cream/80">
                <span className="mt-1 text-gold">✦</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold uppercase tracking-wide">
            Kebutuhan di Lokasi
          </h2>
          <ul className="mt-6 space-y-3">
            {ON_SITE_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm font-light text-cream/80">
                <span className="mt-1 text-gold">✦</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 grid gap-4 sm:grid-cols-3">
        {["/images/equipment/crew-01.jpg", "/images/equipment/booth-01.jpg", "/images/equipment/crew-02.jpg"].map(
          (src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={src} alt="Crew Epic Moment Photo Booth sedang bertugas" fill className="object-cover" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
