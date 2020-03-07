<?php

  /*
  Nombre del script : mysql_01.php
  Autor : Christian VIGOUROUX
  Fecha de creación : 15/10/2018
  Fecha última modificación : 15/10/2018
  Objetivo : Listado de los registros de la tabla MySQL coches
  */

  // Autorización de acceso desde una aplicación almacenada en otro servidor
  header("Access-Control-Allow-Origin: *");

  // Respuesta JSON esperada por parte del script
  header("Content-Type: application/json");

  // Argumentos SGBD MySQL (servidor local)
  $servidor_mysql = "localhost";
  $usuario_mysql = "root";
  $contrasenia_mysql = "";
  $bdd_mysql = "angular";

  // Definición de la consulta SQL que se debe enviar a la Base De Datos MySQL
  $consulta_sql = "select marca, modelo, pais from coches";

  // Prueba de conexión al servidor MySQL
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

      // Comprueba el número de registros seleccionados
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

          // Preparación del flujo JSON
          // Nota del autor: Se ha considerado aquí que la versión de PHP disponible
          // no incluye la función de conversión en JSON (json_encode).
          // Por lo tanto, la generación se ha hecho de manera "programática".
          if ($datosJSON != "") {
            $datosJSON .= ",";
          }
          $datosJSON .= '{"marca":"' . $registro["marca"] . '",';
          $datosJSON .= '"modelo":"' . $registro["modelo"] . '",';
          $datosJSON .= '"pais":"'. $registro["pais"] . '"}';

        }

        // Envío del resultado al cliente
        echo '{"coches":['.$datosJSON.']}';

      }

    }

    // Cierre de la conexión MySQL
    @mysql_close($connexion_mysql);

  }

?>