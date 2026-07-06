import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "@/lib/og-image";
import { SITE } from "@/data/site";

export const runtime = "nodejs";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(await renderOgImage(), size);
}
