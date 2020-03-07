// Nombre del script : nodo_03.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Un simple "Hello World" en HTML v�lido

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require("http");

// Mensaje a enviar al visitante de la p�gina
var mensajeParaVisitante = function(consulta, resultado) {

  // Env�o del c�digo 200 (todo va bien) en el encabezado de la p�gina
  // con el tipo MIME text/html para indicar un env�o de c�digo HTML
  // al navegador
  resultado.writeHead(200, {"Content-Type": "text/html"});

  // Preparaci�n del script HTML que se debe poner a disposici�n del navegador 
  resultado.write("<!DOCTYPE html>" +
    "<html>" +
    "    <head>" +
    "        <meta charset='utf-8' />" +
    "        <title>Hello World (nodo_03.js)</title>" +
    "    </head>" + 
    "    <body>" +
    "      <font face=Arial>Hello <b>World</b> (documento v�lido)</font>" +
    "    </body>" +
    "</html>"
  );
  
  // Mensaje enviado al usuario
  resultado.end();  

}

// Instanciaci�n del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);