# Handoff · Catálogo web NC DOING

Página estática (HTML + CSS + JS, sin build ni dependencias) que se abre al escanear el QR. Muestra los 5 productos con su detalle. Idiomas: ES / EN.

## 1. Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura de la página. Es el archivo que se publica. |
| `styles.css` | Todos los estilos (tokens al inicio, ajustes por capas al final). |
| `data.js` | **Todo el contenido**: productos, industrias, comparador, textos ES/EN. Editar aquí para cambiar textos o datos. |
| `app.js` | Lógica: tarjetas, pestañas, guía, comparador, cambio de idioma, enlaces directos. |
| `img/` | `logo.png`, `fondo.jpg` (fondo del home), `nanoplus/nanoprotect/nanocare/nanoignis/nanopure.png` (frascos con transparencia). |
| `NC-DOING-Catalogo.html` | Versión de **un solo archivo** (todo incrustado) solo para revisar en el computador. No es la que se publica. |
| `../QR/` | `QR_NCDoing.svg/.png` y `generar_qr.py`. |

Fuente de datos y fotos: Presentación NC Doing, One Page y fichas por industria (carpeta `PPT`).

## 2. Estructura de la página (orden)

1. **Home (hero)**: título → vitrina con los 5 frascos → frase descriptiva → etiquetas → botones. Ocupa el 100 % del alto de la pantalla.
2. **Portafolio** `#productos`: 5 tarjetas, cada una abre el detalle.
3. **Guía rápida** `#guia`: "¿Qué necesitas resolver?" → recomienda producto.
4. **Detalle** `#detalle`: pestañas por producto (beneficios, valor agregado, impacto, 3 cifras clave).
5. **Comparar** `#comparar`: tabla producto × propiedad.
6. **Industrias** `#industrias`: Forestal, Química Transversal, Pinturas y Recubrimientos.
7. **Tecnología** `#tecnologia`: cifras, ventajas y modelo de trabajo.
8. **Contacto** `#contacto` y pie de página.

## 3. Tokens de diseño

**Colores**

| Token | Valor | Uso |
|---|---|---|
| `--navy-900` / `--navy-800` / `--navy-700` | #060B1A / #0A1330 / #12214A | Fondo del home |
| `--brand-blue` | #1E6BFF | Botón principal, acentos |
| `--brand-blue-ink` | #1450C8 | Textos azules sobre blanco (contraste) |
| `--brand-orange` | #F26A1B | Acento secundario, números del modelo de trabajo |
| `--ink` / `--mute` | #0A1020 / #42506A | Texto principal / secundario |
| `--surface` / `--line` | #F5F8FD / #E2E8F2 | Tarjetas claras / bordes |
| Fondo de secciones | #FFFFFF | Todo bajo el home es blanco |

**Color por producto** (tarjeta, pestaña, KPI, tabla): NanoPlus `#1E6BFF` · NanoProtect `#F5A800` · NanoCare `#F26A1B` · NanoIgnis `#E0262B` · NanoPure `#2E9E3E`.
Los textos con color de producto se oscurecen con `color-mix(var(--c) 62%, #000)` para cumplir contraste (sobre todo el amarillo).

**Tipografía**: Montserrat (Google Fonts, la misma de las tarjetas y la presentación), pesos 400–800. Títulos 800, `letter-spacing:-.02em`. Home h1: `clamp(30px, min(5.2vw, 8.5vh), 60px)`.
**Radios**: tarjetas 20 px, paneles 28 px, botones y chips 999 px.
**Sombras**: discretas (`0 1px 3px` + `0 6px 16px` a ~5 % de opacidad). Botón principal: `0 4px 10px rgba(30,107,255,.20)`.

## 4. Componentes y estados

| Componente | Estados |
|---|---|
| Botón principal `.btn` | Reposo azul plano · hover: sube 1 px y se aclara · active: sin sombra · foco: contorno amarillo 2 px |
| Botón secundario `.btn.ghost` | Borde oscuro; hover relleno oscuro |
| Tarjeta de producto | Barra superior del color del producto · hover: sube 3 px y sombra más marcada · clic: abre el detalle |
| Pestaña de producto | Reposo borde gris · seleccionada: relleno del color del producto (NanoProtect con texto oscuro) |
| Chip de guía `.need` | Reposo · hover borde azul · activo relleno azul (clic de nuevo lo desactiva) |
| Selector ES/EN | Cambia todo el contenido sin recargar; recuerda la elección |
| Tabla comparadora | ✓ con color del producto, "—" gris |

## 5. Responsive

| Ancho | Cambios |
|---|---|
| > 1000 px | Tarjetas en 5 columnas; menú superior completo |
| ≤ 900 px | Título del home pasa a 2 líneas |
| ≤ 860 px | Ficha de detalle en 1 columna. El menú superior pasa a botón de hamburguesa con panel desplegable |
| ≤ 640 px | Se oculta el botón "Contáctanos" del encabezado; tarjetas en 2 columnas (la 5.ª ocupa todo el ancho); tabla comparadora cabe sin deslizar (títulos 8,5 px); vitrina de frascos reducida (`--h:150px`) |

