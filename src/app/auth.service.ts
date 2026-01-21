import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   
private loggedIn = false;

  // Login method: call backend API
  login(email: string, password: string): Observable<any> {
    if (email === 'user@gmail.com' && password === '123456') {
    this.loggedIn = true;
      return of({ token: 'fake-jwt-token' });
  } else {
    return throwError(() => new Error('Invalid credentials'));
  }
 
}
 isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }

  register(email: string, password: string): Observable<any> {
  
  if (email && password) {
    return of({ message: 'User registered successfully' });
  } else {
    return throwError(() => new Error('Invalid registration data'));
  }
}

}