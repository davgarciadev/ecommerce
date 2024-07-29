/* eslint-disable react/prop-types */
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import "./Products.css"



export function Products({products}){
    console.log("render [Products]")
    const {cart, addToCart, removeFromCart} = useCart();


    const isProductOnCart = (product) => {
        return cart.some(cartProduct => cartProduct.id === product.id)
    }

    

    return (
        <main className="products">
            <ul className="products__ul">
                {
                    products.map(product => {
                        return <li className="products__item" key={product.title}>
                            <article className="pruducts__product product">
                                <img className="product__img"src={product.thumbnail} alt={product.title}></img>
                                <div className="product__info">
                                    <p className="product__title"><strong>{product.title}</strong></p>
                                    <p className="product__price">{product.price}€</p>
                                </div>
                                <div className="product__icon" style={{backgroundColor: isProductOnCart(product) ? "red" : "rgb(29, 153, 255)"}}onClick={
                                    () =>{
                                        isProductOnCart(product)
                                            ? removeFromCart(product)
                                            : addToCart(product)} }>
                                    { isProductOnCart(product)
                                            ? <RemoveFromCartIcon className="product__rmv-btn"></RemoveFromCartIcon>
                                            : <AddToCartIcon className="product__add-btn"></AddToCartIcon>
                                    }
                                    
                                </div>
                            </article>
                        </li>
                    })
                }

            </ul>
        </main>
    )
}



