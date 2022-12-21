// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4MR7gJgjmM6Eb78nAl5H0eN6HwbkRDGA",
    authDomain: "personalsite-4c5a4.firebaseapp.com",
    projectId: "personalsite-4c5a4",
    storageBucket: "personalsite-4c5a4.appspot.com",
    messagingSenderId: "669960479822",
    appId: "1:669960479822:web:4c7878c624f47f59c68f1f",
    measurementId: "G-J15XQ4KM0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);