import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOi9FZDAFHXW3IV24pCcu-h3zUy2caunQ",

  authDomain: "tracker-f9291.firebaseapp.com",

  projectId: "tracker-f9291",

  storageBucket: "tracker-f9291.firebasestorage.app",

  messagingSenderId: "749249271926",

  appId: "1:749249271926:web:75fcc5d471811e6ce46757",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
