export type FrameFormat = "2r" | "4r";

export type FrameExample = {
  src: string;
  format: FrameFormat;
  event: string;
  alt: string;
};

export const FRAME_FORMATS: { value: FrameFormat; label: string }[] = [
  { value: "2r", label: "2R" },
  { value: "4r", label: "4R" },
];

export const FRAME_EXAMPLES: FrameExample[] = [
  {
    src: "/images/frames/2r/endang-wuryanto-1.jpg",
    format: "2r",
    event: "Endang & Wuryanto",
    alt: "Contoh frame 2R The Wedding of Endang & Wuryanto — tamu muda berkacamata",
  },
  {
    src: "/images/frames/2r/endang-wuryanto-2.jpg",
    format: "2r",
    event: "Endang & Wuryanto",
    alt: "Contoh frame 2R The Wedding of Endang & Wuryanto — tamu keluarga",
  },
  {
    src: "/images/frames/2r/chika-aras-1.jpg",
    format: "2r",
    event: "Chika & Aras",
    alt: "Contoh frame 2R The Wedding of Chika & Aras — pengantin adat Buton",
  },
  {
    src: "/images/frames/2r/oki-arsat-1.jpg",
    format: "2r",
    event: "Oki & Arsat",
    alt: "Contoh frame 2R The Wedding of Oki & Arsat — keluarga berbatik pink",
  },
  {
    src: "/images/frames/2r/tata-bagas-1.jpg",
    format: "2r",
    event: "Tata & Bagas",
    alt: "Contoh frame 2R The Wedding of Tata & Bagas — pengantin adat putih emas",
  },
  {
    src: "/images/frames/2r/mahesa-gala-anniversary-1.jpg",
    format: "2r",
    event: "Sailendra Mahesa Gala",
    alt: "Contoh frame 2R 1st Anniversary Sailendra Mahesa Gala — komunitas berseragam hitam",
  },
  {
    src: "/images/frames/2r/nova-fadil-1.jpg",
    format: "2r",
    event: "Nova & Fadil",
    alt: "Contoh frame 2R The Wedding of Nova & Fadil — bridesmaid backdrop hijau",
  },
  {
    src: "/images/frames/2r/hikma-sunar-1.jpg",
    format: "2r",
    event: "Hikma & Sunar",
    alt: "Contoh frame 2R The Wedding of Hikma & Sunar — pengantin adat merah emas",
  },
  {
    src: "/images/frames/4r/fany-edy-1.jpg",
    format: "4r",
    event: "Fany & Edy",
    alt: "Contoh frame 4R The Wedding of Fany & Edy — pengantin berseragam militer",
  },
  {
    src: "/images/frames/4r/felya-simba-1.jpg",
    format: "4r",
    event: "Felya & Simba",
    alt: "Contoh frame 4R The Wedding of Felya & Simba — bridesmaid backdrop hijau",
  },
  {
    src: "/images/frames/4r/apothecary-oath-1.jpg",
    format: "4r",
    event: "Apothecary Oath",
    alt: "Contoh frame 4R Apothecary Oath Fakultas Farmasi Universitas Haluoleo",
  },
];
