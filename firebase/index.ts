import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6QDXVtVeEEy-6XnavXRsf_d0CIrnSsT0",
  authDomain: "capitalmine-us.firebaseapp.com",
  projectId: "capitalmine-us",
  storageBucket: "capitalmine-us.appspot.com",
  messagingSenderId: "878200080296",
  appId: "1:878200080296:web:0fe35c26a0313b4e75ff9d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);