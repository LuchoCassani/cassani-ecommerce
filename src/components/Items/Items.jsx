import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'




function Items({item}) {




    return (
        <div>
            <div key={"id"} className="card" style={{width: '18rem'}}>
                <img src={item.imagen1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>   
                    <p>{item.descripcion}</p>
                    <p>${item.precio}</p>                
                    <ItemCount />
                    
                </div>
            </div> 
        </div>
    )
}

export default Items
