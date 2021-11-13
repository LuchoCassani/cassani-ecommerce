import React from "react";
import { Switch, Route,  } from "react-router-dom";
import "./sass/App.scss";
import "./sass/NavBar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/NavBar";

import Home from "./components/Home/Home";
import {ItemListContainer} from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ItemListContainer} />
        <Route exact path="/products/:id" component={ItemDetailContainer} />
        <Route exact path="/cart" component={Cart} />

        
      </Switch>
    </>
  );
}

export default App;
