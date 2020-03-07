// Nombre del script : nodo_07.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Creación de un objeto con su propio evento

// Llamada a la librería Node.js http para la creación de un servidor Web
var http = require("http");

// Llamada a la clase Node.js EventEmitter del módulo events 
var EventEmitter = require("events").EventEmitter;

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

// Creación de un objeto porsche911 que se basa en la clase EventEmitter
var porsche911 = new EventEmitter();

// Definición de un evento meta asociado al objeto porsche911
porsche911.on("meta", function(mensaje) {
  console.log(mensaje);
});

// El objeto porsche911 emite un mensaje
porsche911.emit("meta", "Bravo, el Porsche 911 ha llegado a la meta");