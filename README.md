# Epic Moment Photo Booth — Website

Website resmi Epic Moment Photo Booth (Kendari). Next.js 14 (App Router) + TypeScript + Tailwind CSS.

- **Live**: https://epicmoment-photobooth.vercel.app
- **Repo**: https://github.com/gustiyuda14-source/EPICMOMENT-PHOTOBOOTH

## Auto Deploy — Cara Kerjanya

Project ini sudah terhubung ke Vercel lewat **GitHub integration**. Artinya setiap kali ada
perubahan yang di-push, Vercel otomatis build & deploy tanpa perlu jalankan `vercel` manual:

| Push ke | Hasil |
|---|---|
| Branch `main` | Auto build + deploy ke **production** (URL live di atas) |
| Branch lain / Pull Request | Auto build + deploy ke **preview URL** terpisah untuk review sebelum merge |

Jadi alur kerja standarnya:

```bash
# 1. Edit kode/konten
# 2. Cek dulu di lokal
npm run dev

# 3. Commit & push — ini yang memicu auto redeploy
git add .
git commit -m "Update ..."
git push
```

Setelah `git push`, cek progress build di dashboard: https://vercel.com/ajiks/epicmoment-photobooth

Deploy manual (`vercel --prod`) hanya diperlukan kalau integration GitHub sedang bermasalah —
dalam kondisi normal tidak perlu dijalankan sama sekali.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production build (jalankan sebelum push perubahan besar)
npm run lint
```

## Environment Variables

Data kontak (nomor WhatsApp, rekening bank, handle Instagram) disimpan di env var, bukan
hardcode di kode — lihat `.env.example` untuk daftar lengkap.

```bash
cp .env.example .env.local
# lalu isi nilai sesuai kebutuhan
```

`.env.local` tidak pernah ikut ter-push (ada di `.gitignore`). Kalau nilainya berubah di
Vercel, sync dengan: `vercel env pull .env.local`.

## Mengubah Konten Situs

Sebagian besar konten adalah data terstruktur, bukan hardcode di JSX — edit di sini tanpa
perlu sentuh komponen:

| Ingin ubah... | Edit file |
|---|---|
| Harga paket (2R/4R) | `src/data/packages.ts` |
| Foto portfolio | `src/data/portfolio.ts` + tambah file di `public/images/portfolio/` |
| Kebijakan booking / syarat lokasi | `src/data/policies.ts` |
| Nomor WA, rekening, IG | `.env.local` (lokal) atau Vercel dashboard → Settings → Environment Variables (production) |

## Struktur Project

```
src/app/            Halaman (App Router): /, /portfolio, /harga, /booking, /tentang-kami, /kontak
src/components/      Komponen UI reusable
src/data/            Data terstruktur (harga, portfolio, kebijakan, kontak)
public/images/       Aset foto yang sudah dikurasi untuk web
```
