import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMDr5oH1nnJ_i0rAok0pwkimhzYgmqjOg",
  authDomain: "job-board-frontend.firebaseapp.com",
  projectId: "job-board-frontend",
  storageBucket: "job-board-frontend.appspot.com", 
  messagingSenderId: "347177321488",
  appId: "1:347177321488:web:6f145ab1f0cce7a8d2b695",
  measurementId: "G-3CF5FR2FCL"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
