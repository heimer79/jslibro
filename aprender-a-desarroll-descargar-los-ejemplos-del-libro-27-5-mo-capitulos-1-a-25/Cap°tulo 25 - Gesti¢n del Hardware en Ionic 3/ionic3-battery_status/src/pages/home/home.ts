// Importación de clases (sistema)
import { Component } from '@angular/core';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

// Decorador @Component
// Descripción de la página (componente Angular) :
// - selector = Página SCSS asociada al script TypeScript
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// Clase de la página HomePage
export class HomePage
{

  // Variables de la clase 
  private infoBateria : any;
  private nivelBateria: number;

  // Constructor de la clase 
  constructor(private batteryStatus: BatteryStatus) {}
  
  // Función ionViewDidLoad
  // Nota del autor: Se desencadena durante la carga de la vista
  ionViewDidLoad()
  {
    
    // Visualización de control en modo consola
    console.log('ionViewDidLoad BatteryStatus');
    
    // Inscripción de la información relativa a la batería
    this.infoBateria = this.batteryStatus.onChange().subscribe(
      (estadoBateria: BatteryStatusResponse) => {
        // Recuperación del nivel de la bateria
        this.nivelBateria = estadoBateria.level;
      }
    );
    
  }
  
  // Función ionViewWillLeave
  // Nota del autor: Se desencadena durante la salida de la vista
  ionViewWillLeave()
  {
    // Descripción de la información relativa a la bateria
    this.infoBateria.unsubscribe();
  }

}