import React, { useEffect, useState } from 'react'

import Productos from "../json_/Productos.json"

import "../../sass/ItemDetail.scss"
import { ItemCount } from '../ItemCount/ItemCount'

function ItemDetail() {
    const [masInfo, setMasInfo] = useState(true)
    const handleClick = () => {
        setMasInfo(!masInfo);
      };
    const zapatillas = Productos.filter( productos=> productos.categoria === "zapatilla")
    
    const [productos, setProductos] = useState ([])
    const [cargando, setCargando] = useState (true)


      useEffect(() => {
          const setenando =new Promise ((res,rej) =>{
              setTimeout(() =>{
                  res(zapatillas)
              }, 2000)
          })
          setenando.then((zapatillas)=>{
          setProductos(zapatillas)
          setCargando(false)
        })
          
      }, [zapatillas])



    return (
        <>
            <div className="cardProducts container">
                {cargando? <h2>Cargando productos....</h2> :
            
                zapatillas.map((zapatillas) => (
                    
                    
                        
                            <div className="card" key={zapatillas.id} style={{width: '17rem',height: 'auto'}}>
                            <img src={zapatillas.imagen1} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{zapatillas.title}</h5>
                            <button onClick={handleClick}> Mas Info</button>
                            {  masInfo?    <p className="card-text">{zapatillas.descripcion}</p> : null      }
                            {  masInfo?    <p className="card-text">{zapatillas.precio}</p> : null      }
                            {  masInfo?    <ItemCount /> : null      }
                            </div>
                        </div>
                    

                )) 
            
             }
       
        </div>
        </>
        
            



    )
}

export default ItemDetail