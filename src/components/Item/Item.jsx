import React, {useParams} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import "../../sass/boton-card.scss"
import "../../sass/PresentacionItem.scss"
import { ItemCount } from '../ItemCount/ItemCount'
import Zapatillas from '../Zapatillas/Zapatillas'


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
                            <Card.Link href= "/Category/Zapatillas">
                                <Link className="btn-card" to={`/category/Zapatillas`}><span className="btn-text">Ver Mas!</span></Link>
                            </Card.Link>
                        </Card.Body> 
                        <ItemCount />
                    </div>
                </div>
            </div>

        </> 
    )
}
