// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhgg-lcLZRZiseP9JEKUmJhYkfobupsPg",
    authDomain: "notes-app-dc5ed.firebaseapp.com",
    projectId: "notes-app-dc5ed",
    storageBucket: "notes-app-dc5ed.appspot.com",
    messagingSenderId: "383475777018",
    appId: "1:383475777018:web:8d95f91aa9d87682f93843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")