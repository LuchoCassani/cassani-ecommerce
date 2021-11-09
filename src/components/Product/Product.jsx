import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Puff from "react-loading-icons/dist/components/puff";


const  Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch('Productos.json', {id},);
      setProduct(await response.json());
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div>
        Cargando....
        <Puff stroke="#98ff98" strokeOpacity={0.125} speed={0.75} />
      </div>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.imagen1}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.categoria}</h4>
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
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
export default Product;