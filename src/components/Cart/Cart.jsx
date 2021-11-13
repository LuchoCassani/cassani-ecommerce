import { useContext } from "react";
import CartContext from "../Context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
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
                  <ItemDetail key={product.id} item={product} />
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
