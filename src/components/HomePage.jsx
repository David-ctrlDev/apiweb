import React, { useEffect } from 'react'
import { Redirect} from 'react-router'
import { apiFetch } from '../functions/fetch';
import HomeCarousel from './HomeCarousel';
import Staticbar from './Staticbar';



<<<<<<< HEAD
function HomePage() {
    //console.log(props)
    const { token } = useParams();
    const clave = sessionStorage.getItem("Key")
    console.log(clave);
    const valido = clave === token;

=======
>>>>>>> 9fb99db829c58e342e48c9a15694b5ba33c778b8

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
