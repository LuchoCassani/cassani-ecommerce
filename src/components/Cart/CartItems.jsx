import { useContext } from "react";
import CartContext from "../Context/CartContext";


const CartItem = ({ item }) => {
  const { removeItems, addToCart } = useContext(CartContext);
  
  return (
    <li >
        
      <img src={item.image} alt='' />
      <div>
        {item.name} 
      </div>
      <button  onClick={() => removeItems(item.id)}>
        Remover del carrito
      </button>
     
    </li>
  );
};

export default CartItem;