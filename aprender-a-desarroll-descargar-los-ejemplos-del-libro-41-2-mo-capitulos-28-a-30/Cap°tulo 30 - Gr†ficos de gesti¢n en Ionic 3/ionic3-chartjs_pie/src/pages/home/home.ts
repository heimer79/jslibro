// Importación de clases (sistema)
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

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

  // Definición de una ventana integrada
  // se muestra en la page home.html
  // y se controla por el controlador home.ts
  @ViewChild('sectores') pieCanvas;

  // Definición de la variable pieChart
  pieChart: any;

  // Función ionViewDidLoad
  // Nota del autor: Ejecución de la barra de progreso durante la apertura de la vista   
  ionViewDidLoad() {

    // Instanciación de un gráfico de tipo pie
    this.pieChart = new Chart(
      
      this.pieCanvas.nativeElement,
      {
        // Tipo de gráfico
        type: 'pie',
        // Datos a representar
        data:
        {
          // Etiquetas
          etiquetas:
          [
            "UEFA",
            "CONMEBOL",
            "AFC",
            "CONCACAF",
            "CAF"
          ],
          // Juego de datos
          datasets:
          [
            {
              // Etiqueta  
              label: 'Número de países de la unión',
              // Series
              data: [14, 5, 5, 3, 5],
              // Colores de fondo
              backgroundColor:
              [
                "Green",         // Vert
                "Blue",          // Azul
                "Yellow",        // Amarillo
                "Red",           // Rojo
                "Gray"           // Gris
              ],
              // Colores de fondo al pasar el ratón
              hoverBackgroundColor:
              [
                'rgba(144, 238, 144, 0.2)',        // Verde claro
                'rgba(173,216,230, 0.2)',          // Azul claro
                'rgba(255, 255, 224, 0.2)',        // Amarillo claro
                'rgba(255, 192, 203, 0.2)',        // Rosa
                'rgba(211, 211,211, 0.2)'          // Gris claro
              ]
            }
          ]
        },
        // Opciones de representación
        options:
        {
          animation:
          {
            // Visualización del gráfico con un efecto rotativo
            animateRotate: true
          }
        }
      }

    );

  }

}