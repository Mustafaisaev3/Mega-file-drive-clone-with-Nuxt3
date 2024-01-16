// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqn_BAuwbMKCEnp_0tm-bm3LDNuFaSF6Q",
  authDomain: "mega-clone.firebaseapp.com",
  projectId: "mega-clone",
  storageBucket: "mega-clone.appspot.com",
  messagingSenderId: "1047432971696",
  appId: "1:1047432971696:web:5e34bfb1f916eaded80275"
};

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { db, storage }