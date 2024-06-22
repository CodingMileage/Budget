// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyLWI8PiqnjXpF82ruGcH6db1Bye9pJP4",
  authDomain: "budget-74919.firebaseapp.com",
  projectId: "budget-74919",
  storageBucket: "budget-74919.appspot.com",
  messagingSenderId: "196844853257",
  appId: "1:196844853257:web:b609301ad316158c79c0d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firebase login
//firebase init
//firebase deploy
