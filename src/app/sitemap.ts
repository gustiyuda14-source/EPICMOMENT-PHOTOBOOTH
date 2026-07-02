import type { MetadataRoute } from "next";

const BASE_URL = "https://epicmomentphotobooth.com";
const ROUTES = ["", "/portfolio", "/harga", "/booking", "/tentang-kami", "/kontak"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
