import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {
  fullName: string = '';
  email: string = '';
  phoneNo: string = '';
  appointmentDate: string = '';
  appointmentTime: string = '';
  doctorSpecialization: string = '';
  doctorName: string = '';
  additionalMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {
  }
  submit() {
    const appointmentData = {
      fullName: this.fullName,
      email: this.email,
      phoneNo: this.phoneNo,
      appointmentDate: this.appointmentDate,
      appointmentTime: this.appointmentTime,
      doctorSpecialization: this.doctorSpecialization,
      doctorName: this.doctorName,
      additionalMessage: this.additionalMessage,
    };
    console.log(appointmentData);
    this.http.post('http://localhost:9000/details/submit', appointmentData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        alert("Data Saved Successfull");
        window.location.reload();
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  }
}
