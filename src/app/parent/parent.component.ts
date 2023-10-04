import { Component } from '@angular/core';
import { Titulo, Frase } from '../interface/parent.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 
  frases: Frase[] = [ 
    {item:"Pollo a la plancha" },
    {item:"Dorada a la papiyote"},
    {item: "Bistec de ternera"},
    {item: "Macarrones con queso"},
    {item: "Ensalda naranja"},
    {item: "Ensalada de garbanzos"}
  ] 
 
 
  public title: Titulo = { titulo: 'Datos del profesional' };

  listaRecibida: string[] = [];

  handleList(list: string[]): void {
    this.listaRecibida = list;
  }
 
  // public title: Titulo = {
   // titulo: 'Datos del profesional'
  //};
}
