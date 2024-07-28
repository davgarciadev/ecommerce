/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Filter.css"

export function Filter({changeFilter}){
    console.log("render [Filter]")
    const [minPrice, setMinPrice] = useState(0);

    const handleMinPrice = (e) => {
        const currentPrice = e.target.value;
        setMinPrice(currentPrice)
    }



    const handleFilterByPrice = (e) => {

    changeFilter((prevFilter) => {
        return {...prevFilter, minPrice: e.target.value}
    })
    }

    const handleFilterByCategory = (e) => {
        const currentCategory = e.target.value;

        changeFilter((prevFilter) => {
            return {...prevFilter, category:currentCategory}
        })
    }



    return <section className="filter">
        <div className="filter__type filter__type--price">
            <label>Min.Price</label>
            <input onChange={(e) => {handleMinPrice(e); handleFilterByPrice(e);}} type="range" min={0} max={600}></input>
            {minPrice}
        </div>

        <div className="filter__type filter__type--category">
            <label>Category</label>
            <select onChange={handleFilterByCategory}>
                <option  value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragances</option>
                <option value="furniture">Furnitures</option>
                <option value="groceries">Groceries</option>
                
            </select>
        </div>
    </section>
}