import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Shell Home'
  },
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule('todo', './todo_routes').then((m)=> m.TODO_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('dashboard', './dashboard_routes').then((m)=> m.DASHBOARD_ROUTES)
  },
   {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule('admin', './admin_routes').then((m)=> m.ADMIN_ROUTES)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
