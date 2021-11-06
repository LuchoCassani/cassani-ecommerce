import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'

import "../../sass/PresentacionList.scss"

    
    const datos =[
        {
        id: "1",    
        nombre: "Zapatillas",
        pagina: "#zapatillas",
        descripcion: "Encontra las mejores zapatillas que tanto buscas",
        url: "https://www.handbolaunpas.com/1892-large_default/adidas-stabil-next-gen-primeblue.jpg" ,
    },
    {
        id: "2",
        nombre: "Indumentaria",
        pagina: "#indumentaria",
        descripcion: "Camisetas, remeras de entrenamiento y mucho mas.",
        url: "https://www.handbolaunpas.com/1823-large_default/ffhb-oficial-seleccion-francesa-2021.jpg" ,
    },
    {
        id: "3",
        nombre: "Accesorios",
        pagina: "#accesorios",
        descripcion: "Todo para que tu experiencia sea de otro nivel. ",
        url: "https://media.handball-store.es/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/r/e/replica_lnh_21_22_t3.png" ,
    }
    ]

    export default function ItemList() {

        const[productos,setProductos] = useState([])
        const [cargando,setCargando] = useState(true)



        useEffect(() => {
            const seteando = new Promise((res,rej) =>{
                setTimeout(()=>{ 
                    res(datos)
                },3000)
            })
            seteando.then((data)=>{
                setProductos(data)
                setCargando(false)
            })
        }, [])

    return (

    <>    
        <div className="container-fluid d-flex justify-content-center col items">
            {cargando ? <h2>Cargando productos....</h2> : productos.map((producto)=><Item producto={producto} />)}

        </div>
        

    </>      
    )
 }