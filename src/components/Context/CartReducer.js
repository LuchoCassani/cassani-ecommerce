import {  ADD_TO_CART, REMOVE_ITEMS, REMOVE_ONE_ITEM } from "./Types";


const CartReducer = (state, action) => {
  switch (action.type) {
    
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ONE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case REMOVE_ITEMS: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
