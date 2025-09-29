import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0KQK8GYBPZXRWTZD3jm4M-L5pvRzoF0g",
  authDomain: "neflix-clone-f3574.firebaseapp.com",
  projectId: "neflix-clone-f3574",
  storageBucket: "neflix-clone-f3574.firebasestorage.app",
  messagingSenderId: "68165296535",
  appId: "1:68165296535:web:c854d85afcb37ef5b5a4d2",
  measurementId: "G-MKGET0BHCY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);