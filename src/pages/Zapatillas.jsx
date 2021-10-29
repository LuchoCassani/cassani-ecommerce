import React, {useState, useEffect} from 'react'

export default function Zapatillas() {


    const[zapatillas,setZapatillas] = useState(null)
    useEffect (() =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((response)=> response.json ())
        .then((data)=>{
            setZapatillas(data.result)
        })
        
    }, [])
    console.log(zapatillas)

    


    return (
        <div>
            <h1>HOLA</h1>
        </div>
    )
}
