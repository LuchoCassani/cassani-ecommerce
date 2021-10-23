import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import "../../sass/ItemList.scss"


    const datos =[
        {
        id: "1",    
        nombre: "ADIDAS STABIL NEXT GEN",
        precio: 1500,
        descripcion: "Exterior en adidas Primeknit que envuelve tu pie, ofreciendo comodidad en las canchas de handball, voleibol y bádminton",
        url: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/52d1f9efbcb2492cbaafab800112f53f_9366/Zapatillas_Stabil_Next_Gen_Blanco_FU8317_01_standard.jpg" ,
    },
    {
        id: "2",
        nombre: "MIZUNO WAVE GHOST SHADOW",
        precio: 5200,
        descripcion: "La comodidad se aúna con la estabilidad en la Ghost Shadow, con orificios de amortiguación visibles en la parte trasera del pie y una suela labiada estable.",
        url: "https://www.handbolaunpas.com/2113-home_default/mizuno-wave-ghost-shadow.jpg" ,
    },
    {
        id: "3",
        nombre: "ADIDAS CRAZYFLIGHT MID",
        precio: 3500,
        descripcion: "Toma el control de la pista con esta zapatilla total. Las Adidas Crazyflight Mid te proporcionan una mayor sujeción y la tecnología Boost impulsa tus saltos aportando una excelente amortiguación. ",
        url: "https://www.handbolaunpas.com/1872-home_default/adidas-crazyflight-mid.jpg" ,
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
        <div className="items">
            {cargando ? <h2>Cargando productos....</h2> : productos.map((producto)=><Item producto={producto} />)}

        </div>
    )
 }
