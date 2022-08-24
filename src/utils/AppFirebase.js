import {getFirestore,collection, getDocs}from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDVXnXmbr1X1sTHlKKnTQ3wsl1aPRlHrw",
  authDomain: "buy-app-coder.firebaseapp.com",
  projectId: "buy-app-coder",
  storageBucket: "buy-app-coder.appspot.com",
  messagingSenderId: "347174437209",
  appId: "1:347174437209:web:96088214dfd92d2da50c48"
};
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   //selecciono la bdd
   export const DB=getFirestore(app);