import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { auth } from '../../src/firebaseconfig/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  auth = auth;
  title = 'firebaseui-auth-thirparty';
  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      console.log('en el app', user?.uid);
    });
  }
}
