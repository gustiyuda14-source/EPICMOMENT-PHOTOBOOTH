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
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
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

      <button type="submit" className="btn-gold w-full">
        <span className="relative z-10">Kirim via WhatsApp</span>
      </button>
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
