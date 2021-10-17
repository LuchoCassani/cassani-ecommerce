import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-de-voley-adidas-stabil-next-gen-blanca-100010fu8317001-1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="success" onClick ={add}> + </Button>
                <Button variant="danger" onClick ={substract}> - </Button>
                <h3>Agregar al carrito {count}</h3>
            </Card.Body>
        </Card>



        



 </>
    )
   
}