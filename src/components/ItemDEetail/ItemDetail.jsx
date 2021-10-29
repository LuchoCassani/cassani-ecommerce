import React, {useState, useEffect} from 'react'
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer'


  


const URLGET = "../../json_/Productos.json"

function ItemDetail() {
    const[productos,setProductos] = useState([])
        

        useEffect(() => {
            fetch ({URLGET})
            .then((response) => response.json)
            .then((data) =>{
                setProductos(data.result)
            })
            
        }, [])

 console.log(URLGET)

    return (
        
        <div className="container-fluid d-flex justify-content-center col items">
            
            { productos?.map((datos)=><ItemDetailContainer producto={datos} />)}

        </div>
            



    )
}

export default ItemDetail
