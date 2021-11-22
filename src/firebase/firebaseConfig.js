// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVc2OVJM812YD-jO1pavyO5iKfHA_0764",
  authDomain: "kikidigital-bf324.firebaseapp.com",
  projectId: "kikidigital-bf324",
  storageBucket: "kikidigital-bf324.appspot.com",
  messagingSenderId: "1069388671457",
  appId: "1:1069388671457:web:f2efeb74a06f6a2bad8aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db