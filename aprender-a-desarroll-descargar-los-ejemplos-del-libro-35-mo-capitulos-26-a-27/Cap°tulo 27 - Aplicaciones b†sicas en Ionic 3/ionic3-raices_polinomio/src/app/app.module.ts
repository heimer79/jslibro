// Importación de clases (sistema)
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Importación de clases (negocio)
import { MyApp } from './app.component';
import { HomePage} from '../pages/home/home';
import { Pagina2 } from '../pages/page2/page2';

// Decorador NgModule (indica las propiedades de la clase AppModule)
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pagina2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

// Exposición de la clase principal (AppModule)
export class AppModule {}