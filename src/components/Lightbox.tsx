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
