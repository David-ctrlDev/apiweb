import headerImage from '../assets/headerImage.svg'

import React from 'react'
import { Redirect,useHistory} from 'react-router'



function HomePage() {
    

    const clave = sessionStorage.key(0);
    const userName = JSON.parse(sessionStorage.getItem(clave))
    const userNameActual =userName.displayName
    let history = useHistory()
    const handlerClick = () =>{
        sessionStorage.clear();
        history.push('/')

    }



    return (
        <div>
            {clave!== null?
            <div>
            <h1>Bienvenido {userNameActual}!!</h1>
            <button onClick={handlerClick}>Cerrar Sesión</button>
            <img src={headerImage} alt="headerImage" /> 
            
            </div>
            : <Redirect to ="/"></Redirect>}
            
        </div>
    )
   
}

export default HomePage
