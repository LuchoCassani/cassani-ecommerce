import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDai0MaKD9oXwNoWUyQpXQlNdLit374Ujc",
    authDomain: "cassani-ecommerce.firebaseapp.com",
    projectId: "cassani-ecommerce",
    storageBucket: "cassani-ecommerce.appspot.com",
    messagingSenderId: "23619442871",
    appId: "1:23619442871:web:5618ef63992e92af655532"
  };

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };



