// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBksitJH2s0UQZGDsvUPBO-YW6ZWliYtI0",
  authDomain: "realestatemgmt-d3faa.firebaseapp.com",
  projectId: "realestatemgmt-d3faa",
  storageBucket: "realestatemgmt-d3faa.appspot.com",
  messagingSenderId: "55852845121",
  appId: "1:55852845121:web:eed27e490c2cd74d08dec0",
  measurementId: "G-6HDWB8YXQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export  { auth };