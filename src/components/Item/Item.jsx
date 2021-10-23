import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { ItemCount } from '../ItemCount/ItemCount'


export default function Item({producto}) {

    return (
        <> 
            <Container fluid>
                <Row key={producto.id}>
                    <Card style={{ width: "18rem"}}>
                        <Card.Img variant="top" src={producto.url} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Title>$ {producto.precio}</Card.Title>
                            <Card.Title>{producto.descripcion}</Card.Title>
                        </Card.Body>
                        <ItemCount />
                    </Card>
                </Row>
            </Container>

        </> 
    )
}
