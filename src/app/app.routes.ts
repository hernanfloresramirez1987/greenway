import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadComponent: () => import('./core/pages/home/home.component') },
    { path: 'services', loadComponent: () => import('./core/pages/services/services.component') },
    { path: 'como-funciona', loadComponent: () => import('./core/pages/como-funciona/como-funciona.component') }
];
