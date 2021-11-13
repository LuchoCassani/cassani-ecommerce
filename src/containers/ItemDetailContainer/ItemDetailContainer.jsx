import React, { useState, useEffect} from 'react'
import { useParams } from "react-router";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loader from '../../components/Loader/Loader';
import productos from "../../components/Productos.json"

function ItemDetailConteiner() {

   /*  const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false); */
    
    
 /*    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = "../../components/Productos.json";
            setProduct(response);
            setTimeout(() => {
                setLoading(false);
              }, 2000);
        }
        getProduct();
    }, [id]); */

   
    return (
        <div>
          <div className="container py-5">
            <div className="row py-4">
            <ItemDetail  />
            </div>
          </div>
        </div>
      );
}

export default ItemDetailConteiner
