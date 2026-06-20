/* ============================================================
   GENICO TECH SOLUTIONS — MAIN SITE SCRIPT
   Header scroll, mobile menu, scroll-reveal, hero particles,
   stat count-up, scroll-to-top.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Sticky header shadow ---- */
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
    const top = document.querySelector(".to-top");
    if (top) top.classList.toggle("show", window.scrollY > 400);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---- Mobile menu toggle ---- */
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---- Scroll reveal via IntersectionObserver ---- */
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
  );
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ---- Hero floating particles ---- */
  const particles = document.querySelector(".particles");
  if (particles) {
    for (let i = 0; i < 18; i++) {
      const s = document.createElement("span");
      const size = Math.random() * 14 + 4;
      s.style.width = s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.animationDuration = Math.random() * 12 + 8 + "s";
      s.style.animationDelay = Math.random() * 8 + "s";
      particles.appendChild(s);
    }
  }

  /* ---- Stat count-up ---- */
  const stats = document.querySelectorAll(".stat[data-count]");
  if (stats.length && "IntersectionObserver" in window) {
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target);
            so.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    stats.forEach((s) => so.observe(s));
  }

  function countUp(stat) {
    const strong = stat.querySelector("strong");
    const target = parseInt(stat.dataset.count, 10);
    const suffix = stat.dataset.suffix || "";
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      cur += step;
      if (cur >= target) {
        cur = target;
        strong.textContent = cur + suffix;
        stat.classList.add("pulse");
      } else {
        strong.textContent = cur + suffix;
        requestAnimationFrame(tick);
      }
    };
    tick();
  }

  /* ---- Scroll to top ---- */
  const top = document.querySelector(".to-top");
  if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---- Mark active nav link ---- */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav > li > a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
});
