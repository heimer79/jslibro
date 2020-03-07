// Importación de clases (sistema)
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

// Decorador @Component
// Descripción de la página (componente Angular) :
// - templateUrl = Página HTML asociada al script TypeScript
@Component({
  templateUrl: 'home.html'
})

// Clase de la página HomePage
export class HomePage{

  // Constructor de la clase 
  // Nota del autor: Clase que hereda de una o de varias superclases :
  //      - AlertController : Gestión de ventana de alerta
  constructor(public alertController: AlertController) {}
  
  // Lista de países
  listaPais = [
    // Uruguay
    { 
      nombre_pais: "Uruguay",
      grupo: "A",
      apodo: "La celeste",
      seleccionador: "Oscar Tavarez",
      bandera: "assets/img/Uruguay.png"
    },
    // Rusia
    {
      nombre_pais: "Rusia",
      grupo: "A",
      apodo: "Sbornaïa",
      seleccionador: "Stanislav Cherchesov",
      bandera: "assets/img/Rusia.png"
    },
    // Arabia Saudita
    {
      nombre_pais: "Arabia Saudita",
      grupo: "A",
      apodo: "Los halcones",
      seleccionador: "Juan Antonio Pizzi",
      bandera: "assets/img/Arabia Saudita.png"
    },
    // Egipto
    {
      nombre_pais: "Egipto",
      grupo: "A",
      apodo: "Los faraones",
      seleccionador: "Hector Cuper",
      bandera: "assets/img/Egipto.png"
    },
    // España    
    {
      nombre_pais: "España",
      grupo: "B",
      apodo: "La roja",
      seleccionador: "Fernando Hierro",
      bandera: "assets/img/España.png"
    },
    // Portugal
    {
      nombre_pais: "Portugal",
      grupo: "B",
      apodo: "Seleção das Quinas",
      seleccionador: "Fernando Santos",
      bandera: "assets/img/Portugal.png"
    },
    // Irán
    {
      nombre_pais: "Irán",
      grupo: "B",
      apodo: "Shirants Perse",
      seleccionador: "Carlos Queiroz",
      bandera: "assets/img/Irán.png"
    },
    // Marruecos
    {
      nombre_pais: "Marruecos",
      grupo: "B",
      apodo: "Los leones del Atlas",
      seleccionador: "Hervé Renard",
      bandera: "assets/img/Marruecos.png"
    },
    // Francia
    {
      nombre_pais: "Francia",
      grupo: "C",
      apodo: "Les bleus",
      seleccionador: "Didier Descampos",
      bandera: "assets/img/Francia.png"
    },
    // Dinamarca
    {
      nombre_pais: "Dinamarca",
      grupo: "C",
      apodo: "Danisk Dynamite",
      seleccionador: "Age Hareide",
      bandera: "assets/img/Dinamarca.png"
    },
    // Perú
    {
      nombre_pais: "Perú",
      grupo: "C",
      apodo: "La blanqui roja",
      seleccionador: "Ricardo Gareca",
      bandera: "assets/img/Perú.png"
    },
    // Australia
    {
      nombre_pais: "Australia",
      grupo: "C",
      apodo: "Les soceroos",
      seleccionador: "Bert van Marwijk",
      bandera: "assets/img/Australia.png"
    },
    // Croacia
    {
      nombre_pais: "Croacia",
      grupo: "D",
      apodo: "Vatreni",
      seleccionador: "Zlatko Dalic", 
      bandera: "assets/img/Croacia.png"
    },
    // Argentina
    {
      nombre_pais: "Argentina",
      grupo: "D",
      apodo: "La albiceleste",
      seleccionador: "Jorge Sampaoli",
      bandera: "assets/img/Argentina.png"
    },
    // Nigeria
    {
      nombre_pais: "Nigeria",
      grupo: "D",
      apodo: "Super eagles",
      seleccionador: "Gernot Rohr",
      bandera: "assets/img/Nigeria.png"
    },
    // Islandia
    {
      nombre_pais: "Islandia",
      grupo: "D",
      apodo: "Strakarnir okkar",
      seleccionador: "Helmir Hallgrimsson",
      bandera: "assets/img/Islandia.png"
    },
    // Brasil
    {
      nombre_pais: "Brasil",
      grupo: "E",
      apodo: "Auriverdes",
      seleccionador: "Tite",
      bandera: "assets/img/Brasil.png"
    },
    // Suiza
    {
      nombre_pais: "Suiza",
      grupo: "E",
      apodo: "La nati",
      seleccionador: "Vladimir Petkovic",
      bandera: "assets/img/Suiza.png"
    },
    // Serbia
    {
      nombre_pais: "Serbia",
      grupo: "E",
      apodo: "Les aigles blancs",
      seleccionador: "Mladen Krstajic", 
      bandera: "assets/img/Serbia.png"
    },
    // Costa Rica
    {
      nombre_pais: "Costa Rica",
      grupo: "E",
      apodo: "Los ticos",
      seleccionador: "Oscar Ramírez",
      bandera: "assets/img/Costa Rica.png"
    },
    // Suecia
    {
      nombre_pais: "Suecia",
      grupo: "F",
      apodo: "Los azules y amarillos (Blagult)",
      seleccionador: "Janne Andersson",
      bandera: "assets/img/Suecia.png"
    },
    // Méjico
    {
      nombre_pais: "Méjico",
      grupo: "F",
      apodo: "El tri",
      seleccionador: "Juan Osorio",
      bandera: "assets/img/Méjico.png"
    },
    // Corea del Sur
    {
      nombre_pais: "Corea del Sur",
      grupo: "F",
      apodo: "Taegeuk jeaonsa (los guerrilleros Taegeuk)",
      seleccionador: "Shin Tae-Young",
      bandera: "assets/img/Corea del Sur.png"
    },
    // Alemania
    {
      nombre_pais: "Alemania",
      grupo: "F",
      apodo: "Die National Mannschaft",
      seleccionador: "Joachim Löw",
      bandera: "assets/img/Alemania.png"
    },
    // Bélgica
    {
      nombre_pais: "Bélgica",
      grupo: "G",
      apodo: "Los diablos rojos",
      seleccionador: "Roberto Martínez",
      bandera: "assets/img/Bélgica.png"
    },
    // Inglaterra
    {
      nombre_pais: "Inglaterra",
      grupo: "G",
      apodo: "Los tres leones",
      seleccionador: "Gareth Southgate",
      bandera: "assets/img/Inglaterra.png"
    },
    // Túnez
    {
      nombre_pais: "Túnez",
      grupo: "G",
      apodo: "Les aigles de Carthage",
      seleccionador: "Nabil Maâloul",
      bandera: "assets/img/Túnez.png"
    },
    // Panama
    {
      nombre_pais: "Panama",
      grupo: "G",
      apodo: "El huracán azul",
      seleccionador: "Hernán Gómez",
      bandera: "assets/img/Panama.png"
    },
    // Colombia
    {
      nombre_pais: "Colombia",
      grupo: "H",
      apodo: "Los cafeteros",
      seleccionador: "Jose Peckerman",
      bandera: "assets/img/Colombia.png"
    },
    // Japón
    {
      nombre_pais: "Japón",
      grupo: "H",
      apodo: "Los samouraïs azules",
      seleccionador: "Akira Nishino",
      bandera: "assets/img/Japón.png"
    },
    // Senegal
    {
      nombre_pais: "Senegal",
      grupo: "H",
      apodo: "Los leones",
      seleccionador: "Aliou Cissé",
      bandera: "assets/img/Senegal.png"
    },
    // Polonia
    {
      nombre_pais: "Polonia",
      grupo: "H",
      apodo: "Los blancos y rojos",
      seleccionador: "Adam Nawalka",
      bandera: "assets/img/Polonia.png"
    }    
  ];

