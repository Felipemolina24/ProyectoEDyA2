// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtKnYk_7Z5ehxQ15Tk6cWVH_g1lmoXCy0",
  authDomain: "proyectoedya2.firebaseapp.com",
  projectId: "proyectoedya2",
  storageBucket: "proyectoedya2.appspot.com",
  messagingSenderId: "910908123468",
  appId: "1:910908123468:web:ee7bf13d1d1d9303ba87e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);