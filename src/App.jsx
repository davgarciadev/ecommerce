
import './App.css'
import {products as initialProducts } from "./mocks/products.json" 
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { useFilter } from './hooks/useFilter'
import { Cart } from './components/Cart'
import { CartContext, CartProvider } from './context/cart'



function App() {
  console.log("render [App]")
  const {filteredProducts} = useFilter();
  
 
 
  return <CartProvider>
 <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts(initialProducts)}></Products>
      <Footer></Footer>
  </CartProvider>
     
  
  
}

export default App
