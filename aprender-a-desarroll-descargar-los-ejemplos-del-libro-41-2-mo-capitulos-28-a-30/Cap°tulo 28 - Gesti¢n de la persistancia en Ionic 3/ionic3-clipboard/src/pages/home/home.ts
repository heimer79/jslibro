// Importación de clases (sistema)
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

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

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - Clipboard : Gestión del portapapeles (Copiar/Pegar)
  constructor(public clipboard: Clipboard) {}

  // Función copiarHaciaPortapapeles
  copiarHaciaPortapapeles() {
    // Copiar al Portapapeles
    this.clipboard.copy("Mensaje en Portapapeles");    
  }

  // Función copiarDesdePortapapeles
  copiarDesdePortapapeles() {
    // Pegar desde el Portapapeles
    this.clipboard.paste().then(
      (mensajePortapapeles: string) => {
        // Visualización de control en modo consola
        console.log("Portapapeles : "
        + mensajePortapapeles);
        // // Visualización de control por alert
        alert(mensajePortapapeles);
        // Visualización de control en la capa visualizacionControl
        document.getElementById("visualizacionControl").innerHTML =
        "<br/><br/><br/>"
        + "Portapapeles : "
        + mensajePortapapeles;
      },
      (errorPortapapeles: string) => {
        // Visualización de control en modo consola
        console.log("Portapapeles : "
        + errorPortapapeles);
        // // Visualización de control por alert        
        alert("Error : "
        + errorPortapapeles);
        // Visualización de control en la capa visualizacionControl
        document.getElementById("visualizacionControl").innerHTML =
        "<br/><br/><br/>"
        + "Portapapeles : "
        + errorPortapapeles;
      }
    );
          
  }

}