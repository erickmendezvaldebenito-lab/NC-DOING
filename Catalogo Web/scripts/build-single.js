// Genera NC-DOING-Catalogo.html: la página completa en UN solo archivo (CSS, JS e imágenes incrustados).
// Sirve para revisar o compartir sin carpetas. Uso:  node scripts/build-single.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..') + path.sep;
const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const uri = f => 'data:' + mime[path.extname(f)] + ';base64,' + fs.readFileSync(root + f).toString('base64');
const files = fs.readdirSync(root + 'img').filter(f => mime[path.extname(f)]);
const map = {}; files.forEach(f => map['img/' + f] = uri('img/' + f));

let html = fs.readFileSync(root + 'index.html', 'utf8');
let css = fs.readFileSync(root + 'styles.css', 'utf8');
let js = fs.readFileSync(root + 'data.js', 'utf8') + '\n' + fs.readFileSync(root + 'app.js', 'utf8');

// referencias fijas en HTML y CSS
Object.keys(map).forEach(k => { html = html.split(k).join(map[k]); css = css.split(k).join(map[k]); });
// referencias dinámicas en JS: 'img/' + id + '.png'
js = js.replace(/img\/" ?\+|img\/' \+ ([\w.]+) \+ '\.png/g, (m, v) => v ? "' + window.__IMG['img/' + " + v + " + '.png'] + '" : m);
js = 'window.__IMG=' + JSON.stringify(map) + ';\n' + js;

// replace con funciones: evita que "$$" o "$&" del código se interpreten como patrones
html = html.replace('<link rel="stylesheet" href="styles.css">', () => '<style>' + css + '</style>')
  .replace('<script src="data.js"></script>', '').replace('<script src="app.js"></script>', () => '<script>' + js + '</script>');
fs.writeFileSync(root + 'NC-DOING-Catalogo.html', html);
console.log('OK · NC-DOING-Catalogo.html', (html.length / 1048576).toFixed(1) + ' MB');
