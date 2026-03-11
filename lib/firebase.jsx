
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCjlgjakTpOh7NQS4hZlKkwZzvTTT3fXRs",
  authDomain: "lyeana-blog-8d0a0.firebaseapp.com",
  projectId: "lyeana-blog-8d0a0",
  storageBucket: "lyeana-blog-8d0a0.firebasestorage.app",
  messagingSenderId: "1022790704932",
  appId: "1:1022790704932:web:b1d1717b67e15428759db1",
  measurementId: "G-TNTN5F1XYT"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();