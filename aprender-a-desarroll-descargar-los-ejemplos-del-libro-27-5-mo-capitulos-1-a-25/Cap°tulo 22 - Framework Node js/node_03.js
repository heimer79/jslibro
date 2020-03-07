// Nombre del script : nodo_03.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Un simple "Hello World" en HTML válido

// Llamada a la librería Node.js http para la creación de un servidor Web
var http = require("http");

// Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function(consulta, resultado) {

  // Envío del código 200 (todo va bien) en el encabezado de la página
  // con el tipo MIME text/html para indicar un envío de código HTML
  // al navegador
  resultado.writeHead(200, {"Content-Type": "text/html"});

  // Preparación del script HTML que se debe poner a disposición del navegador 
  resultado.write("<!DOCTYPE html>" +
    "<html>" +
    "    <head>" +
    "        <meta charset='utf-8' />" +
    "        <title>Hello World (nodo_03.js)</title>" +
    "    </head>" + 
    "    <body>" +
    "      <font face=Arial>Hello <b>World</b> (documento válido)</font>" +
    "    </body>" +
    "</html>"
  );
  
  // Mensaje enviado al usuario
  resultado.end();  

}

// Instanciación del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);