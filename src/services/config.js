import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "cocle-9f8b9.firebaseapp.com",
    projectId: "cocle-9f8b9",
    storageBucket: "cocle-9f8b9.appspot.com",
    messagingSenderId: "261675812764",
    appId: "1:261675812764:web:efbd1fc36e5da0de32ea59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);