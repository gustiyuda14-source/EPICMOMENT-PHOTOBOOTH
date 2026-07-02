"use client";

import { useState } from "react";
import Image from "next/image";
import { FRAME_EXAMPLES, FRAME_FORMATS, FrameFormat } from "@/data/frames";
import { FilterButton } from "./FilterButton";
import { Lightbox } from "./Lightbox";

type FilterValue = FrameFormat | "all";

export function FrameGallery() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items =
    filter === "all" ? FRAME_EXAMPLES : FRAME_EXAMPLES.filter((i) => i.format === filter);
  const lightboxItems = items.map((i) => ({ ...i, title: `${i.event} — ${i.format.toUpperCase()}` }));

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
          Semua
        </FilterButton>
        {FRAME_FORMATS.map((f) => (
          <FilterButton key={f.value} active={filter === f.value} onClick={() => setFilter(f.value)}>
            {f.label}
          </FilterButton>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            className="photo-strip group block w-full break-inside-avoid"
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: item.format === "2r" ? "1 / 3" : "2 / 3" }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </div>
            <p className="mt-2 truncate px-1 text-center font-serif text-xs font-semibold uppercase tracking-wide text-maroon-deep">
              {item.event}
            </p>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
