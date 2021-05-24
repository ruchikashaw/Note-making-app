import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB7ejIxaeCcSiegGy6IoyNUCOOsV7-WV74",
  authDomain: "note-making-app.firebaseapp.com",
  projectId: "note-making-app",
  storageBucket: "note-making-app.appspot.com",
  messagingSenderId: "884427655455",
  appId: "1:884427655455:web:554a7e846439a04e20882a",
  measurementId: "G-K3PFYHKMB4"
});

var db = firebase.firestore();



ReactDOM.render(
  
    <App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
