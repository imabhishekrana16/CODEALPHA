// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTn94Aqv7Q8ewXPdiNRF504R-_a3YorSI",
  authDomain: "job-board-platform-11f2b.firebaseapp.com",
  projectId: "job-board-platform-11f2b",
  storageBucket: "job-board-platform-11f2b.firebasestorage.app",
  messagingSenderId: "1060961334566",
  appId: "1:1060961334566:web:e50c288f384ca7baffbde7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};