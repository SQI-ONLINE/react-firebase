// Import the functions you need from the SDKs you need
import Firebase  from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1tWcpHe9SUD9EFt1JdaT3yIywtpSTzEo",
  authDomain: "react-firebase-523a0.firebaseapp.com",
  databaseURL: "https://react-firebase-523a0-default-rtdb.firebaseio.com",
  projectId: "react-firebase-523a0",
  storageBucket: "react-firebase-523a0.appspot.com",
  messagingSenderId: "1085698258180",
  appId: "1:1085698258180:web:c0b8f773961acf3a740c51",
  measurementId: "G-XJ6W39EERR"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
const db = Firebase.database();
// const analytics = getAnalytics(app);

export {db};