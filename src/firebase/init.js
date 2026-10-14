// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKshHjGjGSRlbcxclcZed5GN29xwChiOQ",
  authDomain: "fir-practice-9d7b6.firebaseapp.com",
  projectId: "fir-practice-9d7b6",
  storageBucket: "fir-practice-9d7b6.firebasestorage.app",
  messagingSenderId: "831146759066",
  appId: "1:831146759066:web:d4c45f389694e62d5de023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();