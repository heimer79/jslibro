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
  //      - AlertController : Gestión de ventana modal
  constructor(public alertController: AlertController) {}

  // Función visualizarVentanaModal
  visualizarVentanaModal() {
  
    // Instanciación de la ventana modal
    let alertaBasique = this.alertController.create({
      // Título de la alerta
      title: 'Alerta eliminación',
      // Mensaje de la alerta
      message: 'El pequeñoIonic 3 ha sido eliminado.',
      // Botón de cierre de la ventana modal
      buttons: ['Ok']
    });
    // Visualización de la ventana modal
    alertaBasique.present();
    
  }

}