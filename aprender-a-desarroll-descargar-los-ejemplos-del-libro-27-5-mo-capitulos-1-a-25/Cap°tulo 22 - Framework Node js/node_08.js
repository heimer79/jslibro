// Nombre del script : nodo_08.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Visualización del primer registro de una tabla coches
//         desde un servidor MySQL y visualización en modo consola
// Inicialización del módulo mysql :
// - Situarse en línea de comandos en el directorio de los scripts
//   (E:\ENI_Javascript_2016\node.js)
// - Introducir el comando npm install mysql

// Llamada a la librería Node.js http para la creación de un servidor Web
var http = require('http');

// Llamada a la librería Node.js mysql para un acceso al SGBD MySQL
var mysql = require("mysql");

// Conexión al servidor MySQL
var connexionMySQL = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "",
  database : "nodejs"
});

// Definición de la consulta SQL de listado del contenido de la tabla coches
var consultaSQL = "SELECT * FROM coches";
 
// Listado de los datos de la tabla coches
connexionMySQL.query(
  consultaSQL,
  function lecturaRegistros(error, registros) {
    if (error) {
      // Visualización de un mensaje de error en modo consola
      console.log(error);
      // Cierre de la conexión al servidor MySQL
      connexionMySQL.end();
      // Salida forzada
      return;
    }
    // Caso de datos presentes
    if (registros.length > 0)  { 
      // Visualización solo del primer registro
      var primerRegistro = registros[0];
      console.log("Marca : " + primerRegistro["marca"]);
      console.log("Modelo : " + primerRegistro["modelo"]);
      console.log("País : " + primerRegistro["pais"]);
    } else {
      // Sin datos presentes
      console.log("Sin datos");
  }
  // Cierre de la conexión al servidor MySQL
  connexionMySQL.end();
});

// Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function(consulta, resultado) {
  // Envío del código 200 (todo va bien) en el encabezado de la página
  resultado.writeHead(200);
  // Mensaje enviado al usuario
  resultado.end("Servidor en funcionamiento - Resultado en modo consola");
}

// Instanciación del servidor
var servidor = http.createServer(mensajeParaVisitante);

// Lanzamiento del servidor en el puerto 8080
servidor.listen(8080);