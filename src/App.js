import React from 'react';
import { BrowserRouter , Switch, Route, } from 'react-router-dom';
import './sass/App.scss';
import "./sass/NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer"
import SliderPrincipal from './components/SliderPrincipal/SliderPrincipal';

import Zapatillas from "./pages/Zapatillas"
import Indumentaria from "./pages/Indumentaria"
import Carrito from "./pages/Carrito"
import Contacto from "./pages/Contacto"
import Accesorios from "./pages/Accesorios"



function App() {
  return (

    <>
    <Navbar />
    <SliderPrincipal />
    <BrowserRouter>
      <Switch>
          <Route  path="/" exact>
            
              <ItemListContainer text="Encontra lo que buscas" />
            
          </Route>   
          <Route path="./pages/Zapatillas" exact>
            
                <Zapatillas />
             
          </Route>   
          <Route  path="./pages/Indumentaria" exact>
            
              <Indumentaria />
            
          </Route> 
          <Route  path="./pages/Accesorios" exact>
            
              <Accesorios />
            
          </Route>    
          <Route  path="./pages/Carrito" exact>
            
              <Carrito />
            
          </Route>   
          <Route  path="./pages/Contacto" exact>
            
              <Contacto />
            
        </Route>  
      </Switch>  
    </BrowserRouter>


    </>
  );
}

export default App;
