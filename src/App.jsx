
import './App.css'
import {products as initialProducts } from "./mocks/products.json" 
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'


function App() {
  console.log("render [App]")
  const [filter, addFilter] = useState({category:"all", minPrice:0})

  const filteredProducts = (products) => {

    return products.filter(product => (product.price >= filter.minPrice) && 
          (product.category === filter.category || 
            filter.category === "all"))

  }


 
  return <>
    <Header changeFilter = {addFilter}></Header>
    <Products products={filteredProducts(initialProducts)}></Products>
  </>
}

export default App
