"use client";

import { useState } from "react";
import { PRICING } from "@/data/packages";
import { SITE, waLink } from "@/data/site";

export function BookingForm() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [format, setFormat] = useState(PRICING[0].format);
  const [notes, setNotes] = useState("");

  const formatName = PRICING.find((p) => p.format === format)?.name ?? "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      `Halo ${SITE.name}, saya ingin booking photobooth:`,
      `- Nama: ${name}`,
      `- Jenis acara: ${eventType}`,
      `- Tanggal acara: ${eventDate}`,
      `- Lokasi: ${location}`,
      `- Format yang diminati: ${formatName}`,
      notes ? `- Catatan: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-cream/15 bg-cream/5 p-6 sm:p-8">
      <Field label="Nama Anda">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="Nama lengkap"
        />
      </Field>

      <Field label="Jenis Acara">
        <input
          required
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="input"
          placeholder="Wedding, Corporate, Graduation, dll."
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tanggal Acara">
          <input
            required
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Lokasi">
          <input
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
            placeholder="Nama venue / kota"
          />
        </Field>
      </div>

      <Field label="Format PhotoBooth">
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value as typeof format)}
          className="input"
        >
          {PRICING.map((p) => (
            <option key={p.format} value={p.format}>
              {p.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Catatan Tambahan (opsional)">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="input min-h-24"
          placeholder="Jumlah jam, tema, atau kebutuhan khusus lainnya"
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-full bg-gold py-3 font-serif font-bold uppercase tracking-[0.15em] text-maroon-deep transition hover:bg-gold-light"
      >
        Kirim via WhatsApp
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(253, 253, 253, 0.2);
          background: rgba(253, 253, 253, 0.05);
          padding: 0.7rem 1rem;
          color: #fdfdfd;
          font-size: 0.95rem;
        }
        .input::placeholder {
          color: rgba(253, 253, 253, 0.4);
        }
        .input:focus {
          outline: none;
          border-color: #e8c477;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-cream/70">
        {label}
      </span>
      {children}
    </label>
  );
}
