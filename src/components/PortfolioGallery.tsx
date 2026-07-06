"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO } from "@/data/portfolio";
import { Lightbox } from "./Lightbox";

export function PortfolioGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {PORTFOLIO.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid ring-1 ring-cream/10 transition-all duration-500 ease-out-expo hover:ring-gold/50 hover:shadow-gold-soft"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={1000}
              className="w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-deep/90 via-maroon-deep/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="w-full translate-y-3 p-4 text-left font-serif text-sm font-semibold uppercase tracking-wide text-cream transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
                <span className="mr-2 text-gold" aria-hidden="true">
                  ✦
                </span>
                {item.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={PORTFOLIO}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
