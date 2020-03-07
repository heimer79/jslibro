// Nombre del script : nodo_02.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Un simple "Hello World" en HTML

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require("http");

// Mensaje a enviar al visitante de la p�gina
var mensajeParaVisitante = function(consulta, resultado) {

  // Env�o del c�digo 200 (todo va bien) en el encabezado de la p�gina
  // con el tipo MIME text/html para indicar un env�o de c�digo HTML
  // al navegador
  resultado.writeHead(200, {"Content-Type": "text/html"});

  // Mensaje enviado al usuario
  resultado.end("<font face='Arial'>Hello <b>World</b></font>");

}

// Instanciaci�n del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);