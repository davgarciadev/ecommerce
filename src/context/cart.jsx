/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


// Creamos contexto
export const CartContext = createContext();

// Creamos provider
export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    // Función que añade un producto al carrito
    const addToCart = (product) => {
        
        const productIndex = cart.findIndex(cartProduct => product.id === cartProduct.id)

        // Es la primera vez que se añade el producto al carrito
        if(productIndex < 0){
            setCart( prevCart => ([...prevCart, {...product, quantity: 1}]))

        }
        // Ya existe el producto en el carrito
        else{
            const newCart = structuredClone(cart)
            newCart[productIndex].quantity += 1;
             setCart(newCart)
        }
    }

    const removeFromCart = (product) => {
        
        setCart(prevCart => prevCart.filter(cartProduct => cartProduct.id !== product.id))

    }

    const clearCart = () => {
        setCart([])
    }



    return <CartContext.Provider value={
            {cart,
            addToCart,
            removeFromCart,
            clearCart}
        }>

            {children}
        </CartContext.Provider>
}