import React, {useState} from 'react';
import CartWidjet from './CartWidjet';
import { MdViewDay } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from "../../imagenes/logo.svg"




const Navbar = () =>{

    const[showLinks, setShowLinks] = useState(false);

    return(
      <>
        <div className ="NavBar">
          
          <div className ="leftSide"> 
                <img src={logo} alt="logo" />
                <div className="links" id={showLinks ? "hidden" : ""}>
                  <a href="#home" class="active"> Home </a>
                  <a href="#zapatillas"> Zapatillas </a> 
                  <a href="#indumentaria"> Indumentaria </a> 
                  <a href="#accesorios"> Accesotrios </a> 
                  <a href="#contacto"> Contacto </a>
                </div>  
                <button onClick={() => setShowLinks(!showLinks)} className="burgerMenu"><MdViewDay/></button>
          </div> 
          <div className ="rightSide">

            <input type="text" placeholder="Buscar..."/> 
            <button> <IoIosSearch/> </button>
            <CartWidjet/>
          

          </div>   

            
            
        </div>
      </>  
    )
}


export default Navbar;
 
