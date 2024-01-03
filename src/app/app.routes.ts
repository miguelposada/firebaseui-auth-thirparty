import { Routes, mapToCanActivate } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard'; // Importa el guardia de ruta
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'home',
    component: HomeComponent, // Reemplaza 'HomeComponent' con el componente principal ('home')
    canActivate: [AuthGuard], // Utiliza el guardia de ruta para proteger esta ruta
  },
];
