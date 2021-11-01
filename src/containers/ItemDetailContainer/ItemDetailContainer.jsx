import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemDetail from "../../components/ItemDEetail/ItemDetail"
import { Productos } from '../../components/json_/Productos'




export default function ItemDetailContainer() {

    const [zapatillas, setZapatillas] = useState (null)
    const [cargando,setCargando] = useState(true)

    useEffect(() => {
        const seteando = new Promise((res,rej) =>{
            setTimeout(()=>{ 
                res(Productos)
            },2000)
        })
        seteando.then((data)=>{
            setZapatillas(data)
            setCargando(false)
        })
    }, [])



    return (
       
        <div> 

            <div>
                <div >
                    {cargando ? <h2>Cargando productos....</h2> : <ItemDetail producto={zapatillas} />}
                </div>
            </div>

           

        </div> 
        
    )
}
