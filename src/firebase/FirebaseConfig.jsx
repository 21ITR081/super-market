// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {  
    apiKey: "AIzaSyAxF5Ba_UIiziQPsapiWT4C4ZPJCIsks8Y",
    authDomain: "maruthi-app-25172.firebaseapp.com",
    projectId: "maruthi-app-25172",
    storageBucket: "maruthi-app-25172.appspot.com",
    messagingSenderId: "149546252691",
    appId: "1:149546252691:web:83703865d3fef9619bd066"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }