import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import Productos from "../json_/Productos"


function ItemDetail() {
    
    
    //const {category} = useParams()
    const [zapas,setZapas ] = useState (null)
    const [cargando,setCargando] = useState(true)
    
    
    
   
        useEffect(() => {
            const zapas = Productos.find((elemento) => 
                elemento.categoria === "zapatilla"
            )

            const seteando = new Promise((res,rej) =>{
                setTimeout(()=>{ 
                    res(zapas)
                },3000)
            })
            seteando.then((data)=>{
                setZapas(data)
                setCargando(false)
            })
        }, [])
   
    
  

console.log(zapas)


    return (
        <>
            { cargando? <h2>Cargando productos....</h2> :
           
            <div className="card" style={{width: '18rem'}}>
                <img src={zapas.imagen1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{zapas.title}</h5>   
                    <p>{zapas.descripcion}</p>
                    <p>${zapas.precio}</p>                
                    <ItemCount />
                    
                </div>
            </div> 
            }


        </>
        
            



    )
}

export default ItemDetail