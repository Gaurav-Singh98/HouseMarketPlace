// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFLDETYKZ_egs2lN7mciSStFe4V9jnCT8",
  authDomain: "house-marketplace-app-890d3.firebaseapp.com",
  projectId: "house-marketplace-app-890d3",
  storageBucket: "house-marketplace-app-890d3.appspot.com",
  messagingSenderId: "921444592365",
  appId: "1:921444592365:web:592f39581a7e40b481fae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()