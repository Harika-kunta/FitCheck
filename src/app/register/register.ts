import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

  
    this.authService.register(this.email, this.password).subscribe({
      next: () => {
        this.successMessage = 'Registration successful! Please login.';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err:any) => {
        this.errorMessage = 'Registration failed: ' + err.message;
      }
    });
  }
}
