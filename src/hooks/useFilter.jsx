import { useContext } from 'react'
import { FiltersContext } from '../components/context/filters';

export function useFilter(){
    const {filters, setFilters} = useContext(FiltersContext);
  
    const filteredProducts = (products) => {
  
      return products.filter(product => (product.price >= filters.minPrice) && 
            (product.category === filters.category || 
              filters.category === "all"))
    }
  
    return {setFilters, filteredProducts, filters}
  }
  