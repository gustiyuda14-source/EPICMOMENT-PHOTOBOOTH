export function FilterButton({
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
