/* ============================================================
   GENICO TECH SOLUTIONS — PRODUCT DETAIL RENDERER
   Reads ?id= from URL, renders the full product detail section,
   wires "Ask the assistant" to open chatbot with this product.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("detail-root");
  const crumb = document.getElementById("detail-crumb");
  const titleEl = document.getElementById("detail-title");
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const p = getProductById(id);

  if (!p) {
    if (titleEl) titleEl.textContent = "Product Not Found";
    root.innerHTML = `
      <div class="empty">
        <h3>Sorry, we couldn't find that product.</h3>
        <p style="margin:14px 0">It may have been moved or the link is incorrect.</p>
        <a class="btn btn-primary" href="products.html">Browse All Products</a>
      </div>`;
    return;
  }

  if (titleEl) titleEl.textContent = p.name;
  if (crumb)
    crumb.innerHTML = `<a href="index.html">Home</a> / <a href="products.html">Products</a> / <span>${p.name}</span>`;
  document.title = p.name + " — Genico Tech Solutions";

  const specRows = p.specs
    .map((s) => `<tr><th>${s[0]}</th><td>${s[1]}</td></tr>`)
    .join("");

  root.innerHTML = `
    <div class="detail-wrap">
      <div class="detail-img reveal-left in-view">
        <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src=window.IMG_FALLBACK;">
      </div>
      <div class="detail-info reveal-right in-view">
        <span class="d-cat">${categoryName(p.category)}</span>
        <h1>${p.name}</h1>
        <span class="d-brand">Brand: ${p.brand}</span>
        <p class="d-desc">${p.description}</p>
        <h3 style="margin-bottom:12px;font-size:1.1rem;">Technical Specifications</h3>
        <table class="spec-table">${specRows}</table>
        <div class="detail-actions">
          <a class="btn btn-primary" href="contact.html">Send Inquiry</a>
          <button class="btn btn-outline" id="ask-assistant">Ask the Assistant</button>
          <a class="btn btn-outline" href="products.html">&larr; Back to Products</a>
        </div>
      </div>
    </div>

    <div class="section" style="padding-top:60px;">
      <div class="section-head" style="margin-bottom:30px;">
        <span class="kicker">You may also like</span>
        <h2 style="font-size:1.6rem;">Related Products</h2>
      </div>
      <div class="product-grid" id="related-grid"></div>
    </div>
  `;

  /* ---- "Ask the Assistant" opens chatbot pre-loaded with this product ---- */
  const askBtn = document.getElementById("ask-assistant");
  if (askBtn) {
    askBtn.addEventListener("click", () => {
      if (window.GenicoChat) window.GenicoChat.showProduct(p.id, true);
    });
  }

  /* ---- Related products (same category, else random) ---- */
  const relatedGrid = document.getElementById("related-grid");
  let related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id);
  if (related.length < 4) {
    related = related.concat(
      PRODUCTS.filter((x) => x.category !== p.category && x.id !== p.id)
    );
  }
  related = related.slice(0, 4);

  relatedGrid.innerHTML = related
    .map(
      (r, i) => `
      <article class="product-card reveal in-view" data-id="${r.id}" style="--d:${i * 0.08}s">
        <div class="pc-imgwrap">
          <span class="pc-badge">${r.brand}</span>
          <img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.onerror=null;this.src=window.IMG_FALLBACK;">
          <div class="pc-overlay"><span class="view-pill">View Details &rarr;</span></div>
        </div>
        <div class="pc-body">
          <span class="pc-cat">${categoryName(r.category)}</span>
          <h3>${r.name}</h3>
          <p>${r.short}</p>
          <div class="pc-foot"><span class="pc-link">View Details <span class="arrow">&rarr;</span></span></div>
        </div>
      </article>`
    )
    .join("");

  relatedGrid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "product-detail.html?id=" + encodeURIComponent(card.dataset.id);
    });
  });
});
