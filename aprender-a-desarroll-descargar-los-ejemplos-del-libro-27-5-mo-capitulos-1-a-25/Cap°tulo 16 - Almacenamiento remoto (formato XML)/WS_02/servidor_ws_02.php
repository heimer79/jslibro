<?php
/*
NOMBRE DEL SCRIPT : server_ws_02.php
AUTOR : Christian VIGOUROUX
FECCPA DE CREACI�N : 15/10/2018
FECPA �LTIMA MODIFICACI�N : 15/10/2018
OBJETIVO : B�squeda de la informaci�n asociada a un coche deportes
        a trav�s de WebService (sin de autenticaci�n
        y retorno de los campos en formato XML
*/

// Utilizaci�n de la librer�a NuSOAP
require_once("nusoap.php");

// Creaci�n de un objeto SOAP (instalaci�n)
$servidor_soap = new soap_server;

// Registro del  m�todo buscarCoche en el objeto
// para que est� disponible para los clientes de este objeto
$servidor_soap->register("buscarCoche");

// M�todo buscarCoche
// Argumentos pasados por el cliente :
// - $codigo_coche : C�digo del coche deportes
//   del que queremos listar las caracter�sticas
function buscarCoche($codigo_coche)
{

    // Comprueba el c�digo del coche proporcionado por el cliente
    if (empty($codigo_coche))
    {

        // Mensaje de error enviado al cliente
        return new soap_fault("Cliente", "Error coche", "C�digo coche no indicado");

    }
    else
    {

        // Definici�n de la consulta SQL que se debe enviar
        // a la Base De Datos MySQL
        $consulta_sql = "select codigo_coche, nombre_coche,
                        velocidad_maxima_coche
                        from coches
                        where codigo_coche='$codigo_coche';";
        // return "Consulta SQL : $consulta_sql";

        // Argumentos SGBD MySQL
        $servidor_mysql = "sql.free.fr";
        $usuario_mysql = "christian.vigouroux";
        $contrasenia_mysql = "********";
        $bdd_mysql = "christian_vigouroux";

        // Prueba de conexi�n a MySQL
        if (($connexion_mysql
        = @mysql_connect($servidor_mysql, $usuario_mysql,
        $contrasenia_mysql)) === FALSE)
        {

            // Mensaje de error enviado al cliente
            return new soap_fault("Server", "MySQL", mysql_error());

        }
        else
        {
        
            // Verifica el acceso a la Base De Datos
            if ((@mysql_select_db($bdd_mysql, $connexion_mysql))
            === FALSE)
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
                if (@mysql_num_rows($resultado_sql) <1)
                {

                    // Mensaje de error enviado al cliente
                    // si no hay registro
                    $reponse[0] = "Coche inexistante";
                    $reponse[1] = "0";
                    return $reponse;

                }
                else
                {

                    // Env�o del resultado al cliente
                    $reponse[0]
                    = mysql_result($resultado_sql, 0,
                    "codigo_coche");
                    $reponse[1]
                    = mysql_result($resultado_sql, 0,
                    "nombre_coche");
					$reponse[2]
					= mysql_result($resultado_sql, 0,
					"velocidad_maxima_coche");
                    return $reponse;

                }

            }

            // Cierre de la conexi�n MySQL
            @mysql_close($connexion_mysql);

        }

    }

}

// Enviar el valor de retorno al cliente
$servidor_soap->service($HTTP_RAW_POST_DATA);

// Fin de c�digo PHP
?>