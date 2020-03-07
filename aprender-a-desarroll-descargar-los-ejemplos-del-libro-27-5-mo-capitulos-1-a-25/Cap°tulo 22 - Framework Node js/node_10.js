// Nombre del script : nodo_10.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Visualizaci�n del primer registro de una tabla coches
//         desde un servidor MySQL y visualizaci�n en modo HTML

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require("http");

// Llamada a la librer�a Node.js mysql para un acceso al SGBD MySQL
var mysql = require("mysql");

// Conexi�n al servidor MySQL
var connexionMySQL = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "",
  database : "nodejs"
});

// Definici�n de la consulta SQL de listado del contenido de la tabla coches
var consultaSQL = "SELECT * FROM coches";

// Definici�n de la variable a visualizar en el navegador
var visualizacionHTML = "<!DOCTYPE html><html><head><meta charset='utf-8' /><title>nodo_10.js</title></head><body>";

// Listado de los datos de la tabla coches
connexionMySQL.query(
  consultaSQL,
  function select(error, registros) {
    if (error) {
      // Visualizaci�n de un mensaje de error en modo consola
      console.log(error);
      // Cierre de la conexi�n al servidor MySQL
      connexionMySQL.end();
      // Salida forzada
      return;
    }
    // Caso de datos presentes
    if (registros.length > 0) {
      // Visualizaci�n de los registros
      for (var i in registros) {
        // Recuperaci�n del registro actual
        var registro = registros[i]; 
        // Visualizaci�n de los campos del registros actual en modo consola
        console.log("Marca : " + registro["marca"]);
        console.log("Modelo : " + registro["modelo"]);
        console.log("Pa�s : " + registro["pais"]);
        // Preparaci�n del mensaje a visualizar en modo HTML
        visualizacionHTML = visualizacionHTML + "<font face='Arial'>";
        visualizacionHTML = visualizacionHTML + "Marca : "
                        + registro.marca + "<br />";
        visualizacionHTML = visualizacionHTML + "Modelo : "
                       + registro.modelo + "<br />";
        visualizacionHTML = visualizacionHTML + "Pa�s : "
                        + registro.pais + "<br />"; 
        visualizacionHTML = visualizacionHTML + "</font>";
      }
      // Finalizaci�n del mensaje a visualizar en modo HTML
      visualizacionHTML = visualizacionHTML + "</body></html>";
    } else {
      // Sin datos presentes
      console.log("Sin datos");
    }
    // Cierre de la conexi�n al servidor MySQL
    connexionMySQL.end();
  }
);

// Mensaje a enviar al visitante de la p�gina
var mensajeParaVisitante = function(consulta, resultado) {
  // Env�o del c�digo 200 (todo va bien) en el encabezado de la p�gina
  resultado.writeHead(200);
  // Mensaje enviado al usuario
  resultado.end(visualizacionHTML);  
}

// Instanciaci�n del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);