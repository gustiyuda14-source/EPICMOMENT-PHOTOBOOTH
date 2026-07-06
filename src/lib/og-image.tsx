import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/data/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export async function renderOgImage() {
  const logoData = await readFile(join(process.cwd(), "public/images/brand/logo-epicmoment.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4a0404 0%, #8b0a0a 50%, #2b0000 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          left: -100,
          width: 520,
          height: 520,
          borderRadius: 9999,
          background: "#e8c477",
          opacity: 0.18,
          filter: "blur(90px)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -140,
          right: -90,
          width: 520,
          height: 520,
          borderRadius: 9999,
          background: "#e8c477",
          opacity: 0.14,
          filter: "blur(100px)",
          display: "flex",
        }}
      />

      <img src={logoSrc} width={520} height={162} style={{ objectFit: "contain" }} alt="" />

      <div
        style={{
          marginTop: 34,
          fontSize: 32,
          color: "#f5e2ab",
          letterSpacing: 6,
          textTransform: "uppercase",
          fontWeight: 600,
          display: "flex",
        }}
      >
        {SITE.tagline}
      </div>

      <div
        style={{
          marginTop: 14,
          fontSize: 22,
          color: "#fdfdfd",
          opacity: 0.75,
          display: "flex",
        }}
      >
        Sewa Photobooth Premium — {SITE.city}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 44,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: 9999, background: "#e8c477", display: "flex" }} />
        <div style={{ fontSize: 17, color: "#e8c477", letterSpacing: 3, display: "flex" }}>
          WEDDING · CORPORATE · GRADUATION
        </div>
        <div style={{ width: 6, height: 6, borderRadius: 9999, background: "#e8c477", display: "flex" }} />
      </div>
    </div>
  );
}
