import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${SITE.name} untuk konsultasi sewa photobooth di ${SITE.city}.`,
};

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <SectionHeading eyebrow="Hubungi Kami" title="Let's Talk" script="epicmoment" />

      <p className="mx-auto mt-6 max-w-md text-sm font-light text-cream/70">
        Ada pertanyaan seputar paket, jadwal, atau kebutuhan khusus acara Anda? Tim kami siap
        membantu.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4">
        <WhatsAppButton message="Halo Epic Moment PhotoBooth, saya ingin bertanya-tanya.">
          Chat WhatsApp — {SITE.phoneDisplay}
        </WhatsAppButton>

        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium uppercase tracking-wide text-cream/80 hover:text-gold"
        >
          Instagram @{SITE.instagramHandle}
        </a>
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl border border-cream/15">
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
    </div>
  );
}
