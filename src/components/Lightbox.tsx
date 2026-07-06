"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type LightboxItem = { src: string; alt: string; title: string };

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = items[index];

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
      if (e.key === "ArrowRight" && index < items.length - 1) onNavigate(index + 1);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  // Portal to <body>: keeps position:fixed anchored to the viewport even if
  // an ancestor (transforms, filters, will-change) forms a containing block.
  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-[hero-rise_0.3s_ease-out]"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-2xl text-cream backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:border-gold/60 hover:text-gold"
        aria-label="Close"
      >
        &times;
      </button>

      <span className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 font-serif text-xs tracking-[0.25em] text-cream/70 backdrop-blur-sm">
        {index + 1} / {items.length}
      </span>

      {index > 0 && (
        <NavArrow
          direction="left"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
        />
      )}

      <figure
        key={item.src}
        className="relative max-h-[85vh] max-w-3xl animate-[hero-rise_0.45s_cubic-bezier(0.22,1,0.36,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={1200}
          height={1500}
          className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl shadow-black/60"
        />
        <figcaption className="mt-4 text-center font-serif text-sm uppercase tracking-[0.2em] text-cream/80">
          {item.title}
        </figcaption>
      </figure>

      {index < items.length - 1 && (
        <NavArrow
          direction="right"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
        />
      )}
    </div>,
    document.body
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
      className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-cream/10 pb-1 text-3xl leading-none text-cream/90 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-cream/20 hover:text-gold ${
        direction === "left" ? "left-4 sm:left-8" : "right-4 sm:right-8"
      }`}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}
