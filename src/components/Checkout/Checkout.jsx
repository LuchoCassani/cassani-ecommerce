import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import db from "../../firebase/index";
import CartContext from "../Context/CartContext";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";



const Checkout = () => {
  const { cartItems, removeItems } = useContext(CartContext);
  const [confirm, setConfirm] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const { id } = useParams();

  const date = new Date()
  
  const compra = cartItems;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [clientData, setClientData] = useState({
    name: "",
    phone: 0,
    email: "",
  });
  
  
  const setData = (e) => {
    setClientData({
      ...clientData,
      [e.target.name]: e.target.value,
    });
  };

  const form = [
    { type: "text", name: "name", placeHolder: "nombre" },
    { type: "number", name: "phone", placeHolder: "telefono" },
    { type: "email", name: "email", placeHolder: "correo electronico" },
    
  ];
  
  const orderClient = {
    cliente: clientData,
    compra: cartItems,
    date: new Date(date).toLocaleDateString(),
  };

  const generatedOrder = () => {
    
    

    const ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, orderClient).then(({ id }) => {
      setOrderNumber(id);
    });
    removeItems();
    setConfirm(true);
    document.getElementById("form").reset();
  };

  return (
    <div className="checkout d-flex justify-content-center">
      <div>
      <h2>Revisa tus productos</h2>
        {compra.map((items) => {
          return (
              
            <div key={items.id} className="productInCart ">
              <div className="cardCart">
                <img src={items.imagen} alt={items.title} />
                <div className="cardProductBody">
                  <div className="productTitle">{items.title}</div>
                  <div>cantidad: {items.quantity}</div>
                  <div>Precio Unitario ${items.precio}</div>
                  <div>Total = ${items.precio * items.quantity}</div>
                </div>
              </div>
            </div>
          );
        })}

        <h2>
          TOTAL ${" "}
          {cartItems.reduce(
            (amount, product) => product.precio * product.quantity + amount,
            0
          )}
        </h2>
        <form id="form" action="" method="post" onSubmit={handleSubmit}  >
                    <h3 className="d-flex justify-content-center p-1 ">
                        Ingresa tus datos para finalizar la compra
                    </h3>

                    <div >
                      
                         {form.map(key =><input  type={key.type} placeholder={key.placeHolder} name={key.name} key={key.name} onChange={setData} required/>)} 
                    </div>
                   
                    <div >
                            {confirm? <div/> : <button  className="btn btn-outline-dark px-4 py-2 m-2" onSubmit={generatedOrder}>Finalizar Pedido</button>}
                            
                    </div>
                </form>      
        <div>
      
        
          <div className=" d-flex justify-content-center align-items-center">
            {
              orderNumber ? <div className=" d-flex flex-column justify-content-center align-items-center">
              {" "}
              Su numero de guia es: <strong>{orderNumber}</strong> GRACIAS POR
              SU COMPRA 
              <NavLink to="/">
                <div className="btn btn-outline-dark px-4 py-2 m-2">
                  Seguir comprando
                </div>
              </NavLink>
            </div>  : <Loader text ={"Esperando confirmacion"}/> 
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
