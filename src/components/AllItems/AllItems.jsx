import React, {useState} from 'react'
import Productos from "../json_/Productos"
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Items from '../Items/Items'

const AllItems = () => {
    
   
   


    return (

        <div>
            
           {Productos.map((productos) =>  <Items productos={productos} /> )}

            

        </div>
    )
}

export default AllItems
