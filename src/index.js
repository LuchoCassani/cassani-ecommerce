import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/font-awesome/css/font-awesome.min.css"
import '../src/sass/App.scss';
import "animate.css/animate.min.css"
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../src/redux/store"

ReactDOM.render(
  <BrowserRouter>
  <Provider store ={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

