/* nav.js - efek navbar saat scroll + menu mobile. Elemen: #navbar, #navToggle, #navMenu */
(() => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const update = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  };
  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
  menu
    .querySelectorAll('.nav-link')
    .forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();
