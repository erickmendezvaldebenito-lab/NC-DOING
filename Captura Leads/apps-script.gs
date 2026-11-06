/**
 * Recibe los registros del formulario y los guarda en una hoja de Google Sheets.
 * Pegar en: Hoja de cálculo > Extensiones > Apps Script. Ver LEEME.md.
 */
const COLS = ["fecha","evento","nombre","empresa","cargo","email","telefono","productos","industria","comentario","idioma","consentimiento"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById("1_-u_I-lYs8qR3SJZbkWVhKWvY9Xsi-wljuBj7rNp6hc");
    let sh = ss.getSheets()[0];
    if (sh.getLastRow() === 0) { sh.appendRow(COLS); sh.setFrozenRows(1); sh.getRange(1,1,1,COLS.length).setFontWeight("bold"); }
    // Evita duplicados si el celular reenvía la cola: mismo correo + misma fecha
    const key = d.email + "|" + d.fecha;
    const last = Math.min(sh.getLastRow(), 200);
    if (last > 1) {
      const rows = sh.getRange(2, 1, last - 1, COLS.length).getValues();
      if (rows.some(r => r[5] + "|" + r[0] === key)) return ContentService.createTextOutput("dup");
    }
    // Neutraliza fórmulas inyectadas (=, +, -, @) en celdas de texto
    const safe = v => /^[=+\-@]/.test(String(v)) ? "'" + v : v;
    sh.appendRow(COLS.map(c => safe(d[c] || "")));
    return ContentService.createTextOutput("ok");
  } finally { lock.releaseLock(); }
}
