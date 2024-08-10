// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALUcBVRO8mCnlmp7TBj_wG0RLOHIx0erg",
  authDomain: "inventory-management-app-69806.firebaseapp.com",
  projectId: "inventory-management-app-69806",
  storageBucket: "inventory-management-app-69806.appspot.com",
  messagingSenderId: "907330435088",
  appId: "1:907330435088:web:fb32c0e5238cc52c623295",
  measurementId: "G-BHL3R5TVM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };