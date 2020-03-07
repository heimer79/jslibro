<?php

  /*
  Nombre del script : mysql_03.php
  Autor : Christian VIGOUROUX
  Fecha de creación : 15/10/2018
  Fecha última modificación : 15/10/2018
  Objetivo : Añadir un nuevo registro en la tabla MySQL coches_deporte
  */

  // Autorización de acceso desde una aplicación almacenada en otro servidor
  header("Access-Control-Allow-Origin: *");

  // Respuesta JSON esperada por parte del script
  header("Content-Type: application/json");

  // Recuperación de las variables establecidas por el script llamador
  $argumentosAngular = file_get_contents("php://input");
  $objetoArgumentosAngular = json_decode($argumentosAngular);
	
  // Extracción de los datos	
  $marca = $objetoArgumentosAngular->marca;
  $modelo = $objetoArgumentosAngular->modelo;
  $pais = $objetoArgumentosAngular->pais;
	
  // Definición de la consulta SQL que se debe enviar a la Base De Datos MySQL
  $consulta_sql = "insert into coches (marca, modelo, pais)
                 values('$marca', '$modelo', '$pais');";
	
  // Argumentos SGBD MySQL (servidor local)
  $servidor_mysql = "localhost";
  $usuario_mysql = "root";
  $contrasenia_mysql = "";
  $bdd_mysql = "angular";
	
  // Prueba de conexión al servidor MySQL
  if (($connexion_mysql = @mysql_connect($servidor_mysql,
                          $usuario_mysql, $contrasenia_mysql)) === FALSE)
  {

    // Mensaje de error enviado al cliente
    echo "Fallo de conexión al servidor MySQL";

  }
  else
  {
		
    // Prueba de acceso a la Base De Datos
    if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE)
    {

      // Mensaje de error enviado al cliente
      echo "Fallo de conexión a la Base De Datos MySQL angular";

    }
    else
    {

      // Enviar la consulta SQL al motor SQL de MySQL
      $resultado_sql = @mysql_query($consulta_sql, $connexion_mysql);

      // Visualización mensaje de confirmación de creación o no
      // if ($resultado_sql)
      // {
      //	 echo "Inserción con éxito.";
      // }
      // else
      // {
      //	 echo "Fallo durante la inserción.";
      // }
    }
		
    // Cierre de la conexión MySQL
    @mysql_close($connexion_mysql);
	
  }

?>