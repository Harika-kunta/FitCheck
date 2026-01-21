import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
email= '';
  password= '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
  
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.errorMessage = 'invalid email or password'; 
      }
    });
  }
}
