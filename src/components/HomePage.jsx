import React from 'react'
import { Redirect} from 'react-router'
//import { apiFetch } from '../functions/fetch';
import HomeCarousel from './HomeCarousel';
import Staticbar from './Staticbar';




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
                <HomeCarousel/>  
                  
            </div>
            </>
            : <Redirect to ="/"></Redirect>}
          
        </div>
        
    )
   
}

export default HomePage
