import React from 'react'
import Puff from "react-loading-icons/dist/components/puff";

function Loader() {
  

    

    return (
        <div className="d-flex justify-content-center">
            
            Cargando.... 
            <Puff stroke="#98ff98" strokeOpacity={0.125} speed={0.75} />
            
       
        </div>
    )
}

export default Loader
