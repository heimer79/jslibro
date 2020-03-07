// Importación de clases (sistema)
import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';

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
  private id: string;
  private modelo: string;
  private cordova: string;
  private plataforma: string;
  private version: string;
  private fabricante: string;
  private numeroSerie: string;
  private modoEmulacion: boolean;

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - Device : Gestión del hardware del periférico
  constructor(private device: Device) {}

  // Función recupInfos
  // Nota del autor: Recuperación de las características del periférico
  recupInfos()
  {

    // identificador del periférico
    this.id = this.device.uuid;
    // Modelo
    this.modelo = this.device.model;
    // Información de Cordova
    this.cordova = this.device.cordova;
    // Información de la plataforma
    this.plataforma = this.device.platform;
    // Versión
    this.version = this.device.version;
    // Fabricante
    this.fabricante = this.device.manufacturer;
    // Número de serie
    this.numeroSerie = this.device.serial;
    // Aparato virtual o no
    this.modoEmulacion = this.device.isVirtual;

  }

}