// Importación de clases (sistema)
import { Component } from '@angular/core';

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
  constructor() {}

  // Función calculPgcd
  // Nota del autor: Cálculo del PGCD
  calculPgcd(a: number, b: number)    
  {

    // Declaración de variables locales
    var reste;

    //
    //  Bucle de tratamiento
    //
    // Determinación del resto
    reste = a % b;
    while (reste != 0)
    {
      // Sustitución de a por b y de b por el resto
      a = b;
      b = reste;
      // Determinación del resto
      reste = a % b;
    }

    // Visualización del resultado en la capa visualizacionResultado
    document.getElementById("visualizacionResultado").innerHTML
    = "<br/><br/><br/>" + "PGCD : " + b
    + "<br/><br/>Actualice la visualización por clic en el botón";

  }  

}