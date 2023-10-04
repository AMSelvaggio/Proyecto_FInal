import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthService) { }


  isLoggedIn(): boolean {
  
    return localStorage.getItem('user') ? true : false;
  }

  logout(): void {
    this.authService.logout();
  }
}

