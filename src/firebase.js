import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvCzHkA2mt3t31wAZiwyH5f-PhfcWEdsY",
  authDomain: "twitter-clone-44c35.firebaseapp.com",
  databaseURL: "https://twitter-clone-44c35-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-44c35",
  storageBucket: "twitter-clone-44c35.appspot.com",
  messagingSenderId: "797746364559",
  appId: "1:797746364559:web:0d6bfa912c615ee66330fa",
  measurementId: "G-W4QRYWZY43",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;
