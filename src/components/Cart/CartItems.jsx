import { useContext } from "react";
import CartContext from "../Context/CartContext";

const CartItem = ({ item }) => {
  const { removeItems, addToCart, cartItems } = useContext(CartContext);

  return (
    <>

    <div className="row m-5 ml-auto">
      <div className="col-md-6"> 
        <img src={item.image} alt={item.title} height="250px" width="250px" />
        <div>{item.title}</div>
        <div> $ {item.price}</div>
        <div>{item.category}</div>
      </div>
      
      <div className="col-md-6">
      
        <button className="btn btn-outline-dark px-4 py-2 m-2" onClick={() => addToCart(item)}>Agregar al carrito </button>

        
        <div style={{ marginLeft: 5 }}>
            {cartItems.reduce((amount, item) => item.price + amount,  0)}
        </div>      
        <button className="btn btn-outline-dark px-4 py-2 m-2" onClick={() => removeItems(item.id)}>Remover del carrito</button>    
    </div>

    </div>
    </>
  );
};

export default CartItem;
