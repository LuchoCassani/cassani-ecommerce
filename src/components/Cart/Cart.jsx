import { useContext } from "react";
import CartContext from "../Context/CartContext";
import {ItemCount} from "../ItemCount/ItemCount"

import CartItems from "./CartItems";

const Cart = () => {
  const { showCart, cartItems } = useContext(CartContext);

  return (
    <>
    
      {!showCart && (
        <div>
          
          <div className="container-fluid justify-content-center">
            {cartItems.length === 0 ? (
              <h4>Oops parece que aun no agregaste nada😂</h4>
            ) : (
              <ul >
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
