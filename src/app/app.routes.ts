import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadComponent: () => import('./core/pages/home/home.component') },
    { path: '**', loadComponent: () => import('./core/pages___/shared/error404/error404.component') }
];
