import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";



require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBnTe5XFoBWYBUPEfVXbQ6GI0P0vDOQgVU",
    authDomain: "servicio-cc4c8.firebaseapp.com",
    projectId: "servicio-cc4c8",
    storageBucket: "servicio-cc4c8.appspot.com",
    messagingSenderId: "100114003015",
    appId: "1:100114003015:web:b04dad0ba44b045703ed62",
    measurementId: "G-GYG2795QCZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

var user = ""

export default async function singIn() {

    let email = document.getElementById("email").value

    let password = document.getElementById("password").value

    await signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            user = res.user

        })
        .catch(err => {

            user = false
        });

    await setPersistence(auth, browserSessionPersistence)
        .then(() => {

            return signInWithEmailAndPassword(auth, email, password);

        })
        .catch((error) => {
            // Handle Errors here.
        });

    return user


}