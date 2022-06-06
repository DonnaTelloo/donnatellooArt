import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHuZRXJ9QUcCh1iQr65k5fFf2waLH3Cs4",
  authDomain: "donnatellooart-223ea.firebaseapp.com",
  projectId: "donnatellooart-223ea",
  storageBucket: "donnatellooart-223ea.appspot.com",
  messagingSenderId: "1035023486658",
  appId: "1:1035023486658:web:0e85aa45816e299094755b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
