import { useContext } from "react";
import CartContext from "../Context/CartContext";

const CartItem = ({ item }) => {
  const { addToCart,removeOneItem } = useContext(CartContext);
  let total = item.precio * item.quantity
  return (
    <>

    <div className="row m-5 ml-auto">
      <div className="col-md-6 mt-2"> 
        <img src={item.imagen} alt={item.title} height="250px" width="250px" />
        <div><strong>{item.title}</strong></div>
        <div> <strong> Precio:</strong> $ {item.precio}</div>
        <div><strong>Categoria :</strong> {item.categoria}</div>
        
      </div>
      
      <div className="col-md-6">
        <i className="fa fa-plus-square me-1" onClick={() => addToCart(item)}></i>
        <div style={{ marginLeft: 5 }}>
          $ {total}
        </div>      
        <div> Cantidad : {item.quantity}</div>
        <i className="fa fa-minus-square me-1" onClick={() => removeOneItem(item.id)}></i>
    
    </div>
      
    </div>
    </>
  );
};

export default CartItem;
