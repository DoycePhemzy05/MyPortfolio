/* =============================================
   DOYCEPHEMZY GRAPHIXS — Portfolio Scripts
   script.js
   ============================================= */

/* ---------- SMOOTH NAV HIGHLIGHT ---------- */
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

/* ---------- SCROLL REVEAL ---------- */
const revealElements = document.querySelectorAll(
  '.project-card, .skill-card, .stat-item, .value-item'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

/* ---------- NAV SCROLL SHADOW ---------- */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 24px rgba(43,43,43,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

/* ---------- ACTIVE NAV STYLE ---------- */
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active {
    color: var(--brown) !important;
  }
`;
document.head.appendChild(style);