// Importación de clases (sistema)
import { Component, ViewChild } from '@angular/core';
// import { NavController } from 'ionic-angular';

// Importación de clases (negocio)
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
  @ViewChild('histogramme') barCanvas;

  // Definición de la variable barChart
  barChart: any;

  // Función ionViewDidLoad
  // Nota del autor: Ejecución de la barra de progreso durante la apertura de la vista    
  ionViewDidLoad() {

    // Definición del tipo de gráfico
    var tipoGrafico = 'bar';
    
    // Instanciación de un gráfico de tipo histogramme
    this.barChart = new Chart(
      this.barCanvas.nativeElement,
      {
        // Tipo del gráfico
        type: tipoGrafico,
        // Datos a representar
        data:
        {
          // Etiquetas
          etiquetas:
          [
            "KANE",
            "MBAPPE", 
            "LUKAKU", 
            "CHERISHEV", 
            "RONALDO", 
            "GRIEZMANN"
          ],
          // Datos
          datasets:
          [{
            // Etiqueta del gráfico
            label: 'Número de goles',
            // Datos
            data:
              [6, 4, 4, 4, 4, 4],
            // Colores de fondo
            backgroundColor:
            [
              'rgba(105, 105, 105)',        // Gris mate
              'rgba(128, 128, 128)',        // Gris   
              'rgba(169, 169, 169)',        // Gris muy oscuro 
              'rgba(192, 192, 192)',        // Gris plata
              'rgba(211, 211, 211)',        // Gris claro
              'rgba(220, 220, 220)'         // Gris estaño
            ],
            // Colores de los bordes
            borderColor:
            [
              'rgba(0, 0, 0)',              // Negro
              'rgba(0, 0, 0)',              // Negro
              'rgba(0, 0, 0)',              // Negro
              'rgba(0, 0, 0)',              // Negro
              'rgba(0, 0, 0)',              // Negro
              'rgba(0, 0, 0)'               // Negro
            ],
            // Anchura de los bordes
            borderWidth: 1
          }]
        },
        // Opciones de los ejes
        options: {
          // Visualización de las leyendas de barras (nombres de los jugadores)
          scaleShowValues: true,
          // Gestión de los ejes
          scales: {
            // Eje vertical (número de goles)
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            // Eje horizontal (nombres de los jugadores)
            xAxes: [{
              ticks: {
                // Para que todas las barras sean idénticas
                autoSkip: false
              }
            }]
          }
        }
      }
    );

  }

}