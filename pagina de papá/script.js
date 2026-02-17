function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Extraemos los datos que vienen del formulario HTML
  var nombre = e.parameter.Nombre;
  var email = e.parameter.Email;
  
  // Los guardamos en orden: Columna A (Nombre), Columna B (Email)
  // Eliminamos la fecha para que no desordene tus columnas
  sheet.appendRow([nombre, email]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}