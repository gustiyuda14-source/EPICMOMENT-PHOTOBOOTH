export type PriceFormat = "2r" | "4r";
export type PriceTier = "unlimited" | "limited";

export type PriceRow = {
  label: string;
  price: number;
};

export type PriceTable = {
  tier: PriceTier;
  title: string;
  description: string;
  rows: PriceRow[];
  overageNote: string;
};

export type FormatPricing = {
  format: PriceFormat;
  name: string;
  subtitle: string;
  tables: PriceTable[];
};

/** Transcribed verbatim from "New Price list EpicMoment 2026" PDF. */
export const PRICING: FormatPricing[] = [
  {
    format: "2r",
    name: "Photo Strip / 2R",
    subtitle: "Format strip klasik, pas untuk gathering & wedding budget-friendly",
    tables: [
      {
        tier: "unlimited",
        title: "Unlimited Prints",
        description:
          "Jumlah cetak foto bebas/tidak terbatas selama jam operasional masih berlangsung.",
        rows: [
          { label: "2 Jam Operasional", price: 3_000_000 },
          { label: "3 Jam Operasional", price: 3_500_000 },
          { label: "4 Jam Operasional", price: 4_500_000 },
        ],
        overageNote: "Over time Rp1.000.000 / jam",
      },
      {
        tier: "limited",
        title: "Limited Prints",
        description:
          "Jumlah cetak foto terbatas sesuai jumlah print yang di order dengan batas maksimal jam operasional.",
        rows: [
          { label: "100 Print — Max 2 Jam", price: 2_000_000 },
          { label: "150 Print — Max 3 Jam", price: 2_500_000 },
          { label: "200 Print — Max 3 Jam", price: 3_000_000 },
        ],
        overageNote: "Over print Rp1.000.000 / 100 print",
      },
    ],
  },
  {
    format: "4r",
    name: "Polaroid / 4R",
    subtitle: "Format besar, kesan mewah untuk wedding & acara formal",
    tables: [
      {
        tier: "unlimited",
        title: "Unlimited Prints",
        description:
          "Jumlah cetak foto bebas/tidak terbatas selama jam operasional masih berlangsung.",
        rows: [
          { label: "2 Jam Operasional", price: 3_500_000 },
          { label: "3 Jam Operasional", price: 4_000_000 },
          { label: "4 Jam Operasional", price: 5_000_000 },
        ],
        overageNote: "Over time Rp1.000.000 / jam",
      },
      {
        tier: "limited",
        title: "Limited Prints",
        description:
          "Jumlah cetak foto terbatas sesuai jumlah print yang di order dengan batas maksimal jam operasional.",
        rows: [
          { label: "100 Print — Max 2 Jam", price: 2_500_000 },
          { label: "150 Print — Max 3 Jam", price: 3_000_000 },
          { label: "200 Print — Max 3 Jam", price: 3_500_000 },
        ],
        overageNote: "Over print Rp1.000.000 / 50 print",
      },
    ],
  },
];

export const SERVICE_INCLUDES = [
  "High Quality Printing by DNP RX1HS Printer",
  "Modern, Simple & High Quality machine",
  "Custom Layout Design (Frame Photo + GIF)",
  "Aksesoris Photo & Simple Background",
  "2 Crew Profesional",
  "All File Photo + GIF Video dengan Scan Barcode",
];

export function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
