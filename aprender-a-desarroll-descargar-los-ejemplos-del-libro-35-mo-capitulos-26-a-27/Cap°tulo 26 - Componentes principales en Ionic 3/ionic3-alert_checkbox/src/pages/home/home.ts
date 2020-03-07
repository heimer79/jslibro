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
  private casillasSeleccion: any;

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - AlertController : Gestión de ventana modal
  constructor(public alertController: AlertController) {}

  // Función visualizarVentanaModal
  visualizarVentanaModal() {
    
    // Instanciación de la ventana modal
    let alertCheckBox = this.alertController.create();
    
    // Título de la ventana
    alertCheckBox.setTitle('¿Qué países ha visitado?');

    // Lista de países
    alertCheckBox.addInput({
      type: 'checkbox',
      label: 'Francia',
      value: 'value1',
      checked: true
    });
    alertCheckBox.addInput({
      type: 'checkbox',
      label: 'España',
      value: 'value2'
    });
    alertCheckBox.addInput({
      type: 'checkbox',
      label: 'Inglaterra',
      value: 'value3'
    });
    alertCheckBox.addInput({
      type: 'checkbox',
      label: 'Italia',
      value: 'value4'
    });
    alertCheckBox.addInput({
      type: 'checkbox',
      label: 'Alemania',
      value: 'value5'
    });

    // Botón Cancel
    alertCheckBox.addButton('Cancel');
    
    // Botón Ok
    alertCheckBox.addButton({
      text: 'Ok',
      handler: data => {
        console.log("Paises visitados : ", data);
        // this.testCheckboxOpen = false;
        this.casillasSeleccion = data;
        console.log("testCheckboxResult : ", this.casillasSeleccion);
        this.visualizacionSeleccion();
      }
    });

    // Visualización de la ventana modal
    alertCheckBox.present();

  }

  // Función visualizacionSeleccion
  visualizacionSeleccion() {
    
    // Visualización en modo consola
    console.log("Paises visitados : ", this.casillasSeleccion);
    
    // Visualización en la capa visualizacionSeleccionVersion1
    // del script home.html (version 1)
    document.getElementById("visualizacionSeleccionVersion1").innerHTML
    = "<br><br><br>" + "Visualización Versión 1: "
    + this.casillasSeleccion;
    
    // Visualización en la capa visualizacionSeleccionVersion2
    // del script home.html (version 2)
    var visualizacionVersion2 = "";
    var i: number;
    for(i = 0; i < this.casillasSeleccion.length; i++)
    {
      visualizacionVersion2 = visualizacionVersion2
      + this.casillasSeleccion[i] + "<br>";
    }
    document.getElementById("visualizacionSeleccionVersion2").innerHTML
    = "<br><br>" + "Visualización Version 2 : " + "<br>"
    + visualizacionVersion2;     

    // Visualización en la capa visualizacionSeleccionVersion3
    // del script home.html (version 3)
    var visualizacionVersion3 = "";
    for(i = 0; i < this.casillasSeleccion.length; i++)
    {
      if (this.casillasSeleccion[i] == "value1") {
        visualizacionVersion3 = visualizacionVersion3
        + "Francia" + "<br>";
      } 
    }
    for(i = 0; i < this.casillasSeleccion.length; i++)
    {
      if (this.casillasSeleccion[i] == "value2") {
        visualizacionVersion3 = visualizacionVersion3
        + "España" + "<br>";
      } 
    }
    for(i = 0; i < this.casillasSeleccion.length; i++)
    {
      if (this.casillasSeleccion[i] == "value3") {
        visualizacionVersion3 = visualizacionVersion3
        + "Inglaterra" + "<br>";
      } 
    }
    for(i = 0; i < this.casillasSeleccion.length; i++)
    {
      if (this.casillasSeleccion[i] == "value4") {
        visualizacionVersion3 = visualizacionVersion3
        + "Italia" + "<br>";
      } 
    }
    for(i = 0; i < this.casillasSeleccion.length; i++)
    {
      if (this.casillasSeleccion[i] == "value5") {
        visualizacionVersion3 = visualizacionVersion3
        + "Alemania" + "<br>";
      } 
    }
    document.getElementById("visualizacionSeleccionVersion3").innerHTML
    = "<br><br>" + "Visualización Version 3 : " + "<br>"
    + visualizacionVersion3;     

  }

}