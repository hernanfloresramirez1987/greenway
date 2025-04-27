import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'homr', loadComponent: () => import('./core/pages/components/home/home.component') },
    { path: '**', loadComponent: () => import('./core/pages/shared/error404/error404.component') }
];
