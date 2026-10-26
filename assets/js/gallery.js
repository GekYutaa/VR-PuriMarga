/* gallery.js - filter galeri + lightbox (panah kiri/kanan, Esc, Enter/Spasi). Halaman: galeri */
(() => {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  if (!items.length) return;

  // Filter kategori
  document.querySelectorAll('[data-gallery-filter] .filter').forEach((btn) => {
    btn.addEventListener('click', () => {
      document
        .querySelectorAll('[data-gallery-filter] .filter')
        .forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach((it) =>
        it.classList.toggle('hidden', f !== 'all' && it.dataset.category !== f),
      );
    });
  });

  // Lightbox
  const box = document.getElementById('lightbox');
  if (!box) return;
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  let index = 0;
  let opener = null;
  const visible = () => items.filter((it) => !it.classList.contains('hidden'));
  const show = (n) => {
    const list = visible();
    index = (n + list.length) % list.length;
    const src = list[index].querySelector('img');
    img.src = src.currentSrc || src.src;
    img.alt = src.alt;
    cap.textContent = list[index].querySelector('figcaption b')?.textContent || '';
  };
  const open = (item) => {
    opener = item;
    show(visible().indexOf(item));
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('lightboxClose').focus();
  };
  const close = () => {
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    opener?.focus();
  };
  items.forEach((it) => {
    it.addEventListener('click', () => open(it));
    it.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(it);
      }
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', close);
  document.getElementById('lightboxPrev').addEventListener('click', () => show(index - 1));
  document.getElementById('lightboxNext').addEventListener('click', () => show(index + 1));
  box.addEventListener('click', (e) => {
    if (e.target === box) close();
  });
  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
})();
