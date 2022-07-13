// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDynud9COn-Un6MD1BVty2WuZx4eYOimVU",
    authDomain: "doctors-portal-1f675.firebaseapp.com",
    projectId: "doctors-portal-1f675",
    storageBucket: "doctors-portal-1f675.appspot.com",
    messagingSenderId: "629658170417",
    appId: "1:629658170417:web:8797d2c5b7889816afd110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
