import React, { useState, useEffect } from "react";
import Puff from "react-loading-icons/dist/components/puff";
import {  NavLink, useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";


export default function ItemList(product) {
  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());

      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  
  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category)
    setFilter(updatedList)
  } 



  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5" key={product.id}>
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)} >Todos nuestros productos</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")} >Zapatillas</button>
          <button className="btn btn-outline-dark me-2"onClick={() => filterProduct("jewelery")} >Indumentaria</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")} >Accesorios</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")} >ropa mujer</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4 key={product.id">
                  <img src={product.image} className="card-img-top" alt={product.title} height="280rem" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead fw-bold">
                     ${product.price}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Comprar
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Todos nuestros productos</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loader /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
