import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service/auth.service'; 
import { PlatosService } from '../service/platos_service/platos.service';
import { Menu } from 'src/app/interface/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: any = {
    contenido: ''
  };
  isLoggedIn = false;
  menus: Menu[] = [];

  constructor(
    private router: Router, 
    private authService: AuthService,
    private platosService: PlatosService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.platosService.getDish().subscribe(data => {
      this.menus = data;
    });
  }

 

 

  onlyVegetarian = false;

  generateRandomMenu(): void {
    let availableAlmuerzos = this.menus.filter(menu => menu.horario === 'almuerzo');
    let availableComidas = this.menus.filter(menu => menu.horario === 'comida');
    let availableCenas = this.menus.filter(menu => menu.horario === 'cena');

    if (this.onlyVegetarian) {
      availableAlmuerzos = availableAlmuerzos.filter(menu => menu.vegetariano);
      availableComidas = availableComidas.filter(menu => menu.vegetariano);
      availableCenas = availableCenas.filter(menu => menu.vegetariano);
    }

    const randomAlmuerzo = availableAlmuerzos[Math.floor(Math.random() * availableAlmuerzos.length)];
    const randomComida = availableComidas[Math.floor(Math.random() * availableComidas.length)];
    const randomCena = availableCenas[Math.floor(Math.random() * availableCenas.length)];

    this.menu.contenido = `
      <h3>Almuerzo</h3>
      ${randomAlmuerzo.name}
      <h3>Comida</h3>
      ${randomComida.name}
      <h3>Cena</h3>
      ${randomCena.name}
    `;
  }
}
