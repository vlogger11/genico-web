/* ============================================================
   GENICO TECH SOLUTIONS — IN-PAGE CHATBOT
   - Builds a floating chat widget on every page (no markup needed)
   - Quick buttons: About Company, Contact, Products
   - Typing a product name pops that product's info (image + specs + link)
   - Clicking product quick-buttons does the same
   - Exposes window.GenicoChat.showProduct(id) for other scripts
   ============================================================ */

(function () {
  /* ---------- Build widget DOM ---------- */
  const launcher = document.createElement("button");
  launcher.className = "cb-launcher";
  launcher.setAttribute("aria-label", "Open chat assistant");
  launcher.innerHTML = `&#128172;<span class="cb-dot"></span>`;

  const panel = document.createElement("div");
  panel.className = "cb-panel";
  panel.innerHTML = `
    <div class="cb-head">
      <div class="cb-ava">&#129302;</div>
      <div>
        <h4>Genico Assistant</h4>
        <small>Online &middot; replies instantly</small>
      </div>
      <button class="cb-close" aria-label="Close chat">&times;</button>
    </div>
    <div class="cb-body" id="cb-body"></div>
    <div class="cb-quick" id="cb-quick"></div>
    <div class="cb-input">
      <input type="text" id="cb-text" placeholder="Ask about a product, e.g. 'FR-D720S'..." autocomplete="off">
      <button id="cb-send" aria-label="Send">&#10148;</button>
    </div>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  const body = panel.querySelector("#cb-body");
  const quick = panel.querySelector("#cb-quick");
  const input = panel.querySelector("#cb-text");
  const sendBtn = panel.querySelector("#cb-send");
  const closeBtn = panel.querySelector(".cb-close");

  let greeted = false;

  /* ---------- Helpers ---------- */
  function scrollDown() {
    body.scrollTop = body.scrollHeight;
  }

  function addUser(text) {
    const d = document.createElement("div");
    d.className = "cb-msg user";
    d.textContent = text;
    body.appendChild(d);
    scrollDown();
  }

  function addBot(html, delay = 550) {
    // typing indicator first
    const typing = document.createElement("div");
    typing.className = "cb-typing";
    typing.innerHTML = `<span></span><span></span><span></span>`;
    body.appendChild(typing);
    scrollDown();
    return new Promise((resolve) => {
      setTimeout(() => {
        typing.remove();
        const d = document.createElement("div");
        d.className = "cb-msg bot";
        d.innerHTML = html;
        body.appendChild(d);
        scrollDown();
        resolve(d);
      }, delay);
    });
  }

  /* ---------- Quick-reply buttons ---------- */
  function setQuick(buttons) {
    quick.innerHTML = "";
    buttons.forEach((b) => {
      const btn = document.createElement("button");
      btn.textContent = b.label;
      btn.addEventListener("click", b.action);
      quick.appendChild(btn);
    });
  }

  const mainQuick = [
    { label: "🛠 Our Products", action: () => handle("products") },
    { label: "🏢 About Company", action: () => handle("about") },
    { label: "📞 Contact Us", action: () => handle("contact") },
  ];

  /* ---------- Content responses ---------- */
  function aboutMessage() {
    return `<strong>About ${COMPANY.name}</strong><br>${COMPANY.about}
      <div class="cb-mini-specs">
        <div><span>Established</span><span>${COMPANY.established}</span></div>
        <div><span>Nature</span><span>${COMPANY.nature}</span></div>
        <div><span>Location</span><span>Pune, Maharashtra</span></div>
        <div><span>GST</span><span>${COMPANY.gst}</span></div>
        <div><span>Team Size</span><span>${COMPANY.employees}</span></div>
      </div>
      <a class="cb-detail-link" href="about.html">Read full profile &rarr;</a>`;
  }

  function contactMessage() {
    return `<strong>Contact ${COMPANY.name}</strong><br>We'd love to hear from you.
      <div class="cb-mini-specs">
        <div><span>📞 Phone</span><span>${COMPANY.phone}</span></div>
        <div><span>✉ Email</span><span>${COMPANY.email}</span></div>
        <div><span>🧾 GST</span><span>${COMPANY.gst}</span></div>
        <div><span>💳 Payment</span><span>NEFT / Cheque / Cash</span></div>
        <div><span>🚚 Transport</span><span>${COMPANY.transport}</span></div>
      </div>
      <div style="margin-top:8px;font-size:0.82rem;color:var(--text-soft)">📍 ${COMPANY.address}</div>
      <a class="cb-detail-link" href="contact.html">Open contact page &rarr;</a>`;
  }

  function productListMessage() {
    const items = CATEGORIES.filter((c) => c.id !== "all")
      .map(
        (c) =>
          `<div><span>${c.name}</span><span>&rarr;</span></div>`
      )
      .join("");
    return `<strong>Our Product Range</strong><br>We supply automation hardware across these categories:
      <div class="cb-mini-specs">${items}</div>
      Type a product name or model (e.g. <strong>MS300</strong>, <strong>FX3U</strong>, <strong>HGKN43K</strong>) and I'll pull up the details.
      <a class="cb-detail-link" href="products.html">Browse all products &rarr;</a>`;
  }

  function productMessage(p) {
    const specs = p.specs
      .slice(0, 4)
      .map((s) => `<div><span>${s[0]}</span><span>${s[1]}</span></div>`)
      .join("");
    return `<img class="cb-prod-img" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src=window.IMG_FALLBACK;">
      <strong>${p.name}</strong><br>
      <span style="font-size:0.82rem;color:var(--text-soft)">${categoryName(p.category)} &middot; ${p.brand}</span><br>
      ${p.short}
      <div class="cb-mini-specs">${specs}</div>
      <a class="cb-detail-link" href="product-detail.html?id=${p.id}">View full details &rarr;</a>`;
  }

  /* ---------- Product search ---------- */
  function findProducts(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    // direct id match
    const byId = PRODUCTS.find((p) => p.id === q);
    if (byId) return [byId];
    // name / brand / category contains
    return PRODUCTS.filter((p) => {
      const hay = (p.name + " " + p.brand + " " + categoryName(p.category) + " " + p.id).toLowerCase();
      return q.split(/\s+/).some((w) => w.length > 1 && hay.includes(w));
    });
  }

  /* ---------- Intent handling ---------- */
  async function handle(intent, raw) {
    if (intent === "about") {
      await addBot(aboutMessage());
    } else if (intent === "contact") {
      await addBot(contactMessage());
    } else if (intent === "products") {
      await addBot(productListMessage());
      // show clickable product chips
      setQuick(
        PRODUCTS.slice(0, 5)
          .map((p) => ({ label: p.name.split(" ").slice(0, 2).join(" "), action: () => GenicoChat.showProduct(p.id) }))
          .concat([{ label: "↩ Menu", action: showMainQuick }])
      );
      return;
    } else if (intent === "product" && raw) {
      const matches = findProducts(raw);
      if (matches.length === 1) {
        await addBot(productMessage(matches[0]));
      } else if (matches.length > 1) {
        await addBot(
          `I found <strong>${matches.length}</strong> products matching "<strong>${raw}</strong>". Tap one below:`
        );
        setQuick(
          matches
            .slice(0, 5)
            .map((p) => ({ label: p.name.split(" ").slice(0, 2).join(" "), action: () => GenicoChat.showProduct(p.id) }))
            .concat([{ label: "↩ Menu", action: showMainQuick }])
        );
        return;
      } else {
        await addBot(
          `I couldn't find a product matching "<strong>${raw}</strong>". Try a model like <strong>MS300</strong>, <strong>FX3U</strong>, or <strong>HG-KN13</strong> — or tap <strong>Our Products</strong> below.`
        );
      }
    }
    showMainQuick();
  }

  function showMainQuick() {
    setQuick(mainQuick);
  }

  /* ---------- Free-text routing ---------- */
  async function routeText(text) {
    const t = text.toLowerCase();
    if (/(about|company|who are you|profile|established)/.test(t)) {
      await handle("about");
    } else if (/(contact|phone|call|email|address|reach|location|gst|payment)/.test(t)) {
      await handle("contact");
    } else if (/(product|catalog|range|what do you (sell|have)|categories)/.test(t)) {
      await handle("products");
    } else if (/(hi|hello|hey|namaste|good (morning|evening|afternoon))/.test(t) && t.length < 20) {
      await addBot(`Hello! 👋 How can I help you today? You can ask about our <strong>products</strong>, <strong>company</strong>, or <strong>contact</strong> details.`);
      showMainQuick();
    } else {
      await handle("product", text);
    }
  }

  /* ---------- Send handlers ---------- */
  function send() {
    const text = input.value.trim();
    if (!text) return;
    addUser(text);
    input.value = "";
    routeText(text);
  }
  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") send();
  });

  /* ---------- Open / close ---------- */
  function open() {
    panel.classList.add("open");
    launcher.style.display = "none";
    if (!greeted) {
      greeted = true;
      addBot(
        `👋 Welcome to <strong>${COMPANY.name}</strong>!<br>I'm your automation assistant. Ask me about any product, our company, or how to reach us.`,
        300
      ).then(showMainQuick);
    }
    setTimeout(() => input.focus(), 350);
  }
  function close() {
    panel.classList.remove("open");
    launcher.style.display = "grid";
  }
  launcher.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  /* ---------- Public API ---------- */
  window.GenicoChat = {
    open,
    close,
    showProduct: function (id, openFirst) {
      const p = getProductById(id);
      if (!p) return;
      if (openFirst || !panel.classList.contains("open")) open();
      addUser("Tell me about " + p.name);
      addBot(productMessage(p)).then(showMainQuick);
    },
  };
})();
