import React from 'react';
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import './sass/App.scss';
import "./sass/NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer"
import SliderPrincipal from './components/SliderPrincipal/SliderPrincipal';
import Zapatillas from './components/Zapatillas/Zapatillas';
import {CartContext} from "./components/Context/CartContext"
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';






function App() {
  return (

    <>
    <CartContext.Provider value = {[]} />
     <Navbar />
     
     <Home />
    <CartContext.Provider/>
  
    </>
  );
}

export default App;
 {/* <BrowserRouter>
      <Navbar />
      <SliderPrincipal />
        <Switch>
          <Route exact path='/' >
            
          </Route>
          <Route exact path='/category/:category' >
            
          </Route>
          <Redirect to ="/" />
        </Switch>
      </BrowserRouter> */}