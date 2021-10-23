import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemList from '../../components/ItemList/ItemList';

export const ItemListContainer = (props) =>{
    
    return(
        <> 
        <Container fluid>
            <h1> {props.text} </h1>
            <ItemList />
        </Container>
        </> 
    )
}

