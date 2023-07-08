import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZacPr3OiXCxdFW0yn_BbfEKqyxf2zJEg",
  authDomain: "note-zone-3222f.firebaseapp.com",
  projectId: "note-zone-3222f",
  storageBucket: "note-zone-3222f.appspot.com",
  messagingSenderId: "152188963426",
  appId: "1:152188963426:web:e6e43c7faa8bf85bf21f3b",
  measurementId: "G-JEFJLQF7QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();

export {app, auth, storage, db};