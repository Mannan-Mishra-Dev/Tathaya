/* Theme control: light/dark, persisted via localStorage, respects system preference */
(function () {
  "use strict";

  const STORAGE_KEY = "tathya-theme";
  const root = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    document
      .querySelectorAll(".theme-toggle")
      .forEach((btn) =>
        btn.setAttribute(
          "aria-label",
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        )
      );
  }

  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  // Apply immediately (before paint-ish, since script is loaded in <head>)
  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        setTheme(current === "dark" ? "light" : "dark");
      });
    });
  });

  // Follow system changes only if the user hasn't chosen explicitly
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
})();
