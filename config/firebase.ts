// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5yrhbJp2KBtEzC4VE7vG3aIAJhBUP0D0",
  authDomain: "ideanest-task-a3a21.firebaseapp.com",
  projectId: "ideanest-task-a3a21",
  storageBucket: "ideanest-task-a3a21.appspot.com",
  messagingSenderId: "571157249924",
  appId: "1:571157249924:web:71799e3cf0cf29172267d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }