import headerImage from '../assets/headerImage.svg'

import React from 'react'
import { Redirect, useParams } from 'react-router'


function HomePage(props) {
    //console.log(props)
    const { token } = useParams();
    const clave = localStorage.getItem("token").toString()
    const valido = clave === token;
    console.log(valido);

    return (
        <div>
            {valido?
            <img src={headerImage} alt="headerImage" /> : <Redirect to ="/"></Redirect>}
        </div>
    )
}

export default HomePage
