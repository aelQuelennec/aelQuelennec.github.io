/* ----------------------------------------------------------------
   script.js – lightweight interactivity for the portfolio
   ---------------------------------------------------------------- */

(function () {
  'use strict';

  /* ── Footer year ───────────────────────────────────────────── */
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Navbar: add "scrolled" shadow ─────────────────────────── */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    highlightActiveLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile nav toggle ──────────────────────────────────────── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active nav link on scroll ──────────────────────────────── */
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  function highlightActiveLink() {
    const scrollY = window.scrollY + 80; // offset for fixed navbar
    let current = '';
    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  highlightActiveLink();

  /* ── Hero avatar: show emoji placeholder if image fails ─────── */
  const heroAvatar = document.getElementById('heroAvatar');
  if (heroAvatar) {
    heroAvatar.addEventListener('error', function () {
      heroAvatar.outerHTML =
        '<div class="hero-avatar placeholder" aria-hidden="true">👤</div>';
    });
  }

  /* ── Contact form: basic feedback ───────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Allow the native form submission to Formspree (or similar) to proceed.
      // Show a simple in-page confirmation so users know it worked.
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
    });
  }

  /* ── Intersection Observer: fade-in on scroll ───────────────── */
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = [
      '.fade-in { opacity: 0; transform: translateY(20px);',
      '  transition: opacity 0.5s ease, transform 0.5s ease; }',
      '.fade-in.visible { opacity: 1; transform: none; }',
    ].join('\n');
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedSelectors = [
      '.research-card',
      '.pub-item',
      '.project-card',
      '.cv-item',
      '.info-card',
    ].join(', ');

    document.querySelectorAll(animatedSelectors).forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }
})();
