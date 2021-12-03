import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/index";

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const productRef = doc(db, "category", id);
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      }
    });
  }, [id]);

  return (
    <>
      <ul>
        {product && (
          <>
            <div className="col-md-6">
              <img
                src={product.imagen}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </p>
              <h3 className>$ {product.precio}</h3>
              <p className="lead">{product.descripcion}</p>

              <ItemCount product={product} />
            </div>
          </>
        )}
      </ul>
    </>
  );

  /* const { id } = useParams();
  const [product, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setProducto(data);
      });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [id]);
  
  if (!product) {
    return null;
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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

            <ItemCount product={product} />
        
          </div>
        </>
      )}
    </>
  ); */
};
export default ItemDetail;
