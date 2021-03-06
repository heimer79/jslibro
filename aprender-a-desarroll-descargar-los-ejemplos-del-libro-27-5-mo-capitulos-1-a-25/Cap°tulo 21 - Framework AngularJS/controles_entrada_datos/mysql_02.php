<?php

    /*
    Nombre del script : mysql_02.php
    Autor : Christian VIGOUROUX
    Fecha de creaci�n : 15/10/2018
    Fecha �ltima modificaci�n : 15/10/2018
    Objetivo : Listado de los registros de la tabla MySQL coches_deporte (filtrar por un pa�s)
    */

    // Autorizaci�n de acceso desde una aplicaci�n almacenada en otro servidor
    header("Access-Control-Allow-Origin: *");

    // Definici�n del header
    header("Content-Type: application/json");
    
    // Recuperaci�n de las variables establecidas por el script llamador
	$argumentosAngular = file_get_contents("php://input");
	$objetoArgumentosAngular = json_decode($argumentosAngular);

    // Definici�n de la consulta SQL que se debe enviar a la Base De Datos MySQL
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
    
    // Prueba de conexi�n a MySQL
    if (($connexion_mysql = @mysql_connect($servidor_mysql, $usuario_mysql, $contrasenia_mysql)) === FALSE)
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

            // Comprueba el n�mero de registros seleccionados
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
                    // Situar los 3 campos (marca, modelo y pa�s) del registro actual
                    // en la tabla $registros (que contendr� al final la totalidad de los datos)

                    // Almacenamiento del registro actual en una tabla $registros (para un c�digo JSON posterior)
                    // Nota del autor: La funci�n de conversi�n en JSON (json_encode) no est� disponible en este servidor
                    // $registros[] = $registro;

                    // Preparaci�n del flujo JSON
                    if ($datosJSON != "") {
                        $datosJSON .= ",";
                    }
                    $datosJSON .= '{"marca":"' . $registro["marca"] . '",';
                    $datosJSON .= '"modelo":"' . $registro["modelo"] . '",';
                    $datosJSON .= '"pais":"'. $registro["pais"] . '"}';

                }
                // Codificaci�n en formato JSON de la tabla $registros
                // Nota del autor: La funci�n de conversi�n en JSON (json_encode) no est� disponible en este servidor

                // Env�o del resultado al cliente
                // echo '{"coches_deporte":['.$datosJSON.']}';
				echo '['.$datosJSON.']';
				// echo $datosJSON;

            }

        }
		
		// Cierre de la conexi�n MySQL
		@mysql_close($connexion_mysql);
    
    }

?>