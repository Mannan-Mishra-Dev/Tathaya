/* Login / Signup tab switching on the auth page */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".auth-tab");
    if (!tabs.length) return;

    function activate(target) {
      tabs.forEach((tab) => {
        const isTarget = tab.dataset.tab === target;
        tab.setAttribute("aria-selected", String(isTarget));
      });
      document.querySelectorAll(".auth-form").forEach((form) => {
        form.classList.toggle("is-active", form.dataset.form === target);
      });
      const heading = document.getElementById("auth-heading");
      if (heading) {
        heading.textContent = target === "login" ? "Log in" : "Sign up";
      }
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(tab.dataset.tab));
    });

    document.querySelectorAll("[data-switch-to]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        activate(el.dataset.switchTo);
      });
    });

    const forms = document.querySelectorAll(".auth-form");
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const status = form.querySelector(".form-status");
        if (status) {
          status.textContent =
            form.dataset.form === "login"
              ? "Login isn't wired up yet — this is a design preview."
              : "Signup isn't wired up yet — this is a design preview.";
          status.classList.add("is-visible");
          status.classList.remove("success");
          status.classList.add("error");
        }
      });
    });
  });
})();
