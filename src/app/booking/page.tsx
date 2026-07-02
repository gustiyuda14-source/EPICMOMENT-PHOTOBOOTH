import type { Metadata } from "next";
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
      <SectionHeading eyebrow="Reservasi" title="How To Book" script="epicmoment" />

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div>
          <ol className="space-y-5">
            {HOW_TO_BOOK.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-sm font-bold text-gold">
                  {i + 1}
                </span>
                <p className="text-sm font-light text-cream/85">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-cream/15 bg-cream/5 p-6">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wide">
              Pembayaran DP
            </h3>
            <p className="mt-2 text-sm font-light text-cream/80">
              {SITE.bank.name} — {SITE.bank.account}
              <br />
              a.n. {SITE.bank.holder}
            </p>
            <p className="mt-3 text-xs italic text-cream/50">{PAYMENT_NOTE}</p>
          </div>
        </div>

        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
