const instagramHandle = process.env.NEXT_PUBLIC_IG_HANDLE ?? "epicmoment_kdi";

export const SITE = {
  name: "Epic Moment PhotoBooth",
  tagline: "Make Your Event Memorable",
  city: "Kendari",
  phoneDisplay: process.env.NEXT_PUBLIC_WA_PHONE_DISPLAY ?? "0822-7101-1231",
  /** WhatsApp requires country code, no leading zero or symbols */
  phoneWa: process.env.NEXT_PUBLIC_WA_PHONE ?? "6282271011231",
  instagramHandle,
  instagramUrl: `https://www.instagram.com/${instagramHandle}`,
  bank: {
    name: process.env.NEXT_PUBLIC_BANK_NAME ?? "Bank Mandiri",
    account: process.env.NEXT_PUBLIC_BANK_ACCOUNT ?? "1620009888952",
    holder: process.env.NEXT_PUBLIC_BANK_HOLDER ?? "Gusti Made Satria D.",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(message)}`;
}
