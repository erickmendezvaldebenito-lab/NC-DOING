import asyncio, sys, os
from playwright.async_api import async_playwright
D=os.path.dirname(os.path.abspath(__file__)); FPS=30; TOTAL=62; W=4
stills=[float(x) for x in sys.argv[1:]]
async def worker(b,idx,times,outdir):
    pg=await b.new_page(viewport={"width":1920,"height":1080})
    await pg.goto("file://"+D+"/composition_v2.html")
    for i,t in times:
        await pg.evaluate(f"__seek({t})")
        await pg.evaluate("Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))")
        await pg.screenshot(path=f"{outdir}/{i:05d}.png" if not stills else f"{outdir}/s_{t:05.1f}.png")
    await pg.close()
async def main():
    out=D+"/_f2"; os.makedirs(out,exist_ok=True)
    allt=[(i,t) for i,t in enumerate(stills)] if stills else [(i,i/FPS) for i in range(TOTAL*FPS)]
    async with async_playwright() as p:
        b=await p.chromium.launch(channel="chrome")
        await asyncio.gather(*[worker(b,k,allt[k::W],out) for k in range(W)])
        await b.close()
asyncio.run(main())
