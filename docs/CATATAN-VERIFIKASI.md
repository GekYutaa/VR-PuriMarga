# Yang perlu diputuskan / diverifikasi sebelum rilis

## Isi (butuh narasumber / pihak Puri)
- [ ] Timeline "1949 - Puputan Margarana": cek tahun dan istilah (setahu saya Puputan Margarana 20 November 1946). Jika 1949 adalah penuturan narasumber, pisahkan peristiwanya.
- [ ] Nama "Bale Seka Ulu" vs "Bale Sekaulu": samakan.
- [ ] Deskripsi pengisi (Bale Gong, Bale Mancagina, Tempat Masuk) masih generik.
- [ ] Teks bernada laporan penelitian ("bahan penelitian", "dapat dikembangkan...") di `jelajah/` dan `galeri/`: tulis ulang untuk pengunjung; pindahkan keterangan sumber ke halaman "Tentang".
- [ ] Statistik "17C" di beranda: ganti dengan "1687" atau "Abad ke-17".
- [ ] Aksara Bali di hero: minta ahli memeriksa tulisannya.
- [ ] Izin publikasi foto, video drone, dan teks dari pihak Puri; kredit narasumber dan pembuat.

## Teknis
- [ ] Letakkan export 3DVista di `tour/` (tombol "Mulai Virtual Tour" menuju `tour/index.html`).
- [ ] Peta di `informasi/` masih ilustrasi: ganti dengan embed Google Maps / OpenStreetMap; koordinat resmi.
- [ ] Kartu bangunan di `jelajah/` masih menuju halaman tour yang sama (belum ke scene tertentu).
- [ ] Ganti `GANTI-DOMAIN.id` di `robots.txt` dan `sitemap.xml`; tambah `og:image`, `og:url`, canonical setelah domain jadi.
- [ ] Teks emas `#c99b4a` di atas krem kontrasnya rendah (sekitar 2:1): gelapkan (mis. `#8a6a1f`).
- [ ] Foto lama resolusi rendah (mis. foto 300x533) tampak pecah; ganti dengan foto asli resolusi tinggi.
- [ ] Video drone hanya 3 detik: ganti klip 15-30 detik.
- [ ] Font masih dari Google Fonts; untuk performa/privasi, self-host.
- [ ] Slider hero: titik navigasi belum bisa diklik; belum ada tombol jeda.
- [ ] Ganti CSS satu file menjadi beberapa modul (base/layout/components/pages) bila perlu.
- [ ] Jalankan Lighthouse, validator HTML W3C, dan uji di HP asli.
