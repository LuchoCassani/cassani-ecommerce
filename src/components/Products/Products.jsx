import React, { useState, useEffect } from "react";
import Bars from "react-loading-icons/dist/components/bars";
import Puff from "react-loading-icons/dist/components/puff";






export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
   
        Cargando....
        <Puff stroke="#98ff98" strokeOpacity={0.125} speed={0.75} />
      </>
    );
  };
  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category)
    setFilter(updatedList)
  } 



  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)} >Todos nuestros productos</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")} >Zapatillas</button>
          <button className="btn btn-outline-dark me-2"onClick={() => filterProduct("indumentaria")} >Indumentaria</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("accesorios")} >Accesorios</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4 key={product.id">
                  <img src={product.image} className="card-img-top" alt={product.title} height="280rem" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                     ${product.price}
                    </p>
                    <a href="#" className="btn btn-outline-dark">
                      Comprar
                    </a>
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
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <Loading /> : <ShowProducts />
        </div>
      </div>
    </div>
  );
}
