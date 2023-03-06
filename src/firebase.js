// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {
  getAuth,
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCi4MyX7qfkfDKI7piLP4pwCjETQpDABiI",

  authDomain: "gambit-8483b.firebaseapp.com",

  projectId: "gambit-8483b",

  storageBucket: "gambit-8483b.appspot.com",

  messagingSenderId: "607415873956",

  appId: "1:607415873956:web:1da67449e2211d48c21131",

  measurementId: "G-E9NEG3113L"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;