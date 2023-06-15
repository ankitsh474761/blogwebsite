// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDOIK-66VKUWJClcnEQOuOhszD7qv9YKr4",
  authDomain: "blog-33710.firebaseapp.com",
  projectId: "blog-33710",
  storageBucket: "blog-33710.appspot.com",
  messagingSenderId: "71652380171",
  appId: "1:71652380171:web:9bef2b131ae0cf78bf810e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();