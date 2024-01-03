// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { provideAuth, getAuth as getAuthAngularFire } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB14eQI_uy727g5tDOmlP-AiBekNbkTjEg',
  authDomain: 'crested-trilogy-408519.firebaseapp.com',
  projectId: 'crested-trilogy-408519',
  storageBucket: 'crested-trilogy-408519.appspot.com',
  messagingSenderId: '244846588805',
  appId: '1:244846588805:web:c8e0d83035e8fc6e214aec',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

provideFirebaseApp(() => getApp(app.name));
provideAuth(() => getAuthAngularFire(app));

export const auth = getAuth(app);
