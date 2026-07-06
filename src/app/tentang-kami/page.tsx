import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { EQUIPMENT_SPECS, ON_SITE_REQUIREMENTS } from "@/data/policies";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `${SITE.name} — crew profesional dan peralatan modern untuk photobooth rental di ${SITE.city}.`,
};

export default function TentangKamiPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Tentang Kami" title="Epic Moment PhotoBooth" script="simple & modern look" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-light leading-relaxed text-cream/70">
          Berbasis di {SITE.city}, kami menghadirkan photobooth modern dengan crew profesional
          untuk membuat setiap momen acara Anda jadi kenangan yang epic.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-14 flex justify-center">
        <div className="group relative">
          <div
            className="absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(232,196,119,0.15),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            aria-hidden="true"
          />
          <Image
            src="/images/equipment/hardware-01.png"
            alt="Unit photobooth Epic Moment dengan studio lighting"
            width={941}
            height={1672}
            className="relative h-auto w-full max-w-xs rounded-2xl shadow-2xl transition-transform duration-700 ease-out-expo group-hover:scale-[1.02] sm:max-w-sm"
          />
        </div>
      </Reveal>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="card card-hover h-full p-8">
            <h2 className="text-gold-gradient font-serif text-xl font-bold uppercase tracking-wide">
              Peralatan Kami
            </h2>
            <div className="divider-gold mt-4 w-16" />
            <ul className="mt-6 space-y-3.5">
              {EQUIPMENT_SPECS.map((spec) => (
                <li key={spec} className="flex items-start gap-2.5 text-sm font-light text-cream/80">
                  <span className="mt-0.5 text-gold">✦</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card card-hover h-full p-8">
            <h2 className="text-gold-gradient font-serif text-xl font-bold uppercase tracking-wide">
              Kebutuhan di Lokasi
            </h2>
            <div className="divider-gold mt-4 w-16" />
            <ul className="mt-6 space-y-3.5">
              {ON_SITE_REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm font-light text-cream/80">
                  <span className="mt-0.5 text-gold">✦</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-4 sm:grid-cols-3">
        {["/images/equipment/crew-01.jpg", "/images/equipment/booth-01.jpg", "/images/equipment/crew-02.jpg"].map(
          (src, i) => (
            <Reveal key={src} delay={i * 120}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-cream/10 transition-all duration-500 ease-out-expo hover:ring-gold/50 hover:shadow-gold-soft">
                <Image
                  src={src}
                  alt="Crew Epic Moment PhotoBooth sedang bertugas"
                  fill
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          )
        )}
      </div>
    </div>
  );
}
