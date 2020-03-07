// Nombre del script : nodo_09.js
// Autor : Christian VIGOUROUX
// Fecha de creación : 15/10/2018
// Fecha de última modificación : 15/10/2018
// Objetivo : Visualización de los registros de una tabla coches
//         desde un servidor MySQL y visualización en modo consola

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
  function select(error, registros) {
    if (error) {
      // Visualización de un mensaje de error en modo consola
      console.log(error);
      // Cierre de la conexión al servidor MySQL
      connexionMySQL.end();
      // Salida forzada
      return;
    }
    // Caso de datos presentes
    if (registros.length > 0) { 
      // Visualización de los registros
      for (var i in registros) {
        // Recuperación del registro actual
        var registro = registros[i]; 
        // Visualización de los campos del registro actual en modo consola      
        console.log("Marca : " + registro.marca);
        console.log("Modelo : " + registro.modelo);
        console.log("País : " + registro.pais);
      }
    } else {
      // No hay datos presentes
      console.log("Sin datos");
    }
    // Cierre de la conexión al servidor MySQL
    connexionMySQL.end();
  }
);

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