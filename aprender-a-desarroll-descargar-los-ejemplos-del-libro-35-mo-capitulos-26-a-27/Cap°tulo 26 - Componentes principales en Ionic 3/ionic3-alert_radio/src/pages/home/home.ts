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

  // Variables de la clase 
  private resultatRadio: string;

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - AlertController : Gestión de ventana modal
  constructor(public alertController: AlertController) {}

  // Función visualizarVentanaModal
  visualizarVentanaModal() {
  
    // Instanciación de la ventana modal
    let alertaRadio = this.alertController.create();
      
    // Título de la alerta
    alertaRadio.setTitle('Color preferido');
    
    // Botones radio
    alertaRadio.addInput({
      type: 'radio',
      label: 'Azul',
      value: 'azul',
      checked: true
    });
    alertaRadio.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'verde'
    });
    alertaRadio.addInput({
      type: 'radio',
      label: 'Rojo',
      value: 'rojo'
    });
    alertaRadio.addInput({
      type: 'radio',
      label: 'Amarillo',
      value: 'amarillo'
    });
    
    // Botones de validación
    alertaRadio.addButton('Anulación');
    alertaRadio.addButton({
      text: 'Validación',
      handler: data => {
        this.resultatRadio = data;
        this.visualizacionSeleccion();
      }      
    });
    
    // Visualización de la alerta
    alertaRadio.present();
  
  }

  // Función visualizacionSeleccion
  visualizacionSeleccion() {
    
    // Visualización en modo consola
    console.log("Color seleccionado : ", this.resultatRadio);
    
    // Visualización en la capa visualizacionResultado
    // del script home.html
    document.getElementById("visualizacionResultado").innerHTML
    = "<br><br><br>" + "Color seleccionado : " + this.resultatRadio;
    
  }

}