// Contenido bilingüe del catálogo NC Doing. Fuente: Presentación NC Doing, One Page y fichas por industria.
window.NC = {
  products: [
    {
      id: "nanoplus", name: "NanoPlus", color: "#1E6BFF", size: "500 ml",
      tag: { es: "Antimicrobiano de amplio espectro", en: "Broad-spectrum antimicrobial" },
      use: { es: "Superficies industriales, comerciales y domésticas. Baños antimanchas de madera aserrada verde.", en: "Industrial, commercial and household surfaces. Anti-stain baths for green sawn timber." },
      industries: ["forestal", "quimica"],
      benefits: {
        es: ["Protección antimicrobiana (ISO 22196)", "Extiende la protección fungicida hasta 12 meses", "Reduce la decoloración por radiación UV", "Mejora la fijación de químicos"],
        en: ["Antimicrobial protection (ISO 22196)", "Extends fungicidal protection up to 12 months", "Reduces discoloration from UV radiation", "Improves chemical fixation"]
      },
      value: {
        es: ["Hasta 3X más vida útil visible", "Reduce la degradación solar un 90%", "Mantiene la calidad visual de la madera", "Hasta 30–50% menos aditivo requerido"],
        en: ["Up to 3X longer visible service life", "Cuts solar degradation by 90%", "Keeps the visual quality of the wood", "Up to 30–50% less additive required"]
      },
      impact: {
        es: ["Menores pérdidas por decoloración", "Menos reprocesos", "Mayor valor comercial del producto"],
        en: ["Lower losses from discoloration", "Less rework", "Higher commercial value of the product"]
      },
      kpi: [{ v: "3X", l: { es: "vida útil visible", en: "visible service life" } }, { v: "90%", l: { es: "menos degradación solar", en: "less solar degradation" } }, { v: "12", l: { es: "meses de protección fungicida", en: "months of fungicidal protection" } }]
    },
    {
      id: "nanoprotect", name: "NanoProtect", color: "#F5A800", size: "500 ml",
      tag: { es: "Protección contra termitas y biodeterioro", en: "Termite & biodeterioration protection" },
      use: { es: "Madera, piedra, hormigón y otras superficies.", en: "Wood, stone, concrete and other surfaces." },
      industries: ["forestal", "quimica"],
      benefits: {
        es: ["Protección contra bacterias, hongos y moho", "Control total de termitas (validado bajo NCh3060)", "Eliminación de actividad biológica en el material", "Compatible con resinas, adhesivos y procesos industriales"],
        en: ["Protection against bacteria, fungi and mold", "Total termite control (validated under NCh3060)", "Eliminates biological activity in the material", "Compatible with resins, adhesives and industrial processes"]
      },
      value: {
        es: ["0% de supervivencia de termitas en material tratado", "0 daño estructural vs. daño severo en material no tratado", "Protección activa: elimina la plaga, no solo la repele", "Protección estructural comprobada bajo ensayo normado"],
        en: ["0% termite survival in treated material", "0 structural damage vs. severe damage in untreated material", "Active protection: eliminates the pest, not just repels it", "Structural protection proven under standardized testing"]
      },
      impact: {
        es: ["Menos fallas estructurales en el producto final", "Menos reclamos por biodeterioro", "Menor costo de reposición y mantenimiento", "Mayor vida útil y durabilidad certificable"],
        en: ["Fewer structural failures in the final product", "Fewer biodeterioration claims", "Lower replacement and maintenance cost", "Longer, certifiable service life"]
      },
      kpi: [{ v: "0%", l: { es: "supervivencia de termitas", en: "termite survival" } }, { v: "100%", l: { es: "inhibición fúngica", en: "fungal inhibition" } }, { v: "NCh3060", l: { es: "ensayo normado", en: "standardized test" } }]
    },
    {
      id: "nanocare", name: "NanoCare", color: "#F26A1B", size: "500 ml",
      tag: { es: "Protección UV y refuerzo de recubrimientos", en: "UV protection & coating reinforcement" },
      use: { es: "Madera, metales y otros sustratos minerales. Pinturas, barnices y sellantes.", en: "Wood, metals and other mineral substrates. Paints, varnishes and sealants." },
      industries: ["forestal", "quimica", "pinturas"],
      benefits: {
        es: ["Protección antimicrobiana activa", "Protección UV validada (ASTM G154)", "Mejora la resistencia térmica superficial", "Refuerzo de recubrimientos sin alterar la estética"],
        en: ["Active antimicrobial protection", "Validated UV protection (ASTM G154)", "Improves surface thermal resistance", "Reinforces coatings without altering aesthetics"]
      },
      value: {
        es: ["Hasta 2–3X más estabilidad superficial en condiciones extremas", "Reduce la degradación del material hasta en 90%", "Mantiene color, brillo y acabado por más tiempo", "Extiende la vida útil funcional y estética"],
        en: ["Up to 2–3X more surface stability in extreme conditions", "Reduces material degradation by up to 90%", "Keeps color, gloss and finish for longer", "Extends functional and aesthetic service life"]
      },
      impact: {
        es: ["Menor costo de mantención y repintado", "Menos intervenciones en terreno", "Mayor percepción de calidad en el cliente final", "Mayor diferenciación en proyectos sustentables"],
        en: ["Lower maintenance and repainting cost", "Fewer on-site interventions", "Higher perceived quality for the end customer", "Stronger differentiation in sustainable projects"]
      },
      kpi: [{ v: "90%", l: { es: "menos degradación UV", en: "less UV degradation" } }, { v: "3X", l: { es: "más vida útil", en: "longer service life" } }, { v: "100%", l: { es: "inhibición bacteriana (ISO 22196)", en: "bacterial inhibition (ISO 22196)" } }]
    },
    {
      id: "nanoignis", name: "NanoIgnis", color: "#E0262B", size: "500 ml",
      tag: { es: "Retardante de llama y mayor seguridad", en: "Flame retardant & added safety" },
      use: { es: "Madera, metales, plásticos, textiles y estéticos.", en: "Wood, metals, plastics, textiles and decorative finishes." },
      industries: ["forestal", "pinturas"],
      benefits: {
        es: ["Reduce la propagación de la llama", "Retarda la ignición inicial", "Disminuye la generación de humo y partículas", "Mejora la resistencia térmica del material", "Refuerza estructuralmente el recubrimiento"],
        en: ["Reduces flame spread", "Delays initial ignition", "Lowers smoke and particle generation", "Improves the material's thermal resistance", "Structurally reinforces the coating"]
      },
      value: {
        es: ["Reduce el daño por fuego hasta en 50%", "Hasta 2X más resistencia a la degradación térmica", "Barrera térmica activa en los segundos críticos", "Tecnología intumescente que protege la integridad estructural"],
        en: ["Reduces fire damage by up to 50%", "Up to 2X more resistance to thermal degradation", "Active thermal barrier in the critical seconds", "Intumescent technology that protects structural integrity"]
      },
      impact: {
        es: ["Menor riesgo de falla estructural", "Menor propagación de incendios", "Mayor seguridad en aplicaciones críticas", "Mayor cumplimiento normativo y certificaciones"],
        en: ["Lower risk of structural failure", "Less fire spread", "Greater safety in critical applications", "Better regulatory compliance and certifications"]
      },
      kpi: [{ v: "50%", l: { es: "menor daño térmico", en: "less thermal damage" } }, { v: "2X", l: { es: "resistencia térmica", en: "thermal resistance" } }, { v: "NCh1974", l: { es: "Of.86 · llama corta", en: "Of.86 · short flame" } }]
    },
    {
      id: "nanopure", name: "NanoPure", color: "#2E9E3E", size: "250 ml",
      tag: { es: "Fotocatálisis, protección UV y durabilidad", en: "Photocatalysis, UV protection & durability" },
      use: { es: "Uso industrial. Pinturas y recubrimientos de exterior.", en: "Industrial use. Exterior paints and coatings." },
      industries: ["pinturas"],
      benefits: {
        es: ["Protección UV de alto desempeño", "Protección antimicrobiana activa", "Fotocatálisis (reducción de contaminantes ambientales)"],
        en: ["High-performance UV protection", "Active antimicrobial protection", "Photocatalysis (reduces environmental pollutants)"]
      },
      value: {
        es: ["Hasta 90% menos degradación por radiación UV vs. control", "Hasta 3–5X más estabilidad de color en exposición acelerada", "Alta resistencia a humedad y ciclos UV/condensación", "Superficies más estables, menor envejecimiento visible"],
        en: ["Up to 90% less UV degradation vs. control", "Up to 3–5X more color stability under accelerated exposure", "High resistance to moisture and UV/condensation cycles", "More stable surfaces, less visible aging"]
      },
      impact: {
        es: ["Menor mantenimiento y repintado", "Menor deterioro prematuro de superficies", "Mayor vida útil de recubrimientos", "Mayor diferenciación técnica frente a pinturas convencionales"],
        en: ["Less maintenance and repainting", "Less premature surface deterioration", "Longer coating service life", "Stronger technical differentiation vs. conventional paints"]
      },
      kpi: [{ v: "90%", l: { es: "menos degradación UV", en: "less UV degradation" } }, { v: "3–5X", l: { es: "estabilidad de color", en: "color stability" } }, { v: "90 min", l: { es: "degradación catalítica con sol", en: "catalytic degradation in sunlight" } }]
    }
  ],

  industries: [
    {
      id: "forestal", color: "#2E9E3E",
      name: { es: "Industria Forestal", en: "Forestry Industry" },
      claim: { es: "Hasta 3X más vida útil de la madera", en: "Up to 3X longer wood service life" },
      challenge: { es: "Biodeterioro (hongos y microorganismos), termitas y degradación UV acortan la vida útil de la madera y los tableros.", en: "Biodeterioration (fungi and microorganisms), termites and UV degradation shorten the service life of wood and panels." },
      apps: { es: "Madera aserrada seca y verde · Tableros industriales", en: "Dry and green sawn timber · Industrial panels" },
      products: ["nanoprotect", "nanocare", "nanoignis", "nanoplus"],
      case: { es: "Caso de éxito: Chile Paneles · Tableros de madera", en: "Success story: Chile Paneles · Wood panels" }
    },
    {
      id: "quimica", color: "#1E6BFF",
      name: { es: "Química Transversal", en: "Cross-industry Chemicals" },
      claim: { es: "Optimiza formulaciones hasta 3X", en: "Optimizes formulations up to 3X" },
      challenge: { es: "Inestabilidad, pérdida progresiva de propiedades y bajo aprovechamiento de aditivos activos en formulaciones complejas.", en: "Instability, progressive loss of properties and low use of active additives in complex formulations." },
      apps: { es: "Resinas · Adhesivos · Polímeros", en: "Resins · Adhesives · Polymers" },
      products: ["nanoplus", "nanocare", "nanoprotect"],
      case: { es: "Hasta 50% menos carga química nociva · 30% menos materias primas · 50% mayor fijación de activos", en: "Up to 50% less harmful chemical load · 30% less raw materials · 50% better active fixation" }
    },
    {
      id: "pinturas", color: "#F26A1B",
      name: { es: "Pinturas y Recubrimientos", en: "Paints & Coatings" },
      claim: { es: "Mantienen el color hasta 3X más", en: "Keep color up to 3X longer" },
      challenge: { es: "Pérdida de color por radiación UV severa, desgaste prematuro y altos costos de mantención por repintado frecuente.", en: "Color loss from severe UV radiation, premature wear and high maintenance costs from frequent repainting." },
      apps: { es: "Pinturas · Barnices · Sellantes", en: "Paints · Varnishes · Sealants" },
      products: ["nanopure", "nanocare", "nanoignis"],
      case: { es: "Caso de éxito: Química Hewstone · Pinturas y recubrimientos", en: "Success story: Química Hewstone · Paints and coatings" }
    }
  ],

  // Matriz de comparación: 1 = aplica
  matrix: {
    rows: [
      { k: { es: "Antimicrobiano / antihongos", en: "Antimicrobial / antifungal" }, v: [1, 1, 1, 0, 1] },
      { k: { es: "Termitas", en: "Termites" }, v: [0, 1, 0, 0, 0] },
      { k: { es: "Protección UV", en: "UV protection" }, v: [1, 0, 1, 0, 1] },
      { k: { es: "Retardante de llama", en: "Flame retardant" }, v: [0, 0, 0, 1, 0] },
      { k: { es: "Refuerzo de recubrimientos", en: "Coating reinforcement" }, v: [0, 0, 1, 1, 0] },
      { k: { es: "Fijación de activos / aditivos", en: "Active / additive fixation" }, v: [1, 0, 0, 0, 0] },
      { k: { es: "Fotocatálisis", en: "Photocatalysis" }, v: [0, 0, 0, 0, 1] }
    ],
    cols: ["nanoplus", "nanoprotect", "nanocare", "nanoignis", "nanopure"]
  },

  stats: [
    { v: "10 kg", l: { es: "de nanopartículas por mes", en: "of nanoparticles per month" } },
    { v: "3.000 L", l: { es: "de aditivo por mes", en: "of additive per month" } },
    { v: "2–50 nm", l: { es: "rango de tamaño", en: "size range" } },
    { v: "1:1000", l: { es: "dilución del concentrado", en: "concentrate dilution" } }
  ],
  features: [
    { i: "♻️", t: { es: "Sostenible", en: "Sustainable" }, d: { es: "Se sintetiza a partir de excedentes industriales revalorizados.", en: "Synthesized from revalued industrial surplus." } },
    { i: "💧", t: { es: "Base acuosa", en: "Water-based" }, d: { es: "Fácil aplicación y costo de aplicación 0 en tu proceso actual.", en: "Easy to apply, with zero added application cost in your current process." } },
    { i: "🏷️", t: { es: "50% más económico", en: "50% cheaper" }, d: { es: "Que los activos convencionales, con alto rendimiento.", en: "Than conventional actives, with high performance." } },
    { i: "🌿", t: { es: "Baja toxicidad", en: "Low toxicity" }, d: { es: "Certificado bajo norma internacional de ecotoxicidad.", en: "Certified under an international ecotoxicity standard." } }
  ],
  steps: {
    es: [["Pruebas de laboratorio", "Evaluamos las propiedades que necesita tu producto."], ["Integración de tecnologías", "Diseñamos el producto para la propiedad buscada."], ["Validación industrial", "Certificación con laboratorios y pruebas en planta."], ["Cierre comercial", "Venta acorde a la demanda de tu empresa."]],
    en: [["Lab testing", "We evaluate the properties your product needs."], ["Technology integration", "We design the product for the target property."], ["Industrial validation", "Certification with labs and plant trials."], ["Commercial close", "Supply matched to your company's demand."]]
  },

  needs: [
    { i: "🐜", t: { es: "Termitas", en: "Termites" }, p: ["nanoprotect"] },
    { i: "🍄", t: { es: "Hongos, moho y manchas", en: "Fungi, mold & stains" }, p: ["nanoplus", "nanoprotect"] },
    { i: "☀️", t: { es: "Daño por sol (UV)", en: "Sun (UV) damage" }, p: ["nanocare", "nanopure", "nanoplus"] },
    { i: "🔥", t: { es: "Fuego y llama", en: "Fire & flame" }, p: ["nanoignis"] },
    { i: "🎨", t: { es: "Que la pintura no pierda color", en: "Keep paint color" }, p: ["nanopure", "nanocare"] },
    { i: "🦠", t: { es: "Bacterias y limpieza", en: "Bacteria & hygiene" }, p: ["nanoplus", "nanopure"] },
    { i: "🧪", t: { es: "Mejorar mi formulación (resinas, adhesivos)", en: "Improve my formulation (resins, adhesives)" }, p: ["nanoplus", "nanocare", "nanoprotect"] }
  ],

  team: [
    { n: "Sebastián Niklitschek", r: { es: "Gerente General", en: "General Manager" }, tel: "+56 9 6420 8470", mail: "sebastian@ncdoing.cl" },
    { n: "Camilo Salazar Ortiz", r: { es: "Gerente Operaciones", en: "Operations Manager" }, tel: "+56 9 5404 4497", mail: "camilo@ncdoing.cl" },
    { n: "Alejandro Chaur", r: { es: "Gerente de Tecnología", en: "Technology Manager" }, tel: "+56 9 8148 8107", mail: "alejandro@ncdoing.cl" },
    { n: "Javiera Vargas", r: { es: "Jefa de Proyectos", en: "Head of Projects" }, tel: "+56 9 8439 9364", mail: "javiera@ncdoing.cl" },
    { n: "Olivia Godoy", r: { es: "Jefe de Laboratorio I+D", en: "Head of R&D Laboratory" }, tel: "+56 9 2771 4679", mail: "olivia@ncdoing.cl" },
    { n: "Carolina Riffo", r: { es: "Jefa de Administración y Finanzas", en: "Head of Administration and Finance" }, tel: "+56 9 6585 1516", mail: "carolina.riffo@ncdoing.cl" }
  ],

  i18n: {
    es: {
      "nav.products": "Productos", "nav.guide": "Guía", "nav.detail": "Detalle", "nav.compare": "Comparar", "nav.industries": "Industrias", "nav.tech": "Tecnología", "nav.contact": "Contáctanos",
      "hero.eyebrow": "NC DOING · CATÁLOGO DE PRODUCTOS", "hero.h1a": "Cinco soluciones", "hero.h1b": "nanotecnológicas.",
      "hero.lead": "Protección, desempeño y mayor vida útil para madera, recubrimientos, pinturas, resinas y adhesivos. Elige un producto y revisa su detalle.",
      "hero.c1": "Hasta 3X más vida útil", "hero.c2": "Hasta 90% menos degradación UV", "hero.c3": "Base acuosa · Eco-friendly",
      "hero.cta1": "Ver productos", "hero.cta2": "¿No sabes cuál elegir? Usa la guía ›", "skip": "Saltar al contenido",
      "prod.kicker": "PORTAFOLIO", "prod.h2": "Toda la línea en una pantalla.", "prod.sub": "Toca un producto para ver beneficios, valor agregado e impacto.",
      "guide.kicker": "GUÍA RÁPIDA", "guide.h2": "¿Qué necesitas resolver?", "guide.sub": "Elige tu problema y te mostramos el producto indicado.", "l.rec": "Te recomendamos", "det.kicker": "DETALLE", "det.h2": "Cada producto, a fondo.",
      "cmp.kicker": "COMPARAR", "cmp.h2": "¿Cuál necesito?", "cmp.sub": "Qué problema resuelve cada producto.",
      "ind.kicker": "INDUSTRIAS", "ind.h2": "La misma tecnología, tres industrias.",
      "tech.kicker": "TECNOLOGÍA", "tech.h2": "Nanopartículas sostenibles.", "tech.sub": "Revalorizamos residuos industriales para convertirlos en aditivos de alto rendimiento.",
      "work.h3": "Modelo de trabajo",
      "ct.kicker": "SIGUIENTE PASO", "ct.h2": "Probemos NC Doing en tu proceso.", "ct.sub": "Pruebas de laboratorio, validación industrial y diseño a medida según lo que necesite tu producto.",
      "foot": "NC Doing · Empresa científico-tecnológica de la Región del Biobío. Los valores indicados provienen de ensayos de laboratorio bajo las normas citadas (ISO 22196, ASTM G154, NCh3060, NCh1974) y pueden variar según la aplicación.",
      "l.benefits": "Beneficios", "l.value": "Valor agregado", "l.impact": "Impacto", "l.use": "Para", "l.size": "Formato", "l.more": "Ver ficha completa ›", "l.apps": "Aplicaciones", "l.challenge": "El desafío", "l.products": "Productos recomendados", "l.prod": "Producto", "l.share": "Copiar enlace", "l.copied": "¡Enlace copiado!", "ct.team": "Habla directo con nuestro equipo", "ct.wa": "WhatsApp", "ct.mail": "Correo", "menu": "Menú"
    },
    en: {
      "nav.products": "Products", "nav.guide": "Guide", "nav.detail": "Details", "nav.compare": "Compare", "nav.industries": "Industries", "nav.tech": "Technology", "nav.contact": "Contact us",
      "hero.eyebrow": "NC DOING · PRODUCT CATALOG", "hero.h1a": "Five nanotechnology", "hero.h1b": "solutions.",
      "hero.lead": "Protection, performance and longer service life for wood, coatings, paints, resins and adhesives. Pick a product and see its details.",
      "hero.c1": "Up to 3X longer service life", "hero.c2": "Up to 90% less UV degradation", "hero.c3": "Water-based · Eco-friendly",
      "hero.cta1": "See products", "hero.cta2": "Not sure which one? Use the guide ›", "skip": "Skip to content",
      "prod.kicker": "PORTFOLIO", "prod.h2": "The whole line on one screen.", "prod.sub": "Tap a product to see benefits, added value and impact.",
      "guide.kicker": "QUICK GUIDE", "guide.h2": "What do you need to solve?", "guide.sub": "Pick your problem and we will show you the right product.", "l.rec": "We recommend", "det.kicker": "DETAILS", "det.h2": "Each product, in depth.",
      "cmp.kicker": "COMPARE", "cmp.h2": "Which one do I need?", "cmp.sub": "What problem each product solves.",
      "ind.kicker": "INDUSTRIES", "ind.h2": "The same technology, three industries.",
      "tech.kicker": "TECHNOLOGY", "tech.h2": "Sustainable nanoparticles.", "tech.sub": "We revalue industrial waste and turn it into high-performance additives.",
      "work.h3": "How we work",
      "ct.kicker": "NEXT STEP", "ct.h2": "Let's try NC Doing in your process.", "ct.sub": "Lab testing, industrial validation and custom design for what your product needs.",
      "foot": "NC Doing · Science and technology company from the Biobío Region, Chile. Figures come from lab tests under the cited standards (ISO 22196, ASTM G154, NCh3060, NCh1974) and may vary by application.",
      "l.benefits": "Benefits", "l.value": "Added value", "l.impact": "Impact", "l.use": "For", "l.size": "Size", "l.more": "See full details ›", "l.apps": "Applications", "l.challenge": "The challenge", "l.products": "Recommended products", "l.prod": "Product", "l.share": "Copy link", "l.copied": "Link copied!", "ct.team": "Talk directly to our team", "ct.wa": "WhatsApp", "ct.mail": "Email", "menu": "Menu"
    }
  }
};
