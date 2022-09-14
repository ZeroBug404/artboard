// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBriAv3msa6J-pbTteBsYChPUrycn6kdeA",
  authDomain: "artboard-29458.firebaseapp.com",
  projectId: "artboard-29458",
  storageBucket: "artboard-29458.appspot.com",
  messagingSenderId: "889970919986",
  appId: "1:889970919986:web:7f77b49d3c714889928a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;