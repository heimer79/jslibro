// Nombre del script : nodo_08.js
// Autor : Christian VIGOUROUX
// Fecha de creaci�n : 15/10/2018
// Fecha de �ltima modificaci�n : 15/10/2018
// Objetivo : Visualizaci�n del primer registro de una tabla coches
//         desde un servidor MySQL y visualizaci�n en modo consola
// Inicializaci�n del m�dulo mysql :
// - Situarse en l�nea de comandos en el directorio de los scripts
//   (E:\ENI_Javascript_2016\node.js)
// - Introducir el comando npm install mysql

// Llamada a la librer�a Node.js http para la creaci�n de un servidor Web
var http = require('http');

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
 
// Listado de los datos de la tabla coches
connexionMySQL.query(
  consultaSQL,
  function lecturaRegistros(error, registros) {
    if (error) {
      // Visualizaci�n de un mensaje de error en modo consola
      console.log(error);
      // Cierre de la conexi�n al servidor MySQL
      connexionMySQL.end();
      // Salida forzada
      return;
    }
    // Caso de datos presentes
    if (registros.length > 0)  { 
      // Visualizaci�n solo del primer registro
      var primerRegistro = registros[0];
      console.log("Marca : " + primerRegistro["marca"]);
      console.log("Modelo : " + primerRegistro["modelo"]);
      console.log("Pa�s : " + primerRegistro["pais"]);
    } else {
      // Sin datos presentes
      console.log("Sin datos");
  }
  // Cierre de la conexi�n al servidor MySQL
  connexionMySQL.end();
});

// Mensaje a enviar al visitante de la p�gina
var mensajeParaVisitante = function(consulta, resultado) {
  // Env�o del c�digo 200 (todo va bien) en el encabezado de la p�gina
  resultado.writeHead(200);
  // Mensaje enviado al usuario
  resultado.end("Servidor en funcionamiento - Resultado en modo consola");
}

// Instanciaci�n del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);