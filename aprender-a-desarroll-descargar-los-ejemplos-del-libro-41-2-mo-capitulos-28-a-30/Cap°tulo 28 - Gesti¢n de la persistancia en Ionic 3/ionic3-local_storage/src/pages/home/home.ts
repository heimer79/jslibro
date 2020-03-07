// Importación de clases (sistema)
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

// Nota del autor: - Instalar la directiva "@ionic/storage": "1.1.6", en el archivo package.jon
//      - Instalar Storage en versión 1.1.6 con el comando : npm install @ionic/storage@1.1.6 --save --save-exact 

// Decorador @Component
// Descripción de la página (componente Angular) :
// - selector = Página SCSS asociada al script TypeScript
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// Clase de la página HomePage
export class HomePage{

  // Variables de la clase 
  apellido: string;
  nombre: string;

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - Storage : Gestión del dispositivo Local Storage
  constructor(public storage: Storage) {}

  // Función escrituraLocalStorage
  // Nota del autor: Escritura de variables en el Local Storage
  escrituraLocalStorage()
  {
	  
    // Visualización de control en modo consola
	  console.log("EscrituraLocalStorage");
	  // Escritura de las variables Nombre y Apellido desde el Local Storage
	  this.storage.set("Nombre", "VIGOUROUX");
    this.storage.set("Apellido", "Christian");    
    // Visualización de control en la capa visualizacionControl1
    document.getElementById("visualizacionControl1").innerHTML
    = "Valores situados en el Local Storage :<br/>"
    + "NOMBRE=Vigouroux<br/>Apellido=Christian";  
  
  }

  // Función lecturaLocalStorage
  // Nota del autor: Lectura de variables almacenadas en Local Storage
  lecturaLocalStorage()
  {
	  
    // Visualización de control en modo consola
	  console.log("LecturaLocalStorage");
	  // Lectura de las variables Nombre y Apellido en el Local Storage
    this.storage.get("Nombre").then((data) => {
      console.log("NOMBRE :  : ", data);
      // Visualización de control en la capa visualizacionControl2
      document.getElementById("visualizacionControl2").innerHTML
      = "Valores leídos desde el Local Storage :<br/>"
      + "NOMBRE : " + data;
    })
    this.storage.get("Apellido").then((data) => {
      console.log("Apellido :  : ", data);
      // Visualización de control en la capa visualizacionControl3
      document.getElementById("visualizacionControl3").innerHTML
      = "Apellido : " + data;  
    })

  }

}