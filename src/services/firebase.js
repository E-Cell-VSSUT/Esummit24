// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5ugM08sQ-g7praJiDp2ucwI-PVxaBx84",
  authDomain: "react-auth-login-e7229.firebaseapp.com",
  projectId: "react-auth-login-e7229",
  storageBucket: "react-auth-login-e7229.appspot.com",
  messagingSenderId: "330836419755",
  appId: "1:330836419755:web:8bd3b52ff33cc89277c3ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);