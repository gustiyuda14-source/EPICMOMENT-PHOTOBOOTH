"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, PortfolioCategory } from "@/data/portfolio";

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

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
        active
          ? "border-gold bg-gold text-maroon-deep"
          : "border-cream/30 text-cream/80 hover:border-cream"
      }`}
    >
      {children}
    </button>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: { src: string; alt: string; title: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 text-3xl text-cream"
        aria-label="Close"
      >
        &times;
      </button>

      {index > 0 && (
        <NavArrow
          direction="left"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
        />
      )}

      <div className="relative max-h-[85vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Image
          src={item.src}
          alt={item.alt}
          width={1200}
          height={1500}
          className="max-h-[85vh] w-auto rounded-lg object-contain"
        />
        <p className="mt-3 text-center font-serif text-sm uppercase tracking-wide text-cream/80">
          {item.title}
        </p>
      </div>

      {index < items.length - 1 && (
        <NavArrow
          direction="right"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
        />
      )}
    </div>
  );
}

function NavArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 -translate-y-1/2 text-4xl text-cream/80 hover:text-cream ${
        direction === "left" ? "left-4" : "right-4"
      }`}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}
