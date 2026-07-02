import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kumpulan momen wedding, corporate event, dan acara spesial bersama Epic Moment Photo Booth.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Galeri"
        title="Our Portfolio"
        script="works that speak"
      />
      <p className="mx-auto mt-6 max-w-xl text-center text-sm font-light text-cream/70">
        Setiap acara punya cerita — inilah beberapa momen epic yang kami abadikan bersama
        klien kami di Kendari dan sekitarnya.
      </p>

      <div className="mt-14">
        <PortfolioGallery />
      </div>
    </div>
  );
}
