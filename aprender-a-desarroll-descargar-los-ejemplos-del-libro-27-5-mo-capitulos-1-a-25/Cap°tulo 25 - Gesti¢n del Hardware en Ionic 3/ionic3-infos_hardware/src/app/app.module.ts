// Importación de clases (sistema)
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Device } from '@ionic-native/device';

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
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

// Exposición de la clase principal (AppModule)
export class AppModule {}