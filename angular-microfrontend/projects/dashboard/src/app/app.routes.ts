import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Dashboard Home'
  }
];
