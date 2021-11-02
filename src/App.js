import React from 'react';
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import './sass/App.scss';
import "./sass/NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer"
import SliderPrincipal from './components/SliderPrincipal/SliderPrincipal';

import Zapatillas from './components/Zapatillas/Zapatillas';






function App() {
  return (

    <>
    <BrowserRouter>
    <Navbar />
    <SliderPrincipal />
      <Switch>
        <Route exact path='/' >
          <ItemListContainer /> 
        </Route>
        <Route exact path='/category/:category' >
          <Zapatillas />
        </Route>
        <Route exact path='/category/:category' >  
           
        </Route>
        <Route exact path='/category/:category' >   
             
        </Route>
        <Route exact path='/category/:category' >    
            
        </Route>
        <Redirect to ="/" />
      </Switch>
    </BrowserRouter>


    </>
  );
}

export default App;
