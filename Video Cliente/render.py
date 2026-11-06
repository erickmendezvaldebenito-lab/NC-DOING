import asyncio, sys, os, subprocess
from playwright.async_api import async_playwright
D=os.path.dirname(os.path.abspath(__file__)); FPS=30; TOTAL=34
only=[float(x) for x in sys.argv[1:]]  # optional: stills at given seconds
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(channel="chrome")
        pg=await b.new_page(viewport={"width":1920,"height":1080})
        await pg.goto("file://"+D+"/composition.html")
        os.makedirs(D+"/_f",exist_ok=True)
        times=only if only else [i/FPS for i in range(TOTAL*FPS)]
        for i,t in enumerate(times):
            await pg.evaluate(f"__seek({t})")
            await pg.evaluate("Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))")
            out=f"{D}/_f/s_{t:05.1f}.png" if only else f"{D}/_f/{i:05d}.png"
            await pg.screenshot(path=out)
        await b.close()
asyncio.run(main())
