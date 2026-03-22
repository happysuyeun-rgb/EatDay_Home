/**
 * EatDay Landing - Interactions
 * - 메뉴 클릭 → 해당 섹션 smooth scroll
 * - 데모 보기 → 기능 섹션으로 scroll
 * - Primary CTA → alert
 * - FAQ 아코디언 (키보드 접근성)
 */

(function () {
  'use strict';

  // ===== 모바일 메뉴 =====
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== 스크롤 유틸 =====
  function scrollToSection(selector) {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ===== 네비 링크 (smooth scroll) =====
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });

  // ===== 기능 살펴보기 → 기능 섹션 =====
  document.querySelectorAll('.cta-demo').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToSection('#features');
    });
  });

  // CTA 링크(eatday.vercel.app)는 href로 동작, 클릭 핸들 불필요

  // ===== FAQ 아코디언 =====
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(function (trigger) {
    const targetId = trigger.getAttribute('aria-controls');
    const panel = targetId ? document.getElementById(targetId) : null;

    if (!panel) return;

    function open() {
      trigger.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
    }

    function close() {
      trigger.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    }

    function toggle() {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        close();
      } else {
        open();
      }
    }

    trigger.addEventListener('click', toggle);

    // 키보드 접근성
    trigger.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          toggle();
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          const next = trigger.closest('.faq-item')?.nextElementSibling?.querySelector('.faq-trigger');
          if (next) next.focus();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          const prev = trigger.closest('.faq-item')?.previousElementSibling?.querySelector('.faq-trigger');
          if (prev) prev.focus();
          break;
        case 'Home':
          e.preventDefault();
          faqTriggers[0]?.focus();
          break;
        case 'End':
          e.preventDefault();
          faqTriggers[faqTriggers.length - 1]?.focus();
          break;
      }
    });
  });
})();
