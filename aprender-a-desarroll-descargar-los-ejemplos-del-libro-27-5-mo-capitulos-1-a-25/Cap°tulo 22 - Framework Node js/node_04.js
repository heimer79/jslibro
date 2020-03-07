// Nombre del script : nodo_04.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Recuperaci�n de la URL solicitada por el cliente
//         y tratamientos diferenciados

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require("http");

// Llamada a la librer�a Node.js url para recuperar la URL
// solicitada por el cliente
var url = require("url");

// Mensaje a enviar al visitante de la p�gina
var mensajeParaVisitante = function(consulta, resultado) {

  // Determinaci�n de la URL solicitada
  var page = url.parse(consulta.url).pathname;
  
  // Env�o del c�digo 200 (todo va bien) en el encabezado de la p�gina
  // con el tipo MIME text/html para indicar un env�o de c�digo HTML
  // al navegador
  resultado.writeHead(200, {"Content-Type": "text/html"});

  // Preparaci�n del script HTML que se debe poner a disposici�n del navegador 
  resultado.write("<font face='Arial'>");
  if (page == "/") {
    resultado.write("Est� en la p�gina de registro de presentaci�n");
    resultado.write(" de coches deportivos<br />A�ada su URL");
  }
  else if (page == "/de") {
    resultado.write("En esta p�gina, la descripci�n de algunos coches");
    resultado.write(" deportes alemanes<br />En el futuro");
  }
  else if (page == "/it") {
    resultado.write("En esta p�gina, la descripci�n de algunos coches");
    resultado.write(" deportes italianos<br />En el futuro");
  }
  resultado.write("</font>");

  // Mensaje enviado al usuario
  resultado.end();

}

// Instanciaci�n del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);