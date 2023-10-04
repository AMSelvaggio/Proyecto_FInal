import { Component, OnInit} from '@angular/core';
import { PlatosService } from '../service/platos_service/platos.service';
import { Menu } from '../interface/menu.interface';

@Component({
  selector: 'app-lista-platos',
  templateUrl: './lista-platos.component.html',
  styleUrls: ['./lista-platos.component.css']
})
export class ListaPlatosComponent implements OnInit {
  platos: Menu[];
  selectedDish: Menu | null = null;

  constructor(private platosService: PlatosService) {
   
    this.platos = [];
  }

  ngOnInit(): void {
    this.platosService.getDish().subscribe(dishes => {
      console.log(dishes);
      this.platos = dishes;
    });
  }

  async borrarPlato(dish: Menu) {
    const respuesta = await this.platosService.deleteDish(dish);
    console.log(respuesta);
  }


  async actualizarPlato(dish: Menu) {
    const id = dish.id; 
    try {
      await this.platosService.updateDish(dish, id!);
      console.log('Plato actualizado con éxito.');
    } catch (error) {
      console.error('Hubo un error al actualizar el plato:', error);
    }
  }

  
  openUpdatePanel(dish: Menu) {
    this.selectedDish = { ...dish }; // Copia del plato para no mutar el original
  }

  async saveUpdatedDish() {
    if (this.selectedDish && this.selectedDish.id) {
      await this.actualizarPlato(this.selectedDish);
      this.selectedDish = null; // Cerrar el panel después de guardar
    }
  }

  cancelUpdate() {
    this.selectedDish = null; // Cerrar el panel
  }
}


