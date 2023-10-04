import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlatosService } from '../service/platos_service/platos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formulario!: FormGroup;

  constructor(private platosService: PlatosService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      horario: new FormControl(),
      vegetariano: new FormControl(),
      descripcion: new FormControl(),
    });
  }

  ngOnInit(): void { }

  async submit() {
    console.log(this.formulario.value);
    const respuesta = await this.platosService.addDish(this.formulario.value);
    console.log(respuesta);
  }
}