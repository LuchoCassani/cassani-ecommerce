import React, { useState, useEffect } from 'react'
import {  NavLink} from 'react-router-dom';
import { collection, getDocs, query } from "firebase/firestore"
import db from "../../firebase/index"


const ShowProducts = (product) => {
  


  const [products, setProducts] = useState(null);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(()=> {

    const q = query(
      collection(db, "category")
      );
      getDocs(q).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            const newDoc = { ...doc.data(), id: doc.id };
            return newDoc;
          })
        );
      })

  }, [])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
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
                      Mas info!
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
     
        
      
      {products &&
        products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4 key={product.id">
                  <img src={product.imagen} className="card-img-top" alt={product.title} height="280rem" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead fw-bold">
                     ${product.precio}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Mas info!
                    </NavLink>
                  </div>
                </div>
              </div>
          
        ))}

      </>
    );
  ;
 
}

export default ShowProducts
