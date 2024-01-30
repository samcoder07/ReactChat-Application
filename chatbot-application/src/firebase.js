// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBnGXON3afJV0Q9e2hHaT6HDonvC7UKI-Y",
  authDomain: "messengerchatbot-app.firebaseapp.com",
  projectId: "messengerchatbot-app",
  storageBucket: "messengerchatbot-app.appspot.com",
  messagingSenderId: "391993372272",
  appId: "1:391993372272:web:27435412afc1540e934eb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage=getStorage();
export const db=getFirestore();