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
  visualizarVentanaModal()
  {
  
    // Instanciación de la ventana modal
    let alertPrompt = this.alertController.create({
      // Título de la alerta
      title: 'Login',
      // Mensaje de la alerta
      message: "Introduzca su identificador",
      // Campos de introducción de datos de la ventana modal
      inputs: [
        {
          name: "login",
          placeholder: "identificador"
        },
      ],
      // Botones de la ventana modal      
      buttons: [
        {
          text: 'Anulación',
          handler: data => {
            // Visualización en modo consola
            console.log("Anulación solicitada");
            // Visualización en la capa visualizacionResultado
            // del script home.html
            document.getElementById("visualizacionResultado").innerHTML
            = "<br><br>" + "Anulación solicitada"; 
          }
        },
        {
          text: 'Confirmación',
          handler: data => {
            // Visualización en modo consola
            console.log("Copia de seguridad solicitada");
            // Visualización en la capa visualizacionResultado
            // del script home.html
            document.getElementById("visualizacionResultado").innerHTML
            = "<br><br>" + "Su identificador es " + data.login; 
          }
        }
      ]      
    });
    
    // Visualización de la ventana modal
    alertPrompt.present();

  }

}