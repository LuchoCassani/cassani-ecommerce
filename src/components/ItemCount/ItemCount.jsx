import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';



export const ItemCount = (props) =>{
    const [count, setCount]=useState(1);
    function add(){
        if (count >= 1 & count <5){
            setCount(count+1)
        }
    }
    function substract (){
        if (count > 1){
            setCount(count - 1)
        }
    }
    return(
        <>
            <Container >        
                <Button variant="danger" onClick ={substract}> - </Button>
                <Button variant="success" onClick ={add}> + </Button>
                <h3>Agregar al carrito {count}</h3>
            </Container >
        </>
    )

}