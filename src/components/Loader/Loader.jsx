import React from 'react'
import Puff from "react-loading-icons/dist/components/puff";

function Loader({text}) {
  

    

    return (
        <div className="d-flex justify-content-center">
            
            <h3>{text}</h3>
            <Puff stroke="#98ff98" strokeOpacity={0.125} speed={0.75} />
            
       
        </div>
    )
}

export default Loader
