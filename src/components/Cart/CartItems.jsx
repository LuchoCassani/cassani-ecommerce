import { useContext } from "react";
import CartContext from "../Context/CartContext";


const CartItem = ({ item }) => {
  const { removeItems } = useContext(CartContext);
  
  return (
    <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} 
      </div>
      <button  onClick={() => removeItems(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;