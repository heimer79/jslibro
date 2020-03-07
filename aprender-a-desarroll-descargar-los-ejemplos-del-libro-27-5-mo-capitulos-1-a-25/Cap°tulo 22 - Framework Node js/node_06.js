// Nombre del script : nodo_06.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Detecci�n del evento close en el servidor

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require("http");

// Mensaje a enviar al visitante de la p�gina
var mensajeParaVisitante = function(consulta, resultado) {
  // Env�o del c�digo 200 (todo va bien) en el encabezado de la p�gina
  resultado.writeHead(200);
  // Mensaje enviado al usuario
  resultado.end("Servidor en funcionamiento");
}

// Instanciaci�n del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);

// Funci�n que se ejecuta durante el evento close en el servidor
servidor.on("close", function() {
  // Mensaje de control en modo consola
  console.log("Parada del servidor");
})

// Parada del servidor
// Nota del autor: Esta parada desencadena la visualizaci�n de un mensaje en modo consola
servidor.close();