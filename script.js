// Minimal vanilla JS. No libraries.

// Footer year
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// Reveal: stagger first paint, intersection-based reveal further down.
(() => {
  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduce) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-in"));
    return;
  }

  // Above-the-fold reveals fire on next frame for a clean stagger.
  requestAnimationFrame(() => {
    document.querySelectorAll(".hero .reveal, .position .reveal, .page-lead .reveal").forEach(el => {
      el.classList.add("is-in");
    });
  });

  // Below-the-fold reveals on intersection.
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  document.querySelectorAll(".reveal:not(.is-in)").forEach(el => io.observe(el));
})();
