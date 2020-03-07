<?php
/*
NOMBRE DEL SCRIPT : server_ws_01.php
AUTOR : Christian VIGOUROUX
FECCPA DE CREACI�N : 15/10/2018
FECPA �LTIMA MODIFICACI�N : 15/10/2018
OBJETIVO : Listado de coches deportivos a trav�s de WebService
 *      (retorno del campos en formato XML)
*/

// Utilizaci�n de la librer�a NuSOAP
require_once("nusoap.php");

// Creaci�n de un objeto SOAP (instalaci�n)
$servidor_soap = new soap_server;

// Registro del m�todo listarCoches en el objeto
// para que est� disponible para los clientes de este objeto
$servidor_soap->register("listarCoches");

// M�todo listarCoches
function listarCoches()
{

    // Definici�n de la consulta SQL que se debe enviar
    // a la Base De Datos MySQL
    $consulta_sql = "select codigo_coche, nombre_coche,
                    velocidad_maxima_coche
                    from coches
                    order by codigo_coche;";

    // Argumentos SGBD MySQL
    $servidor_mysql = "sql.free.fr";
    $usuario_mysql = "christian.vigouroux";
    $contrasenia_mysql = "********";
    $bdd_mysql = "christian_vigouroux";

    // Prueba de conexi�n a MySQL
    if (($connexion_mysql = @mysql_connect($servidor_mysql,
    $usuario_mysql, $contrasenia_mysql)) === FALSE)
    {

        // Mensaje de error enviado al cliente
        return new soap_fault("Server", "MySQL", mysql_error());

    }
    else
    {
    
        // Verifica el acceso a la Base De Datos
        if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE)
        {

            // Mensaje de error enviado al cliente
            return new soap_fault("Server", "MySQL", mysql_error());

        }
        else
        {

            // Enviar la consulta SQL al motor SQL de MySQL
            $resultado_sql
            = @mysql_query($consulta_sql, $connexion_mysql);

            // Comprueba el n�mero de registros seleccionados
            if (@mysql_num_rows($resultado_sql)<1)
            {

                // Mensaje de error enviado al cliente
                // si no hay registro
                $reponse[0] = "Tabla coches vac�a";
                $reponse[1] = "0";
                return $reponse;

            }
            else
            {

	            // Recorrido secuencial de la extracci�n (vista SQL)
	            $i = 0;
	            $num_elmente = 0;
	            while ($i < @mysql_num_rows($resultado_sql))
	            {
	                	
	                // Recuperaci�n de los valores a visualizar
	                $codigo_coche
	                = mysql_result($resultado_sql, $i, "codigo_coche");
	                $nombre_coche
	                = mysql_result($resultado_sql, $i, "nombre_coche");
	                $velocidad_maxima_coche
	                = mysql_result($resultado_sql, $i,
	                "velocidad_maxima_coche");
                    // Preparaci�n env�o de los resultados al cliente
                    $reponse[$num_element] = $codigo_coche;
                    $num_elmente = $num_element+1;
                    $reponse[$num_element] = $nombre_coche;
                    $num_elmente = $num_element+1;
					$reponse[$num_element] = $velocidad_maxima_coche;
                    $num_elmente = $num_element+1;
					 
	                // Pasar al registro siguiente
	                $i++;
	            }

				// Enviar la respuesta al cliente
				return $reponse;

            }

        }

        // Cierre de la conexi�n MySQL
        @mysql_close($connexion_mysql);

    }

}

// Enviar el valor de retorno al cliente
$servidor_soap->service($HTTP_RAW_POST_DATA);

// Fin de c�digo PHP
?>