import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc,collectionData, doc, deleteDoc,updateDoc } from '@angular/fire/firestore';
import { Menu } from 'src/app/interface/menu.interface';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  constructor(private firestore: Firestore) {}

  addDish(plato: Menu) {
    const placeRef = collection(this.firestore, 'dishes');
    return addDoc(placeRef, plato);
  }

  getDish(): Observable<Menu[]> {
    const placeRef = collection(this.firestore, 'dishes');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Menu[]>;
  }

  deleteDish(dish: Menu) {
    const dishDocRef = doc(this.firestore, `dishes/${dish.id}`);
    return deleteDoc(dishDocRef);
  }

  updateDish(dish: Menu, id: string) {
    const dishRef = doc(this.firestore, `dishes/${id}`);
    return updateDoc(dishRef, {
        name: dish.name,
        descripcion: dish.descripcion,
        horario: dish.horario,
        vegetariano: dish.vegetariano
    });


}

}
