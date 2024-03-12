import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Admin App Home Page'
  }
];
