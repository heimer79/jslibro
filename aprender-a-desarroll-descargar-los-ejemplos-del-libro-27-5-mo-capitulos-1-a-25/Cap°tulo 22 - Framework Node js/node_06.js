// Nombre del script : nodo_06.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Detección del evento close en el servidor

// Llamada a la librería Node.js http para la creación de un servidor Web
var http = require("http");

// Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function(consulta, resultado) {
  // Envío del código 200 (todo va bien) en el encabezado de la página
  resultado.writeHead(200);
  // Mensaje enviado al usuario
  resultado.end("Servidor en funcionamiento");
}

// Instanciación del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);

// Función que se ejecuta durante el evento close en el servidor
servidor.on("close", function() {
  // Mensaje de control en modo consola
  console.log("Parada del servidor");
})

// Parada del servidor
// Nota del autor: Esta parada desencadena la visualización de un mensaje en modo consola
servidor.close();