import React from 'react'

const BuyerForm = ({name, phone, email, placeholder}) => {
   

    return (
        <form id="form" action="" method="post" >
            < input type="text" name={name} placeholder="nombre" required/>
            < input type="number" name={phone} placeholder="telefono" required />
            < input type="text" name={email} placeholder="email" required/>
        </form>
    )
}

export default BuyerForm
