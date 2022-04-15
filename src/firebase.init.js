// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAckDImK0o8aoXb89xhgmgDYs2G8EsaVwc",
  authDomain: "ema-jhon-simple-f7abe.firebaseapp.com",
  projectId: "ema-jhon-simple-f7abe",
  storageBucket: "ema-jhon-simple-f7abe.appspot.com",
  messagingSenderId: "667427284914",
  appId: "1:667427284914:web:12d47c52cb3ebba4b0a6ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;