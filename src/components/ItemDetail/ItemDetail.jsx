import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";


const  ItemDetail = () => {
    const {id} = useParams()
    const [product, setProducto] = useState (null)
    useEffect (() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((result) => result.json())
        .then((data) =>{
            setProducto(data)
        })
    }, [id])
    if(!product){
        return null;
    }
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
          <ItemCount />
          
        </div>
      </>
    );
;

  
}
export default ItemDetail;