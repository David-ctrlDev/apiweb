//import singIn from '../functions/oAuth'
import './Register.css'
import React from 'react'
import createUser from '../functions/oAuth'
/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
*/
function Register() {   
    const handleClick = ()=>{
    createUser()
    }
    return (
        <div className="register-container">
            <h1 className = "register-title">TestapiApp</h1>
            <input id ="email" type="email" placeholder="Mail"></input>
            <input id = "password" type="password" placeholder="Password"></input>
            <input id = "name" type="text" placeholder="Name"></input>
            <button onClick={handleClick}>Sing up</button>
            <h2>Wellcome!!</h2>
        </div>
    )
}
export default Register
