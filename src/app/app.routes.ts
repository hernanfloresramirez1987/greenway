import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'v1', pathMatch: 'full', redirectTo: 'home' },
    { path: 'v1/home', loadComponent: () => import('./core/pages/home/home.component') },
    { path: 'v1/services', loadComponent: () => import('./core/pages/servicios/services.component') },
    { path: 'v1/como-funciona', loadComponent: () => import('./core/pages/como-funciona/como-funciona.component') },
    { path: 'v1/contactos', loadComponent: () => import('./core/pages/contactos/contactos.component') },
    { path: '**', pathMatch: 'full', loadComponent: () => import('./core/pages/not-found/not-found.component') }
];
