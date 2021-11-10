const cart = [];

const HandleCart =(state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // revisar si el producto existe
            const exist = state.find((x)=> x.id === product.id);
            if(exist){
                // incrementar la cantidad
                return state.map((x)=>
                x.id === product.id ? {...x, q: x.q + 1} : x
                );
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        q: 1,
                    }
                ]
            }
            

            case "DELITEM":
                const exist1 = state.find((x)=> x.id === product.id);
                if(exist1.q === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map((x)=>
                        x.id === product.id ? {...x, q: x.q-1} : x
                    );
                }
                
    
        default:
            return state;
            
    }

}


export default HandleCart