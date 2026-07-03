export type PortfolioCategory = "wedding" | "corporate" | "graduation";

export type PortfolioItem = {
  src: string;
  category: PortfolioCategory;
  title: string;
  alt: string;
};

export const PORTFOLIO_CATEGORIES: { value: PortfolioCategory; label: string }[] = [
  { value: "wedding", label: "Wedding" },
  { value: "corporate", label: "Corporate & Gathering" },
  { value: "graduation", label: "Graduation & Professional Event" },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    src: "/images/portfolio/wedding/wedding-03.jpg",
    category: "wedding",
    title: "Adat Wedding",
    alt: "Pengantin adat tradisional berpose di photobooth Epic Moment",
  },
  {
    src: "/images/portfolio/wedding/wedding-09.jpg",
    category: "wedding",
    title: "Adat Wedding",
    alt: "Pengantin adat dengan mahkota emas memegang buku nikah",
  },
  {
    src: "/images/portfolio/wedding/wedding-11.jpg",
    category: "wedding",
    title: "Akad Nikah",
    alt: "Pengantin memegang buku nikah dengan latar merah",
  },
  {
    src: "/images/portfolio/wedding/wedding-04.jpg",
    category: "wedding",
    title: "The Wedding",
    alt: "Pengantin bersama tamu berseragam di photobooth",
  },
  {
    src: "/images/portfolio/wedding/wedding-02.jpg",
    category: "wedding",
    title: "The Wedding of Hana & Ogi",
    alt: "Rombongan bridesmaid memegang cetakan foto strip",
  },
  {
    src: "/images/portfolio/wedding/wedding-05.jpg",
    category: "wedding",
    title: "The Wedding of Hana & Ogi",
    alt: "Bridesmaid bertiga menunjukkan hasil cetak photobooth",
  },
  {
    src: "/images/portfolio/wedding/wedding-10.jpg",
    category: "wedding",
    title: "The Wedding of Hana & Ogi",
    alt: "Rombongan besar bridesmaid berfoto bersama",
  },
  {
    src: "/images/portfolio/wedding/wedding-01.jpg",
    category: "wedding",
    title: "Bridesmaid Session",
    alt: "Bridesmaid berpose di depan backdrop bunga dengan monogram",
  },
  {
    src: "/images/portfolio/wedding/wedding-06.jpg",
    category: "wedding",
    title: "Traditional Wedding",
    alt: "Tamu wanita memegang kipas cetakan foto photobooth",
  },
  {
    src: "/images/portfolio/wedding/wedding-07.jpg",
    category: "wedding",
    title: "Traditional Wedding",
    alt: "Rombongan bridesmaid berbusana adat",
  },
  {
    src: "/images/portfolio/wedding/wedding-08.jpg",
    category: "wedding",
    title: "The Wedding of Hana & Ogi",
    alt: "Cetakan photo strip The Wedding of Hana and Ogi",
  },
  {
    src: "/images/portfolio/corporate/corporate-01.jpg",
    category: "corporate",
    title: "Corporate Gathering",
    alt: "Keluarga berseragam batik berfoto di photobooth",
  },
  {
    src: "/images/portfolio/corporate/corporate-02.jpg",
    category: "corporate",
    title: "Community Gathering",
    alt: "Rombongan pria berbatik berpose di photobooth",
  },
  {
    src: "/images/portfolio/corporate/corporate-03.jpg",
    category: "corporate",
    title: "Community Gathering",
    alt: "Rombongan campuran berbatik berpose ceria",
  },
  {
    src: "/images/portfolio/corporate/corporate-04.jpg",
    category: "corporate",
    title: "Corporate Party",
    alt: "Rombongan pria berjas hitam berfoto bersama",
  },
  {
    src: "/images/portfolio/graduation/graduation-01.jpg",
    category: "graduation",
    title: "Welcoming Ceremony — Apoteker Angkatan XV",
    alt: "Tamu memegang kipas cetakan foto acara welcoming ceremony apoteker",
  },
];
