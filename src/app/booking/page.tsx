import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BookingForm } from "@/components/BookingForm";
import { HOW_TO_BOOK, PAYMENT_NOTE } from "@/data/policies";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Booking",
  description: "Booking sewa photobooth Epic Moment untuk acara Anda — konsultasi langsung via WhatsApp.",
};

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Reservasi" title="How To Book" script="epicmoment" />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <Reveal delay={120}>
          <ol className="space-y-6">
            {HOW_TO_BOOK.map((step, i) => (
              <li key={step} className="group flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-gold/5 font-serif text-sm font-bold text-gold shadow-gold-soft transition-all duration-300 ease-out-expo group-hover:bg-gold group-hover:text-maroon-deep">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-sm font-light leading-relaxed text-cream/85">{step}</p>
              </li>
            ))}
          </ol>

          <div className="card mt-10 p-6 sm:p-7">
            <h3 className="text-gold-gradient font-serif text-sm font-bold uppercase tracking-wide">
              Pembayaran DP
            </h3>
            <div className="divider-gold mt-3 w-14" />
            <p className="mt-4 text-sm font-light leading-relaxed text-cream/80">
              {SITE.bank.name} — {SITE.bank.account}
              <br />
              a.n. {SITE.bank.holder}
            </p>
            <p className="mt-3 text-xs italic leading-relaxed text-cream/50">{PAYMENT_NOTE}</p>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <BookingForm />
        </Reveal>
      </div>
    </div>
  );
}
