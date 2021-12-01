import React, { useState, useEffect } from 'react'
import {  NavLink} from 'react-router-dom';
import { collection, getDocs, query } from "firebase/firestore"
import db from "../../firebase/index"


const ShowProducts = (product) => {
  


  const [products, setProducts] = useState(null);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);


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

  const filterProduct = (categoria) => {
    const updatedList = products.filter((x) => x.categoria === categoria)
    setFilter(updatedList)
    setData(product)
  } 




    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5" key={product.id}>
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(products)} >Todos nuestros productos</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("zapatilla")} >Zapatillas</button>
          <button className="btn btn-outline-dark me-2"onClick={() => filterProduct("indumentaria")} >Indumentaria</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("accesorio")} >Accesorios</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
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
            </>
          );
        })}
     

      </>
    );
  ;
 
}

export default ShowProducts
