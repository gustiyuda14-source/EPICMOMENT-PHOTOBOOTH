import { PriceTable as PriceTableType, formatIDR } from "@/data/packages";

export function PriceTable({ table }: { table: PriceTableType }) {
  return (
    <div
      className={`relative rounded-2xl border p-6 backdrop-blur-sm sm:p-8 ${
        table.recommended
          ? "border-gold bg-gold/[0.07] shadow-[0_0_30px_-10px_rgba(232,196,119,0.4)]"
          : "border-cream/15 bg-cream/5"
      }`}
    >
      {table.recommended && (
        <span className="absolute -top-3 left-6 rounded-full bg-gold px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-maroon-deep">
          ★ Paling Dipilih
        </span>
      )}

      <h3 className="font-serif text-xl font-bold uppercase tracking-wide">{table.title}</h3>
      <p className="mt-2 text-sm font-light text-cream/70">{table.description}</p>

      <ul className="mt-6 divide-y divide-cream/10">
        {table.rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between py-3">
            <span className="text-sm font-light text-cream/90">{row.label}</span>
            <span className="font-serif font-bold text-gold">{formatIDR(row.price)}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs italic text-cream/50">{table.overageNote}</p>
    </div>
  );
}
