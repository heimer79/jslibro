// Nombre del script : nodo_07.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Creaci�n de un objeto con su propio evento

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require("http");

// Llamada a la clase Node.js EventEmitter del m�dulo events 
var EventEmitter = require("events").EventEmitter;

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

// Creaci�n de un objeto porsche911 que se basa en la clase EventEmitter
var porsche911 = new EventEmitter();

// Definici�n de un evento meta asociado al objeto porsche911
porsche911.on("meta", function(mensaje) {
  console.log(mensaje);
});

// El objeto porsche911 emite un mensaje
porsche911.emit("meta", "Bravo, el Porsche 911 ha llegado a la meta");