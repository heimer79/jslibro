// Declaración del módulo llamado application
var application = angular.module("miAplicacion", []);

// Declaración del controlador llamado miControlador
application.controller("miControlador", function($scope, $http) {

  // Función para agregar un coche en la BDD MySQL angular
  // a través del script servidor PHP (mysql_03.php)
  $scope.agregarCoche = function(marca, modelo, pais) {

    // Creación de una consulta http a enviar (contenido JSON)
    // Nota del autor: Comprueba la existencia de la variable marcaCoche
    // para evitar un error de codificación en el servidor PHP
    if ($scope.marcaCoche) {

      // Consulta http
      $http({
        url: "mysql_03.php",
        method: "POST",
        data: {marca:marca, modelo:modelo, pais:pais},
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
      })
      .then(function successCallback(response) {
        // Caso éxito
        // ...
      }, function errorCallback(response) {
        // Caso error
        // ...
      });

    }

  };

});