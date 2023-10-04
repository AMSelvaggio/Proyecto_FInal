import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service/auth.service'; 


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {



  constructor(private authService: AuthService, private router: Router) {}

  navigateToParent(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dietista']);
    } else {
      this.router.navigate(['/login']);
    }
}
navigateToForm(): void {
  if (this.authService.isAuthenticated()) {
    this.router.navigate(['/formulario']); 
  } else {
    this.router.navigate(['/login']);
  }
}
}


