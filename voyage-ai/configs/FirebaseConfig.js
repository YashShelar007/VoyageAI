// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD31k6Om2LfUaVZH9knPBLTg1Ct3LrQP0s",
  authDomain: "voyageai-68d13.firebaseapp.com",
  projectId: "voyageai-68d13",
  storageBucket: "voyageai-68d13.appspot.com",
  messagingSenderId: "422358046322",
  appId: "1:422358046322:web:4bd4d29c3b7b3ef208d4eb",
  measurementId: "G-R8EBTBK635",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
