import {React} from 'react'
import { Redirect} from 'react-router'
//import { apiFetch } from '../functions/fetch';
import HomeCarousel from './HomeCarousel';
import Staticbar from './Staticbar';
import homeimage from '../assets/homeImage.jpg'
import  './HomePage.css'





function HomePage() {
    
    const clave = sessionStorage.key(0);
  
    //const userName = JSON.parse(sessionStorage.getItem(clave))
    //useEffect( ()=>apiFetch())
    //const userNameActual =userName.displayName
  
    return (
        <div>
            {clave!== null?
            <>
            <Staticbar/>
            <div>
                <img className = "homeImage" src={homeimage} alt="imagen del homepage" />
                <HomeCarousel/>  
                <GridProduct />  
            </div>
            </>
            : <Redirect to ="/"></Redirect>}
          
        </div>
        
    )
   
}

export default HomePage
