// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_UL-j0op0OsZprdoSDOh0cVRAJRRYKRA",
  authDomain: "app-7aed4.firebaseapp.com",
  projectId: "app-7aed4",
  storageBucket: "app-7aed4.appspot.com",
  messagingSenderId: "845230121896",
  appId: "1:845230121896:web:bdba354d4686378315b39d",
  measurementId: "G-NE4V0BMP7K",
  databaseURL:'https://app-7aed4-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
