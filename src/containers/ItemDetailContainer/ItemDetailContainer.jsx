import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router'
import AllItems from '../../components/AllItems/AllItems'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailConteiner() {

   

   
    return (
        <div>
              {/* <ItemDetail/>  */} 
            <AllItems />
            
        </div>
    )
}

export default ItemDetailConteiner
