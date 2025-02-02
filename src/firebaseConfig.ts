// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// Your Firebase config (Replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyBMerLZLaFMqICtdNjErJn-1yGi2A3HZko",
    authDomain: "myportfolio-bcba6.firebaseapp.com",
    projectId: "myportfolio-bcba6",
    storageBucket: "myportfolio-bcba6.firebasestorage.app",
    messagingSenderId: "413303868500",
    appId: "1:413303868500:web:27e9ad228fc5be8048f1c1",
    measurementId: "G-2Y9F1NLQXL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
