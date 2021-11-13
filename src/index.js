import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/font-awesome/css/font-awesome.min.css"
import '../src/sass/App.scss';
import "animate.css/animate.min.css"
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import CartState from "../src/components/Context/CartState"



ReactDOM.render(

  <BrowserRouter>
    <CartState>
    <App />
    </CartState>
  </BrowserRouter>,
  document.getElementById('root')
);

