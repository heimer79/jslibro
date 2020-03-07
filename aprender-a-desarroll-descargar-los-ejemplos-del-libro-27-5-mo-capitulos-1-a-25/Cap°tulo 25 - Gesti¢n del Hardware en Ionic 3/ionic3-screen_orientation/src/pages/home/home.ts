// Importación de clases (sistema)
import {Component} from '@angular/core';
import {ScreenOrientation} from "@ionic-native/screen-orientation";

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

  //
  // Variables de la clase 
  //
  // Orientation de la pantalla
  private screenOrientation: ScreenOrientation;

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - ScreenOrientation : Gestión de la orientación de la pantalla
  constructor(screenOrientation: ScreenOrientation)
  {
    // Memorización de la orientación de la pantalla
    this.screenOrientation = screenOrientation;
  }

  // Función bloquearPaisaje
  // Nota del autor: Bloquea la orientación en modo Paisaje
  bloquearPaisaje()
  {
    // Visualización de un mensaje de control en forma de alerta
    alert("Bloquea la orientación en modo Paisaje");
    // Bloquea la orientación en modo Paisaje
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.LANDSCAPE
    );
  }

  // Función bloqueRetrato
  // Nota del autor: Bloquea la orientación en modo Retrato
  bloqueRetrato()
  {
    // Visualización de un mensaje de control en forma de alerta
    alert("Bloquea la orientación en modo Retrato");
    // Bloquea la orientación en modo Retrato
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT
    );
  }

  // Función desbloquear
  // Nota del autor: Desbloquea del cambio de orientation de la pantalla
  desbloquear()
  {
    // Visualización de un mensaje de control en forma de alerta
    alert("Cambio de orientation de la pantalla desbloqueada");
    // Desbloquea del cambio de orientation de la pantalla
    this.screenOrientation.unlock();
  }

  // Función buscarOrientacion
  // Nota del autor: Determinación de la orientación actual de la pantalla
  buscarOrientacion()
  {
    // Visualización de un mensaje de control en forma de alerta
    alert("Orientation actual de la pantalla : "
    + this.screenOrientation.type);
  }

}