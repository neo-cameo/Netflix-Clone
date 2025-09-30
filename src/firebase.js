import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { EmailAuthCredential } from "firebase/auth/web-extension";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD0KQK8GYBPZXRWTZD3jm4M-L5pvRzoF0g",
  authDomain: "neflix-clone-f3574.firebaseapp.com",
  projectId: "neflix-clone-f3574",
  storageBucket: "neflix-clone-f3574.firebasestorage.app",
  messagingSenderId: "68165296535",
  appId: "1:68165296535:web:c854d85afcb37ef5b5a4d2",
  measurementId: "G-MKGET0BHCY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
