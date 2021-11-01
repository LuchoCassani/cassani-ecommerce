import React from 'react'
import {Productos} from "../json_/Productos"
import Card from 'react-bootstrap/Card'
import { ItemCount } from '../ItemCount/ItemCount'

import "../../sass/ItemDetail.scss"




function ItemDetail() {
    

   


    const zapatillas = Productos.filter( productos=> productos.categoria === "zapatilla")
    





    return (
        <>
            <div className="cardProducts container">
            {
                zapatillas.map((zapatillas) => (
                    
                    
                        
                            <div className="card" key={zapatillas.id} style={{width: '17rem',height: 'auto'}}>
                            <img src={zapatillas.imagen1} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{zapatillas.title}</h5>
                            <p className="card-text">{zapatillas.descripcion}</p>
                            <p className="card-text">$ {zapatillas.precio}</p>
                            <ItemCount />
                            </div>
                        </div>
                    

                ))
            }
        </div>
        </>
        
            



    )
}

export default ItemDetail

