import { useContext } from "react";
import CartContext from "../Context/CartContext";
import CartState from "../Context/CartState";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartItems from "./CartItems";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
    <h1>HOLA soy el carrito</h1>
      {showCart && (
        <div>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((product) => (
                  <CartItems key={product.id} item={product} />
                ))}
              </ul>
            )} 
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
