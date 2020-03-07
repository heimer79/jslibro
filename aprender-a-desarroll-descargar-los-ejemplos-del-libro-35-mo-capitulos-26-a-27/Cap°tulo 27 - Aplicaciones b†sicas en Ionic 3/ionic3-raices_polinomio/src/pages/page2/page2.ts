// Importación de clases (sistema)
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Decorador @Component
// Descripción de la página (componente Angular) :
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'page2.html'
})

// Clase de la página Pagina2
export class Pagina2 {

  // Variables de la clase 
  sinRaiz;
  raiz0;
  raiz1;
  raiz2;
  visualizacionResultado;

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - NavController : Gestión de la navegación entre las páginas
  //      - NavParams : Gestión del paso de argumentos entre las páginas 
  constructor(public navController: NavController, public navParams: NavParams) {}

  // Función ionViewDidLoad
  // Nota del autor: Función se desencadena automáticamente durante la carga de la página
  ionViewDidLoad() {
  	
  	// Mensaje en modo consola
    console.log("page2 se muestra");
    
    // Visualización de los argumentos recibidos en modo consola
    console.log("Sin raíz : ", this.navParams.get("sin_raiz"));
    console.log("Raíz única : ", this.navParams.get("raiz0"));
    console.log("Raíz 1 : ", this.navParams.get("raiz1"));
    console.log("Raíz 2 : ", this.navParams.get("raiz2"));

    // Recuperación de los resultados pasados por el controlador home.ts
    this.sinRaiz = this.navParams.get("sin_raiz");
    this.raiz0 = this.navParams.get("raiz0");
    this.raiz1 = this.navParams.get("raiz1");
    this.raiz2 = this.navParams.get("raiz2");
    
    // Disposición de las raíces en la página pagina2.html
    if (this.sinRaiz == "Sin soluciones")
    {
      this.visualizacionResultado = "Sin soluciones (delta < 0)"; 
    }
    else
    {
      if (this.raiz0 != 0)
      {
        this.visualizacionResultado
        = "Raíz única (delta nul) : "
        + this.raiz0; 
      }
      else
      {
        this.visualizacionResultado = "Raíz 1 : "
        + this.raiz1
        + " y "
        + "Raíz 2 : "
        + this.raiz2;        
      }
    }

  }

}