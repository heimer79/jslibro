// Nombre del script : nodo_04.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Recuperación de la URL solicitada por el cliente
//         y tratamientos diferenciados

// Llamada a la librería Node.js http para la creación de un servidor Web
var http = require("http");

// Llamada a la librería Node.js url para recuperar la URL
// solicitada por el cliente
var url = require("url");

// Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function(consulta, resultado) {

  // Determinación de la URL solicitada
  var page = url.parse(consulta.url).pathname;
  
  // Envío del código 200 (todo va bien) en el encabezado de la página
  // con el tipo MIME text/html para indicar un envío de código HTML
  // al navegador
  resultado.writeHead(200, {"Content-Type": "text/html"});

  // Preparación del script HTML que se debe poner a disposición del navegador 
  resultado.write("<font face='Arial'>");
  if (page == "/") {
    resultado.write("Está en la página de registro de presentación");
    resultado.write(" de coches deportivos<br />Añada su URL");
  }
  else if (page == "/de") {
    resultado.write("En esta página, la descripción de algunos coches");
    resultado.write(" deportes alemanes<br />En el futuro");
  }
  else if (page == "/it") {
    resultado.write("En esta página, la descripción de algunos coches");
    resultado.write(" deportes italianos<br />En el futuro");
  }
  resultado.write("</font>");

  // Mensaje enviado al usuario
  resultado.end();

}

// Instanciación del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);