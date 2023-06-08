// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const firestore = getFirestore(app);
export const storageRef = getStorage(app);
export const auth = getAuth(app);