import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemList from '../../components/ItemList/ItemList';

export const ItemListContainer = (props) =>{
    
    return(
        <> 
        <div >
            <h1 className="d-flex justify-content-center"> {props.text} </h1>
            <ItemList />
        </div>
        </> 
    )
}

