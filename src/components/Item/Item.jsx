import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { ItemCount } from '../ItemCount/ItemCount'

export default function Item(props) {
    const datos = props.datos;
    function masInfo  (){
        const promesa = new Promise((resolve, reject) =>{
        

            setTimeout (()=>{
                resolve (datos)
            }, 3000)
        });
        promesa.then(
            (result =>{
                console.log(result)
            })
        )
    }
   
    
    return (
        <> 
        {
            datos.map( (item, id) =>(
                <Container fluid>
                <Row key={id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.url} />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>                           
                            <Card.Text>$ {item.precio}</Card.Text>
                            <Card.Text> {item.descripcion}</Card.Text>
                            <Button variant="primary" onClick={masInfo}>Mas info</Button>
                        </Card.Body>
                        <ItemCount/>
                    </Card>
                    
                </Row>
            </Container>   
            )
            )}
            
        </> 
    )
}
