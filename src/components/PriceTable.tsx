import { PriceTable as PriceTableType, formatIDR } from "@/data/packages";

export function PriceTable({ table }: { table: PriceTableType }) {
  return (
    <div
      className={`card card-hover relative h-full p-6 sm:p-8 ${
        table.recommended
          ? "border-gold/70 bg-gradient-to-b from-gold/[0.1] to-gold/[0.02] shadow-gold-soft"
          : ""
      }`}
    >
      {table.recommended && (
        <span className="absolute -top-3.5 left-6 rounded-full bg-gold-gradient px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-maroon-deep shadow-gold-soft">
          ★ Paling Dipilih
        </span>
      )}

      <h3 className="font-serif text-xl font-bold uppercase tracking-wide">{table.title}</h3>
      <p className="mt-2 text-sm font-light leading-relaxed text-cream/70">{table.description}</p>

      <ul className="mt-6 divide-y divide-cream/10">
        {table.rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between rounded-lg px-2 py-3.5 transition-colors duration-300 hover:bg-cream/[0.04]"
          >
            <span className="text-sm font-light text-cream/90">{row.label}</span>
            <span className="font-serif font-bold text-gold">{formatIDR(row.price)}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs italic leading-relaxed text-cream/50">{table.overageNote}</p>
    </div>
  );
}
