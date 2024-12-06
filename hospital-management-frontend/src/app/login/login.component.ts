import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';

interface ApiResponse {
  message: string;
  role: number;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin: boolean = true;
  username: string = '';
  email: string = '';
  password: string = '';
  role: number = 0;
  constructor(private http: HttpClient, private router: Router) {
  }
  toggleForm() {
    this.isLogin = !this.isLogin;
  }
  register(): void {
    this.http.post<ApiResponse>('http://localhost:9000/register', {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    }).subscribe(
      (response: ApiResponse) => {
        console.log(response.message);
        if (response.role === 0) {
          this.router.navigate(['patient']);
          location.reload();
        } else if (response.role === 1) {
          this.router.navigate(['doctor']);
          location.reload();
        }
        else if (response.role === 2) {
          this.router.navigate(['admin']);
          location.reload();
        }
        this.username = '';
        this.email = '';
        this.password = '';
        this.role = 0;
      }
    );
  }


  login(): void {
    this.http.post<ApiResponse>('http://localhost:9000/login', {
      email: this.email,
      password: this.password
    }).subscribe(
      (response: ApiResponse) => {
        console.log('API Response:', response); // Debugging line
        console.log(response.message);
        console.log('User role:', response.role);

        if (typeof response.role === 'number') {
          if (response.role === 0) {
            this.router.navigate(['patient']);
          } else if (response.role === 1) {
            this.router.navigate(['doctor']);
          }
          else if (response.role === 2) {
            this.router.navigate(['admin']);
          }
          else {
            console.error('Invalid role:', response.role);
          }
        } else {
          console.error('Invalid role data:', response.role);
        }
      }
    );
  }
}
