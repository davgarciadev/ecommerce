/* eslint-disable react/prop-types */
import { useContext } from "react"
import "./Footer.css"
import { FiltersContext } from "../context/filters"
import { useCart } from "../hooks/useCart"

export function Footer(){
    console.log("Render [Footer]")
    const {cart} = useCart();
    const {filters} = useContext(FiltersContext)
   
    return <footer className="footer">
            <p>{JSON.stringify(filters)}</p>
            <p>{JSON.stringify(cart)}</p>
    </footer>
}




