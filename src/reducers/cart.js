

export const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state))
}

export function reducer(state, action){
    const {type, payload} = action;

    switch(type){
        case "ADD_TO_CART":
            {
        
                const productIndex = state.findIndex(cartProduct => payload.id === cartProduct.id)

                // Es la primera vez que se añade el producto al carrito
                if(productIndex < 0){
                    const newCart =  ([...state, {...payload, quantity: 1}])
                    updateLocalStorage(newCart)
                    return newCart;

                }
                // Ya existe el producto en el carrito
                else{
                    const newCart = structuredClone(state)
                    newCart[productIndex].quantity += 1;
                    updateLocalStorage(newCart)
                    return newCart;
                     }
             }  
             
             
             case "REMOVE_FROM_CART": {
                const newCart = state.filter(cartProduct => cartProduct.id !== payload.id)
                updateLocalStorage(newCart)
                return newCart;
            }

            case "CLEAR_CART": {
                const newCart =  [initialState];
                updateLocalStorage(newCart)
                return newCart;
            }

    
            }

        
        
    }