// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmhultsjPk6Mmb3zOhUhuT6Pf8qPnogYw",
  authDomain: "appleseeds-7b22b.firebaseapp.com",
  projectId: "appleseeds-7b22b",
  storageBucket: "appleseeds-7b22b.appspot.com",
  messagingSenderId: "204561959140",
  appId: "1:204561959140:web:7458085fd9bc3d1ae244f1",
  measurementId: "G-CDQZ6RB2N8",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);