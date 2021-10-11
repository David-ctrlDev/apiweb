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
<<<<<<< HEAD
            user = res.user
=======
<<<<<<< HEAD
            user = res.user.auth.persistenceManager.fullUserKey
=======
            user = res.user
>>>>>>> 9fb99db829c58e342e48c9a15694b5ba33c778b8
>>>>>>> 8b9908e04e234d8ebfef8f0c6f1ce0b490f9550f

        })
        .catch(err => {

            user = false
        });

<<<<<<< HEAD
    await setPersistence(auth, browserSessionPersistence)
        .then(() => {
=======
<<<<<<< HEAD
    setPersistence(auth, browserSessionPersistence)
        .then(() => {
            let email = document.getElementById("email").value

            let password = document.getElementById("password").value
=======
    await setPersistence(auth, browserSessionPersistence)
        .then(() => {
>>>>>>> 9fb99db829c58e342e48c9a15694b5ba33c778b8
>>>>>>> 8b9908e04e234d8ebfef8f0c6f1ce0b490f9550f

            return signInWithEmailAndPassword(auth, email, password);

        })
        .catch((error) => {
            // Handle Errors here.
<<<<<<< HEAD
=======
<<<<<<< HEAD
            const errorCode = error.code;
            const errorMessage = error.message;
=======
>>>>>>> 9fb99db829c58e342e48c9a15694b5ba33c778b8
>>>>>>> 8b9908e04e234d8ebfef8f0c6f1ce0b490f9550f
        });

    return user


}