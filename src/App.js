import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./sass/App.scss";
import "./sass/NavBar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/NavBar";

import { CartContext } from "./components/Context/CartContext";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products:id" component={Product} />
        <CartContext.Provider value={[]} />

        <CartContext.Provider />
      </Switch>
    </>
  );
}

export default App;
