import headerImage from '../assets/headerImage.svg'

import React from 'react'
import { Redirect} from 'react-router'



function HomePage() {
    
    const clave = sessionStorage.key(0);
    console.log(clave);



    return (
        <div>
            {clave!== null?
            <img src={headerImage} alt="headerImage" /> : <Redirect to ="/"></Redirect>}
            <h1>{clave}</h1>
        </div>
    )
   
}

export default HomePage
