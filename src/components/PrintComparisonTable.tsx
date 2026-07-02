import { PRINT_COMPARISON } from "@/data/policies";

export function PrintComparisonTable() {
  return (
    <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6 sm:p-8">
      <h3 className="text-center font-serif text-xl font-bold uppercase tracking-wide">
        Unlimited vs Limited Print
      </h3>
      <p className="mx-auto mt-2 max-w-md text-center text-sm font-light text-cream/70">
        Bingung pilih yang mana? Ini perbedaan utamanya.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-cream/20">
              <th className="py-3 pr-4 text-left font-serif text-xs font-bold uppercase tracking-wide text-cream/60">
                Aspek
              </th>
              <th className="px-4 py-3 text-left font-serif text-xs font-bold uppercase tracking-wide text-cream">
                Limited Print
              </th>
              <th className="pl-4 py-3 text-left font-serif text-xs font-bold uppercase tracking-wide text-gold">
                Unlimited Print
              </th>
            </tr>
          </thead>
          <tbody>
            {PRINT_COMPARISON.map((row) => (
              <tr key={row.aspect} className="border-b border-cream/10 last:border-0">
                <td className="py-4 pr-4 font-medium text-cream/60">{row.aspect}</td>
                <td className="px-4 py-4 font-light text-cream/90">{row.limited}</td>
                <td className="pl-4 py-4 font-light text-cream/90">{row.unlimited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
