import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${SITE.name} untuk konsultasi sewa photobooth di ${SITE.city}.`,
  openGraph: {
    title: `Kontak ${SITE.name}`,
    description: `Hubungi ${SITE.name} untuk konsultasi sewa photobooth di ${SITE.city}.`,
    images: ["/opengraph-image"],
  },
};

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <Reveal>
        <SectionHeading eyebrow="Hubungi Kami" title="Let's Talk" script="epicmoment" />
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-cream/70">
          Ada pertanyaan seputar paket, jadwal, atau kebutuhan khusus acara Anda? Tim kami siap
          membantu.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-10 flex flex-col items-center gap-5">
        <WhatsAppButton message="Halo Epic Moment PhotoBooth, saya ingin bertanya-tanya.">
          Chat WhatsApp — {SITE.phoneDisplay}
        </WhatsAppButton>

        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-cream/80 transition-colors duration-300 hover:text-gold"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current text-gold/70 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
          </svg>
          Instagram @{SITE.instagramHandle}
        </a>
      </Reveal>

      <Reveal delay={250} className="mt-16">
        <div className="overflow-hidden rounded-2xl ring-1 ring-cream/15 shadow-card transition-all duration-500 ease-out-expo hover:ring-gold/40">
          <iframe
            title="Lokasi Kendari"
            src="https://www.google.com/maps?q=Kendari,+Sulawesi+Tenggara&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  );
}
