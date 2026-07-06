import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { FrameGallery } from "@/components/FrameGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kumpulan momen wedding, corporate event, dan acara spesial bersama Epic Moment PhotoBooth.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Galeri"
          title="Our Portfolio"
          script="works that speak"
        />
        <p className="mx-auto mt-6 max-w-xl text-center text-sm font-light leading-relaxed text-cream/70">
          Setiap acara punya cerita — inilah beberapa momen epic yang kami abadikan bersama
          klien kami di Kendari dan sekitarnya.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-14">
        <PortfolioGallery />
      </Reveal>

      <div className="divider-gold mx-auto mt-24 max-w-4xl" />

      <div className="pt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Custom Layout"
            title="Contoh Desain Frame"
            script="pilih gaya favoritmu"
          />
          <p className="mx-auto mt-6 max-w-xl text-center text-sm font-light leading-relaxed text-cream/70">
            Setiap frame di-custom sesuai tema acara Anda. Ini beberapa contoh hasil cetak
            Photo Strip (2R) dan Polaroid (4R) dari klien kami.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <FrameGallery />
        </Reveal>
      </div>
    </div>
  );
}
