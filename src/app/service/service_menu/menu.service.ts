import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus = [
    {
      name:"almuerzo1",
      horario:"almuerzo",
      vegetariano: true,
      contenido: `<p> Una taza de café. <br>
      una tostada con mermelada al gusto. <br>
      una naranja. </p>`    
  },
  
  {
      name:"almuerzo2",
      horario:"almuerzo",
      vegetariano: true,
      contenido:  `<p> Una taza de té. <br>
      Una tostada con mermelada al gusto. <br>
      Una manzana. </p>`    
  },
  
  {
      name:"almuerzo3",
      horario:"almuerzo",
      vegetariano: true,
      contenido:` <p> Una taza de té <br>
      Una tostada con mermelada al gusto. <br>
      Dos mandarinas. </p>`
      
  },
  
  {
      name:"comida1",
      horario:"comida",
      vegetariano: false,
      contenido: `<p> Bistec de ternera. <br>
      Ensalada verde. <br>
      un iogurt. </p>`
      
  },
  
  {
      name:"comida2",
      horario:"comida",
      vegetariano: true,
      contenido: `<p> Macarrones con queso. <br>
      Ensalada naranja. <br>
      un iogurt. </p>`
      
  },
  
  
  {
      name:"comida3",
      horario:"comida",
      vegetariano: true,
      contenido: `<p> Ensalda de garbanzos. <br>
      Un iogurt. <br>
      un platano. </p>`
      
  },
  
  
  {
      name:"cena1",
      horario:"cena",
      vegetariano: false,
      contenido: `<p> Dorada a la papiyote. <br>
      Un iogurt. <br>`
     } ,
    { name:"cena2",
      horario:"cena",
      vegetariano: true,
      "contenido": `<p> Caldo de verduras. <br>
      Un puñado de frutos secos. <br>
      Dos mandarinas`
      }  ,
  
  {name:"cena3",
      horario:"cena",
      vegetariano: false,
      contenido: `<p> Pechuga de pollo a la plancha. <br>
      Un iogurt. <br>`}
   
  ];

  constructor() { }

  getMenus(): any[] {
    return this.menus;
  }

  getRandomMenu(): any {
    const randomIndex = Math.floor(Math.random() * this.menus.length);
    return this.menus[randomIndex];
  }

  getVegetarianMenus(): any[] {
    return this.menus.filter(menu => menu.vegetariano === true);
  }
}
