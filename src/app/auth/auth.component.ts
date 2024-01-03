import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from '../../../src/firebaseconfig/firebase-config';
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private router: Router) {}

  providerGoogle = new GoogleAuthProvider();
  providerFacebook = new FacebookAuthProvider();
  uid = '';
  auth = auth;

  ngOnInit(): void {
    this.instantiateGlobalUser();
  }
  instantiateGlobalUser() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        this.uid = user.uid;
        console.log('User uid', user);

        // ...
      } else {
        console.log('User is not loged!', user);

        // User is signed out
        // ...
      }
    });
  }
  loginWithGoogle() {
    console.log('google uid', this.uid);

    signInWithPopup(this.auth, this.providerGoogle)
      .then((result) => {
        // Acción después de la autenticación exitosa con Google
        console.log('Google', result.user);
      })
      .catch((error) => {
        // Manejo de errores
        console.error(error);
      });
  }

  loginWithFacebook() {
    console.log('face uid', this.uid);

    signInWithPopup(this.auth, this.providerFacebook)
      .then((result) => {
        // Aquí puedes acceder al resultado de la autenticación exitosa
        console.log('Face', result.user);
      })
      .catch((error) => {
        // Manejo de errores
        console.error(error);
      });
  }

  async logout() {
    try {
      console.log('signOut uid', this.uid);

      await signOut(this.auth);
      console.log('User Signed Out Successfully!');
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }
}
