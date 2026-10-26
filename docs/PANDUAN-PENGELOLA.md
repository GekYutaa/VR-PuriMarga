# Panduan Pengelola: mau ubah apa, edit di mana

| Mau ubah | Edit di mana |
|---|---|
| Teks sejarah | `sejarah/index.html` |
| Tambah / ubah bangunan | `jelajah/index.html`: salin satu blok `<a class="building-card">`, ubah nomor, nama, teks, foto |
| Ganti foto | Timpa file di `assets/img/bangunan/` (nama sama, format WebP, lebar maks 1600px) |
| Tambah foto galeri | Foto ke `assets/img/bangunan/`, lalu salin satu `<figure class="gallery-item">` di `galeri/index.html` |
| Ganti video hero | Timpa `assets/video/puri-drone.mp4` (H.264, 720p, tanpa audio, idealnya < 3 MB) |
| Pasang / ganti tour 3DVista | Isi folder `tour/` dengan hasil export (harus ada `tour/index.html`) |
| Warna dan font | Variabel di `assets/css/tokens.css` |
| Gaya satu halaman saja | `assets/css/pages/<nama-halaman>.css` |
| Gaya komponen dipakai banyak halaman (tombol, FAQ, lightbox) | `assets/css/components.css` |
| Lokasi, alamat, kontak | `informasi/index.html` |
| Menu atau footer | **Semua halaman** (cari komentar `HEADER` / `FOOTER`) |
| Halaman baru | Salin `docs/template-halaman.html` ke `nama-halaman/index.html`, buat `assets/css/pages/<nama>.css` jika perlu, tambahkan di menu semua halaman dan di `sitemap.xml` |

## Aturan singkat
- Setiap `<img>` wajib punya `alt`, `width`, `height`.
- Satu `<h1>` per halaman.
- Jangan edit isi folder `tour/` secara manual.
- Setelah mengubah, cek di Live Server pada lebar HP dan desktop.
