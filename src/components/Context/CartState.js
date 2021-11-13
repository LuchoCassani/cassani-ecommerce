import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEMS,REMOVE_ONE_ITEM } from "./Types";
import Productos from "../Productos.json"
const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [Productos],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
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
        showHideCart,
        removeItems,
        removeOneItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;