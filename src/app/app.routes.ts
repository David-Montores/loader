import { Routes } from '@angular/router';
import { PostLoadingComponent } from './post-loading/post-loading.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'post-loading',
    loadComponent: () => import('./post-loading/post-loading.component').then((m) => m.PostLoadingComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
