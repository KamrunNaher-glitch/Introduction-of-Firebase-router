// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUYbY8W-gWNapLh6zcvDjWNi-kqPUyuHo",
  authDomain: "introductionof-firebase.firebaseapp.com",
  projectId: "introductionof-firebase",
  storageBucket: "introductionof-firebase.firebasestorage.app",
  messagingSenderId: "365578822527",
  appId: "1:365578822527:web:be7b98acef0790d9b8f04a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);