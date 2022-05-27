// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYKisBtlCLJl0agjMgZuj0r7rmnJifQyQ",
  authDomain: "crypto-tracker-fef1f.firebaseapp.com",
  projectId: "crypto-tracker-fef1f",
  storageBucket: "crypto-tracker-fef1f.appspot.com",
  messagingSenderId: "790050810371",
  appId: "1:790050810371:web:147470581c563601f73c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
