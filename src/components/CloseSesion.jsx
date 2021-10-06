import React from 'react'
import {useHistory} from 'react-router'
import './CloseSesion.css'
import closeSesionImage from '../assets/closeSesion.svg'

function CloseSesion() {
    let history = useHistory()
    const handlerClick = () =>{
        sessionStorage.clear();
        history.push('/')
    }
    return (
        <div >
            <img className ="close-sesion-btn"src={closeSesionImage} alt="close sesion icon" onClick={handlerClick} ></img>
        </div>
    )
}
export default CloseSesion
