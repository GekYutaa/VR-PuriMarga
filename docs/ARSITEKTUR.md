# Arsitektur & keputusan teknis

- **HTML/CSS/JS standar, tanpa build.** Pengelola cukup mengedit file dan meng-upload. Tidak ada dependency yang bisa usang.
- **URL bersih**: satu folder per halaman (`/sejarah/`). Tautan dibuat relatif (`../assets/...`) sehingga situs juga jalan di subfolder.
- **JavaScript klasik + `defer`**, bukan ES module, agar tidak bermasalah saat dibuka di lingkungan sederhana. Satu file = satu fitur, dibungkus fungsi sendiri, aman bila elemennya tidak ada di halaman.
- **Progressive enhancement**: konten tampil tanpa JS (`.reveal` hanya disembunyikan jika `<html class="js">`), FAQ memakai `<details>` bawaan browser.
- **Aksesibilitas dasar**: skip link, `aria-current`, fokus keyboard terlihat, lightbox dapat dioperasikan keyboard, `prefers-reduced-motion` dihormati.
- **Aset**: foto WebP maks 1600px, video 720p tanpa audio. Nama file deskriptif (kebab-case). Pemetaan nama lama ke baru: `PEMETAAN-NAMA-FILE.md`.
- Header dan footer sama di semua halaman dan diberi komentar penanda.

## Struktur CSS
Urutan pemuatan di setiap halaman (urutan ini penting karena kaskade CSS):

1. `tokens.css`: variabel warna, font, ukuran
2. `base.css`: reset, elemen dasar, fokus, skip-link, animasi `.reveal`, `prefers-reduced-motion`
3. `layout.css`: navbar, footer, `.section`
4. `components.css`: komponen dipakai ulang (tombol, eyebrow, hero halaman dalam, FAQ, lightbox)
5. `pages/<halaman>.css`: hanya gaya khusus halaman itu

Aturan: kelas yang dipakai di lebih dari satu halaman masuk `components.css`; kelas satu halaman masuk `pages/`. Aturan `@media` ditulis di bagian bawah file yang sama dengan komponennya.
