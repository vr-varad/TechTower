// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzK7ueq-FK304571VB8QZtHlYWCnost_w",
  authDomain: "fir-course-6657d.firebaseapp.com",
  projectId: "fir-course-6657d",
  storageBucket: "fir-course-6657d.appspot.com",
  messagingSenderId: "74066038295",
  appId: "1:74066038295:web:904d7a4b314127a0f3d652",
  measurementId: "G-1HB900VJ6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)