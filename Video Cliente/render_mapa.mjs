// Uso: node render_mapa.mjs stills 1 6 12 ...   |   node render_mapa.mjs video
import { createRequire } from 'module';
const puppeteer = createRequire('/Users/erick/Desktop/NC DOING/ClaudeAnimationBase/package.json')('puppeteer-core');
import path from 'path'; import fs from 'fs'; import { fileURLToPath } from 'url';
const D = path.dirname(fileURLToPath(import.meta.url));
const FPS = 30, TOTAL = 30, W = 2;
const [mode, ...rest] = process.argv.slice(2);
const out = path.join(D, mode === 'video' ? '_fm' : '_sm');
fs.mkdirSync(out, { recursive: true });
const jobs = mode === 'video'
  ? Array.from({ length: TOTAL * FPS }, (_, i) => [i, i / FPS])
  : rest.map((t, i) => [i, +t]);
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, protocolTimeout: 600000, args: ['--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows'] });
async function worker(k) {
  const pg = await b.newPage(); await pg.setViewport({ width: 1920, height: 1080 });
  await pg.goto('file://' + D + '/'+(process.env.COMP||'composition_mapa.html')+'?render=1');
  await pg.evaluate(() => document.fonts.ready);
  for (let j = k; j < jobs.length; j += W) {
    const [i, t] = jobs[j];
    await pg.evaluate(t => window.__seek(t), t);
    await pg.evaluate(() => Promise.all([...document.images].map(i => i.decode().catch(() => {}))));
    await pg.screenshot({ path: mode === 'video' ? `${out}/${String(i).padStart(5, '0')}.png` : `${out}/s_${String(t).padStart(4, '0')}.png` });
  }
  await pg.close();
}
await Promise.all(Array.from({ length: W }, (_, k) => worker(k)));
await b.close();
console.log('listo', jobs.length);
