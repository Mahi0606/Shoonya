// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZGyNZgrLQENO00DOxZ9Xn_gXOQl5ATM",
  authDomain: "shoonya-524eb.firebaseapp.com",
  projectId: "shoonya-524eb",
  storageBucket: "shoonya-524eb.appspot.com",
  messagingSenderId: "222876108385",
  appId: "1:222876108385:web:09df63e4336f9a6957cc20",
  measurementId: "G-8RT8M3SCCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();