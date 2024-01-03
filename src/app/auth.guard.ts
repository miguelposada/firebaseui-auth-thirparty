import { CanActivateFn, Router } from '@angular/router';
import { auth } from '../firebaseconfig/firebase-config'; // Importa el servicio auth
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    return new Promise<boolean>((resolve) => {
      // Utiliza el servicio 'auth' para verificar el estado de autenticación
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user.displayName);

          // Si existe información del usuario, permitir la navegación
          resolve(true);
        } else {
          // Si no hay información del usuario, redirige al componente de autenticación ('auth')
          this.router.navigate(['/auth']);
          resolve(false);
        }
      });
    });
  };
}
