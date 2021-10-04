
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
        //const logeadoJson = JSON.stringify(logeado)
        //logeado = JSON.parse(logeadoJson)
        logeado !== null || logeado !== undefined? logeado = logeado.reloadUserInfo.localId : logeado = false;
        console.log(logeado);
       
        
        logeado !== false ? history.push(`/Home/${logeado}`) : history.push(`/Register`)
       
    }
   
    return (
        
        <div className="register-container">
            <h1>TestapiApp</h1>
            <input id ="email" type="mail" placeholder="Mail"></input>
            <input id = "password" type="password" placeholder="Password"></input>
            <button onClick={handleClick}>Login</button>
            <h2>Don't have an account?<span><Link to ="Register"> Sing up</Link> </span></h2>
            
        </div>
        
    )
}

export default Login
