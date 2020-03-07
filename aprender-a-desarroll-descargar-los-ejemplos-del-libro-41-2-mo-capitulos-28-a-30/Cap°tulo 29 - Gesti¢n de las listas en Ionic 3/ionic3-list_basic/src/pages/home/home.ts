// Importación de clases (sistema)
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

// Decorador @Component
// Descripción de la página (componente Angular) :
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  templateUrl: 'home.html'
})

// Clase de la página HomePage
export class HomePage{

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - AlertController : Gestión de ventana de alerta
  constructor(public alertController: AlertController) {}
  
  // Tabla de los coches
  marcasCoches = [
    "Asthon Martin",
    "BMW",   
    "Ferrari",
    "Ford",
    "Mac Laren",
    "Porsche"    
  ];

  // Función de visualización de la marca seleccionada
  seleccionMarca(marca: string) {
    
    // Instanciación de la ventana de alerta
    let alert = this.alertController.create({
      // Título de la alerta
      title: "Marca seleccionada",
      // Mensaje de la alerta
      message: marca,
      // Botones de la ventana de alerta
      buttons: [
        {
          text: "Cerrar"
        }
      ]
    });
    
    // Visualización de la alerta
    alert.present()

  }

}