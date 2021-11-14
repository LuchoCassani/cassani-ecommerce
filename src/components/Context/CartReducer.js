import {  ADD_TO_CART, REMOVE_ITEMS, REMOVE_ONE_ITEM } from "./Types";

const initialState = {count:0}
const CartReducer = (state, action) => {
  switch (action.type) {
    
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [{count: state.count + 1}],
      };
    }
    case REMOVE_ONE_ITEM: {
      return {
        ...state,
        cartItems: [{count: state.count - 1}],
       
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
