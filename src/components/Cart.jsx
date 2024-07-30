/* eslint-disable react/prop-types */
import { CartIcon, ClearCartIcon } from "./Icons"
import "./Cart.css"
import { useCart } from "../hooks/useCart"


function CartItem ({id, thumbnail, quantity, title, price, addToCart}){
    return (<li className="cart__item" key={id}>
        <img className="cart__img"src={thumbnail} alt={title}></img>
        <div className="cart__product-info">
            <strong>{title}</strong> - {price}
        </div>

        <footer className="cart__footer">
            <small className="cart__quantity">
               Qty: {quantity}
            </small>
            <button className="cart__add-btn" onClick={addToCart}>+</button>
        </footer>
    </li>)
}

export function Cart(){
    const {cart, clearCart, addToCart} = useCart();

    return <>
        <label className="cart-icon" htmlFor="cartCheckBox">
            <CartIcon></CartIcon>
        </label>
        <input className="cart-check" id="cartCheckBox" type="checkbox" hidden ></input>

        <aside className="cart">
            <ul className="cart__ul">
                {
                cart.map(cartProduct => (
                    <CartItem key={cartProduct.id} addToCart={() => addToCart(cartProduct)} {...cartProduct}></CartItem>
                    ))
                }
                
            </ul>

            <button className="cart__clear-btn" onClick={() => clearCart()}><ClearCartIcon></ClearCartIcon></button>
        </aside>
    </>


}