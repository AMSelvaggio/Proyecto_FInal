import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USERS_KEY = 'users'; 

  constructor() { }

  register(username: string, password: string): boolean {
    
    const users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');

    
    if (users.some((user: any) => user.username === username)) {
      return false; 
    }

    
    users.push({ username, password });

    
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

    return true; 
  }

  login(username: string, password: string): boolean {
    
    const users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');

    
    if (users.some((user: any) => user.username === username && user.password === password)) {
      sessionStorage.setItem('isLogged', 'true');
      return true; 
    }

    return false;
  }

  logout(): void {
    sessionStorage.removeItem('isLogged');
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('isLogged') === 'true';
  }
}
