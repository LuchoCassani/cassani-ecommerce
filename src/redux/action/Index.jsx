//agreagar items al carrito

export const AddCart = (product) =>{
    return{
        type: "ADDCART",
        payload : product
    }
}

//eliminar items al carrito

export const DelCart = (product) =>{
    return{
        type: "DELCART",
        payload : product
    }
}

