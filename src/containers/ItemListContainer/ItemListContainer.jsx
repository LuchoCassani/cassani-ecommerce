import React from 'react';
import { Container } from 'react-bootstrap';
import ItemList from '../../components/ItemList/ItemList';

export const ItemListContainer = (props) =>{
    return(
        <> 
        <Container>
            <h1> {props.text} </h1>
            <ItemList />
        </Container>
       </> 
    )
}

