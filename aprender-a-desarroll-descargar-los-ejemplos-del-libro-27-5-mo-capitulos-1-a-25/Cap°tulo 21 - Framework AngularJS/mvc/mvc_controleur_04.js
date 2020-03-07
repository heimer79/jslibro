// Declaración del controlador llamado miControlador
angular.module('miAplicacion', []).controller('miControlador', function($scope) {
	
  // Inicialización de las variables marca y modelo
  $scope.marca = "Porsche",
  $scope.modelo = "911",
	
  // Método visualizarCochePreferida
  $scope.visualizarCochePreferida = function() {
    return $scope.marca + " " + $scope.modelo;
  };

});