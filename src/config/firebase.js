// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUW-OXLCTqEswZy2ZCtD-CR4cgLKxrUTc",
  authDomain: "camping-maasvallei-d4803.firebaseapp.com",
  projectId: "camping-maasvallei-d4803",
  storageBucket: "camping-maasvallei-d4803.appspot.com",
  messagingSenderId: "447207946115",
  appId: "1:447207946115:web:0948f040c83e5e4b0a28b6",
  measurementId: "G-GMXDSXMGMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, analytics, app as default };