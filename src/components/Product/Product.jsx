import React, { useState, useEffect } from "react";
import {useDispatch } from "react-redux";
import { AddCart, DelCart } from "../../redux/action/Index";
import { useParams } from "react-router";
import Puff from "react-loading-icons/dist/components/puff";
import { NavLink } from "react-router-dom";


const  Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(AddCart(product))
    }
    const delProduct = (product) => {
      dispatch(DelCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setTimeout(() => {
                setLoading(false);
              }, 2000);
        }
        getProduct();
    }, [id]);

  const Loading = () => {
    return (
      <>
        Cargando....
        <Puff stroke="#98ff98" strokeOpacity={0.125} speed={0.75} />
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </p>
          <h3 className>$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                        Agregar al carrito
          </button>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>delProduct(product)}>
                        Eliminar del carrito
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Ir al carrito
          </NavLink>
          
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
        {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  );
}
export default Product;