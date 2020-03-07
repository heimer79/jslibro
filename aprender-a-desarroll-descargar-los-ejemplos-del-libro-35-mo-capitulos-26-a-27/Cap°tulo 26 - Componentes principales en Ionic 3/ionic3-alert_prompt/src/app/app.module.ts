// Importación de clases (sistema)
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Importación de clases (negocio)
import { MyApp } from './app.component';
import { HomePage} from '../pages/home/home';

// Decorador NgModule (indica las propiedades de la clase AppModule)
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

// Exposición de la clase principal (AppModule)
export class AppModule {}