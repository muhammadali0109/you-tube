// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGukO6o0vRPVUA9JfnIObaMOz4dkAvF5I",
  authDomain: "react-384ef.firebaseapp.com",
  projectId: "react-384ef",
  storageBucket: "react-384ef.appspot.com",
  messagingSenderId: "461993705792",
  appId: "1:461993705792:web:0fb91bce52e6dcd4a9baa5",
  measurementId: "G-3Z7PJZ9SP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);