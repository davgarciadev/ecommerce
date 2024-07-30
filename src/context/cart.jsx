/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/cart";


// Creamos contexto
export const CartContext = createContext();

// Creamos provider
export function CartProvider({children}){
   const [state, dispatch] = useReducer(reducer,initialState);

   const addToCart = (product) => {
    // dispatch no deja de ser un método que nos actualiza el estado (pasandole un tipo de operacion y un payload opcional)
        dispatch({
            type:"ADD_TO_CART", 
            payload: product
        })
   }

   const removeFromCart = (product) => {
    dispatch({
        type:"REMOVE_FROM_CART", 
        payload: product
    })
}


    const clearCart = () => {
        dispatch({
            type:"CLEAR_CART",
        })
    }


    return <CartContext.Provider value={
            {cart: state,
            addToCart,
            removeFromCart,
            clearCart}
        }>

            {children}
        </CartContext.Provider>
}