# Handoff · Captura de contactos NC DOING (ferias)

Formulario web de 1 pantalla (ES/EN) que se abre al escanear el QR. Los datos quedan en una hoja de Google Sheets.

## 1. Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El formulario completo en **un solo archivo** (estilos, código, logo y fondo incrustados). Es lo que se publica. |
| `img/` | Copias de `fondo.jpg` (portada de la presentación) y `logo-blanco.png` (NC DOING sin "Nano Compósitos"). Solo respaldo; la página no las necesita. |
| `QR_Contacto.svg` / `QR_Contacto.png` | QR para imprenta (SVG vectorial, PNG 3000 px). Apunta a `https://ncdoing-leads.vercel.app/`. |
| `generar_qr.py` | Regenera el QR: `python3 generar_qr.py https://DIRECCION [nombre-feria]`. Requiere `pip install segno`. |
| `apps-script.gs` | Código que recibe los datos y los escribe en la hoja (ya instalado en Google). |
| `Base_Leads_NCDoing.xlsx` | Plantilla vacía con las mismas columnas (respaldo; la base real es la hoja de Google). |

## 2. Dónde quedan los datos

- Hoja: **Leads NC Doing** (Google Sheets, cuenta erickmendezvaldebenito@gmail.com): https://docs.google.com/spreadsheets/d/1_-u_I-lYs8qR3SJZbkWVhKWvY9Xsi-wljuBj7rNp6hc/edit
- Columnas: Fecha, Evento, Nombre, Empresa, Cargo, Correo, Teléfono, Productos de interés, Industria, Comentario, Idioma, Consentimiento, Seguimiento (la última es para anotar a mano).
- Descargar como Excel: Archivo → Descargar → Microsoft Excel (.xlsx). Compartir: botón Compartir.
- Receptor: proyecto Apps Script "Proyecto sin título", implementación como aplicación web, ejecuta como la cuenta de Erick, acceso **"Cualquier usuario"** (debe quedar así; con "Solo yo" o "con cuenta de Google" el formulario no puede enviar).
- URL del receptor (ya puesta en `index.html`, constante `ENDPOINT`): https://script.google.com/macros/s/AKfycbznEehntJdxiB3iw89IDxrq25DW6ryQzKPxClWN2ZmMjsInsjKEfFdBVaF1WbWIjcVn/exec
- Si se cambia el código de `apps-script.gs`: Implementar → Administrar implementaciones → lápiz → Versión: **Nueva versión** → Implementar (la URL se mantiene).

## 3. Qué hace el formulario

- Obligatorios: nombre, empresa, correo + consentimiento. Opcionales: cargo, teléfono/WhatsApp, producto(s), industria, comentario.
- **Etiqueta por feria**: agregar `?evento=NombreFeria` a la dirección llena la columna Evento (o `python3 generar_qr.py URL "Expo-Forestal-2026"` para un QR por feria).
- **Sin señal**: guarda el registro en el celular y lo reenvía al volver la conexión (aviso naranja). Se reenvía cuando esa persona vuelve a abrir la página.
- Anti-spam (campo trampa) y anti-duplicados (mismo correo + misma fecha).
- Botón "Registrar a otra persona" para usar una tablet en el stand.
- Diseño: logo NC DOING centrado, selector ES/EN a la derecha, fondo de la portada de la presentación, mismos colores y tipografía (Poppins) que el catálogo.

## 4. Publicación

- Dirección actual: https://ncdoing-leads.vercel.app/ (Vercel). El QR apunta a esa dirección.
- Si se cambia a un dominio propio (p. ej. `contacto.ncdoing.cl`, requiere un registro DNS en `ncdoing.cl`), regenerar el QR antes de imprimir.
- Antes de imprimir: escanear con 2–3 celulares (iPhone y Android), enviar un registro de prueba y comprobar que aparece en la hoja; luego borrarlo. Probar también en modo avión y reconectar.

## 5. Pendientes y supuestos

- Fila de prueba "Prueba Claude" (evento PRUEBA) en la hoja: borrar.
- Texto de consentimiento genérico; validar con quien corresponda (Ley 19.628, Chile).
- Probado solo en vista móvil emulada y envío real por línea de comandos; falta Safari iOS y Android reales.
- No incluye correo automático de agradecimiento ni conexión a CRM; la hoja se puede conectar después a Mailchimp/HubSpot.
- La hoja escribe en la primera pestaña. No renombrar ni mover columnas (el orden lo define `apps-script.gs`).
