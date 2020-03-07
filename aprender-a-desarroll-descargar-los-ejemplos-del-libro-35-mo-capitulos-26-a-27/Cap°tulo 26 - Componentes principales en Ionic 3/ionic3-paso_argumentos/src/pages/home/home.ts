// Importación de clases (sistema)
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Importación de clases (negocio)
import { Pagina2 } from '../page2/page2';

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
  //      - NavController : Gestión de la navegación entre páginas
  constructor(public navController: NavController) {}

  // Función llamadaPagina2
  llamadaPagina2() {
    
    // Mensaje en modo consola
    console.log("Llamada a la página2"); 

    // Argumentos a pasar a pagina2
    let argumentos = {
      apellido: "Christian",
      nombre: "VIGOUROUX",
      deportes_favoritos: [
        "Futbol",
        "Moto",
        "Monociclo"
      ]
    };

    // Visualización de pagina2
    this.navController.push(Pagina2, argumentos);

    // Otra técnica de transferenciat de los argumentos
    // this.navController.push(Pagina2, {
    //   apellido: "Christian",
    //   nombre: "VIGOUROUX",
    //   deportes_favoritos: [
    //     "Futbol",
    //     "Moto",
    //     "Monociclo"
    //   ]
    // });

  }

}