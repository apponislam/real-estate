// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQgna-0GiXSS9eWboRO5qs6VOxnj8PzpE",
    authDomain: "assignmentb9a9.firebaseapp.com",
    projectId: "assignmentb9a9",
    storageBucket: "assignmentb9a9.appspot.com",
    messagingSenderId: "20645081129",
    appId: "1:20645081129:web:b9ae95a34ce4237a316c38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
