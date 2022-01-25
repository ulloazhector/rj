import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfL0vYKI0rrPND0l57Yfl7oSedqdQRfo",
  authDomain: "ecommerce-coder-d106d.firebaseapp.com",
  projectId: "ecommerce-coder-d106d",
  storageBucket: "ecommerce-coder-d106d.appspot.com",
  messagingSenderId: "243301468678",
  appId: "1:243301468678:web:b46cdd5d94a2a313519187",
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
