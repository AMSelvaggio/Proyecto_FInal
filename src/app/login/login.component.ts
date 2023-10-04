import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';
  public message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const loggedIn = this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.message = 'Inicio de sesión exitoso.';
      this.router.navigate(['/welcome'])
      
    } else {
      this.message = 'Usuario o contraseña incorrectos.';
    }
  }
}
