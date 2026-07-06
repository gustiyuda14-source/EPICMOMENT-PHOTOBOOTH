import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SparkleField } from "@/components/Sparkle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PRICING } from "@/data/packages";
import { WHY_PHOTOBOOTH } from "@/data/policies";
import { SITE } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden text-center">
        <Image
          src="/images/hero/home-hero.png"
          alt="Unit Epic Moment PhotoBooth dengan studio lighting"
          fill
          priority
          className="kenburns object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/80 via-maroon-deep/55 to-maroon-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,transparent_35%,rgba(43,0,0,0.55)_100%)]" />
        <SparkleField />

        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <p className="hero-rise font-script text-4xl text-gold sm:text-5xl">
            Make your event
          </p>
          <h1
            className="hero-rise text-gold-gradient mt-1 font-serif text-5xl font-bold uppercase tracking-[0.1em] sm:text-7xl"
            style={{ "--rise-delay": "150ms" } as React.CSSProperties}
          >
            Memorable
          </h1>
          <div
            className="hero-rise divider-gold mx-auto mt-6 w-40"
            style={{ "--rise-delay": "300ms" } as React.CSSProperties}
          />
          <p
            className="hero-rise mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-cream/85 sm:text-lg"
            style={{ "--rise-delay": "400ms" } as React.CSSProperties}
          >
            Premium photobooth rental di {SITE.city}. Bawa keceriaan dan kenangan epic untuk
            Wedding, Corporate Event, dan acara spesial lainnya.
          </p>
          <div
            className="hero-rise mt-9 flex flex-wrap justify-center gap-4"
            style={{ "--rise-delay": "550ms" } as React.CSSProperties}
          >
            <WhatsAppButton message="Halo Epic Moment PhotoBooth, saya ingin tanya-tanya soal sewa photobooth.">
              Book Now
            </WhatsAppButton>
            <Link href="/harga" className="btn-ghost">
              Lihat Harga
            </Link>
          </div>
        </div>

        <div
          className="hero-rise absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ "--rise-delay": "900ms" } as React.CSSProperties}
          aria-hidden="true"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-1.5">
            <div className="h-2 w-1 rounded-full bg-gold animate-[scroll-cue_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Kenapa Harus" title="Pakai PhotoBooth?" />
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {WHY_PHOTOBOOTH.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="card card-hover group h-full p-8">
                <span className="font-script text-5xl text-gold transition-transform duration-500 ease-out-expo group-hover:scale-110 inline-block">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <div className="divider-gold mt-3 w-12 transition-all duration-500 ease-out-expo group-hover:w-20" />
                <p className="mt-4 text-sm font-light leading-relaxed text-cream/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-4xl" />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Pilihan Paket" title="Our Packages" script="choose your moment" />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {PRICING.map((p, i) => (
            <Reveal key={p.format} delay={i * 120}>
              <div className="card card-hover group flex h-full flex-col p-8 sm:p-10">
                <h3 className="font-serif text-2xl font-bold uppercase tracking-wide">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm font-light italic text-cream/70">{p.subtitle}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.25em] text-cream/50">
                  Mulai dari
                </p>
                <p className="text-gold-gradient mt-1 font-serif text-4xl font-bold">
                  Rp{(p.tables[1].rows[0].price / 1_000_000).toFixed(1)} Jt
                </p>
                <div className="mt-auto pt-8">
                  <Link
                    href="/harga"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ease-out-expo hover:border-gold hover:text-gold group-hover:gap-3"
                  >
                    Detail Harga
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-28 text-center">
        <SparkleField />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(232,196,119,0.08),transparent_70%)]" />
        <Reveal className="relative z-10 mx-auto max-w-xl px-6">
          <p className="font-script text-4xl text-gold">Siap membuat</p>
          <h2 className="text-gold-gradient mt-1 font-serif text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl">
            Momen Epic Anda?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-cream/70">
            Konsultasikan kebutuhan acara Anda dengan admin kami sekarang.
          </p>
          <div className="mt-9">
            <WhatsAppButton message="Halo Epic Moment PhotoBooth, saya ingin booking photobooth untuk acara saya.">
              Chat Admin Sekarang
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
