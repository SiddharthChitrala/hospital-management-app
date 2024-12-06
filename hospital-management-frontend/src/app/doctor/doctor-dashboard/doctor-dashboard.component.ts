import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent {

  doctorName: string = '';
  specialization: string = '';
  date: string = '';
  time: string = '';
  email: string = '';
  phoneNumber: string = '';
  stayFromTime: string = '';
  stayToTime: string = '';

  constructor(private http: HttpClient) {} 

  submit() {
    const formData = {
      doctorName: this.doctorName,
      specialization: this.specialization,
      date: this.date,
      time: this.time,
      email: this.email,
      phoneNumber: this.phoneNumber,
      stayFromTime: this.stayFromTime,
      stayToTime: this.stayToTime
    };
    console.log('Form Data:', formData);
    this.http.post('http://localhost:9000/data/submit', formData)
      .subscribe(
        (response: any) => { 
          console.log('Data saved successfully:', response);
          alert("Data Saved Successfully");
          window.location.reload();
        },
        (error: any) => {
          console.error('Error saving data:', error);
        }
      );
  }
}
