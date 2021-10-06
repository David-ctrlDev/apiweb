import React from 'react'
import { Redirect} from 'react-router'
import HomeCarousel from './HomeCarousel';
import CloseSesion from './CloseSesion'




function HomePage() {
    
    const clave = sessionStorage.key(0);
    //const userName = JSON.parse(sessionStorage.getItem(clave))
    //const userNameActual =userName.displayName
  
    return (
        <div>
            {clave!== null?
            <div>
            <CloseSesion/>
            <HomeCarousel/> 
            </div>
            : <Redirect to ="/"></Redirect>}
          
        </div>
        
    )
   
}

export default HomePage
