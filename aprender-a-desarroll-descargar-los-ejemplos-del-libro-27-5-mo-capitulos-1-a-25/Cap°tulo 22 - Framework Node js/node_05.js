// Nombre del script : nodo_05.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Recuperaci�n de la URL (con de los argumentos) solicitada por el cliente

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require("http");

// Llamada a la librer�a Node.js url para recuperar la URL
// solicitada por el cliente
var url = require("url");

// Llamada a la librer�a Node.js querystring para recuperar
// los argumentos almacenados en la URL solicitada por el cliente
var querystring = require("querystring");

// Mensaje a enviar al visitante de la p�gina
var mensajeParaVisitante = function(consulta, resultado) {

  // Determinaci�n de la URL solicitada
  var page = url.parse(consulta.url).pathname;

  // Recuperaci�n de los argumentos de la URL       
  var params = querystring.parse(url.parse(consulta.url).query);

  // Env�o del c�digo 200 (todo va bien) en el encabezado de la p�gina
  // con el tipo MIME text/html para indicar un env�o de c�digo HTML
  // al navegador
  resultado.writeHead(200, {"Content-Type": "text/html"});

  // Comprueba la presencia de los argumentos marca y modelo en la URL 
  resultado.write("<font face='Arial'>");
  if ("marca" in params && "modelo" in params) {
    resultado.write("Su coche preferido es "
                   + params["marca"] + " " + params["modelo"]);
  }
  else {
    resultado.write("Debe tener un modelo");
    resultado.write(" de coche deportes preferido !!!");
  }
  resultado.write("</font>");

  // Mensaje enviado al usuario
  resultado.end();  

}

// Instanciaci�n del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);