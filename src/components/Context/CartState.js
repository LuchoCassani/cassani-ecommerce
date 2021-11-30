import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEMS,REMOVE_ONE_ITEM,  } from "./Types";

const CartState = ({ children }) => {
  const initalState = {
    
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
    
  };

  const removeItems = (id) => {
    dispatch({ type: REMOVE_ITEMS, payload: id });
  };
  const removeOneItem = (id) => {
    dispatch({ type: REMOVE_ONE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeItems,
        removeOneItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
  
};

export default CartState;