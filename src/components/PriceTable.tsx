import { PriceTable as PriceTableType, formatIDR } from "@/data/packages";

export function PriceTable({ table }: { table: PriceTableType }) {
  return (
    <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm sm:p-8">
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
