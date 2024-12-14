
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4Xp-Wd7Ne63SwS8RYqNBtywQ9KMp0co",
  authDomain: "clone-my-fb4c9.firebaseapp.com",
  projectId: "clone-my-fb4c9",
  storageBucket: "clone-my-fb4c9.firebasestorage.app",
  messagingSenderId: "451494452575",
  appId: "1:451494452575:web:295994ae2553a55aeeeaea"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()