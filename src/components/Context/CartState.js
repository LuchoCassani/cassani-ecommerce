import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEMS,REMOVE_ONE_ITEM } from "./Types";

const CartState = ({ children }) => {
  const initalState = {
    
    cartItems: [],
  };console.log(initalState)

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
    console.log(addToCart)
  };

  

  const removeItems = (id) => {
    dispatch({ type: REMOVE_ITEMS, payload: id });
    console.log(removeItems)
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