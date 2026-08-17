// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav on link click
      document.getElementById('navlinks').classList.remove('mobile-open');
      document.getElementById('hamburger').classList.remove('active');
      document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
    }
  })
);

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');
if (hamburger && navlinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navlinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navlinks.contains(e.target)) {
      navlinks.classList.remove('mobile-open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Lightbox
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
  document.body.classList.add('modal-open');
}
function closeLightbox(e) {
  if (e.target.id === 'lightbox' || e.target.className === 'lightbox-close') {
    document.getElementById('lightbox').classList.remove('active');
    document.body.classList.remove('modal-open');
    setTimeout(() => document.getElementById('lightbox-img').src = '', 300);
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox({ target: { id: 'lightbox' } });
});