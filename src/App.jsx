
import './App.css'
import {products as initialProducts } from "./mocks/products.json" 
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { useFilter } from './hooks/useFilter'



function App() {
  console.log("render [App]")
  const {filteredProducts, filters} = useFilter();
  
 
 
  return <>
    <Header></Header>
    <Products products={filteredProducts(initialProducts)}></Products>
    <Footer filter={filters}></Footer>
  </>
}

export default App
