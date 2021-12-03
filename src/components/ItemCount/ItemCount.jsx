import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";
export const ItemCount = ({ product }) => {
  const { addToCart, removeItems, removeOneItem } = useContext(CartContext);

  return (
    <>
      <button
        className="btn btn-outline-dark px-4 py-2 m-2"
        onClick={() => addToCart(product)}
      >
        Agregar al carrito
      </button>
      <button
        className="btn btn-outline-dark px-4 py-2 m-2"
        onClick={() => removeOneItem(product.id)}
      >
        Eliminar del carrito
      </button>
      <button
        className="btn btn-outline-dark px-4 py-2 m-2"
        onClick={() => removeItems(product)}
      >
        Vaciar carrito
      </button>
      <NavLink to="/cart" className="btn btn-outline-dark px-4 py-2 m-2">
        Ir al carrito
      </NavLink>
      <NavLink to="/products" className="btn btn-outline-dark px-4 py-2 m-2">
        Seguir comprando
      </NavLink>
    </>
  );
};
