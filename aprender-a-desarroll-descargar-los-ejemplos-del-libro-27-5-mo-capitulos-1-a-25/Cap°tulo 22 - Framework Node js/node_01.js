// Nombre del script : nodo_01.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Un simple "Hello World"

// Llamada a la librería Node.js http para la creación de un servidor Web
var http = require("http");

// Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function(consulta, resultado) {
  // Envío del código 200 (todo va bien) en el encabezado de la página
  resultado.writeHead(200);
  // Mensaje enviado al usuario
  resultado.end("Hello World");
}

// Instanciación del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);
