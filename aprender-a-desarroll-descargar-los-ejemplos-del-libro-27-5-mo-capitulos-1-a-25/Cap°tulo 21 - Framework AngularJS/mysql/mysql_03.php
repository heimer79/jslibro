<?php

  /*
  Nombre del script : mysql_03.php
  Autor : Christian VIGOUROUX
  Fecha de creaci�n : 15/10/2018
  Fecha �ltima modificaci�n : 15/10/2018
  Objetivo : A�adir un nuevo registro en la tabla MySQL coches_deporte
  */

  // Autorizaci�n de acceso desde una aplicaci�n almacenada en otro servidor
  header("Access-Control-Allow-Origin: *");

  // Respuesta JSON esperada por parte del script
  header("Content-Type: application/json");

  // Recuperaci�n de las variables establecidas por el script llamador
  $argumentosAngular = file_get_contents("php://input");
  $objetoArgumentosAngular = json_decode($argumentosAngular);
	
  // Extracci�n de los datos	
  $marca = $objetoArgumentosAngular->marca;
  $modelo = $objetoArgumentosAngular->modelo;
  $pais = $objetoArgumentosAngular->pais;
	
  // Definici�n de la consulta SQL que se debe enviar a la Base De Datos MySQL
  $consulta_sql = "insert into coches (marca, modelo, pais)
                 values('$marca', '$modelo', '$pais');";
	
  // Argumentos SGBD MySQL (servidor local)
  $servidor_mysql = "localhost";
  $usuario_mysql = "root";
  $contrasenia_mysql = "";
  $bdd_mysql = "angular";
	
  // Prueba de conexi�n al servidor MySQL
  if (($connexion_mysql = @mysql_connect($servidor_mysql,
                          $usuario_mysql, $contrasenia_mysql)) === FALSE)
  {

    // Mensaje de error enviado al cliente
    echo "Fallo de conexi�n al servidor MySQL";

  }
  else
  {
		
    // Prueba de acceso a la Base De Datos
    if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE)
    {

      // Mensaje de error enviado al cliente
      echo "Fallo de conexi�n a la Base De Datos MySQL angular";

    }
    else
    {

      // Enviar la consulta SQL al motor SQL de MySQL
      $resultado_sql = @mysql_query($consulta_sql, $connexion_mysql);

      // Visualizaci�n mensaje de confirmaci�n de creaci�n o no
      // if ($resultado_sql)
      // {
      //	 echo "Inserci�n con �xito.";
      // }
      // else
      // {
      //	 echo "Fallo durante la inserci�n.";
      // }
    }
		
    // Cierre de la conexi�n MySQL
    @mysql_close($connexion_mysql);
	
  }

?>