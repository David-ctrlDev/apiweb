import React from 'react'
import CloseSesion from './CloseSesion'
import './Staticbar.css'

function Staticbar() {
    const clave = sessionStorage.key(0);
  
    const userName = JSON.parse(sessionStorage.getItem(clave))
    //useEffect( ()=>apiFetch())
    const userNameActual =userName.displayName
    return (
        <div className="static-bar-container">
            <h1 >Bienvenido {userNameActual} </h1>
            <CloseSesion/>
        </div>
    )
}

export default Staticbar
