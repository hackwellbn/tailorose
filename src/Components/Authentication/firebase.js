// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAurR5grl0yZE5F1l-teo0X2xeo46Fnxio",
  authDomain: "softnet-9f5e0.firebaseapp.com",
  projectId: "softnet-9f5e0",
  storageBucket: "softnet-9f5e0.appspot.com",
  messagingSenderId: "787774433314",
  appId: "1:787774433314:web:cba8ec9bb7fb5aadb3027b",
  measurementId: "G-4M9BCDJ30M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
