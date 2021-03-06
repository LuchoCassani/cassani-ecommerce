import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { NavLink } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = ({ product }) => {
  const { showCart, cartItems, removeItems } = useContext(CartContext);

  return (
    <>
      {!showCart && (
        <div>
          <div className=" ">
            {cartItems.length === 0 ? (
              <div className="m-5 d-flex justify-content-center flex-wrap ">
                <h4>Oops parece que aun no agregaste nada😂</h4>

                <NavLink
                  to="/products"
                  className="btn btn-outline-dark px-4 py-2 m-2"
                >
                  Seguir comprando
                </NavLink>
              </div>
            ) : (
              <>
                <ul>
                  {cartItems.map((product) => (
                    <CartItems key={product.id} item={product} />
                  ))}
                </ul>
                <div className="container">
                  <h2>
                    TOTAL ${" "}
                    {cartItems.reduce(
                      (amount, product) =>
                        product.precio * product.quantity + amount,
                      0
                    )}
                  </h2>
                  <button
                    className="btn btn-outline-dark px-4 py-2 m-2"
                    onClick={() => removeItems(product)}
                  >
                    Limpiar carrito
                  </button>
                  <NavLink
                    to="/checkout"
                    className="btn btn-outline-dark px-4 py-2 m-2"
                  >
                    Finalizar compra
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
