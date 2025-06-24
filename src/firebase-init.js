// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDww1QU9_4MW4lBWoSHcUvpeL6YNS27hdU",
  authDomain: "assignmate-auth.firebaseapp.com",
  projectId: "assignmate-auth",
  storageBucket: "assignmate-auth.firebasestorage.app",
  messagingSenderId: "81405821846",
  appId: "1:81405821846:web:f1c3022ae9a187981753b7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);