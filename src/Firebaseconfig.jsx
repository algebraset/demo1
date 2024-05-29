// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwqSGi2k93yUt3Er6q71Hca0B0BXQXIAM",
  authDomain: "fir-cfc70.firebaseapp.com",
  databaseURL: "https://fir-cfc70-default-rtdb.firebaseio.com",
  projectId: "fir-cfc70",
  storageBucket: "fir-cfc70.appspot.com",
  messagingSenderId: "1032059842966",
  appId: "1:1032059842966:web:f61ae94189cf87f5452db7",
  measurementId: "G-MRTWTCBNR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
