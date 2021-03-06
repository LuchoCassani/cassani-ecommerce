import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";



const Menu = () => {
  const {cartItems} = useContext(CartContext)
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 shadow-sm" >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            40x20 Handball-Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Carrito
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Registrarse
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">
                          <i className="fa fa-shopping-cart me-1 "> </i>Carrito {cartItems.reduce((amount, item) => item.quantity + amount, 0)}
             
                </NavLink>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Menu;
