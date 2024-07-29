/* eslint-disable react/prop-types */

import "./Filter.css"
import { useFilter } from "../hooks/useFilter";

export function Filter(){
    console.log("render [Filter]")
    const {filters, setFilters} = useFilter()

   

    
    const handleFilterByPrice = (e) => {
    setFilters((prevFilter) => {
        return {...prevFilter, minPrice: e.target.value}
    })
    }

    const handleFilterByCategory = (e) => {
        const currentCategory = e.target.value;

        setFilters((prevFilter) => {
            return {...prevFilter, category:currentCategory}
        })
    }



    return <section className="filter">
        <div className="filter__type filter__type--price">
            <label>Min.Price</label>
            <input onChange={handleFilterByPrice} type="range" min={0} max={600} value={filters.minPrice}></input>
            {filters.minPrice}
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