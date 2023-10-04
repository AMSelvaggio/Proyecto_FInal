import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { Frase } from '../interface/parent.interface';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent  implements OnInit {
 
  @Input() frases: Frase[]=[];

  @Input() titulo: string ="";

  @Output() listEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

  ngOnInit(): void {
    const lista = [
      'Dieta estandar 30 euros: Son dietas con menus prefabricados.',
      'Dieta cualitativa personalizada 50 euros. No se cuenta el peso de los alimentos. Medidas caseras',
      'Dieta cuantitativa 80. Se controla el peso de lo que se ingiere.'
    ];
    this.listEmitter.emit(lista);
console.log(this.frases)
 }


 
  
  // @Input() arrayAcordion: Titulo = { titulo: "" };
}
