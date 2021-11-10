import React from 'react';
import { useState, useReducer } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import {useDispatch } from "react-redux";
import { AddCart } from "../../redux/action/Index";
import Product from '../Product/Product';



/* export const ItemCount = (product) =>{

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(AddCart(product))
    }
    
    return(
        <>
            <Container >        
                <Button variant="danger" onClick ={()=> addProduct(product)}> - </Button>
                
            </Container >
        </>
    ) 

} */