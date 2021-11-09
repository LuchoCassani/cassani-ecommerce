import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Puff from "react-loading-icons/dist/components/puff";
import { ItemCount } from '../ItemCount/ItemCount'

const  Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

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
    }, []);

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
          <ItemCount />
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