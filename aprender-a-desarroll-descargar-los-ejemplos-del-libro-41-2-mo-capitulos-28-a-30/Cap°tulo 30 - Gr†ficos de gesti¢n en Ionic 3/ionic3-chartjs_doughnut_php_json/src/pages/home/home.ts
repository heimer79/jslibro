// Importación de clases (sistema)
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

// Importación de clases (negocio)
import { Chart } from 'chart.js';

// Descripción de la página (componente Angular)
// a través del decorador @Component
// - selector = Página SCSS asociada al script TypeScript
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// Clase de la página HomePage
export class HomePage{

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de la superclasse Http
  constructor(private http: Http)
  {
    this.http = http;
  }

  // Definición de una ventana integrada
  // se muestra en la page home.html
  // y se controla por el controlador home.ts
  @ViewChild('beignet') doughnutCanvas;

  // Definición de la variable doughnutChart
  doughnutChart: any;

  // Función ionViewDidLoad
  // Objet : Carga de los datos en formato JSON
  //         después, un script remoto escribe en PHP
  //         y représentation del gráfico
  ionViewDidLoad() {
  
    // Definición de la URL del script servidor PHP-MySQL-JSON
    var url = 'http://christian.vigouroux.online.fr/ionic3/chartjs/chartjs_doughnut.php';
    
    // Envío de la consulta al servidor
    this.http.get(url).subscribe(data => {
      
      // Recuperación del tipo de gráfico
      var tipoGrafico = data.json().tipo_grafico;
      // Recuperación de la etiqueta del gráfico
      var etiquetaGrafico = data.json().etiqueta_grafico;
      // Recuperación de la tabla de las etiquetas
      var etiquetas = data.json().labels;
      // Recuperación de la tabla de las datos
      var datos = data.json().datos;
      // Recuperación de la tabla de los códigos backgroundColor
      var backgroundColor = data.json().backgroundColor;
      // Recuperación de la tabla de los códigos de borderColor
      var borderColor = data.json().borderColor;

console.log("data : " + data);

      //
      // Instanciación de un gráfico de tipo beignet
      //
      this.doughnutChart = new Chart(
      
        this.doughnutCanvas.nativeElement,
        {
          // Tipo del gráfico
          type: tipoGrafico,
          // Datos a representar
          data:
          {
            // Etiquetas
            etiquetas: [
              etiquetas[0],
              etiquetas[1],
              etiquetas[2],
              etiquetas[3],
              etiquetas[4],
              etiquetas[5]],
            // Datos
            datasets:
            [{
              // Etiqueta
              label: etiquetaGrafico, 
              // Datos
              data: [
                datos[0],
                datos[1],
                datos[2],
                datos[3],
                datos[4],
                datos[5]
              ],
              // Colores de fondo
              backgroundColor: [
                backgroundColor[0],
                backgroundColor[1],
                backgroundColor[2],
                backgroundColor[3],
                backgroundColor[4],
                backgroundColor[5]
              ],
              // Colores de los bordes
              borderColor: [
                borderColor[0],
                borderColor[1],
                borderColor[2],
                borderColor[3],
                borderColor[4],
                borderColor[5]
              ],
              // Anchura de los bordes
              borderWidth: 1
            }]
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

    });

  }  

}