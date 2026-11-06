#!/usr/bin/env python3
"""QR del formulario de contacto para ferias.
Uso:  python3 generar_qr.py https://contacto.ncdoing.cl [nombre-feria]
Con nombre de feria, cada registro queda etiquetado en la columna "evento".
Requiere:  pip install segno"""
import sys, re, segno
url = sys.argv[1] if len(sys.argv) > 1 else "https://contacto.ncdoing.cl"
ev = sys.argv[2] if len(sys.argv) > 2 else ""
full = url + (("?evento=" + re.sub(r"[^A-Za-z0-9_-]+", "-", ev)) if ev else "")
base = "QR_Contacto" + (("_" + ev) if ev else "")
qr = segno.make(full, error="h", boost_error=False)
qr.save(base + ".svg", scale=10, border=4, dark="#0A1020", light="#FFFFFF", xmldecl=False)
qr.save(base + ".png", scale=60, border=4, dark="#0A1020", light="#FFFFFF")
print("QR generado para:", full)
