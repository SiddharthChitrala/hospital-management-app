import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { AppointmentStatusComponent } from './patient/appointment-status/appointment-status.component';
import { DoctorListComponent } from './patient/doctor-list/doctor-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'patient', component: PatientComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'appointment', component: AppointmentStatusComponent },
    { path: 'doctor-list', component: DoctorListComponent }
];
