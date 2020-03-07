// Declaraci�n del m�dulo llamado miAplicacion
var application = angular.module("miAplicacion", []);

// Declaraci�n del controlador llamado miControlador
application.controller("miControlador", function($scope, $http) {

  // URL del script PHP a llamar
  $scope.urlListadoCoches = "mysql_02.php";

  // Funci�n de listado de los coches en la BDD MySQL angular
  // a trav�s del script servidor PHP (mysql_02.php)
  $scope.listarCoches = function() {

    // Creaci�n de una consulta http a enviar (contenido JSON)
    // Nota del autor: Comprueba la existencia de la variabel pa�sMarcasPreferidas
    //      para evitar un error de codificaci�n en el servidor PHP
    // alert("Pa�s : " + $scope.paisMarcasPreferidas);
    if ($scope.paisMarcasPreferidas) {      
      $http.post($scope.urlListadoCoches,
      {"data" : $scope.paisMarcasPreferidas})
      // Caso de �xito
      .success(function(data, estado) {
        // Recuperaci�n del estado
        $scope.estado = estado;
        // Recuperaci�n del flujo JSON
        $scope.coches = data;
      })
      // Caso de error
      .error(function(data, estado) {
        // Recuperaci�n del estado
        $scope.estado = estado;
        // Mensaje de error
        $scope.data = "La consulta ha fallado";
      });
    }

  };

});