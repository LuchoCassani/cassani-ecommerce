import React from 'react'
import Item from '../Item/Item'
import "../../sass/ItemList.scss"

export default function ItemList() {

    

    
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
        descripcion: "La comodidad se aúna con la estabilidad en la Ghost Shadow, con orificios de amortiguación visibles en la parte trasera del pie y una suela labiada estable. El upper tipo bootie DynamotionFit ofrece un ajuste natural y cómodo como el de un calcetín para que puedas rendir al máximo.",
        url: "https://www.handbolaunpas.com/2113-home_default/mizuno-wave-ghost-shadow.jpg" ,
    },
    {
        id: "3",
        nombre: "ADIDAS CRAZYFLIGHT MID",
        precio: 3500,
        descripcion: "Toma el control de la pista con esta zapatilla total. Las Adidas Crazyflight Mid te proporcionan una mayor sujeción y la tecnología Boost impulsa tus saltos aportando una excelente amortiguación. La parte superior de malla reforzada con hilo de TPU integrado ofrece una increíble resistencia al desgaste y ventilación.",
        url: "https://www.handbolaunpas.com/1872-home_default/adidas-crazyflight-mid.jpg" ,
    }
    ]

    


    return (
        <div className="items">
        <Item datos={datos} /> 
        </div>
    )
 }
