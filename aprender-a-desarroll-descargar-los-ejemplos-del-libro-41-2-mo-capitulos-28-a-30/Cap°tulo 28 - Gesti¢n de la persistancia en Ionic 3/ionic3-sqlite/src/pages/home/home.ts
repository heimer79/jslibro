// Importación de clases (sistema)
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

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
  // Nota del autor: Clase que hereda de las superclases :
  //      - NavController : Administrador de navegación entre páginas
  //      - SQLite : Administrador de BDD SQLite 
  constructor(public navCtrl: NavController, private sqlite: SQLite) {}

  // Variables de la clase 
  identificador = "";
  listaIdentificadores = [];
  
  // Función guardarIdentificador
  // Nota del autor: Guarda el identificador en la BDD SQLite
  guardarIdentificador() {

    // Creación de la BDD SQLite
    this.sqlite.create({
      // Nombre de la BDD SQLite
      name: "ma_bdd.db",
      // Localización por defecto de la BDD SQLite 
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      
      // Creación de la BDD SQLite data.db
      db.executeSql("CREATE TABLE IF NOT EXISTS tabla_identificadores(id INTEGER PRIMARY KEY AUTOINCREMENT, identificador)")
      .then(() => alert("Creación (o detección) de la BDD data.db : Éxito"))
      .catch(e => console.log(e));
    
      // Inserción de un username en la BDD SQLite
      db.executeSql("INSERT INTO tabla_identificadores(identificador) VALUES( ?)", [this.identificador])
      .then(() => alert("Inserción " + [this.identificador] + " en la tabla SQLite tabla_identificadores : Éxito"))
      .catch(e => console.log(e));

      // Lista de las registros de la tabla SQLite tabla_identificadores
      db.executeSql("SELECT * FROM tabla_identificadores", this.newMethod()).then((data) => {
        
        // Visualizaciones de control (alert)
        alert("Número de identificador(s) : " + data.rows.length);
        alert("Identificador n°1 : "+ data.rows.item(1).identificador);

        // Iniciaización de la tabla lista_identificadores
        this.listaIdentificadores = [];

        // Rellenar la la tabla lista_identificadores
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
            // Visualización de control (alert)
            alert(data.rows.item(i).identificador);
            // Inserción en la tabla
            this.listaIdentificadores.push({identificador: data.rows.item(i).identificador});
          }
        }
      }, (err) => {
        // Visualización de control (alert)
        alert("Fallo de ejecución SQL : " + JSON.stringify(err));
      });
    })
    // Mensaje de erreur
    .catch(e => alert(JSON.stringify(e)));

  }


  private newMethod_1(): any[] {
    return {};
  }

  private newMethod(): any[] {
    return {};
  }
}