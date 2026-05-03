/* =====================================================
 * main.js — site-wide interactivity
 * ===================================================== */

(function () {
  'use strict';

  // ---------- 1. Theme toggle (dark / light) ----------
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // ---------- 2. Mobile menu ----------
  const mobileBtn  = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('hidden') === false;
      mobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---------- 3. Scroll reveal ----------
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- 4. Project / publication filter ----------
  // Activated by [data-filter-group] containers with [data-filter] buttons + [data-cat] items.
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const buttons = group.querySelectorAll('[data-filter]');
    const items   = group.querySelectorAll('[data-cat]');

    function applyFilter(cat) {
      items.forEach(it => {
        const cats = (it.dataset.cat || '').split(/\s+/);
        const show = cat === 'all' || cats.includes(cat);
        it.style.display = show ? '' : 'none';
      });
      buttons.forEach(b => {
        const active = b.dataset.filter === cat;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });

    // Initial filter from URL ?cat=
    const urlCat = new URLSearchParams(window.location.search).get('cat');
    applyFilter(urlCat || 'all');
  });

  // ---------- 5. Copy citation ----------
  document.querySelectorAll('[data-copy-cite]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const target = document.querySelector(btn.dataset.copyCite);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.innerText.trim());
        const original = btn.innerText;
        btn.innerText = '✓ Copied';
        setTimeout(() => { btn.innerText = original; }, 1600);
      } catch (e) { /* noop */ }
    });
  });

  // ---------- 6. Search (blog) — simple client-side filter ----------
  const searchInput = document.getElementById('blog-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('[data-search-item]').forEach(it => {
        const hay = it.dataset.searchItem.toLowerCase();
        it.style.display = hay.includes(q) ? '' : 'none';
      });
    });
  }
})();
