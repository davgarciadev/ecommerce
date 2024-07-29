import { CartIcon, ClearCartIcon } from "./Icons"
import "./Cart.css"
import { useCart } from "../hooks/useCart"

export function Cart(){
    const {clearCart} = useCart();

    return <>
        <label className="cart-icon" htmlFor="cartCheckBox">
            <CartIcon></CartIcon>
        </label>
        <input className="cart-check" id="cartCheckBox" type="checkbox" hidden ></input>

        <aside className="cart">
            <ul className="cart__ul">
                <li className="cart__item">
                    <img className="cart__img"src="https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png" alt="randomImg"></img>
                    <div className="cart__product-info">
                        <strong>Pepper</strong> - 2€
                    </div>

                    <footer className="cart__footer">
                        <small className="cart__quantity">
                           Qty: 1
                        </small>
                        <button className="cart__add-btn">+</button>
                    </footer>
                </li>
            </ul>

            <button className="cart__clear-btn" onClick={() => clearCart()}><ClearCartIcon></ClearCartIcon></button>
        </aside>
    </>


}