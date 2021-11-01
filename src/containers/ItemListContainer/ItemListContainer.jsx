import React from 'react';
import { useParams } from 'react-router';
import ItemList from '../../components/ItemList/ItemList';

export const ItemListContainer = () =>{
    
    

  
;
    
    return(
        <> 
        <div>
            <h1 className="d-flex justify-content-center"> Soy la categoria </h1>
            <ItemList />
            
        </div>
        </> 
    )
}

