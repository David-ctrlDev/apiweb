import React, { useState } from 'react'
import {apiFetch,apiFetchPost} from '../functions/fetch.js'
import './Search.css'
import  imagen from '../assets/imagen01.jpg'
function Search() {
const [data, setdata] = useState([])

const handleClick= async ()=>{
    let data = await apiFetch()
    let datos = data.data
    console.log(datos)
    setdata(datos)
}

const handleClick2 = async ()=>{
    let codigo = "ZPRC005"
    let marca = "Cueros Velez"
    let nombre = "Zapatos React"
    let precio = 190000
    apiFetchPost(codigo,marca,nombre,precio)
}
    return (
        <div className="main-container">
            <h1>Productos más recientes</h1>
            <button className ="search-button" onClick={handleClick}>Buscar</button>
            <div>{data.map((datoKey=>{
               return (<div  className= "product-card" key={datoKey}>
                            <h1 >{datoKey.nombre}</h1>
                            <img className = "card_img"alt = "img shoe" src={imagen}/>
                            <p>{datoKey.precio}</p>
                            <p>{datoKey.marca}</p>
                            <p>{datoKey.codigo}</p>

                            
                      </div> )  
            }))}
            </div>
            <button className ="search-button"onClick={handleClick2}>Ingresar</button>   
        </div>
    )
}

export default Search
