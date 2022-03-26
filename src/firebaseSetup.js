// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv7wqzjdmZUkZwvoZo3biL_u8cjJmMZ10",
  authDomain: "lovely-day-491ac.firebaseapp.com",
  databaseURL: "https://lovely-day-491ac-default-rtdb.firebaseio.com",
  projectId: "lovely-day-491ac",
  storageBucket: "lovely-day-491ac.appspot.com",
  messagingSenderId: "289049173238",
  appId: "1:289049173238:web:8f92384ab28fcc555da0d7"
};

// Initialize Firebase
const toDoApp = initializeApp(firebaseConfig);



export default toDoApp;