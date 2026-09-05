/* Main: scroll-reveal on-load sequence + contact form validation */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    /* ---- One orchestrated reveal moment for hero content ---- */
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }

    /* ---- Contact form (About page) ---- */
    const form = document.getElementById("contact-form");
    if (form) {
      const status = form.querySelector(".form-status");

      const validators = {
        name: (v) => v.trim().length > 0 || "Please enter your name.",
        email: (v) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ||
          "Please enter a valid email address.",
        message: (v) =>
          v.trim().length >= 10 ||
          "Message should be at least 10 characters.",
      };

      function validateField(field) {
        const wrap = field.closest(".field");
        const errorEl = wrap.querySelector(".field-error");
        const rule = validators[field.name];
        if (!rule) return true;
        const result = rule(field.value);
        if (result === true) {
          wrap.classList.remove("has-error");
          errorEl.textContent = "";
          return true;
        }
        wrap.classList.add("has-error");
        errorEl.textContent = result;
        return false;
      }

      form.querySelectorAll("input, textarea").forEach((field) => {
        field.addEventListener("blur", () => validateField(field));
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fields = Array.from(form.querySelectorAll("input, textarea"));
        const allValid = fields
          .map(validateField)
          .every(Boolean);

        if (!allValid) {
          status.textContent = "Please fix the errors above.";
          status.classList.remove("success");
          status.classList.add("error", "is-visible");
          return;
        }

        // No backend wired up yet — acknowledge locally.
        status.textContent = "Message sent. We'll get back to you soon.";
        status.classList.remove("error");
        status.classList.add("success", "is-visible");
        form.reset();
      });
    }
  });
})();
