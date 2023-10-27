// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5UzvgmgMMIQSKQmiRzoFADztnWARXzng",
    authDomain: "pokedex-2717d.firebaseapp.com",
    projectId: "pokedex-2717d",
    storageBucket: "pokedex-2717d.appspot.com",
    messagingSenderId: "413181388966",
    appId: "1:413181388966:web:c7ca7b5f073ee67c1e6c67",
    measurementId: "G-EV1C35E3VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection (firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");