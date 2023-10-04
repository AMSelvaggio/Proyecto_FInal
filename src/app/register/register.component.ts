import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service/auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public username: string = '';
  public password: string = '';
  public message: string = '';

  constructor(private authService: AuthService) { }

  register(): void {
    if (!this.username || !this.password) {
      this.message = 'Por favor, complete ambos campos.';
      return;
    }
    const registered = this.authService.register(this.username, this.password);
    if (registered) {
      this.message = 'Registrado con éxito.';
    } else {
      this.message = 'Este nombre de usuario ya está en uso.';
    }
  }
}



