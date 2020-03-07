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
    let alertaConfirmacion = this.alertController.create({
      // Título de la alerta
      title: "Uso de Ionic 3",
      // Mensaje de la alerta
      message: '¿Ha usado Ionic 3 para sus desarrollos para smartphones ?',
      // Botones de la ventana modal
      buttons: [
        {
          text: "Sí",
          handler: () => {
            // Visualización en modo consola
            console.log("Uso Ionic 3 previsto");
            // Visualización en la capa visualizacionResultado del script home.html
            document.getElementById("visualizacionResultado").innerHTML = "<br><br>" + "Uso Ionic 3 previsto"; 
          }
        },
        {
          text: "No",
          handler: () => {
            // Visualización en modo consola
            console.log("Uso Ionic 3 no previsto");
            // Visualización en la capa visualizacionResultado del script home.html
            document.getElementById("visualizacionResultado").innerHTML = "<br><br>" + "Uso Ionic 3 no previsto"; 
          }
        }
      ]
    });
    
    // Visualización de la ventana modal
    alertaConfirmacion.present();
    
  }

}