// Importación de clases (sistema)
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// Importación de clases (negocio)
import { HomePage} from '../pages/home/home';

// Decorador @Component
// Descripción de la aplicación (componente Angular) :
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  templateUrl: 'app.html'
})

// Clase de la aplicación (MyApp)
export class MyApp {
  
  // Página de lanzamiento de la aplicación
  rootPage= HomePage;

  // Constructor de la clase 
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}