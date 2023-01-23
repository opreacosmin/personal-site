// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1kr6au-6_z-h3imhXs6LFjscrek5oJck",
    authDomain: "personal-site-2d762.firebaseapp.com",
    databaseURL: "https://personal-site-2d762-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "personal-site-2d762",
    storageBucket: "personal-site-2d762.appspot.com",
    messagingSenderId: "886686133796",
    appId: "1:886686133796:web:16857e967eb9613c3332b1",
    measurementId: "G-7VL1PKS7SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export default db;