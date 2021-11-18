import React, { useState, useEffect } from "react";
import {  NavLink} from 'react-router-dom';
import Loader from "../Loader/Loader";
import ShowProducts from "../ShowProducts/ShowProducts";


export default function ItemList(product) {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
      setLoading(true);
      
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      
      
        
  }, []);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Todos</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loader /> : <ShowProducts  />}
        </div>
      </div>
    </div>
  );
}