El home usa `min-height:100svh`. La vitrina de frascos se dimensiona con `--h` (según ancho y alto de la ventana) y se posiciona en porcentajes: centro `left:50%` (NanoCare, el más grande y al frente), laterales 39,5 % / 60,5 %, extremos 30,5 % / 69,5 %.

## 6. Interacciones

- **Enlaces directos** (útiles para otros QR o publicaciones): `…/#nanoplus`, `#nanoprotect`, `#nanocare`, `#nanoignis`, `#nanopure` abren el detalle de ese producto.
- **Idioma**: `…/?lang=en` fuerza inglés; la elección se guarda en el navegador (`localStorage: nc-lang`).
- **Copiar enlace**: botón en cada ficha copia la dirección del producto.
- Animación: entrada suave de 0,3 s al cambiar de pestaña o recomendación. Se desactiva con `prefers-reduced-motion`.

## 7. Accesibilidad

Enlace "Saltar al contenido", pestañas con `role=tablist/tab/tabpanel`, `aria-pressed` en ES/EN, objetivos táctiles ≥ 44 px, foco visible, textos grises con contraste ≥ 4,5:1, texto del home con sombra suave sobre la foto. Falta una prueba con lector de pantalla (VoiceOver).

## 8. Publicación (pendiente)

1. Subir la carpeta `Catalogo Web/` **sin** `NC-DOING-Catalogo.html` y sin `HANDOFF.md` a Vercel (proyecto estático, sin comando de build; el directorio raíz es la carpeta).
2. Asignar una dirección **fija** (propuesta: `productos.ncdoing.cl`, requiere un registro DNS en el administrador de `ncdoing.cl`).
3. Regenerar el QR con la dirección final: `python3 QR/generar_qr.py https://DIRECCION-FINAL` (requiere `pip install segno`).
4. Escanear con 2–3 celulares y comprobar carga en red lenta (las imágenes pesan ~1,1 MB en total; la fuente se descarga de Google Fonts).

## 9. Pendientes y supuestos

- **Dirección web final** y QR definitivo (el actual apunta a una dirección provisoria que no existe).
- **Contacto**: solo hay botones a `ncdoing.cl`, LinkedIn y la dirección (Ejército 315, Concepción). Falta definir correo, teléfono o WhatsApp para el evento.
- **Casos de éxito** (Chile Paneles, Química Hewstone): aparecen solo como mención, sin detalle ni logos.
- **Formatos**: NanoPlus aparece como 500 ml en el frasco de la one-page; en la presentación se ve un 1000 ml. Confirmar cuál se vende.
- **Cifras**: provienen de las fichas y presentación (ISO 22196, ASTM G154, NCh3060, NCh1974). Validar con laboratorio antes de imprimir.
- **Probado** en Chrome (escritorio y móvil emulado). Falta probar en Safari iOS y Android reales.
- Plugins de diseño sugeridos en la sesión (frontend-design, audit-suite, design-skills, UI Color Palette): no están instalados; no son necesarios para que la página funcione.

## 10. Actualización V2 (noviembre 2026)

Cambios sobre la primera versión. **Las fotos y la composición del home no se tocaron.**

- **Menú**: logo oficial en SVG, indicador de sección activa (subrayado), hamburguesa con panel en ≤ 860 px, cierre con Esc, encabezado que se afirma al hacer scroll.
- **Movimiento** (solo `transform` y `opacity`, se apaga con `prefers-reduced-motion`): entrada escalonada de los textos del home, flotación suave de los frascos, aparición de cada sección al hacer scroll y contadores animados en cifras (`app.js → countUp`, `observeNew`).
- **Legibilidad**: texto corrido ≥ 14,5 px y nada bajo 13 px (salvo 2 bloques pendientes), emoji reemplazados por texto/SVG, pestañas que se acomodan en líneas, comparador con nombres cortos en móvil.
- **Contacto**: sin datos de personas (a propósito): botones a ncdoing.cl y LinkedIn, y la dirección. Falta definir si se agrega un correo o WhatsApp general.
- **SEO y compartir**: título y descripción, Open Graph (`img/og.jpg`, 1200×630, generada con `index.html#og`), datos estructurados (Organización + 5 productos), `robots.txt`, `sitemap.xml`, ícono SVG.
- **Publicación**: `vercel.json` (cabeceras y caché), `.vercelignore` (no sube HANDOFF, scripts ni la versión de un solo archivo).
- **Reconstruir la versión de un solo archivo**: `node scripts/build-single.js`.
- **Si cambia el dominio**: actualizar la URL en `index.html` (canonical, og:url, og:image, JSON-LD), `robots.txt` y `sitemap.xml` (hoy `https://ncdoing-catalogo-liart.vercel.app/`).

**Decisiones de estilo defendidas** (el inspector de la skill `design-taste-frontend` las marca, pero son parte de la marca aprobada): etiquetas en mayúsculas sobre los títulos, degradado y brillo del home (foto + vitrina con plataforma), texto con degradado en el título, sombra leve en el texto sobre la foto, bordes finos en tarjetas. Mediciones: antes 16 fallos, ahora 10; todos los restantes son de estilo, no de funcionamiento.
