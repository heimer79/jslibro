<?php

    /*
    Nombre del script : mysql_02.php
    Autor : Christian VIGOUROUX
    Fecha de creación : 15/10/2018
    Fecha última modificación : 15/10/2018
    Objetivo : Listado de los registros de la tabla MySQL coches_deporte (filtrar por un país)
    */

    // Autorización de acceso desde una aplicación almacenada en otro servidor
    header("Access-Control-Allow-Origin: *");

    // Definición del header
    header("Content-Type: application/json");
    
    // Recuperación de las variables establecidas por el script llamador
	$argumentosAngular = file_get_contents("php://input");
	$objetoArgumentosAngular = json_decode($argumentosAngular);

    // Definición de la consulta SQL que se debe enviar a la Base De Datos MySQL
    if($objetoArgumentosAngular->data != "Todos") {
		$consulta_sql = 'select * from coches_deporte where pais="'. $objetoArgumentosAngular->data .'"';
	}
	else {
		$consulta_sql = 'select * from coches_deporte';
	}

    // Argumentos SGBD MySQL (servidor local)
    $servidor_mysql = "localhost";
    $usuario_mysql = "root";
    $contrasenia_mysql = "";
    $bdd_mysql = "angular";
    
    // Prueba de conexión a MySQL
    if (($connexion_mysql = @mysql_connect($servidor_mysql, $usuario_mysql, $contrasenia_mysql)) === FALSE)
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

            // Comprueba el número de registros seleccionados
            if (@mysql_num_rows($resultado_sql) <1)
            {

                // Mensaje de error enviado al cliente si no hay registro
                // echo "Ausencia de registros";
				echo "[]";
    
            }
            else
            {
                // Recorrido de los registros de la tabla MySQL angular_coches_deporte
                $datosJSON ="";
                while ($registro = mysql_fetch_assoc($resultado_sql))
                {
                    // Situar los 3 campos (marca, modelo y país) del registro actual
                    // en la tabla $registros (que contendrá al final la totalidad de los datos)

                    // Almacenamiento del registro actual en una tabla $registros (para un código JSON posterior)
                    // Nota del autor: La función de conversión en JSON (json_encode) no está disponible en este servidor
                    // $registros[] = $registro;

                    // Preparación del flujo JSON
                    if ($datosJSON != "") {
                        $datosJSON .= ",";
                    }
                    $datosJSON .= '{"marca":"' . $registro["marca"] . '",';
                    $datosJSON .= '"modelo":"' . $registro["modelo"] . '",';
                    $datosJSON .= '"pais":"'. $registro["pais"] . '"}';

                }
                // Codificación en formato JSON de la tabla $registros
                // Nota del autor: La función de conversión en JSON (json_encode) no está disponible en este servidor

                // Envío del resultado al cliente
                // echo '{"coches_deporte":['.$datosJSON.']}';
				echo '['.$datosJSON.']';
				// echo $datosJSON;

            }

        }
		
		// Cierre de la conexión MySQL
		@mysql_close($connexion_mysql);
    
    }

?>