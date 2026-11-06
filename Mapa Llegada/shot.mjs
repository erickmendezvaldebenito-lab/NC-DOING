import { createRequire } from 'module';
const puppeteer = createRequire('/Users/erick/Desktop/NC DOING/ClaudeAnimationBase/package.json')('puppeteer-core');
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const pg = await b.newPage(); await pg.setViewport({ width: 1280, height: 900 });
const errs=[]; pg.on('pageerror',e=>errs.push(e.message)); pg.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await pg.goto('file://'+process.cwd()+'/como-llegar-edifica.html');
await new Promise(r=>setTimeout(r,4500));
await pg.screenshot({path:'s_auto.png'});
for (const t of ['bus','int']) { await pg.click(`#tabs button[data-t="${t}"]`); await new Promise(r=>setTimeout(r,1500)); await pg.screenshot({path:`s_${t}.png`}); }
await pg.setViewport({width:400,height:850}); await pg.click('#tabs button[data-t="auto"]'); await new Promise(r=>setTimeout(r,800)); await pg.screenshot({path:'s_mob.png'});
console.log(errs); await b.close();
