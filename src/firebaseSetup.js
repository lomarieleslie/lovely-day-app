// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDCM_asHr4gSq-K1N_kntmXzyASmLFttKA",

  authDomain: "lovely-day-app.firebaseapp.com",

  projectId: "lovely-day-app",

  storageBucket: "lovely-day-app.appspot.com",

  messagingSenderId: "802533844807",

  appId: "1:802533844807:web:4f48f005ed238d48e24e62"

};


// Initialize Firebase

const toDoApp = initializeApp(firebaseConfig);

export default toDoApp;