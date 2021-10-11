import React, { useEffect } from 'react'
import { Redirect} from 'react-router'
import { apiFetch } from '../functions/fetch';
import HomeCarousel from './HomeCarousel';
import Staticbar from './Staticbar';

<<<<<<< HEAD


=======
>>>>>>> 8b9908e04e234d8ebfef8f0c6f1ce0b490f9550f

function HomePage() {
    
    const clave = sessionStorage.key(0);
    console.log(clave);
    //const userName = JSON.parse(sessionStorage.getItem(clave))
    useEffect( ()=>apiFetch())
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
