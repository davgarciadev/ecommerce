/* eslint-disable react/prop-types */
import { Filter } from "./Filter"
import "./Header.css"

export function Header({changeFilter}){
    console.log("render [Header]")
    return <header className="header">
        <h1 className="header__title">Ecommerce Shop 🛒</h1>
        <Filter changeFilter={changeFilter}></Filter>
    </header>
}