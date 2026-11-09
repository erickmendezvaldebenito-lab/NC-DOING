#!/usr/bin/env python3
"""Genera el cartel carta (8,5 x 11 in) con los dos QR: Clientes y Productos.
Uso:  python3 generar_cartel.py [URL_CLIENTES] [URL_PRODUCTOS]
Requiere: pip install segno   y Google Chrome instalado.
Salida: QR_NC_DOING_carta.pdf (vectorial: logo, tarjetas, textos y QR; fondo a ~300 ppp) y una vista previa PNG."""
import sys, os, subprocess, segno
AQUI = os.path.dirname(os.path.abspath(__file__))
URL_CLIENTES  = sys.argv[1] if len(sys.argv) > 1 else "https://ncdoing-clientes.vercel.app/"
URL_PRODUCTOS = sys.argv[2] if len(sys.argv) > 2 else "https://ncdoing-catalogo-liart.vercel.app/"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
INK = "#0A1020"

def qr_svg(url):
    m = segno.make(url, error="h", boost_error=False).matrix
    n = len(m); d = []
    for y, row in enumerate(m):
        x = 0
        while x < n:
            if row[x]:
                x0 = x
                while x < n and row[x]: x += 1
                d.append(f"M{x0} {y}h{x-x0}v1h-{x-x0}z")
            else: x += 1
    return n, f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges"><path fill="{INK}" d="{"".join(d)}"/></svg>'

def card(top, url):
    n, svg = qr_svg(url)
    size = 378 * n / (n + 8)           # zona de silencio de 4 módulos a cada lado, dentro de la tarjeta
    return f'<div class="card" style="top:{top}px"><div class="qr" style="width:{size:.2f}px;height:{size:.2f}px">{svg}</div></div>'

html = f'''<!doctype html><html lang="es"><head><meta charset="utf-8"><title>QR NC DOING</title>
<style>
@font-face{{font-family:Mont;src:url("assets/Montserrat-Bold.ttf");font-weight:700}}
@page{{size:8.5in 11in;margin:0}}
*{{margin:0;box-sizing:border-box}}
html,body{{width:8.5in;height:11in;overflow:hidden;background:#050a1c}}
.pagina{{position:relative;width:8.5in;height:11in;overflow:hidden}}
.hoja{{position:absolute;left:0;top:-45px;width:1055px;height:1491px;transform:scale(0.77346);transform-origin:0 0}}
.bg{{position:absolute;inset:0;width:1055px;height:1491px}}
.logo{{position:absolute;left:392px;top:118px;width:270px}}
.card{{position:absolute;left:337px;width:380px;height:380px;border-radius:36px;background:#fff;display:flex;align-items:center;justify-content:center;margin-top:-1px}}
.qr svg{{display:block;width:100%;height:100%}}
.lab{{position:absolute;left:0;width:1055px;text-align:center;font:700 47px/1 Mont,Montserrat,sans-serif;color:#fff;letter-spacing:-.5px}}
</style></head><body><div class="pagina"><div class="hoja">
<img class="bg" src="assets/fondo_limpio.jpg" alt="">
<img class="logo" src="assets/logo.svg" alt="NC DOING">
{card(415, URL_CLIENTES)}
<div class="lab" style="top:810px">QR Clientes</div>
{card(888, URL_PRODUCTOS)}
<div class="lab" style="top:1283px">QR Productos</div>
</div></div></body></html>'''
open(os.path.join(AQUI, "cartel.html"), "w").write(html)
out = os.path.join(AQUI, "QR_NC_DOING_carta.pdf")
base = [CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=4000"]
subprocess.run(base + [f"--print-to-pdf={out}", "file://" + os.path.join(AQUI, "cartel.html")], check=True, stderr=subprocess.DEVNULL)
print("PDF:", out, round(os.path.getsize(out)/1048576, 2), "MB")
