import type { Metadata } from "next";
import { Playfair_Display, Outfit, Alex_Brush } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { SITE } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-outfit",
});

const script = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://epicmomentphotobooth.com"),
  title: {
    default: `${SITE.name} | Sewa Photobooth ${SITE.city}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Sewa photo booth premium di Kendari untuk wedding, corporate event, dan acara spesial lainnya. Cetak instan, custom layout, crew profesional.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: `${SITE.name} | Sewa Photobooth ${SITE.city}`,
    description: "Make Your Event Memorable — premium photo booth rental di Kendari.",
    locale: "id_ID",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: "https://epicmomentphotobooth.com/images/brand/logo-epicmoment.png",
  telephone: `+${SITE.phoneWa}`,
  areaServed: SITE.city,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: "Sulawesi Tenggara",
    addressCountry: "ID",
  },
  sameAs: [SITE.instagramUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${outfit.variable} ${script.variable}`}>
      <body className="relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <div className="radiating-lines pointer-events-none fixed inset-0 -z-10" />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
