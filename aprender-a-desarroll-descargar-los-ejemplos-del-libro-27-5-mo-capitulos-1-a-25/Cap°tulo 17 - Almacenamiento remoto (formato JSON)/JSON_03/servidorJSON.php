<?php
	
	// Tipo del flujo
	header("Content-Type: application/json");
	
	// Lectura del archivo JSON coches.json
	$datosJSON = file_get_contents("coches.json");
	
	// Env�o del flujo JSON a la aplicaci�n cliente
	echo $datosJSON;
	
?>