// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj2mTA9-jUo3GRww7vJ3a1LlSvfm5aIvo",
  authDomain: "tesla-clone-3.firebaseapp.com",
  projectId: "tesla-clone-3",
  storageBucket: "tesla-clone-3.appspot.com",
  messagingSenderId: "556076473453",
  appId: "1:556076473453:web:f0e2c8897c14d0e159f364",
  measurementId: "G-K4TW79K3EN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
