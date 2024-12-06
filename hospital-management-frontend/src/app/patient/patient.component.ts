import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  activeIndex: number = -1;
  setActiveIndex(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  activeComponent: any = null;

  setActiveComponent(section: string) {
    switch (section) {
      case 'patient-dashboard':
        this.activeComponent = PatientDashboardComponent;
        break;
      case 'doctor-list':
        this.activeComponent = DoctorListComponent;
        break;
      case 'appointment-status':
        this.activeComponent = AppointmentStatusComponent;
        break;
      default:
        break;
    }
  }
  navigateTo(section: string) {
    this.setActiveComponent(section);
  }
}
