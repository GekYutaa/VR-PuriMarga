# Website Puri Ageng Marga

Website statis (HTML + CSS + JavaScript). Tidak memakai framework, backend, atau proses build.

## Menjalankan di komputer
1. Buka folder ini di VS Code.
2. Pasang ekstensi **Live Server**, klik kanan `index.html` -> *Open with Live Server*.
   (Jangan klik dua kali `index.html`: tautan folder seperti `/sejarah/` baru bekerja lewat server.)

## Struktur
| Folder / file | Isi |
|---|---|
| `index.html`, `sejarah/`, `jelajah/`, `virtual-tour/`, `galeri/`, `informasi/` | 6 halaman (tiap halaman = `index.html` di foldernya) |
| `tour/` | Export 3DVista (**belum ada, letakkan di sini**) |
| `assets/css/` | `tokens.css`, `base.css`, `layout.css`, `components.css`, dan `pages/` (satu CSS per halaman) |
| `assets/js/` | `nav.js`, `reveal.js`, `slider.js`, `gallery.js` (satu fitur satu file) |
| `assets/img/`, `assets/video/` | Foto dan video yang sudah dioptimasi |
| `docs/` | Panduan pengelola, catatan verifikasi, template halaman |
| `_arsip-belum-dipakai/` | Foto lama yang belum dipakai (tidak ikut dipublikasikan) |

## Deploy
Upload seluruh isi folder (kecuali `_arsip-belum-dipakai/` dan `docs/`) ke hosting statis. Ganti `GANTI-DOMAIN.id` di `robots.txt` dan `sitemap.xml`.

Panduan mengubah konten: `docs/PANDUAN-PENGELOLA.md`.
