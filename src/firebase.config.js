import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXy74xW0uwu01M4X1K16BLeD7CovQGdA8',
  authDomain: 'entertainment-web-app-a8ed3.firebaseapp.com',
  projectId: 'entertainment-web-app-a8ed3',
  storageBucket: 'entertainment-web-app-a8ed3.appspot.com',
  messagingSenderId: '621077754929',
  appId: '1:621077754929:web:b48f2cf9c4a24c38419110',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
