// Declaraci�n del controlador llamado miControlador
angular.module('miAplicacion', []).controller('miControlador', function($scope) {
	
  // Inicializaci�n de las variables marca y modelo
  $scope.marca = "Porsche",
  $scope.modelo = "911",
	
  // M�todo visualizarCochePreferida
  $scope.visualizarCochePreferida = function() {
    return $scope.marca + " " + $scope.modelo;
  };

});