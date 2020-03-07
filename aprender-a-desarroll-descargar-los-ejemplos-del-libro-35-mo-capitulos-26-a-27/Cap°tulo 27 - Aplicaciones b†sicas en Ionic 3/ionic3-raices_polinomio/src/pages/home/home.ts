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
  //      - NavController : Gestión de la navegación entre las páginas
  constructor(public navController: NavController) {}

  // Función calculaRaices
  // Nota del autor: Cálculo de las raíces del polinómino de segundo grado 
  calculaRaices(a: number, b: number, c: number)    
  {

    // Declaración de variables locales
    var raiz0, raiz1, raiz2;
    var delta;
    var argumentos;

    // Cálculo del discriminante
    delta = (b * b) - (4 * a * c);
      
    // Determinación de las raíces
    if (delta < 0)
    {
      // Sin raíz
      // Argumentos a pasar a pagina2
      argumentos = {
        sin_raiz: "Sin soluciones",
        raiz0: 0,
        raiz1: 0,
        raiz2: 0
      };
    }
    else
    {
      if (delta == 0)
      {
        // Raíz única
        raiz0 = -b / (2 * a);
        // Argumentos a pasar a pagina2
        argumentos = {
          sin_raiz: "",
          raiz0: raiz0,
          raiz1: 0,
          raiz2: 0
        };
      }
      else
      {
        // Dos raíces
        raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        // Argumentos a pasar a pagina2
        argumentos = {
          sin_raiz: "",
          raiz0: 0,
          raiz1: raiz1,
          raiz2: raiz2
        };
      }
      
    }

    // Visualización de pagina2
    this.navController.push(Pagina2, argumentos); 

  }  

}