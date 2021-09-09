// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrdLJbH2Ls5PNFv-YuUjpnIXFRwdHgsM8",
  authDomain: "portafolio-c7b27.firebaseapp.com",
  projectId: "portafolio-c7b27",
  storageBucket: "portafolio-c7b27.appspot.com",
  messagingSenderId: "628184005415",
  appId: "1:628184005415:web:fe830659c4dda668390702",
  measurementId: "G-9N1YF8E25V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);