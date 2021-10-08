import headerImage from '../assets/headerImage.svg'

import React from 'react'
import { Redirect, useParams } from 'react-router'


function HomePage() {
    //console.log(props)
    const { token } = useParams();
    const clave = sessionStorage.getItem("Key")
    console.log(clave);
    const valido = clave === token;


    return (
        <div>
            {valido?
            <img src={headerImage} alt="headerImage" /> : <Redirect to ="/"></Redirect>}
        </div>
    )
}

export default HomePage