  // Función de visualización del nombre del país seleccionado
  mostrarNombrePais(nombre_pais: string) {
    
    // Instanciación de la ventana de alerta
    let alert = this.alertController.create({
      // Título de la alerta
      title: "País seleccionado",
      // Mensaje de la alerta
      message: nombre_pais,
      // Botones de la ventana de alerta
      buttons: [
        {
          text: "Cerrar"
        }
      ]
    });
    
    // Visualización de la alerta
    alert.present()

  }

  // Función de visualización de la ficha detallada del país seleccionado
  VerDetallePais(nombre_pais: string, grupo: string, apodo: string, seleccionador: string) {
    
    // Instanciación de la ventana de alerta
    let alert = this.alertController.create({
      // Título de la alerta
      title: "Detalles del país",
      // Mensaje de la alerta
      message: "País : " + nombre_pais + "<br/>" + "Grupo : " + grupo + "<br/>" + "Apodo : " + apodo + "<br/>" + "Seleccionador : "+ seleccionador,      
      // Botones de la ventana de alerta
      buttons: [
        {
          text: "Cerrar"
        }
      ]
    });
    
    // Visualización de la alerta
    alert.present()

  }

  // Función de eliminación de la ficha del país seleccionado
  eliminarFichaPais(nombre_pais: string) {
    
    // Instanciación de la ventana de alerta
    let alert = this.alertController.create({
      // Título de la alerta
      title: "Eliminación",
      // Mensaje de la alerta
      message: "Eliminación imposible",
      // Botones de la ventana de alerta
      buttons: [
        {
          text: "Cerrar"
        }
      ]
    });
    
    // Visualización de la alerta
    alert.present()

  }

  // Función de modification de la ficha del país seleccionado
  modificarFichaPais(nombre_pais: string) {
    
    // Instanciación de la ventana de alerta
    let alert = this.alertController.create({
      // Título de la alerta
      title: "Modificación",
      // Mensaje de la alerta
      message: "Modificación imposible",
      // Botones de la ventana de alerta
      buttons: [
        {
          text: "Cerrar"
        }
      ]
    });
    
    // Visualización de la alerta
    alert.present()

  }

}