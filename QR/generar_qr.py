#!/usr/bin/env python3
"""Genera el QR del catálogo NC DOING.
Uso:  python3 generar_qr.py https://tu-direccion-final.cl
Requiere:  pip install segno
Crea QR_NCDoing.svg (vectorial, ideal para imprenta) y QR_NCDoing.png (3000 px)."""
import sys, segno
url = sys.argv[1] if len(sys.argv) > 1 else "https://productos.ncdoing.cl"
qr = segno.make(url, error="h", boost_error=False)
# Nivel H (30 % de corrección): se lee aunque se ensucie o se imprima pequeño.
qr.save("QR_NCDoing.svg", scale=10, border=4, dark="#0A1020", light="#FFFFFF", xmldecl=False)
qr.save("QR_NCDoing.png", scale=60, border=4, dark="#0A1020", light="#FFFFFF")
print("QR generado para:", url)
