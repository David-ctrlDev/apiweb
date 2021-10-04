import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


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


export default async function createUser() {

    let email = document.getElementById("email").value
    alert(email)
    let password = document.getElementById("password").value
    alert(password)
    let name = document.getElementById("name").value


    await createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log("cargué")
        })
        .catch(err => {
            console.log(err.code)
        });

    await updateProfile(auth.currentUser, {
        displayName: name
    })

}