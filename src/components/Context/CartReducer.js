import {  ADD_TO_CART, REMOVE_ITEMS, REMOVE_ONE_ITEM } from "./Types";


const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newProduct = action.payload;
      const CartContainProduct = state.cartItems.find(
        (item) => item.id === newProduct.id
      );

      return CartContainProduct
      ? {
        ...state,
        cartItems: state.cartItems.map((item) =>
        item.id === newProduct.id
        ?{...item,quantity:item.quantity + 1}
        : item
        )
      }
      : {
        ...state,
        cartItems: [...state.cartItems,{...action.payload, quantity: 1}]
      }
    }
      case REMOVE_ITEMS :
        return {
          ...state,
          cartItems:state.cartItems.filter((item) => item.id !== action.payload)
        };

        
        case REMOVE_ONE_ITEM:{
          const productDelete = state.cartItems.find(
            (item)=> item.id === action.payload
          );
          return productDelete.quantity >1
          ?{
            ...state,
            cartItems: state.cartItems.map((item)=>
            item.id === action.payload?{...item, quantity: item.quantity - 1}
            : item
            )
          }
          : {
            ...state,
            cartItems: state.cartItems.filter((item)=> item.id !== action.payload)
          }
        }
        

    default:
      return state;
  }
};

export default CartReducer;