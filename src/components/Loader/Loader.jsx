import React from 'react'
import LoadingIcons from 'react-loading-icons';

function Loader({text}) {
  

    

    return (
        <div className="d-flex justify-content-center">
            
            <h3>{text}</h3>
            <LoadingIcons.Puff stroke="#1f491f" strokeOpacity={0.125} speed={0.75} />
            
       
        </div>
    )
}

export default Loader
