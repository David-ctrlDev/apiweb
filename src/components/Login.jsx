
import React from 'react';
import singIn from '../functions/login'
import './Login.css'
import {
    Link,
    useHistory
  } from "react-router-dom";

function Login() {
    
    let history = useHistory()
    const handleClick = async()=>{
        var logeado = await singIn()
    
        logeado !== false? logeado = logeado.reloadUserInfo.localId : logeado = false;
        
        logeado !== false ? await history.push(`/Home/${logeado}`) : history.push('/Register')
       
    }
   
    return (
        
        <div className="login-container">
            <h1 className= "login-h1">TestapiApp</h1>
            <input className = "login-input" id ="email" type="mail" placeholder="Mail"></input>
            <input className = "login-input" id = "password" type="password" placeholder="Password"></input>
            <button className = "login-btn" onClick={handleClick}>Login</button>
            <h2 className = "login-h2">Don't have an account?<span><Link to ="Register"> Sing up</Link> </span></h2>
            
        </div>
        
    )
}

export default Login
