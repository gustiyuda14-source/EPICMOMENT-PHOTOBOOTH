"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, PortfolioCategory } from "@/data/portfolio";
import { FilterButton } from "./FilterButton";
import { Lightbox } from "./Lightbox";

type FilterValue = PortfolioCategory | "all";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = filter === "all" ? PORTFOLIO : PORTFOLIO.filter((i) => i.category === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
          Semua
        </FilterButton>
        {PORTFOLIO_CATEGORIES.map((cat) => (
          <FilterButton
            key={cat.value}
            active={filter === cat.value}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </FilterButton>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            className="group relative block w-full overflow-hidden rounded-lg break-inside-avoid"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={1000}
              className="w-full transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-deep/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <span className="p-4 font-serif text-sm font-semibold uppercase tracking-wide text-cream">
                {item.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
