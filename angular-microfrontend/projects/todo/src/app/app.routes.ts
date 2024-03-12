import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'TODO Home'
  }
];
