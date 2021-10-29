import React from 'react'
import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'





export default function ItemDetailContainer({datos2}) {





    return (
        <div>
            <> 
            <Modal className=" container-fluid d-flex justify-content-center">
                <div key={datos2.id}>
                    
                        
                            
                       
                        <Modal.Body>
                            <h4>{datos2.nombre}</h4>
                            <p>{datos2.descripcion}</p>
                            <p>{datos2.precio}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={datos2.onHide}>Close</Button>
                        </Modal.Footer>
                    </div>
                
            </Modal>

        </> 
        </div>
    )
}
