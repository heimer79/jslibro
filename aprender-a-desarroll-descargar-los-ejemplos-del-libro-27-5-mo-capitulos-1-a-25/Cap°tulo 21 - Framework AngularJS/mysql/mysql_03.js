// Declaraci�n del m�dulo llamado application
var application = angular.module("miAplicacion", []);

// Declaraci�n del controlador llamado miControlador
application.controller("miControlador", function($scope, $http) {

  // Funci�n para agregar un coche en la BDD MySQL angular
  // a trav�s del script servidor PHP (mysql_03.php)
  $scope.agregarCoche = function(marca, modelo, pais) {

    // Creaci�n de una consulta http a enviar (contenido JSON)
    // Nota del autor: Comprueba la existencia de la variable marcaCoche
    // para evitar un error de codificaci�n en el servidor PHP
    if ($scope.marcaCoche) {

      // Consulta http
      $http({
        url: "mysql_03.php",
        method: "POST",
        data: {marca:marca, modelo:modelo, pais:pais},
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
      })
      .then(function successCallback(response) {
        // Caso �xito
        // ...
      }, function errorCallback(response) {
        // Caso error
        // ...
      });

    }

  };

});