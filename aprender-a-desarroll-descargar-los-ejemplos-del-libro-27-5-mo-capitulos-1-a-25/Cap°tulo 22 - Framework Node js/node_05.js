// Nombre del script : nodo_05.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Recuperación de la URL (con de los argumentos) solicitada por el cliente

// Llamada a la librería Node.js http para la creación de un servidor Web
var http = require("http");

// Llamada a la librería Node.js url para recuperar la URL
// solicitada por el cliente
var url = require("url");

// Llamada a la librería Node.js querystring para recuperar
// los argumentos almacenados en la URL solicitada por el cliente
var querystring = require("querystring");

// Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function(consulta, resultado) {

  // Determinación de la URL solicitada
  var page = url.parse(consulta.url).pathname;

  // Recuperación de los argumentos de la URL       
  var params = querystring.parse(url.parse(consulta.url).query);

  // Envío del código 200 (todo va bien) en el encabezado de la página
  // con el tipo MIME text/html para indicar un envío de código HTML
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

// Instanciación del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);