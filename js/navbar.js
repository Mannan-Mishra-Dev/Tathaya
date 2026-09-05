/* Navbar: mobile sidebar open/close, scroll behavior, active link */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".nav-hamburger");
    const sidebar = document.querySelector(".mobile-sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const closeBtn = document.querySelector(".sidebar-close");
    const body = document.body;

    if (!hamburger || !sidebar || !overlay) return;

    let lastFocused = null;

    function openSidebar() {
      lastFocused = document.activeElement;
      sidebar.classList.add("is-open");
      overlay.classList.add("is-open");
      body.classList.add("no-scroll");
      hamburger.setAttribute("aria-expanded", "true");
      sidebar.setAttribute("aria-hidden", "false");
      const firstLink = sidebar.querySelector("a, button");
      if (firstLink) firstLink.focus();
    }

    function closeSidebar() {
      sidebar.classList.remove("is-open");
      overlay.classList.remove("is-open");
      body.classList.remove("no-scroll");
      hamburger.setAttribute("aria-expanded", "false");
      sidebar.setAttribute("aria-hidden", "true");
      if (lastFocused) lastFocused.focus();
    }

    hamburger.addEventListener("click", () => {
      const isOpen = sidebar.classList.contains("is-open");
      isOpen ? closeSidebar() : openSidebar();
    });

    closeBtn && closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeSidebar);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("is-open")) {
        closeSidebar();
      }
    });

    // Basic focus trap while sidebar is open
    sidebar.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      const focusables = sidebar.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Navbar shadow / condensed state on scroll
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          navbar.classList.toggle("is-scrolled", window.scrollY > 8);
          ticking = false;
        });
      });
    }
  });
})();
