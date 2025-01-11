// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxHgnZukkx2lEEVpfpyLWJTl17OQjm9cE",
  authDomain: "damproject-51d48.firebaseapp.com",
  projectId: "damproject-51d48",
  storageBucket: "damproject-51d48.firebasestorage.app",
  messagingSenderId: "131465808520",
  appId: "1:131465808520:web:a1ab7a3d152393e1262d3d",
  measurementId: "G-9K42LQHD6W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth