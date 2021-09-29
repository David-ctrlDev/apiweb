import singIn from '../functions/oAuth'
import './Login.css'
import React from 'react'
/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
*/
function Register() {
    
    const handleClick = ()=>{
    singIn()
    }
    return (
        <div className="register-container">
            <h1>TestapiApp</h1>
            <input id ="email" type="text" placeholder="Mail"></input>
            <input id = "password" type="text" placeholder="Password"></input>
            <button onClick={handleClick}>Sing up</button>
            <h2>Wellcome!!</h2>
            
        </div>
    )
}

export default Register
