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
    src: "/images/frames/4r/angria-saiful-1.jpg",
    format: "4r",
    event: "Angria & Saiful",
    alt: "Contoh frame 4R The Wedding of Angria & Saiful — pasukan pengawal upacara",
  },
  {
    src: "/images/frames/4r/angria-saiful-2.jpg",
    format: "4r",
    event: "Angria & Saiful",
    alt: "Contoh frame 4R The Wedding of Angria & Saiful — groomsmen berbatik",
  },
  {
    src: "/images/frames/4r/angria-saiful-3.jpg",
    format: "4r",
    event: "Angria & Saiful",
    alt: "Contoh frame 4R The Wedding of Angria & Saiful — bridesmaid lace maroon",
  },
  {
    src: "/images/frames/4r/elsha-yudhis-1.jpg",
    format: "4r",
    event: "Elsha & Yudhis",
    alt: "Contoh frame 4R The Wedding of Elsha & Yudhis — pengantin",
  },
  {
    src: "/images/frames/4r/elsha-yudhis-2.jpg",
    format: "4r",
    event: "Elsha & Yudhis",
    alt: "Contoh frame 4R The Wedding of Elsha & Yudhis — groomsmen kostum militer",
  },
  {
    src: "/images/frames/2r/yudisium-day-1.jpg",
    format: "2r",
    event: "Yudisium Day",
    alt: "Contoh frame 2R Yudisium Day Universitas Haluoleo — kelompok wisudawati",
  },
  {
    src: "/images/frames/2r/yudisium-day-2.jpg",
    format: "2r",
    event: "Yudisium Day",
    alt: "Contoh frame 2R Yudisium Day Universitas Haluoleo — kelompok wisudawati lain",
  },
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
];
