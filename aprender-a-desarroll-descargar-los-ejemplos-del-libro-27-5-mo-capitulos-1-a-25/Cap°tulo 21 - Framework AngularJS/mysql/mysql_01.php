<?php

  /*
  Nombre del script : mysql_01.php
  Autor : Christian VIGOUROUX
  Fecha de creaci�n : 15/10/2018
  Fecha �ltima modificaci�n : 15/10/2018
  Objetivo : Listado de los registros de la tabla MySQL coches
  */

  // Autorizaci�n de acceso desde una aplicaci�n almacenada en otro servidor
  header("Access-Control-Allow-Origin: *");

  // Respuesta JSON esperada por parte del script
  header("Content-Type: application/json");

  // Argumentos SGBD MySQL (servidor local)
  $servidor_mysql = "localhost";
  $usuario_mysql = "root";
  $contrasenia_mysql = "";
  $bdd_mysql = "angular";

  // Definici�n de la consulta SQL que se debe enviar a la Base De Datos MySQL
  $consulta_sql = "select marca, modelo, pais from coches";

  // Prueba de conexi�n al servidor MySQL
  if (($connexion_mysql = @mysql_connect($servidor_mysql,
                          $usuario_mysql, $contrasenia_mysql)) === FALSE)
  {

    // Mensaje de error enviado al cliente
    echo "";

  }
  else
  {

    // Prueba de acceso a la Base De Datos
    if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE) 
    {

      // Mensaje de error enviado al cliente
      echo "";

    }
    else
    {

      // Enviar la consulta SQL al motor SQL de MySQL
      $resultado_sql = @mysql_query($consulta_sql, $connexion_mysql);

      // Comprueba el n�mero de registros seleccionados
      if (@mysql_num_rows($resultado_sql) <1)
      {

        // Mensaje de error enviado al cliente si no hay registro
        echo "";

      }
      else
      {

        // Recorrido de los registros de la tabla MySQL coches
        $datosJSON ="";
        while ($registro = mysql_fetch_assoc($resultado_sql))
        {

          // Preparaci�n del flujo JSON
          // Nota del autor: Se ha considerado aqu� que la versi�n de PHP disponible
          // no incluye la funci�n de conversi�n en JSON (json_encode).
          // Por lo tanto, la generaci�n se ha hecho de manera "program�tica".
          if ($datosJSON != "") {
            $datosJSON .= ",";
          }
          $datosJSON .= '{"marca":"' . $registro["marca"] . '",';
          $datosJSON .= '"modelo":"' . $registro["modelo"] . '",';
          $datosJSON .= '"pais":"'. $registro["pais"] . '"}';

        }

        // Env�o del resultado al cliente
        echo '{"coches":['.$datosJSON.']}';

      }

    }

    // Cierre de la conexi�n MySQL
    @mysql_close($connexion_mysql);

  }

?>