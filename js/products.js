/* ============================================================
   GENICO TECH SOLUTIONS — PRODUCT RENDERING
   Renders product cards with staggered reveal animation,
   category filtering, and click -> redirect to detail page.
   Used on products.html (#product-grid) and index.html (#featured-grid).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");
  const featured = document.getElementById("featured-grid");
  const filterWrap = document.getElementById("filters");

  /* ---- Build a single product card ---- */
  function cardHTML(p, index) {
    return `
      <article class="product-card reveal" data-id="${p.id}" data-cat="${p.category}" style="--d:${index * 0.07}s">
        <div class="pc-imgwrap">
          <span class="pc-badge">${p.brand}</span>
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src=window.IMG_FALLBACK;">
          <div class="pc-overlay"><span class="view-pill">View Details &rarr;</span></div>
        </div>
        <div class="pc-body">
          <span class="pc-cat">${categoryName(p.category)}</span>
          <h3>${p.name}</h3>
          <p>${p.short}</p>
          <div class="pc-foot">
            <span class="pc-link">View Details <span class="arrow">&rarr;</span></span>
          </div>
        </div>
      </article>`;
  }

  /* ---- Render a set of products into a container ---- */
  function render(container, list) {
    container.innerHTML = list.length
      ? list.map((p, i) => cardHTML(p, i)).join("")
      : `<div class="empty">No products found in this category.</div>`;
    attachCardEvents(container);
    triggerReveal(container);
  }

  /* ---- Click each card -> go to detail page ---- */
  function attachCardEvents(container) {
    container.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        // small exit animation then redirect to the product detail section
        card.style.transform = "scale(0.97)";
        setTimeout(() => {
          window.location.href = "product-detail.html?id=" + encodeURIComponent(id);
        }, 120);
      });
    });
  }

  /* ---- Re-run reveal so freshly rendered cards animate in ---- */
  function triggerReveal(container) {
    const cards = container.querySelectorAll(".product-card");
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
        { threshold: 0.08 }
      );
      cards.forEach((c) => io.observe(c));
    } else {
      cards.forEach((c) => c.classList.add("in-view"));
    }
  }

  /* ---- FEATURED grid on home (first 8) ---- */
  if (featured) {
    render(featured, PRODUCTS.slice(0, 8));
  }

  /* ---- FULL products page with filters ---- */
  if (grid) {
    // read ?cat= from url to preselect a category
    const params = new URLSearchParams(location.search);
    let active = params.get("cat") || "all";

    if (filterWrap) {
      filterWrap.innerHTML = CATEGORIES.map(
        (c) =>
          `<button class="chip ${c.id === active ? "active" : ""}" data-cat="${c.id}">${c.name}</button>`
      ).join("");

      filterWrap.querySelectorAll(".chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          filterWrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
          chip.classList.add("active");
          active = chip.dataset.cat;
          applyFilter(active);
        });
      });
    }

    function applyFilter(cat) {
      const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
      render(grid, list);
    }

    applyFilter(active);
  }
});
