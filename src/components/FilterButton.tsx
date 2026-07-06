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
      className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ease-out-expo ${
        active
          ? "border-gold bg-gold-gradient text-maroon-deep shadow-gold-soft"
          : "border-cream/25 bg-cream/[0.03] text-cream/80 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
      }`}
    >
      {children}
    </button>
  );
}
