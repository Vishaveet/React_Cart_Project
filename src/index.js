import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";
import  firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBT046DpC8oBCBx2lgATkd_nN7XAMgSaLo",
  authDomain: "cart-3fd50.firebaseapp.com",
  projectId: "cart-3fd50",
  storageBucket: "cart-3fd50.appspot.com",
  messagingSenderId: "160395280904",
  appId: "1:160395280904:web:e963fb558a4acd394a07bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

