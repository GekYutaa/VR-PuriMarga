# Changelog

## Restrukturisasi awal
- Halaman dipindah ke folder per halaman (URL bersih); nama halaman: Beranda, Virtual Tour, Sejarah, Galeri, Bangunan (dulu "Informasi"), Informasi (dulu "Lokasi").
- Aset dipindah ke `assets/` dengan nama deskriptif; foto jadi WebP maks 1600px; video dikompres 720p.
- CSS dirapikan (diformat), ukuran teks minimum 13px, ditambah fokus keyboard, skip link, FAQ `<details>`.
- JavaScript dipecah menjadi 4 file berfungsi tunggal dan dibuat lebih aksesibel (lightbox panah/keyboard, slider jeda saat fokus).
- Ditambah: favicon, meta description dan Open Graph dasar, 404, robots.txt, sitemap.xml, template halaman, dokumentasi.
- Catatan developer yang tampil ke publik dihapus.

## CSS dipecah menjadi modul
- `style.css` (satu file) dipecah menjadi `tokens`, `base`, `layout`, `components`, dan `pages/` per halaman; tiap halaman hanya memuat CSS yang dibutuhkan.
- Tidak ada aturan yang berubah selain satu perbaikan: `prefers-reduced-motion` kini benar-benar mematikan transisi `.reveal` (sebelumnya kalah spesifisitas).
