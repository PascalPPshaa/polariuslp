# RBC Expedition — Website

Website ekspedisi RBC berbasis **Next.js 14 + TypeScript + Tailwind CSS**, dibangun berdasarkan desain dari Behance.

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 3. Build untuk production

```bash
npm run build
npm run start
```

---

## 📁 Struktur Proyek

```
rbc-expedition/
├── app/
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout (metadata, font)
│   └── page.tsx           # Halaman utama
├── components/
│   ├── Navbar.tsx         # Navigasi (sticky, mobile-responsive)
│   ├── HeroSection.tsx    # Hero + kartu layanan overlapping
│   ├── AboutSection.tsx   # Tentang kami + grid foto
│   ├── StatsSection.tsx   # Statistik (50K+ pengiriman, dll)
│   ├── FeaturesSection.tsx # 8 fitur layanan
│   ├── AppSection.tsx     # Download aplikasi CTA
│   ├── NewsSection.tsx    # Berita terbaru
│   └── Footer.tsx         # Footer lengkap
├── public/                # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Teknologi

| Stack | Versi |
|-------|-------|
| Next.js | 14.2.5 |
| TypeScript | ^5 |
| Tailwind CSS | ^3.4 |
| Lucide React | ^0.383.0 |

---

## 🎯 Sections

1. **Navbar** — Logo, menu navigasi, tombol Masuk & Daftar
2. **Hero** — Background gambar dengan overlay gradien ungu-merah, CTA button, kartu Ekspedisi Udara & Darat
3. **About** — Grid foto 2x2 + statistik 12+ tahun + list keunggulan
4. **Stats** — Bar statistik angka biru (50K+ pengiriman, dll)
5. **Features** — 8 fitur dalam grid 4 kolom
6. **App Download** — Gradient section dengan tombol Google Play & App Store
7. **News** — 3 kartu berita terbaru
8. **Footer** — Kolom kontak, produk, perusahaan, legal + sosial media

---

## 🌐 Deploy ke Vercel

```bash
npx vercel
```

Atau hubungkan repositori GitHub ke [vercel.com](https://vercel.com) untuk auto-deploy.
