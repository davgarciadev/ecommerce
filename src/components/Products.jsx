/* eslint-disable react/prop-types */
import { AddToCartIcon } from "./Icons"
import "./Products.css"



export function Products({products}){
    console.log("render [Products]")
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
                                <div className="product__icon">
                                    <AddToCartIcon></AddToCartIcon>
                                </div>
                            </article>
                        </li>
                    })
                }

            </ul>
        </main>
    )
}



