/* slider.js - slider foto di hero. Elemen: #heroPhotoSlider, #heroPhotoTrack, #heroPhotoDots */
(() => {
  const track = document.getElementById('heroPhotoTrack');
  const dotsWrap = document.getElementById('heroPhotoDots');
  const slider = document.getElementById('heroPhotoSlider');
  if (!track || !dotsWrap || !slider) return;
  const INTERVAL_MS = 4200;
  const slides = track.querySelectorAll('.hero-photo');
  let current = 0;
  let timer = null;
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'photo-dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.photo-dot');
  const go = (i) => {
    current = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, n) => d.classList.toggle('active', n === i));
  };
  const stop = () => {
    clearInterval(timer);
    timer = null;
  };
  const start = () => {
    stop();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => go((current + 1) % slides.length), INTERVAL_MS);
  };
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);
  slider.addEventListener('focusin', stop);
  slider.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  start();
})();
