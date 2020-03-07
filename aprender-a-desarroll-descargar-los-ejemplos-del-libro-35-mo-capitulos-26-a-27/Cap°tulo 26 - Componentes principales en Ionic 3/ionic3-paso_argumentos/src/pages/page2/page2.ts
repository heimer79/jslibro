// Importación de clases (sistema)
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Decorador @Component
// Descripción de la página (componente Angular) :
// - selector = Página SCSS asociada al script TypeScript
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

// Clase de la página Pagina2
export class Pagina2 {

  // Variables de la clase 
  private apellido: string;
  private nombre: string;
  private deporte1: string;
  private deporte2: string;
  private deporte3: string;

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - NavController : Gestión de la navegación entre páginas
  //      - NavParams : Gestión del paso de argumentos entre páginas 
  constructor(public navController: NavController, public navParams: NavParams) {}

  // Función ionViewDidLoad
  // Nota del autor: Función se desencadena automáticamente
  //      durante la carga de la página
  ionViewDidLoad() {
  	
  	// Mensaje en modo consola
    console.log("page2 se muestra");
    
    // Recuperación de los argumentos
    this.apellido = this.navParams.get("apellido");
    this.nombre  = this.navParams.get("nombre");
    let deportes_favoritos = this.navParams.get("deportes_favoritos");  
    this.deporte1 = deportes_favoritos[0];
    this.deporte2 = deportes_favoritos[1];
    this.deporte3 = deportes_favoritos[2];

    // Visualización de los argumentos enviados por la página home en modo consola
    console.log("Apellido : " + this.apellido);
    console.log("Nombre : " + this.nom);
    console.log("Deporte n°1 : " + this.deporte1);
    console.log("Deporte n°2 : " + this.deporte2);
    console.log("Deporte n°3 : " + this.deporte3);
    
  }

}