/* Accessible FAQ accordion */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-item").forEach((item, i) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      if (!question || !answer) return;

      const id = answer.id || `faq-answer-${i}`;
      answer.id = id;
      question.setAttribute("aria-controls", id);
      question.setAttribute("aria-expanded", item.dataset.open === "true");

      question.addEventListener("click", () => {
        const isOpen = item.dataset.open === "true";

        // Close siblings within the same list for a single-open accordion feel
        const list = item.closest(".faq-list");
        if (list) {
          list.querySelectorAll(".faq-item").forEach((other) => {
            if (other !== item) {
              other.dataset.open = "false";
              const q = other.querySelector(".faq-question");
              if (q) q.setAttribute("aria-expanded", "false");
            }
          });
        }

        item.dataset.open = String(!isOpen);
        question.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  });
})();
