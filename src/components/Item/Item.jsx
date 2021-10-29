import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer'
import "../../sass/boton-card.scss"
import "../../sass/PresentacionItem.scss"
import { ItemCount } from '../ItemCount/ItemCount'


export default function Item({producto}) {

    return (
        <> 
            <div className=" container-fluid d-flex justify-content-center">
                <div key={producto.id}>
                    <div className="card animate__animated animate__flipInY" style={{ width: "20rem"}}>
                        <div className="overflow">
                            <Card.Img variant="top" src={producto.url} />
                        </div>
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>{producto.descripcion}</Card.Text>
                            <Card.Link href={producto.pagina}>
                                <button className="btn-card" onClick={ItemDetailContainer}><span className="btn-text">Ver Mas!</span></button>
                            </Card.Link>
                        </Card.Body>
                        <ItemCount />
                    </div>
                </div>
            </div>

        </> 
    )
}
