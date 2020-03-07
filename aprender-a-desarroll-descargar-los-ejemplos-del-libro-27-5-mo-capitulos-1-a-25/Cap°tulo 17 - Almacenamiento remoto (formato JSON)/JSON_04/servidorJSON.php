<?php

	// Definición del header  
	header("Content-Type: application/json");
	
    // Definición de la consulta SQL que se debe enviar
    // a la Base De Datos MySQL
	$consulta_sql = "select
					codigo_coche,
					nombre_coche,
					velocidad_maxima_coche
					from coches
					order by codigo_coche;";
	// return "Consulta SQL : $consulta_sql";

	// Argumentos SGBD MySQL
	$servidor_mysql = "localhost";
	$usuario_mysql = "root";
	$contrasenia_mysql = "";
	$bdd_mysql = "json";
	
	// Prueba de conexión a MySQL
	if (
			(
				$connexion_mysql = @mysql_connect(
					$servidor_mysql,
					$usuario_mysql,
					$contrasenia_mysql)
			)
				=== FALSE
		)
	{

		// Mensaje de error enviado al cliente
		echo "";

	}
	else
	{
        
		// Verifica el acceso a la Base De Datos
		if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE)
		{

			// Mensaje de error enviado al cliente
            echo "";

		}
    	else
		{

			// Enviar la consulta SQL al motor SQL de MySQL
			$resultado_sql
			= @mysql_query($consulta_sql, $connexion_mysql);

			// Comprueba el número de registros seleccionados
        	if (@mysql_num_rows($resultado_sql) <1)
			{

				// Mensaje de error enviado al cliente
				// si no hay registro
				echo "";
	
			}
			else
			{
					
				while
				($registro = mysql_fetch_assoc($resultado_sql))
				{
                    // Situar los 3 campos (codigo_coche,
                    // nombre_coche y velocidad_maxima_coche)
                    // del registro actual
                    // en la tabla $registros (que contendrá al final
                    // la totalidad de los datos)	
                    $registros[] = $registro;
				}
				// Codificación en formato JSON de la tabla $registros
				$datosJSON = json_encode($registros);				
				
				// Envío del resultado al cliente
				echo $datosJSON;	

			}

		}
	
	}

	// Cierre de la conexión MySQL
	@mysql_close($connexion_mysql);

?>