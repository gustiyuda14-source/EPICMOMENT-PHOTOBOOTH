import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { SparkleField } from "@/components/Sparkle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PORTFOLIO } from "@/data/portfolio";
import { PRICING } from "@/data/packages";
import { WHY_PHOTOBOOTH } from "@/data/policies";
import { SITE } from "@/data/site";

const FEATURED = PORTFOLIO.slice(0, 6);
const CLIENTS = ["D'AJIKS", "Emina x Kochi Anduonohu", "Universitas Halu Oleo", "Hana & Ogi"];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden text-center">
        <Image
          src="/images/portfolio/wedding/wedding-03.jpg"
          alt="Momen wedding di photo booth Epic Moment"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/80 via-maroon-deep/60 to-maroon-deep" />
        <SparkleField />

        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <p className="font-script text-4xl text-gold sm:text-5xl">Make your event</p>
          <h1 className="mt-1 font-serif text-4xl font-bold uppercase tracking-[0.1em] sm:text-6xl">
            Memorable
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-cream/85 sm:text-lg">
            Premium photo booth rental di {SITE.city}. Bawa keceriaan dan kenangan epic untuk
            Wedding, Corporate Event, dan acara spesial lainnya.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Halo Epic Moment Photo Booth, saya ingin tanya-tanya soal sewa photobooth.">
              Book Now
            </WhatsAppButton>
            <Link
              href="/harga"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-serif text-sm font-bold uppercase tracking-[0.15em] text-cream/80 underline decoration-gold underline-offset-4 transition hover:text-cream"
            >
              Lihat Harga
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-cream/10 bg-maroon-deep py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
          <span className="text-cream/70">Dipercaya oleh:</span>
          {CLIENTS.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Kenapa Harus" title="Pakai PhotoBooth?" />
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {WHY_PHOTOBOOTH.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-cream/15 bg-cream/5 p-8">
              <span className="font-script text-4xl text-gold">{i + 1}</span>
              <h3 className="mt-3 font-serif text-lg font-bold uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-light text-cream/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Portfolio" title="Momen Epic Kami" script="baru-baru ini" />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {FEATURED.map((item) => (
            <div key={item.src} className="photo-strip relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border-2 border-cream px-8 py-3 font-serif text-sm font-bold uppercase tracking-[0.15em] transition hover:bg-cream hover:text-maroon-deep"
          >
            Lihat Semua Portfolio
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Pilihan Paket" title="Our Packages" script="choose your moment" />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {PRICING.map((p) => (
            <div key={p.format} className="rounded-2xl border border-cream/15 bg-cream/5 p-8">
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wide">{p.name}</h3>
              <p className="mt-2 text-sm font-light italic text-cream/70">{p.subtitle}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cream/50">Mulai dari</p>
              <p className="font-serif text-3xl font-bold text-gold">
                Rp{(p.tables[1].rows[0].price / 1_000_000).toFixed(1)} Jt
              </p>
              <Link
                href="/harga"
                className="mt-6 inline-block rounded-full border border-cream/50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-cream"
              >
                Detail Harga
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-center">
        <SparkleField />
        <div className="relative z-10 mx-auto max-w-xl px-6">
          <p className="font-script text-4xl text-gold">Siap membuat</p>
          <h2 className="mt-1 font-serif text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl">
            Momen Epic Anda?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-cream/70">
            Konsultasikan kebutuhan acara Anda dengan admin kami sekarang.
          </p>
          <div className="mt-8">
            <WhatsAppButton message="Halo Epic Moment Photo Booth, saya ingin booking photobooth untuk acara saya.">
              Chat Admin Sekarang
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
