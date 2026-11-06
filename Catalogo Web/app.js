(function () {
  var D = window.NC;
  var lang = "es";
  var current = D.products[0].id;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var byId = {};
  D.products.forEach(function (p) { byId[p.id] = p; });
  var t = function (k) { return D.i18n[lang][k] || k; };
  var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  try { var saved = localStorage.getItem("nc-lang"); if (saved === "en" || saved === "es") lang = saved; } catch (e) {}
  var q = new URLSearchParams(location.search).get("lang");
  if (q === "en" || q === "es") lang = q;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function list(a) { return "<ul>" + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
  function digits(s) { return s.replace(/\D/g, ""); }

  /* ---------- Renderizado ---------- */
  function renderCards() {
    $("#cards").innerHTML = D.products.map(function (p) {
      return '<button class="card" style="--c:' + p.color + '" data-open="' + p.id + '">' +
        '<img src="img/' + p.id + '.png" alt="' + p.name + '" loading="lazy">' +
        '<h3><span class="dot"></span>' + p.name + '</h3>' +
        '<p>' + esc(p.tag[lang]) + '</p><span class="more">' + t("l.more") + '</span></button>';
    }).join("");
  }

  function renderTabs() {
    $("#tabs").innerHTML = D.products.map(function (p) {
      return '<button class="tab" role="tab" style="--c:' + p.color + '" data-tab="' + p.id + '" aria-selected="' + (p.id === current) + '" aria-controls="detail">' + p.name + '</button>';
    }).join("");
  }

  function renderDetail() {
    var p = byId[current];
    var kpis = p.kpi.map(function (k) { return '<div class="kpi"><b>' + esc(k.v) + '</b><span>' + esc(k.l[lang]) + '</span></div>'; }).join("");
    $("#detail").style.setProperty("--c", p.color);
    $("#detail").innerHTML =
      '<div class="d-left"><img src="img/' + p.id + '.png" alt="' + p.name + '"><div class="d-kpis">' + kpis + '</div></div>' +
      '<div><div class="d-title"><h3>' + p.name + '</h3><span class="badge">' + esc(p.size) + '</span></div>' +
      '<p class="d-tag">' + esc(p.tag[lang]) + '</p>' +
      '<div class="meta"><span><b>' + t("l.use") + ':</b> ' + esc(p.use[lang]) + '</span></div>' +
      '<div class="blocks">' +
      '<div class="blk"><h4>' + t("l.benefits") + '</h4>' + list(p.benefits[lang]) + '</div>' +
      '<div class="blk"><h4>' + t("l.value") + '</h4>' + list(p.value[lang]) + '</div>' +
      '<div class="blk"><h4>' + t("l.impact") + '</h4>' + list(p.impact[lang]) + '</div></div>' +
      '<button class="share" data-share>' + t("l.share") + '</button></div>';
    $$("#detail .kpi b").forEach(countUp);
  }

  var need = -1;
  function renderNeeds() {
    $("#needs").innerHTML = D.needs.map(function (n, i) {
      return '<button class="need' + (i === need ? " on" : "") + '" data-need="' + i + '" aria-pressed="' + (i === need) + '">' + esc(n.t[lang]) + '</button>';
    }).join("");
    var ans = $("#answer");
    if (need < 0) { ans.innerHTML = ""; return; }
    ans.innerHTML = '<p class="rec">' + t("l.rec") + ':</p><div class="rec-grid">' + D.needs[need].p.map(function (id) {
      var p = byId[id];
      return '<button class="rec-card" style="--c:' + p.color + '" data-open="' + id + '"><img src="img/' + id + '.png" alt=""><span><b>' + p.name + '</b>' + esc(p.tag[lang]) + '<em>' + t("l.more") + '</em></span></button>';
    }).join("") + "</div>";
  }

  function renderCompare() {
    var m = D.matrix;
    var head = "<thead><tr><th>" + t("l.prod") + "</th>" + m.cols.map(function (id) {
      var p = byId[id];
      return '<th style="--c:' + p.color + '"><a href="#detalle" data-open="' + id + '"><img src="img/' + id + '.png" alt="">' + '<span><i>Nano</i>' + p.name.replace("Nano", "") + "</span></a></th>";
    }).join("") + "</tr></thead>";
    var body = "<tbody>" + m.rows.map(function (r) {
      return "<tr><td>" + esc(r.k[lang]) + "</td>" + r.v.map(function (v, i) {
        var p = byId[m.cols[i]];
        return '<td style="--c:' + p.color + '">' + (v ? '<span class="yes" role="img" aria-label="Sí"><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2.2 6.4l2.4 2.4 5.2-5.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' : '<span class="no" aria-label="No">—</span>') + "</td>";
      }).join("") + "</tr>";
    }).join("") + "</tbody>";
    $("#cmp").innerHTML = head + body;
  }

  function renderIndustries() {
    $("#ind").innerHTML = D.industries.map(function (i) {
      return '<article class="ind" style="--c:' + i.color + '"><h3>' + esc(i.name[lang]) + '</h3><p class="claim">' + esc(i.claim[lang]) + "</p>" +
        '<span class="lab">' + t("l.challenge") + "</span><p>" + esc(i.challenge[lang]) + "</p>" +
        '<span class="lab">' + t("l.apps") + "</span><p>" + esc(i.apps[lang]) + "</p>" +
        '<span class="lab">' + t("l.products") + '</span><div class="pills">' + i.products.map(function (id) {
          return '<button class="pill" style="--c:' + byId[id].color + '" data-open="' + id + '">' + byId[id].name + "</button>";
        }).join("") + '</div><p class="case">' + esc(i.case[lang]) + "</p></article>";
    }).join("");
  }

  function renderTech() {
    $("#stats").innerHTML = D.stats.map(function (s) { return '<div class="stat"><b>' + esc(s.v) + "</b><span>" + esc(s.l[lang]) + "</span></div>"; }).join("");
    $("#feat").innerHTML = D.features.map(function (f) { return '<div class="f"><h4>' + esc(f.t[lang]) + "</h4><p>" + esc(f.d[lang]) + "</p></div>"; }).join("");
    $("#steps").innerHTML = D.steps[lang].map(function (s) { return "<li><b>" + esc(s[0]) + "</b><span>" + esc(s[1]) + "</span></li>"; }).join("");
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$(".lang button").forEach(function (b) { b.classList.toggle("on", b.dataset.lang === lang); b.setAttribute("aria-pressed", b.dataset.lang === lang); });
    var bg = $(".burger"); if (bg) bg.setAttribute("aria-label", t("menu"));
    renderCards(); renderNeeds(); renderTabs(); renderDetail(); renderCompare(); renderIndustries(); renderTech();
    observeNew();
  }

  function select(id, scroll) {
    if (!byId[id]) return;
    current = id;
    renderTabs(); renderDetail();
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
    if (scroll) $("#detalle").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }

  /* ---------- Movimiento: contadores y entradas ---------- */
  function countUp(el) {
    if (reduced) return;
    var txt = el.getAttribute("data-final") || el.textContent;
    el.setAttribute("data-final", txt);
    var m = txt.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m || /^[–:\-\d]/.test(m[2])) { el.textContent = txt; return; } // rangos, razones y códigos no se animan
    var thousands = /^\d{1,3}(\.\d{3})+$/.test(m[1]);
    var target = parseFloat(thousands ? m[1].replace(/\./g, "") : m[1].replace(",", "."));
    var dec = thousands ? 0 : ((m[1].split(/[.,]/)[1] || "").length);
    var start = null, dur = 1000;
    function fmt(v) {
      var s = v.toFixed(dec);
      return thousands ? Math.round(v).toLocaleString("es-CL") : s.replace(".", ",");
    }
    function step(ts) {
      if (start === null) start = ts;
      var k = Math.min(1, (ts - start) / dur);
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(target * e) + m[2];
      if (k < 1) requestAnimationFrame(step); else el.textContent = txt;
    }
    el.textContent = fmt(0) + m[2];
    requestAnimationFrame(step);
  }

  var io = null;
  function observeNew() {
    if (reduced || !("IntersectionObserver" in window)) return;
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target;
          io.unobserve(el);
          el.classList.add("in");
          if (el.classList.contains("stat")) countUp($("b", el));
          setTimeout(function () { el.classList.remove("reveal", "in"); }, 1100);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    var groups = [
      ".sec .wrap > .kicker, .sec .wrap > h2, .sec .wrap > .sub, .sec .wrap > h3",
      "#cards .card", ".needs", "#tabs", "#detail", ".table-wrap", ".ind", ".stat", ".f", ".steps li", ".contact-links, .addr"
    ];
    groups.forEach(function (sel) {
      $$(sel).forEach(function (el, i) {
        if (el.classList.contains("reveal") || el.hasAttribute("data-seen")) return;
        el.setAttribute("data-seen", "1");
        el.classList.add("reveal");
        el.style.setProperty("--i", sel.indexOf("#cards") === 0 || sel === ".ind" || sel === ".stat" || sel === ".f" || sel === ".steps li" ? i % 6 : 0);
        io.observe(el);
      });
    });
  }

  /* ---------- Menú: móvil y sección activa ---------- */
  var nav = $(".nav"), burger = $(".burger");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  var links = {};
  $$(".links a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
        if (links[en.target.id]) links[en.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { spy.observe(s); });
  }
  var bar = $(".progress"), ticking = false;
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 8);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar && max > 0) bar.style.transform = "scaleX(" + Math.min(1, window.scrollY / max) + ")";
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Clics ---------- */
  document.addEventListener("click", function (e) {
    if (e.target.closest(".links a")) setMenu(false);
    var o = e.target.closest("[data-open]");
    if (o) { e.preventDefault(); select(o.dataset.open, true); return; }
    var nd = e.target.closest("[data-need]");
    if (nd) { need = need === +nd.dataset.need ? -1 : +nd.dataset.need; renderNeeds(); return; }
    var tb = e.target.closest("[data-tab]");
    if (tb) { select(tb.dataset.tab, false); return; }
    var lg = e.target.closest(".lang button");
    if (lg) {
      lang = lg.dataset.lang;
      try { localStorage.setItem("nc-lang", lang); } catch (x) {}
      applyI18n(); return;
    }
    var sh = e.target.closest("[data-share]");
    if (sh) {
      var url = location.origin + location.pathname + "#" + current;
      var done = function () { sh.textContent = t("l.copied"); setTimeout(function () { sh.textContent = t("l.share"); }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done); else done();
    }
  });

  // Enlace directo desde QR: .../#nanocare abre el detalle de ese producto
  var h = location.hash.slice(1);
  if (byId[h]) current = h;
  if (h === "og") document.documentElement.classList.add("og"); // captura para la imagen al compartir
  applyI18n();
  if (byId[h]) setTimeout(function () { $("#detalle").scrollIntoView(); }, 50);
  window.addEventListener("hashchange", function () { var x = location.hash.slice(1); if (byId[x]) select(x, true); });
})();
