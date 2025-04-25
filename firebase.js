// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtqyEtQhESMTbbWnyZMncjryL451s6sI",
  authDomain: "nlpulse-c22af.firebaseapp.com",
  projectId: "nlpulse-c22af",
  storageBucket: "nlpulse-c22af.appspot.com",
  messagingSenderId: "562893359272",
  appId: "1:562893359272:web:2d3d85b8905baa3c3eda9d",
  measurementId: "G-TB62EJWRWR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
