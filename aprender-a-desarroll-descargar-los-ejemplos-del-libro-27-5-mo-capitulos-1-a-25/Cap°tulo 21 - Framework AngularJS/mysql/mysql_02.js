// Declaración del módulo llamado miAplicacion
var application = angular.module("miAplicacion", []);

// Declaración del controlador llamado miControlador
application.controller("miControlador", function($scope, $http) {

  // URL del script PHP a llamar
  $scope.urlListadoCoches = "mysql_02.php";

  // Función de listado de los coches en la BDD MySQL angular
  // a través del script servidor PHP (mysql_02.php)
  $scope.listarCoches = function() {

    // Creación de una consulta http a enviar (contenido JSON)
    // Nota del autor: Comprueba la existencia de la variabel paísMarcasPreferidas
    //      para evitar un error de codificación en el servidor PHP
    // alert("País : " + $scope.paisMarcasPreferidas);
    if ($scope.paisMarcasPreferidas) {      
      $http.post($scope.urlListadoCoches,
      {"data" : $scope.paisMarcasPreferidas})
      // Caso de éxito
      .success(function(data, estado) {
        // Recuperación del estado
        $scope.estado = estado;
        // Recuperación del flujo JSON
        $scope.coches = data;
      })
      // Caso de error
      .error(function(data, estado) {
        // Recuperación del estado
        $scope.estado = estado;
        // Mensaje de error
        $scope.data = "La consulta ha fallado";
      });
    }

  };

});